import { useTranslation } from "react-i18next";

export const useFormTranslation = () => {
  const { t } = useTranslation("form");

  return {
    hero: {
      goBack: t("hero.goBack"),
      title: t("hero.title"),
      description: t("hero.description"),
    },

    sections: {
      fillDetails: t("sections.fillDetails"),
      basicInfo: t("sections.basicInfo"),
      experience: t("sections.experience"),
      resume: t("sections.resume"),
      motivation: t("sections.motivation"),
    },

    inputs: {
      firstName: t("inputs.firstName"),
      lastName: t("inputs.lastName"),
      phone: t("inputs.phone"),
      email: t("inputs.email"),
      linkedin: t("inputs.linkedin"),
      github: t("inputs.github"),
      yearsExperience: t("inputs.yearsExperience"),
      currentCompany: t("inputs.currentCompany"),
    },

    resume: {
      upload: t("resume.upload"),
      dragDrop: t("resume.dragDrop"),
      uploaded: t("resume.uploaded"),
    },

    motivation: {
      q1: t("motivation.q1"),
      q2: t("motivation.q2"),
      q3: t("motivation.q3"),
      q4: t("motivation.q4"),
      placeholder: t("motivation.placeholder"),
    },

    button: {
      submit: t("button.submit"),
    },
  };
};
