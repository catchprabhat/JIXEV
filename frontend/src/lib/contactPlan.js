export const CONTACT_PLAN_EVENT = "jixev:contact-plan";
export const CONTACT_PLAN_STORAGE_KEY = "jixev_contact_plan";

export function buildPlanMessage(planName, sessionKwh) {
  return `I'm interested in the ${planName} plan (${sessionKwh} kWh sessions).`;
}

export function notifyContactPlan(planName, sessionKwh) {
  const payload = { planName, sessionKwh };
  sessionStorage.setItem(CONTACT_PLAN_STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(
    new CustomEvent(CONTACT_PLAN_EVENT, { detail: payload })
  );
}

export function parseStoredPlan(stored) {
  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored);
    if (parsed?.planName && parsed?.sessionKwh) {
      return parsed;
    }
  } catch {
    // Fall back to legacy plain-string storage.
  }

  return { planName: stored, sessionKwh: "30" };
}
