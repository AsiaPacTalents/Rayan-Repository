/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/auth/login": {
    post: operations["AuthController_candidateLogin"];
  };
  "/auth/facebook": {
    get: operations["AuthController_facebookLogin"];
  };
  "/auth/facebook/callback": {
    get: operations["AuthController_facebookLoginCallback"];
  };
  "/auth/linkedin": {
    get: operations["AuthController_linkedinLogin"];
  };
  "/auth/linkedin/callback": {
    get: operations["AuthController_linkedinLoginCallback"];
  };
  "/auth/twitter": {
    get: operations["AuthController_twitterLogin"];
  };
  "/auth/twitter/callback": {
    get: operations["AuthController_twitterLoginCallback"];
  };
  "/auth/candidate/register": {
    post: operations["AuthController_candidateRegister"];
  };
  "/auth/candidate/fast-track": {
    post: operations["AuthController_candidateFastTrackRegister"];
  };
  "/auth/validate": {
    post: operations["AuthController_validateJwt"];
  };
  "/auth/forms/admin": {
    get: operations["AuthController_getFormAdmins"];
    post: operations["AuthController_formAdminCreate"];
  };
  "/auth/forms/admin/me": {
    get: operations["AuthController_getFormAdminMe"];
  };
  "/auth/forms/admin/login": {
    post: operations["AuthController_formAdminLogin"];
  };
  "/auth/forms/admin/{id}": {
    delete: operations["AuthController_formAdminDelete"];
    patch: operations["AuthController_formAdminUpdate"];
  };
  "/candidates": {
    get: operations["CandidatesController_findAll"];
  };
  "/candidates/me": {
    get: operations["CandidatesController_findMe"];
  };
  "/candidates/{id}": {
    get: operations["CandidatesController_findOne"];
    delete: operations["CandidatesController_remove"];
    patch: operations["CandidatesController_update"];
  };
  "/candidates/{id}/onboard": {
    post: operations["CandidatesController_onboard"];
  };
  "/candidates/{id}/work-experiences": {
    post: operations["CandidatesController_addCandidateWorkExperience"];
  };
  "/candidates/{id}/work-experiences/{workExperienceId}": {
    put: operations["CandidatesController_updateCandidateWorkExperience"];
    delete: operations["CandidatesController_deleteCandidateWorkExperience"];
  };
  "/candidates/{id}/language-qualifications": {
    post: operations["CandidatesController_addCandidateLanguageQualification"];
  };
  "/candidates/{id}/language-qualifications/{languageQualificationId}": {
    put: operations["CandidatesController_updateCandidateLanguageQualification"];
    delete: operations["CandidatesController_deleteCandidateLanguageQualification"];
  };
  "/candidates/{id}/education": {
    post: operations["CandidatesController_addCandidateEducation"];
  };
  "/candidates/{id}/education/{educationId}": {
    put: operations["CandidatesController_updateCandidateEducation"];
    delete: operations["CandidatesController_deleteCandidateEducation"];
  };
  "/candidates/{id}/achievements": {
    post: operations["CandidatesController_addCandidateAchievement"];
  };
  "/candidates/{id}/achievements/{achievementId}": {
    put: operations["CandidatesController_updateCandidateAchievement"];
    delete: operations["CandidatesController_deleteCandidateAchievement"];
  };
  "/tsq-jobs/create": {
    post: operations["TsqJobsController_create"];
  };
  "/tsq-jobs": {
    post: operations["TsqJobsController_findAll"];
  };
  "/tsq-jobs/{id}": {
    get: operations["TsqJobsController_findOne"];
    delete: operations["TsqJobsController_remove"];
    patch: operations["TsqJobsController_update"];
  };
  "/jobapps/apply": {
    post: operations["JobAppsController_apply"];
  };
  "/forms": {
    get: operations["FormsController_findAll"];
    post: operations["FormsController_create"];
  };
  "/forms/{id}": {
    get: operations["FormsController_findOne"];
    put: operations["FormsController_update"];
    delete: operations["FormsController_remove"];
  };
  "/forms/{id}/responses": {
    get: operations["FormsController_getFormResponses"];
    post: operations["FormsController_createFormResponse"];
  };
  "/forms/{id}/responses/{responseId}": {
    get: operations["FormsController_getFormResponse"];
    put: operations["FormsController_updateFormResponse"];
    delete: operations["FormsController_deleteFormResponse"];
  };
  "/gt-response/verifyVoiceNote": {
    get: operations["GTResponseController_verifyVoiceNote"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    LoginDto: {
      /** @example test@gmail.com */
      email: string;
      /** @example 12345678 */
      password: string;
    };
    FastTrackCandidateDto: {
      name: string;
      /** @example test@gmail.com */
      email: string;
      /** @example 12345678 */
      password: string;
      contactNumber: string;
      socialMediaLink: string;
      resumeUrl: string;
    };
    FormAdminCreateDto: {
      /** @example test@gmail.com */
      email: string;
      /** @example 12345678 */
      password: string;
      /** @example John Doe */
      name: string;
      /** @example ADMIN */
      role: string;
    };
    FormAdminUpdateDto: {
      /** @example 12345678 */
      password: string;
      /** @example John Doe */
      name: string;
      /** @example ADMIN */
      role: string;
    };
    /** @enum {string} */
    MaritalStatus: "SINGLE" | "MARRIED" | "DIVORCED" | "WIDOWED";
    JobIndustry: {
      name: string;
      jobSpecializationName: string;
      jobSpecializations: components["schemas"]["JobSpecialization"];
      candidateBasicPlusInfo: (components["schemas"]["CandidateBasicPlusInfo"])[];
    };
    JobSpecialization: {
      name: string;
      candidateBasicPlusInfo: (components["schemas"]["CandidateBasicPlusInfo"])[];
      jobIndustries: (components["schemas"]["JobIndustry"])[];
    };
    CareerConsideration: {
      name: string;
      candidateBasicPlusInfo: (components["schemas"]["CandidateBasicPlusInfo"])[];
    };
    CandidateWorkExperience: {
      id: string;
      candidateId: string;
      candidate: components["schemas"]["Candidate"];
      positionTitle: string;
      companyName: string;
      countryCode: string;
      country: components["schemas"]["Country"];
      stateId: string;
      state: components["schemas"]["State"];
      industry: string;
      currentlyWorkingHere: boolean;
      /** Format: date-time */
      startDate: string;
      /** Format: date-time */
      endDate?: string;
      jobDescription: string;
      reasonForLeaving?: string;
    };
    State: {
      code: string;
      name: string;
      countryCode: string;
      country: components["schemas"]["Country"];
      candidateWorkExperience: (components["schemas"]["CandidateWorkExperience"])[];
      candidateBasicInfo: (components["schemas"]["CandidateBasicInfo"])[];
    };
    /** @enum {string} */
    Qualification: "HIGH_SCHOOL" | "DIPLOMA" | "BACHELOR" | "MASTER" | "DOCTORATE";
    CandidateEducation: {
      id: string;
      candidateId: string;
      candidate: components["schemas"]["Candidate"];
      schoolName: string;
      qualification: components["schemas"]["Qualification"];
      fieldOfStudy: string;
      locationCode: string;
      location: components["schemas"]["Country"];
      currentlyStudyingHere: boolean;
      startYear: number;
      endYear?: number;
    };
    Country: {
      code: string;
      name: string;
      states: (components["schemas"]["State"])[];
      candidatesWithNationality: (components["schemas"]["CandidateBasicInfo"])[];
      candidatesWithCountry: (components["schemas"]["CandidateBasicInfo"])[];
      candidateBasicPlusInfoCurrentSalaryCurrencyCode: (components["schemas"]["CandidateBasicPlusInfo"])[];
      candidateBasicPlusInfoExpectedSalaryCurrencyCode: (components["schemas"]["CandidateBasicPlusInfo"])[];
      candidateWorkExperience: (components["schemas"]["CandidateWorkExperience"])[];
      candidateEducation: (components["schemas"]["CandidateEducation"])[];
    };
    CandidateBasicPlusInfo: {
      candidateId: string;
      candidate: components["schemas"]["Candidate"];
      selfIntroduction: string;
      whyShouldWeHireYou: string;
      height?: number;
      weight?: number;
      maritalStatus: components["schemas"]["MaritalStatus"];
      currentJobSpecializationName?: string;
      currentJobSpecialization?: components["schemas"]["JobSpecialization"];
      currentJobIndustryName?: string;
      currentJobIndustry?: components["schemas"]["JobIndustry"];
      noticePeriod: string;
      ownTransport: boolean;
      welcomeShifts: boolean;
      referralSource: string;
      superiorTitle: string;
      subordinatesCount: number;
      top3CareerConsiderations: (components["schemas"]["CareerConsideration"])[];
      socialMediaLink: string;
      currentSalaryCurrencyCode: string;
      currentSalaryCurrency: components["schemas"]["Country"];
      currentSalary: number;
      expectedSalaryCurrencyCode: string;
      expectedSalaryCurrency: components["schemas"]["Country"];
      expectedSalary: number;
      lookingForJobTitles: (string)[];
      strengths: (string)[];
    };
    CandidateEducationAchievement: {
      id: string;
      year: number;
      description: string;
      candidateId?: string;
      candidate?: components["schemas"]["Candidate"];
    };
    Candidate: {
      id: string;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      email?: string;
      password: string;
      facebookId?: string;
      linkedInId?: string;
      twitterId?: string;
      candidateBasicInfo?: components["schemas"]["CandidateBasicInfo"];
      candidateBasicPlusInfo?: components["schemas"]["CandidateBasicPlusInfo"];
      resumeUrl?: string;
      skills: (string)[];
      candidateWorkExperiences: (components["schemas"]["CandidateWorkExperience"])[];
      candidateEducation: (components["schemas"]["CandidateEducation"])[];
      achievements: (components["schemas"]["CandidateEducationAchievement"])[];
    };
    /** @enum {string} */
    Gender: "MALE" | "FEMALE";
    LanguageQualification: {
      id: string;
      name: string;
      writtenLevel: number;
      spokenLevel: number;
      candidateId: string;
      candidate: components["schemas"]["CandidateBasicInfo"];
    };
    CandidateBasicInfo: {
      candidateId: string;
      candidate: components["schemas"]["Candidate"];
      profileImageUrl?: string;
      name: string;
      contactableByWhatsapp: boolean;
      primaryContactNumber: string;
      secondaryContactNumber?: string;
      /** Format: date-time */
      dateOfBirth?: string;
      gender?: components["schemas"]["Gender"];
      nationalityCode?: string;
      nationality?: components["schemas"]["Country"];
      highestQualification?: components["schemas"]["Qualification"];
      latestPosition: string;
      countryCode?: string;
      country?: components["schemas"]["Country"];
      stateId?: string;
      state?: components["schemas"]["State"];
      postalCode: string;
      addressLine1: string;
      languageQualifications: (components["schemas"]["LanguageQualification"])[];
    };
    LanguageQualificationDto: {
      name: string;
      writtenLevel: number;
      spokenLevel: number;
    };
    CandidateBasicInfoDto: {
      profileImageUrl: string;
      name: string;
      contactableByWhatsapp: boolean;
      primaryContactNumber: string;
      secondaryContactNumber?: string;
      dateOfBirth: string;
      gender: components["schemas"]["Gender"];
      nationality: string;
      /** @enum {string} */
      highestQualification: "HIGH_SCHOOL" | "DIPLOMA" | "BACHELOR" | "MASTER" | "DOCTORATE";
      latestPosition: string;
      country: string;
      state: string;
      postalCode: string;
      addressLine1: string;
      languageQualifications: (components["schemas"]["LanguageQualificationDto"])[];
    };
    CandidateBasicPlusInfoDto: {
      selfIntroduction: string;
      whyShouldWeHireYou: string;
      height: number;
      weight: number;
      /** @enum {number} */
      maritalStatus: never;
      currentJobSpecialization: string;
      currentJobIndustry: string;
      noticePeriod: string;
      ownTransport: boolean;
      welcomeShifts: boolean;
      referralSource: string;
      superiorTitle: string;
      subordinatesCount: number;
      top3CareerConsiderations: (string)[];
      socialMediaLink: string;
      currentSalaryCurrency: string;
      currentSalary: number;
      expectedSalaryCurrency: string;
      expectedSalary: number;
      lookingForJobTitles: (string)[];
      strengths: (string)[];
    };
    UpdateCandidateDto: {
      id?: string;
      createdAt?: string;
      updatedAt?: string;
      email?: string;
      candidateBasicInfo?: components["schemas"]["CandidateBasicInfoDto"];
      candidateBasicPlusInfo?: components["schemas"]["CandidateBasicPlusInfoDto"];
      resumeUrl?: string;
      skills?: (string)[];
      candidateWorkExperience?: (string)[];
      candidateEducation?: (string)[];
      candidateEducationAchievements?: (string)[];
    };
    CandidateWorkExperienceDto: {
      positionTitle: string;
      companyName: string;
      country: string;
      state: string;
      industry: string;
      currentlyWorkingHere: boolean;
      startDate: string;
      endDate?: string;
      jobDescription: string;
      reasonForLeaving?: string;
    };
    CandidateEducationDto: {
      schoolName: string;
      /** @enum {string} */
      qualification: "HIGH_SCHOOL" | "DIPLOMA" | "BACHELOR" | "MASTER" | "DOCTORATE";
      fieldOfStudy: string;
      location: string;
      currentlyStudyingHere: boolean;
      startYear: number;
      endYear?: number;
    };
    CandidateEducationAchievementEntity: {
      year: number;
      description: string;
    };
    OnboardCandidateDto: {
      candidateBasicInfo: components["schemas"]["CandidateBasicInfoDto"];
      candidateBasicPlusInfo: components["schemas"]["CandidateBasicPlusInfoDto"];
      candidateWorkExperience: (components["schemas"]["CandidateWorkExperienceDto"])[];
      candidateEducation: (components["schemas"]["CandidateEducationDto"])[];
      resumeUrl: string;
      skills: (string)[];
      candidateEducationAchievements: (components["schemas"]["CandidateEducationAchievementEntity"])[];
    };
    PaginationDto: {
      page: number;
      limit: number;
    };
    FindManyTsqJobDto: {
      where: Record<string, never>;
      pager: components["schemas"]["PaginationDto"];
    };
    UpdateTsqJobDto: Record<string, never>;
    JobApplicationRequestDto: {
      position: string;
      salary: string;
      location: string;
      distanceFromLRT: string;
      contacts: string;
      applicantStatus: string;
      jobId?: string;
    };
    FormColors: {
      id: string;
      primaryColor: string;
      secondaryColor: string;
      accentColor: string;
      introCardNavBgColor: string;
      introCardNavTextColor: string;
      noteCardNavBgColor: string;
      noteCardNavTextColor: string;
      sectionsNavBgColor: string;
      sectionsNavTextColor: string;
      cardIconsBgColor: string;
      cardIconsColor: string;
      FormSettings: (components["schemas"]["FormSettings"])[];
      formId?: string;
    };
    /** @enum {string} */
    FormAdminRole: "ADMIN" | "EDITOR";
    FormAccess: {
      id: string;
      /** Format: date-time */
      createdAt: string;
      formSettingsId: string;
      formSettings: components["schemas"]["FormSettings"];
      userId: string;
      user: components["schemas"]["FormAdmin"];
    };
    FormAdmin: {
      id: string;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      email: string;
      password: string;
      name: string;
      role: components["schemas"]["FormAdminRole"];
      ownerOfForms: (components["schemas"]["FormSettings"])[];
      accessToForms: (components["schemas"]["FormAccess"])[];
    };
    /** @enum {string} */
    FormAccessType: "PUBLIC" | "PRIVATE";
    FormSettings: {
      id: string;
      formId?: string;
      form?: components["schemas"]["Form"];
      formColorsId: string;
      colors: components["schemas"]["FormColors"];
      urls: (string)[];
      introCardBannerImageUrl: string;
      desktopBgImageUrl: string;
      mobileBgImageUrl: string;
      internalImageUrl?: string;
      customLogoUrl?: string;
      resultsSheetId: string;
      resultsSheetName: string;
      coverBg: boolean;
      customNoteIconUrl?: string;
      customSuccessIconUrl?: string;
      ownerId: string;
      owner: components["schemas"]["FormAdmin"];
      accessType: components["schemas"]["FormAccessType"];
      accessList: (components["schemas"]["FormAccess"])[];
    };
    FormContent: {
      id: string;
      form?: components["schemas"]["Form"];
      title: string;
      subtitle: string;
      smallSubtitle: string;
      introCardTitle: string;
      introCardSubtitle: string;
      additionalInfoButtons: (Record<string, never>)[];
      noteTitle: string;
      noteContent: string;
      customFooterText: string;
      customLetsGoText: string;
      customSuccessTitle: string;
      customSuccessContent: string;
      customContactYourCareerConsultantText: string;
      customWhatsappText: string;
      gifOrVideoUrl: string;
    };
    FormResponse: {
      id: string;
      /** Format: date-time */
      createdAt: string;
      responses: (Record<string, never>)[];
      formId?: string;
      form?: components["schemas"]["Form"];
    };
    Form: {
      id: string;
      /** Format: date-time */
      createdAt: string;
      sections: (components["schemas"]["FormSection"])[];
      formSettingsId: string;
      formSettings: components["schemas"]["FormSettings"];
      formContentId: string;
      formContent: components["schemas"]["FormContent"];
      formResponses: (components["schemas"]["FormResponse"])[];
    };
    FormSection: {
      id: string;
      iconUrl: string;
      questions: (Record<string, never>)[];
      formId?: string;
      form?: components["schemas"]["Form"];
    };
    FormSettingsDto: {
      id: string;
      formId?: string;
      formColorsId: string;
      colors: components["schemas"]["FormColors"];
      urls: (string)[];
      introCardBannerImageUrl: string;
      desktopBgImageUrl: string;
      mobileBgImageUrl: string;
      internalImageUrl?: string;
      customLogoUrl?: string;
      resultsSheetId: string;
      resultsSheetName: string;
      coverBg: boolean;
      customNoteIconUrl?: string;
      customSuccessIconUrl?: string;
      ownerId: string;
      accessType: components["schemas"]["FormAccessType"];
      accessList: ((unknown)[])[];
    };
    UpdateFormDto: {
      sections: (components["schemas"]["FormSection"])[];
      formSettings: components["schemas"]["FormSettingsDto"];
      formContent: components["schemas"]["FormContent"];
    };
    FormResponseDto: {
      questionId: string;
      value: Record<string, never>;
    };
    CreateFormResponseDto: {
      formResponses: (components["schemas"]["FormResponseDto"])[];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  AuthController_candidateLogin: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginDto"];
      };
    };
    responses: {
      200: never;
    };
  };
  AuthController_facebookLogin: {
    responses: {
      200: never;
    };
  };
  AuthController_facebookLoginCallback: {
    responses: {
      200: never;
    };
  };
  AuthController_linkedinLogin: {
    responses: {
      200: never;
    };
  };
  AuthController_linkedinLoginCallback: {
    responses: {
      200: never;
    };
  };
  AuthController_twitterLogin: {
    responses: {
      200: never;
    };
  };
  AuthController_twitterLoginCallback: {
    responses: {
      200: never;
    };
  };
  AuthController_candidateRegister: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginDto"];
      };
    };
    responses: {
      201: never;
    };
  };
  AuthController_candidateFastTrackRegister: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["FastTrackCandidateDto"];
      };
    };
    responses: {
      201: never;
    };
  };
  AuthController_validateJwt: {
    requestBody: {
      content: {
        "application/json": {
          jwt?: string;
        };
      };
    };
    responses: {
      201: never;
    };
  };
  AuthController_getFormAdmins: {
    responses: {
      200: never;
    };
  };
  AuthController_formAdminCreate: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["FormAdminCreateDto"];
      };
    };
    responses: {
      201: never;
    };
  };
  AuthController_getFormAdminMe: {
    responses: {
      200: never;
    };
  };
  AuthController_formAdminLogin: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginDto"];
      };
    };
    responses: {
      200: never;
    };
  };
  AuthController_formAdminDelete: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: never;
    };
  };
  AuthController_formAdminUpdate: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["FormAdminUpdateDto"];
      };
    };
    responses: {
      200: never;
    };
  };
  CandidatesController_findAll: {
    responses: {
      200: never;
    };
  };
  CandidatesController_findMe: {
    responses: {
      /** @description Returns the candidate profile of the logged in user */
      200: {
        content: {
          "application/json": components["schemas"]["Candidate"];
        };
      };
    };
  };
  CandidatesController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: never;
    };
  };
  CandidatesController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: never;
    };
  };
  CandidatesController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateCandidateDto"];
      };
    };
    responses: {
      200: never;
    };
  };
  CandidatesController_onboard: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["OnboardCandidateDto"];
      };
    };
    responses: {
      200: never;
    };
  };
  CandidatesController_addCandidateWorkExperience: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CandidateWorkExperienceDto"];
      };
    };
    responses: {
      201: never;
    };
  };
  CandidatesController_updateCandidateWorkExperience: {
    parameters: {
      path: {
        id: string;
        workExperienceId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CandidateWorkExperienceDto"];
      };
    };
    responses: {
      200: never;
    };
  };
  CandidatesController_deleteCandidateWorkExperience: {
    parameters: {
      path: {
        id: string;
        workExperienceId: string;
      };
    };
    responses: {
      200: never;
    };
  };
  CandidatesController_addCandidateLanguageQualification: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["LanguageQualificationDto"];
      };
    };
    responses: {
      201: never;
    };
  };
  CandidatesController_updateCandidateLanguageQualification: {
    parameters: {
      path: {
        id: string;
        languageQualificationId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["LanguageQualificationDto"];
      };
    };
    responses: {
      200: never;
    };
  };
  CandidatesController_deleteCandidateLanguageQualification: {
    parameters: {
      path: {
        id: string;
        languageQualificationId: string;
      };
    };
    responses: {
      200: never;
    };
  };
  CandidatesController_addCandidateEducation: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CandidateEducationDto"];
      };
    };
    responses: {
      201: never;
    };
  };
  CandidatesController_updateCandidateEducation: {
    parameters: {
      path: {
        id: string;
        educationId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CandidateEducationDto"];
      };
    };
    responses: {
      200: never;
    };
  };
  CandidatesController_deleteCandidateEducation: {
    parameters: {
      path: {
        id: string;
        educationId: string;
      };
    };
    responses: {
      200: never;
    };
  };
  CandidatesController_addCandidateAchievement: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CandidateEducationAchievementEntity"];
      };
    };
    responses: {
      201: never;
    };
  };
  CandidatesController_updateCandidateAchievement: {
    parameters: {
      path: {
        id: string;
        achievementId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CandidateEducationAchievementEntity"];
      };
    };
    responses: {
      200: never;
    };
  };
  CandidatesController_deleteCandidateAchievement: {
    parameters: {
      path: {
        id: string;
        achievementId: string;
      };
    };
    responses: {
      200: never;
    };
  };
  TsqJobsController_create: {
    responses: {
      201: never;
    };
  };
  TsqJobsController_findAll: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["FindManyTsqJobDto"];
      };
    };
    responses: {
      201: never;
    };
  };
  TsqJobsController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: never;
    };
  };
  TsqJobsController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: never;
    };
  };
  TsqJobsController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateTsqJobDto"];
      };
    };
    responses: {
      200: never;
    };
  };
  JobAppsController_apply: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["JobApplicationRequestDto"];
      };
    };
    responses: {
      201: never;
    };
  };
  FormsController_findAll: {
    parameters: {
      query: {
        url: string;
      };
    };
    responses: {
      /** @description Returns forms */
      200: {
        content: {
          "application/json": (unknown)[];
        };
      };
    };
  };
  FormsController_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateFormDto"];
      };
    };
    responses: {
      201: never;
    };
  };
  FormsController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description Returns a single form */
      200: {
        content: {
          "application/json": components["schemas"]["Form"];
        };
      };
    };
  };
  FormsController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateFormDto"];
      };
    };
    responses: {
      200: never;
    };
  };
  FormsController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: never;
    };
  };
  FormsController_getFormResponses: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: never;
    };
  };
  FormsController_createFormResponse: {
    parameters: {
      header: {
        by: string;
      };
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateFormResponseDto"];
      };
    };
    responses: {
      201: never;
    };
  };
  FormsController_getFormResponse: {
    parameters: {
      path: {
        id: string;
        responseId: string;
      };
    };
    responses: {
      200: never;
    };
  };
  FormsController_updateFormResponse: {
    parameters: {
      path: {
        id: string;
        responseId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateFormResponseDto"];
      };
    };
    responses: {
      200: never;
    };
  };
  FormsController_deleteFormResponse: {
    parameters: {
      path: {
        id: string;
        responseId: string;
      };
    };
    responses: {
      200: never;
    };
  };
  GTResponseController_verifyVoiceNote: {
    parameters: {
      query: {
        candidateId: string;
        responseSheetName: string;
        payload: string;
      };
    };
    responses: {
      200: never;
    };
  };
}