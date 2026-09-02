import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import faceImage from "../../assets/images/face.png";

const PROJECT_OPTIONS = [
  "landing",
  "multipage",
  "store",
  "redesign",
  "other",
];

const CONTACT_METHODS = [
  "email",
  "telegram",
  "whatsapp",
  "instagram",
  "phone",
];

const INPUT_STAGES = ["name", "project", "details", "contactValue"];

const DIRECT_EMAIL = "ernestmakarov.ee@gmail.com";
const TELEGRAM_URL = "https://t.me/ernestweb";

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 12h14M14 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalArrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M4 12 12 4M6 4h6v6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg
      viewBox="0 0 18 12"
      fill="none"
      aria-hidden="true"
      className="h-3 w-[18px]"
    >
      <rect x="1" y="8" width="2.5" height="3" rx="0.8" fill="currentColor" />
      <rect x="5.3" y="6" width="2.5" height="5" rx="0.8" fill="currentColor" />
      <rect x="9.6" y="3.5" width="2.5" height="7.5" rx="0.8" fill="currentColor" />
      <rect x="13.9" y="1" width="2.5" height="10" rx="0.8" fill="currentColor" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg
      viewBox="0 0 18 14"
      fill="none"
      aria-hidden="true"
      className="h-3.5 w-[18px]"
    >
      <path
        d="M1.5 4.8a11 11 0 0 1 15 0M4.3 7.7a7 7 0 0 1 9.4 0M7.1 10.4a2.9 2.9 0 0 1 3.8 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="9" cy="12.2" r="1" fill="currentColor" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg
      viewBox="0 0 25 12"
      fill="none"
      aria-hidden="true"
      className="h-3 w-[25px]"
    >
      <rect
        x="1"
        y="1"
        width="20"
        height="10"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.85"
      />
      <rect x="3" y="3" width="15.5" height="6" rx="1.5" fill="currentColor" />
      <path
        d="M22.5 4v4c1 0 1.5-.5 1.5-1.5v-1c0-1-.5-1.5-1.5-1.5Z"
        fill="currentColor"
        opacity="0.75"
      />
    </svg>
  );
}

function HomeContact() {
  const { t, i18n } = useTranslation("home");

  const sectionRef = useRef(null);
  const feedRef = useRef(null);
  const inputRef = useRef(null);
  const timersRef = useRef(new Set());
  const messageIdRef = useRef(0);
  const startedRef = useRef(false);

  const [hasEntered, setHasEntered] = useState(false);
  const [stage, setStage] = useState("idle");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const [answers, setAnswers] = useState({
    name: "",
    projectKey: "",
    projectText: "",
    details: "",
    contactMethod: "",
    contactValue: "",
  });

  const language = i18n.resolvedLanguage?.split("-")[0] || "ru";

  const createTimer = useCallback((callback, delay) => {
    const timer = window.setTimeout(() => {
      timersRef.current.delete(timer);
      callback();
    }, delay);

    timersRef.current.add(timer);
    return timer;
  }, []);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current.clear();
  }, []);

  const addMessage = useCallback((message) => {
    messageIdRef.current += 1;

    setMessages((current) => [
      ...current,
      {
        id: messageIdRef.current,
        ...message,
      },
    ]);
  }, []);

  const showBotMessage = useCallback(
    (key, nextStage, values = {}, delay = 850) => {
      setStage("waiting");
      setIsTyping(true);
      setError("");

      createTimer(() => {
        addMessage({
          sender: "bot",
          key,
          values,
        });

        setIsTyping(false);
        setStage(nextStage);
      }, delay);
    },
    [addMessage, createTimer],
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;

        startedRef.current = true;
        setHasEntered(true);

        createTimer(() => {
          showBotMessage("contactChat.chat.greeting", "name");
        }, 450);

        observer.disconnect();
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [createTimer, showBotMessage]);

  useEffect(() => {
    const feed = feedRef.current;

    if (!feed) return;

    const frame = window.requestAnimationFrame(() => {
      feed.scrollTo({
        top: feed.scrollHeight,
        behavior: "smooth",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [messages, isTyping, stage]);

  useEffect(() => {
    if (INPUT_STAGES.includes(stage)) {
      createTimer(() => inputRef.current?.focus(), 150);
    }
  }, [createTimer, stage]);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  const projectName = useMemo(() => {
    if (answers.projectText) return answers.projectText;
    if (!answers.projectKey) return "";

    return t(`contactChat.projects.${answers.projectKey}`);
  }, [answers.projectKey, answers.projectText, t]);

  const contactMethodName = useMemo(() => {
    if (!answers.contactMethod) return "";

    return t(`contactChat.contactMethods.${answers.contactMethod}`);
  }, [answers.contactMethod, t]);

  const currentStep = useMemo(() => {
    if (stage === "name" || stage === "idle") return 1;
    if (stage === "project") return 2;
    if (stage === "details") return 3;
    return 4;
  }, [stage]);

  const progress = currentStep * 25;

  const placeholder = useMemo(() => {
    if (stage === "name") return t("contactChat.placeholders.name");
    if (stage === "project") return t("contactChat.placeholders.project");
    if (stage === "details") return t("contactChat.placeholders.details");

    if (stage === "contactValue" && answers.contactMethod) {
      return t(`contactChat.placeholders.contacts.${answers.contactMethod}`);
    }

    return t("contactChat.placeholders.waiting");
  }, [answers.contactMethod, stage, t]);

  const clearInput = () => {
    setInput("");

    if (inputRef.current) {
      inputRef.current.style.height = "24px";
    }
  };

  const addUserText = (text) => {
    addMessage({
      sender: "user",
      text,
    });
  };

  const addUserChoice = (key) => {
    addMessage({
      sender: "user",
      key,
    });
  };

  const validateContact = (method, value) => {
    const trimmedValue = value.trim();

    if (method === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue);
    }

    if (method === "phone" || method === "whatsapp") {
      return trimmedValue.replace(/\D/g, "").length >= 7;
    }

    return trimmedValue.replace(/^@/, "").length >= 2;
  };

  const selectProject = (projectKey) => {
    if (stage !== "project" || isTyping) return;

    setAnswers((current) => ({
      ...current,
      projectKey,
      projectText: "",
    }));

    addUserChoice(`contactChat.projects.${projectKey}`);

    showBotMessage("contactChat.chat.askDetails", "details");
  };

  const selectContactMethod = (contactMethod) => {
    if (stage !== "contactMethod" || isTyping) return;

    setAnswers((current) => ({
      ...current,
      contactMethod,
      contactValue: "",
    }));

    addUserChoice(`contactChat.contactMethods.${contactMethod}`);

    showBotMessage(
      `contactChat.chat.contactPrompts.${contactMethod}`,
      "contactValue",
    );
  };

  const submitCurrentInput = () => {
    const value = input.trim();

    if (!value || isTyping) return;

    setError("");

    if (stage === "name") {
      if (value.length < 2) {
        setError(t("contactChat.validation.name"));
        return;
      }

      setAnswers((current) => ({
        ...current,
        name: value,
      }));

      addUserText(value);
      clearInput();

      showBotMessage("contactChat.chat.askProject", "project", {
        name: value,
      });

      return;
    }

    if (stage === "project") {
      if (value.length < 2) {
        setError(t("contactChat.validation.project"));
        return;
      }

      setAnswers((current) => ({
        ...current,
        projectKey: "",
        projectText: value,
      }));

      addUserText(value);
      clearInput();

      showBotMessage("contactChat.chat.askDetails", "details");
      return;
    }

    if (stage === "details") {
      if (value.length < 12) {
        setError(t("contactChat.validation.details"));
        return;
      }

      setAnswers((current) => ({
        ...current,
        details: value,
      }));

      addUserText(value);
      clearInput();

      showBotMessage("contactChat.chat.askContactMethod", "contactMethod");

      return;
    }

    if (stage === "contactValue") {
      if (!validateContact(answers.contactMethod, value)) {
        const errorKey =
          answers.contactMethod === "email"
            ? "email"
            : answers.contactMethod === "phone" ||
                answers.contactMethod === "whatsapp"
              ? "phone"
              : "username";

        setError(`contactChat.validation.${errorKey}`);
        return;
      }

      setAnswers((current) => ({
        ...current,
        contactValue: value,
      }));

      addUserText(value);
      clearInput();

      showBotMessage("contactChat.chat.reviewReady", "review", {
        name: answers.name,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitCurrentInput();
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setError("");

    event.target.style.height = "24px";
    event.target.style.height = `${Math.min(event.target.scrollHeight, 92)}px`;
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitCurrentInput();
    }
  };

  const resetChat = () => {
    clearTimers();

    setMessages([]);
    setInput("");
    setError("");
    setIsTyping(false);
    setShowNotification(false);

    setAnswers({
      name: "",
      projectKey: "",
      projectText: "",
      details: "",
      contactMethod: "",
      contactValue: "",
    });

    showBotMessage("contactChat.chat.greeting", "name", {}, 450);
  };

  const sendRequest = async () => {
    if (stage !== "review") return;

    if (honeypot) {
      setStage("success");
      setShowNotification(true);
      return;
    }

    const serviceId = "service_jdvx8ca";
    const templateId = "template_w14nhub";
    const publicKey = "4pKDoobEZeprEg26V";

    if (!serviceId || !templateId || !publicKey) {
      setError(t("contactChat.validation.configuration"));
      return;
    }

    setStage("sending");
    setError("");

    const submittedAt = new Intl.DateTimeFormat(language, {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date());

    const templateParams = {
        from_name: answers.name,
        reply_to:
            answers.contactMethod === "email"
            ? answers.contactValue
            : DIRECT_EMAIL,
        project_type: projectName,
        project_details: answers.details,
        contact_method: contactMethodName,
        contact_value: answers.contactValue,
        language: language.toUpperCase(),
        submitted_at: submittedAt,
        page_url: window.location.href,
        message: [
            `${t("contactChat.email.name")}: ${answers.name}`,
            `${t("contactChat.email.project")}: ${projectName}`,
            `${t("contactChat.email.details")}: ${answers.details}`,
            `${t("contactChat.email.contact")}: ${contactMethodName}`,
            `${t("contactChat.email.contactValue")}: ${answers.contactValue}`,
        ].join("\n"),
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
        blockHeadless: true,
        limitRate: {
          id: "portfolio-contact-chat",
          throttle: 60000,
        },
      });

      setStage("waiting");
      setIsTyping(true);

      createTimer(() => {
        addMessage({
          sender: "bot",
          key: "contactChat.chat.success",
          values: {
            name: answers.name,
          },
        });

        setIsTyping(false);
        setStage("success");
        setShowNotification(true);
      }, 650);
    } catch {
      setStage("review");
      setError(t("contactChat.validation.send"));
    }
  };

  const renderMessage = (message) => {
    if (message.key) {
      return t(message.key, message.values);
    }

    return message.text;
  };

  const inputIsVisible = INPUT_STAGES.includes(stage);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-black/10"
    >
      <div className="pointer-events-none absolute right-[-18%] top-[18%] h-[620px] w-[620px] rounded-full border border-[#0057FF]/10" />
      <div className="pointer-events-none absolute right-[-8%] top-[28%] h-[440px] w-[440px] rounded-full border border-[#0057FF]/10" />
      <div className="pointer-events-none absolute right-[3%] top-[38%] h-[260px] w-[260px] rounded-full bg-[#0057FF]/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1600px] gap-16 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[48%_52%] lg:items-center lg:gap-0 lg:px-9 lg:py-32">
        <div
          className={`relative z-20 transition-all duration-1000 ${
            hasEntered
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#333] sm:text-[11px]">
            03&nbsp;&nbsp;/&nbsp;&nbsp;{t("contactChat.eyebrow")}
          </p>

          <h2 className="flex max-w-[760px] flex-col gap-2 font-['Oswald'] text-[clamp(46px,12vw,64px)] font-medium tracking-[-0.025em] text-[#111] sm:text-[clamp(58px,7vw,72px)] lg:text-[clamp(62px,4vw,76px)]">
            <span className="block leading-[1.08]">
              {t("contactChat.title.line1")}
            </span>

            <span className="block leading-[1.08]">
              {t("contactChat.title.line2")}
            </span>

            <span className="block leading-[1.08] text-[#0057FF]">
              {t("contactChat.title.line3")}
            </span>
          </h2>

          <p className="mt-8 max-w-[560px] text-[15px] leading-[1.7] text-[#6D6D6D] sm:text-[16px]">
            {t("contactChat.description")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] font-medium text-[#222]">
            <span>{t("contactChat.benefits.noForm")}</span>
            <span className="h-1 w-1 rounded-full bg-[#0057FF]" />
            <span>{t("contactChat.benefits.fast")}</span>
          </div>

          <div className="mt-8 flex items-center gap-3 text-[13px] text-[#777]">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-30" />
              <span className="relative inline-flex h-3 w-3 rounded-full border-[3px] border-[#F6F5F2] bg-[#22C55E]" />
            </span>

            {t("contactChat.responseTime")}
          </div>

          <div className="mt-10 max-w-[560px] border-t border-black/15 pt-7">
            <p className="text-[13px] text-[#777]">
              {t("contactChat.directQuestion")}
            </p>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href={`mailto:${DIRECT_EMAIL}`}
                className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#0057FF]"
              >
                {DIRECT_EMAIL}
                <ExternalArrow />
              </a>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#0057FF]"
              >
                Telegram
                <ExternalArrow />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`relative z-10 flex justify-center transition-all duration-1000 ease-out ${
            hasEntered
              ? "translate-y-0 rotate-0 opacity-100"
              : "translate-y-20 rotate-[2deg] opacity-0"
          }`}
        >
          <div className="relative w-full max-w-[420px]">
            <div className="pointer-events-none absolute -bottom-7 left-1/2 h-20 w-[82%] -translate-x-1/2 rounded-[50%] bg-[#0057FF]/15 blur-2xl" />

            <div className="relative rounded-[54px] border border-white/20 bg-[#070A10] p-[9px] shadow-[0_40px_90px_rgba(4,16,38,0.28),inset_0_0_0_1px_rgba(255,255,255,0.08)]">
              <span className="absolute -left-[3px] top-28 h-14 w-[3px] rounded-l bg-[#242A34]" />
              <span className="absolute -left-[3px] top-48 h-20 w-[3px] rounded-l bg-[#242A34]" />
              <span className="absolute -right-[3px] top-40 h-24 w-[3px] rounded-r bg-[#242A34]" />

              <div className="relative flex h-[640px] flex-col overflow-hidden rounded-[46px] bg-[linear-gradient(160deg,#0C192A_0%,#07111E_56%,#06101D_100%)] sm:h-[690px]">
                <div className="pointer-events-none absolute left-1/2 top-3 z-30 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

                <div className="flex h-[52px] shrink-0 items-center justify-between px-7 pt-2 text-[11px] font-semibold text-white">
                  <span>
                    {new Intl.DateTimeFormat(language, {
                      hour: "2-digit",
                      minute: "2-digit",
                    }).format(new Date())}
                  </span>

                  <div className="flex items-center gap-1.5 text-white">
                    <SignalIcon />
                    <WifiIcon />
                    <BatteryIcon />
                  </div>
                </div>

                <div className="flex h-[78px] shrink-0 items-center gap-3 border-b border-white/[0.07] px-5">
                  <img
                    src={faceImage}
                    alt="Ernest Makarov"
                    className="h-11 w-11 shrink-0 rounded-full border border-white/15 object-cover object-center"
                  />

                  <div>
                    <p className="text-[14px] font-semibold text-white">
                      Ernest Makarov
                    </p>

                    <div className="mt-1 flex items-center gap-1.5 text-[11px] text-white/50">
                      {t("contactChat.chat.online")}
                      <span className="h-1.5 w-1.5 rounded-full bg-[#168BFF]" />
                    </div>
                  </div>

                  <span className="ml-auto text-xl tracking-[2px] text-white/60">
                    ···
                  </span>
                </div>

                <div
                  ref={feedRef}
                  aria-live="polite"
                  className="min-h-0 flex-1 overflow-y-auto px-4 py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  <div className="flex min-h-full flex-col justify-end">
                    <div className="space-y-3">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.sender === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[84%] rounded-2xl px-4 py-3 text-[13px] leading-[1.5] shadow-sm ${
                              message.sender === "user"
                                ? "rounded-br-[5px] bg-[#0567F9] text-white"
                                : "rounded-bl-[5px] border border-white/[0.07] bg-[#172437] text-white/90"
                            }`}
                          >
                            {renderMessage(message)}
                          </div>
                        </div>
                      ))}

                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="flex h-11 items-center gap-1.5 rounded-2xl rounded-bl-[5px] border border-white/[0.07] bg-[#172437] px-4">
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/45 [animation-delay:-0.3s]" />
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/45 [animation-delay:-0.15s]" />
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/45" />
                          </div>
                        </div>
                      )}

                      {stage === "project" && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {PROJECT_OPTIONS.map((project) => (
                            <button
                              key={project}
                              type="button"
                              onClick={() => selectProject(project)}
                              className="rounded-full border border-white/20 bg-white/[0.04] px-3.5 py-2 text-[12px] text-white/75 transition-all duration-300 hover:border-[#0567F9] hover:bg-[#0567F9] hover:text-white"
                            >
                              {t(`contactChat.projects.${project}`)}
                            </button>
                          ))}
                        </div>
                      )}

                      {stage === "contactMethod" && (
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          {CONTACT_METHODS.map((method) => (
                            <button
                              key={method}
                              type="button"
                              onClick={() => selectContactMethod(method)}
                              className="rounded-xl border border-white/15 bg-white/[0.04] px-3 py-3 text-left text-[12px] text-white/75 transition-all duration-300 hover:border-[#0567F9] hover:bg-[#0567F9] hover:text-white"
                            >
                              {t(`contactChat.contactMethods.${method}`)}
                            </button>
                          ))}
                        </div>
                      )}

                      {(stage === "review" || stage === "sending") && (
                        <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/45">
                            {t("contactChat.review.title")}
                          </p>

                          <dl className="mt-4 space-y-3 text-[12px]">
                            <div>
                              <dt className="text-white/40">
                                {t("contactChat.review.name")}
                              </dt>
                              <dd className="mt-1 text-white/90">
                                {answers.name}
                              </dd>
                            </div>

                            <div>
                              <dt className="text-white/40">
                                {t("contactChat.review.project")}
                              </dt>
                              <dd className="mt-1 text-white/90">
                                {projectName}
                              </dd>
                            </div>

                            <div>
                              <dt className="text-white/40">
                                {t("contactChat.review.contact")}
                              </dt>
                              <dd className="mt-1 break-all text-white/90">
                                {contactMethodName}: {answers.contactValue}
                              </dd>
                            </div>
                          </dl>

                          <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
                            <button
                              type="button"
                              onClick={sendRequest}
                              disabled={stage === "sending"}
                              className="flex h-11 items-center justify-center rounded-xl bg-[#0567F9] px-4 text-[12px] font-semibold text-white transition-colors duration-300 hover:bg-[#0057DD] disabled:cursor-wait disabled:opacity-60"
                            >
                              {stage === "sending"
                                ? t("contactChat.review.sending")
                                : t("contactChat.review.send")}
                            </button>

                            <button
                              type="button"
                              onClick={resetChat}
                              disabled={stage === "sending"}
                              className="h-11 rounded-xl border border-white/15 px-4 text-[12px] text-white/65 transition-colors duration-300 hover:border-white/35 hover:text-white disabled:opacity-40"
                            >
                              {t("contactChat.review.restart")}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 px-4 pb-4">
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-[10px] text-white/40">
                      <span>
                        {t("contactChat.progress", {
                          current: currentStep,
                        })}
                      </span>

                      <span>{progress}%</span>
                    </div>

                    <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-[#0567F9] transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {inputIsVisible ? (
                    <form
                      onSubmit={handleSubmit}
                      className="relative flex min-h-[52px] items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.055] p-2 pl-4"
                    >
                      <input
                        type="text"
                        value={honeypot}
                        onChange={(event) => setHoneypot(event.target.value)}
                        tabIndex="-1"
                        autoComplete="off"
                        aria-hidden="true"
                        className="absolute left-[-9999px] h-px w-px opacity-0"
                      />

                      <textarea
                        ref={inputRef}
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        placeholder={placeholder}
                        rows="1"
                        maxLength={stage === "details" ? 600 : 120}
                        className="min-h-6 flex-1 resize-none overflow-y-auto bg-transparent py-1.5 text-[13px] leading-6 text-white outline-none placeholder:text-white/30"
                      />

                      <button
                        type="submit"
                        disabled={!input.trim() || isTyping}
                        aria-label={t("contactChat.sendButton")}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0567F9] text-white transition-all duration-300 hover:bg-[#0057DD] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/25"
                      >
                        <ArrowIcon className="h-5 w-5" />
                      </button>
                    </form>
                  ) : (
                    <div className="flex h-[52px] items-center rounded-2xl border border-white/[0.07] bg-white/[0.035] px-4 text-[12px] text-white/30">
                      {stage === "success"
                        ? t("contactChat.placeholders.completed")
                        : t("contactChat.placeholders.waiting")}
                    </div>
                  )}

                  {error && (
                    <p className="mt-2 px-2 text-[11px] leading-[1.4] text-[#FF7373]">
                      {error.startsWith("contactChat.") ? t(error) : error}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`absolute right-[-150px] top-[56%] hidden w-[250px] items-center gap-3 rounded-2xl border border-black/10 bg-white/90 p-4 shadow-[0_20px_50px_rgba(17,30,50,0.14)] backdrop-blur-xl transition-all duration-500 2xl:flex ${
                showNotification
                  ? "translate-x-0 opacity-100"
                  : "pointer-events-none translate-x-8 opacity-0"
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0567F9] text-white">
                <span className="text-xl">•••</span>
              </div>

              <div>
                <p className="text-[13px] font-semibold text-[#111]">
                  {t("contactChat.notification.title")}
                </p>
                <p className="mt-1 text-[11px] text-[#777]">
                  {t("contactChat.notification.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContact;