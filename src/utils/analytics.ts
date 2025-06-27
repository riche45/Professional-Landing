// Analytics avanzado para conversiones
export const trackConversion = (vertical: string, conversionType: string, value?: number) => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      vertical_type: vertical,
      conversion_type: conversionType,
      value: value || 1,
      currency: 'EUR'
    });
  }
};

export const trackFormSubmit = (vertical: string, formType: string) => {
  if (window.gtag) {
    window.gtag('event', 'form_submit', {
      vertical_type: vertical,
      form_type: formType,
      event_category: 'engagement'
    });
  }
};

export const trackVideoPlay = (vertical: string, videoTitle: string) => {
  if (window.gtag) {
    window.gtag('event', 'video_play', {
      vertical_type: vertical,
      video_title: videoTitle,
      event_category: 'engagement'
    });
  }
};

export const trackDownload = (vertical: string, downloadType: string) => {
  if (window.gtag) {
    window.gtag('event', 'file_download', {
      vertical_type: vertical,
      download_type: downloadType,
      event_category: 'engagement'
    });
  }
};

export const trackPriceCalculator = (vertical: string, estimatedPrice: number) => {
  if (window.gtag) {
    window.gtag('event', 'price_calculation', {
      vertical_type: vertical,
      estimated_price: estimatedPrice,
      event_category: 'engagement'
    });
  }
};

// Funnel de conversión
export const trackFunnelStep = (vertical: string, step: number, stepName: string) => {
  if (window.gtag) {
    window.gtag('event', 'funnel_step', {
      vertical_type: vertical,
      funnel_step: step,
      step_name: stepName,
      event_category: 'conversion_funnel'
    });
  }
};

// Heatmap casero con scroll tracking
export const trackScrollDepth = (vertical: string, depth: number) => {
  if (window.gtag) {
    window.gtag('event', 'scroll_depth', {
      vertical_type: vertical,
      scroll_depth: depth,
      event_category: 'engagement'
    });
  }
};

// A/B Testing manual
export const trackABTest = (vertical: string, testName: string, variant: string) => {
  if (window.gtag) {
    window.gtag('event', 'ab_test', {
      vertical_type: vertical,
      test_name: testName,
      variant: variant,
      event_category: 'experimentation'
    });
  }
}; 