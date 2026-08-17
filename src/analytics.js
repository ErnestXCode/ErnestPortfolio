const isAnalyticsReady = () =>
  typeof window !== "undefined" &&
  typeof window.gtag === "function";

export const trackEvent = (eventName, parameters = {}) => {
  if (!isAnalyticsReady()) return;

  window.gtag("event", eventName, parameters);
};

export const trackDownload = ({
  fileName,
  projectName,
  projectCategory,
}) => {
  trackEvent("file_download", {
    file_name: fileName,
    project_name: projectName,
    project_category: projectCategory,
  });
};

export const trackResume = (location) => {
  trackEvent("resume_view", {
    location,
  });
};

export const trackProject = ({
  projectName,
  projectCategory,
  destination,
}) => {
  trackEvent("project_view", {
    project_name: projectName,
    project_category: projectCategory,
    destination,
  });
};

export const trackNavigation = (destination) => {
  trackEvent("nav_click", {
    destination,
  });
};