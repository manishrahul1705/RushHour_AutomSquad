
class ClosedLoopOptimizationEngine {
  constructor() {
    this.productionHistory = [];
    this.operatorFeedback = [];
    this.recommendationHistory = [];
    this.learningHistory = [];
    this.performanceMetrics = {
      totalRecommendations: 0,
      acceptedRecommendations: 0,
      rejectedRecommendations: 0,
      optimizationCycles: 0,
      averageAccuracy: 0,
    };
  }

  recordProductionOutcome(data) {
    const record = {
      id: `PROD-${Date.now()}`,
      timestamp: new Date(),
      ...data,
    };

    this.productionHistory.push(record);
    return record;
  }

  recordOperatorFeedback(feedback) {
    const record = {
      id: `FB-${Date.now()}`,
      timestamp: new Date(),
      ...feedback,
    };

    this.operatorFeedback.push(record);

    if (feedback.accepted) {
      this.performanceMetrics.acceptedRecommendations++;
    } else {
      this.performanceMetrics.rejectedRecommendations++;
    }

    return record;
  }

  analyzeDeviation(currentComposition, targetComposition) {
    const deviation = {};

    for (const element in targetComposition) {
      const current = currentComposition[element] || 0;
      const target = targetComposition[element];

      deviation[element] = {
        current,
        target,
        difference: Number((target - current).toFixed(3)),
      };
    }

    return deviation;
  }

  generateRecommendation(currentComposition, targetComposition) {
    const deviation = this.analyzeDeviation(
      currentComposition,
      targetComposition
    );

    const recommendation = {
      recommendationId: `REC-${Date.now()}`,
      generatedAt: new Date(),
      deviation,
      confidence: "Medium",
      strategy: "Historical Learning + Operator Experience",
      requiresOperatorApproval: true,
    };

    this.performanceMetrics.totalRecommendations++;
    this.recommendationHistory.push(recommendation);

    return recommendation;
  }

  approveRecommendation(recommendationId, operatorId) {
    const recommendation = this.recommendationHistory.find(
      (item) => item.recommendationId === recommendationId
    );

    if (!recommendation) {
      return {
        success: false,
        message: "Recommendation not found",
      };
    }

    recommendation.approved = true;
    recommendation.operatorId = operatorId;
    recommendation.approvedAt = new Date();

    return recommendation;
  }

  rejectRecommendation(recommendationId, reason) {
    const recommendation = this.recommendationHistory.find(
      (item) => item.recommendationId === recommendationId
    );

    if (!recommendation) {
      return {
        success: false,
        message: "Recommendation not found",
      };
    }

    recommendation.approved = false;
    recommendation.reason = reason;
    recommendation.reviewedAt = new Date();

    return recommendation;
  }

  learnFromHistory() {
    const learningCycle = {
      cycle: this.performanceMetrics.optimizationCycles + 1,
      timestamp: new Date(),
      productionSamples: this.productionHistory.length,
      feedbackSamples: this.operatorFeedback.length,
      recommendationSamples: this.recommendationHistory.length,
      status: "Completed",
    };

    this.learningHistory.push(learningCycle);
    this.performanceMetrics.optimizationCycles++;

    return learningCycle;
  }

  calculateAccuracy() {
    if (this.recommendationHistory.length === 0) {
      return 0;
    }

    const accepted = this.performanceMetrics.acceptedRecommendations;
    const rejected = this.performanceMetrics.rejectedRecommendations;

    const total = accepted + rejected;

    if (total === 0) {
      return 0;
    }

    const accuracy = (accepted / total) * 100;
    this.performanceMetrics.averageAccuracy = accuracy.toFixed(2);

    return this.performanceMetrics.averageAccuracy;
  }

  getOptimizationSummary() {
    return {
      productionHistory: this.productionHistory.length,
      operatorFeedback: this.operatorFeedback.length,
      recommendations: this.recommendationHistory.length,
      learningCycles: this.learningHistory.length,
      accuracy: this.calculateAccuracy(),
      metrics: this.performanceMetrics,
    };
  }

  exportLearningData() {
    return {
      productionHistory: this.productionHistory,
      operatorFeedback: this.operatorFeedback,
      recommendationHistory: this.recommendationHistory,
      learningHistory: this.learningHistory,
      performanceMetrics: this.performanceMetrics,
    };
  }

  resetEngine() {
    this.productionHistory = [];
    this.operatorFeedback = [];
    this.recommendationHistory = [];
    this.learningHistory = [];

    this.performanceMetrics = {
      totalRecommendations: 0,
      acceptedRecommendations: 0,
      rejectedRecommendations: 0,
      optimizationCycles: 0,
      averageAccuracy: 0,
    };

    return {
      success: true,
      message: "Engine reset successfully",
    };
  }
}

module.exports = ClosedLoopOptimizationEngine;