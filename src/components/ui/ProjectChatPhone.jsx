import { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

import faceImage from "../../assets/images/face.png";

const initialForm = {
  name: "",
  project: "",
  projectLabel: "",
  details: "",
  channel: "",
  channelLabel: "",
  contact: "",
};

const projectOptions = ["landing", "multipage", "store", "redesign", "other"];
const channelOptions = ["email", "telegram", "whatsapp", "phone", "instagram"];

function CellularIcon() {
  return (
    <svg viewBox="0 0 18 12" fill="none" aria-hidden="true" className="h-3 w-[18px]">
      <rect x="1" y="8" width="2.2" height="3" rx="0.7" fill="currentColor" />
      <rect x="5.3" y="6" width="2.2" height="5" rx="0.7" fill="currentColor" />
      <rect x="9.6" y="3.5" width="2.2" height="7.5" rx="0.7" fill="currentColor" />
      <rect x="13.9" y="1" width="2.2" height="10" rx="0.7" fill="currentColor" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg viewBox="0 0 18 14" fill="none" aria-hidden="true" className="h-3.5 w-[18px]">
      <path d="M1.5 4.4a11.1 11.1 0 0 1 15 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4.2 7.3a7.1 7.1 0 0 1 9.6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7.1 10.1a2.8 2.8 0 0 1 3.8 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="9" cy="12.2" r="1" fill="currentColor" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg viewBox="0 0 27 13" fill="none" aria-hidden="true" className="h-[13px] w-[27px]">
      <rect x="1" y="1" width="21.5" height="11" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <rect x="3" y="3" width="17.5" height="7" rx="1.6" fill="currentColor" />
      <path d="M24 4.3c1.2.4 1.8 1.2 1.8 2.2S25.2 8.3 24 8.7V4.3Z" fill="currentColor" opacity="0.65" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" className="h-[18px] w-[18px]">
      <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TypingBubble() {
  return (
    <div className="chat-phone-message flex w-fit items-center gap-1 rounded-[16px] rounded-bl-[5px] border border-white/[0.08] bg-[#15253A] px-4 py-3.5">
      <span className="chat-phone-dot h-1.5 w-1.5 rounded-full bg-white/55" />
      <span className="chat-phone-dot h-1.5 w-1.5 rounded-full bg-white/55 [animation-delay:140ms]" />
      <span className="chat-phone-dot h-1.5 w-1.5 rounded-full bg-white/55 [animation-delay:280ms]" />
    </div>
  );
}

function ProjectChatPhone({ className = "" }) {
  const { t, i18n } = useTranslation("contacts");
  const location = useLocation();
  const rootRef = useRef(null);
  const scrollRef = useRef(null);
  const timersRef = useRef([]);
  const sequenceRef = useRef(0);
  const startedRef = useRef(false);

  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [value, setValue] = useState("");
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const [submitState, setSubmitState] = useState("idle");
  const [error, setError] = useState("");

  const progress = useMemo(() => {
    if (step <= 0) return 25;
    if (step === 1) return 50;
    if (step === 2) return 75;
    return 100;
  }, [step]);

  const placeholder = useMemo(() => {
    if (step === 0) return t("phone.placeholders.name");
    if (step === 2) return t("phone.placeholders.details");
    if (step === 3 && form.channel) {
      return t(`phone.placeholders.channels.${form.channel}`);
    }
    return "";
  }, [form.channel, step, t]);

  const inputVisible = step === 0 || step === 2 || (step === 3 && Boolean(form.channel));
  const inputDisabled = typing || submitState === "sending" || step === 4;

  const clearTimers = () => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  };

  const addTimer = (callback, delay) => {
    const timer = window.setTimeout(callback, delay);
    timersRef.current.push(timer);
  };

  const addMessage = (role, text) => {
    sequenceRef.current += 1;
    setMessages((current) => [
      ...current,
      { id: `${role}-${sequenceRef.current}`, role, text },
    ]);
  };

  const botReply = (items, nextStep, initialDelay = 620) => {
    const queue = Array.isArray(items) ? items : [items];
    setTyping(true);

    queue.forEach((text, index) => {
      addTimer(() => {
        addMessage("bot", text);

        if (index === queue.length - 1) {
          setTyping(false);
          if (typeof nextStep === "number") setStep(nextStep);
        }
      }, initialDelay + index * 620);
    });
  };

  const startConversation = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    setTyping(true);

    addTimer(() => {
      addMessage("bot", t("phone.messages.askName"));
      setTyping(false);
    }, 520);
  };

  const resetConversation = (startImmediately = true) => {
    clearTimers();
    sequenceRef.current = 0;
    startedRef.current = false;
    setMessages([]);
    setForm(initialForm);
    setValue("");
    setStep(0);
    setTyping(false);
    setSubmitState("idle");
    setError("");

    if (startImmediately) {
      addTimer(startConversation, 120);
    }
  };

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startConversation();
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startedRef.current) return;
    resetConversation(true);
  }, [i18n.resolvedLanguage, location.pathname]);

  useEffect(() => () => clearTimers(), []);

  useEffect(() => {
    const scrollNode = scrollRef.current;
    if (!scrollNode) return;

    scrollNode.scrollTo({
      top: scrollNode.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing, step]);

  const submitText = () => {
    const trimmedValue = value.trim();
    if (!trimmedValue || inputDisabled) return;

    setError("");
    addMessage("user", trimmedValue);
    setValue("");

    if (step === 0) {
      setForm((current) => ({ ...current, name: trimmedValue }));
      botReply(
        [
          t("phone.messages.greet", { name: trimmedValue }),
          t("phone.messages.askProject"),
        ],
        1,
      );
      return;
    }

    if (step === 2) {
      setForm((current) => ({ ...current, details: trimmedValue }));
      botReply(t("phone.messages.askChannel"), 3);
      return;
    }

    if (step === 3 && form.channel) {
      setForm((current) => ({ ...current, contact: trimmedValue }));
      botReply(t("phone.messages.confirm", { name: form.name }), 4);
    }
  };

  const selectProject = (project) => {
    if (typing) return;
    const projectLabel = t(`phone.projects.${project}`);
    setForm((current) => ({ ...current, project, projectLabel }));
    addMessage("user", projectLabel);
    botReply(t("phone.messages.askDetails"), 2);
  };

  const selectChannel = (channel) => {
    if (typing) return;
    const channelLabel = t(`phone.channels.${channel}`);
    setForm((current) => ({
      ...current,
      channel,
      channelLabel,
      contact: "",
    }));
    addMessage("user", channelLabel);
    botReply(t("phone.messages.askContact", { channel: channelLabel }), 3);
  };

  const sendApplication = async () => {
    if (submitState === "sending" || submitState === "sent") return;

    const serviceId = "service_jdvx8ca";
    const templateId = "template_w14nhub";
    const publicKey = "4pKDoobEZeprEg26V";

    if (!serviceId || !templateId || !publicKey) {
      setError(t("phone.errors.config"));
      return;
    }

    setError("");
    setSubmitState("sending");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          project_type: form.projectLabel,
          project_details: form.details,
          contact_method: form.channelLabel,
          contact_value: form.contact,
          message: `${form.projectLabel}: ${form.details}`,
          language: i18n.resolvedLanguage || i18n.language,
          page_url: window.location.href,
          submitted_at: new Date().toLocaleString(),
        },
        { publicKey },
      );

      setSubmitState("sent");
      addMessage("bot", t("phone.messages.sent"));
    } catch {
      setSubmitState("error");
      setError(t("phone.errors.send"));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitText();
    }
  };

  return (
    <div ref={rootRef} className={`relative mx-auto w-full max-w-[370px] ${className}`}>
      <div className="pointer-events-none absolute -inset-x-[16%] bottom-[-7%] h-[18%] rounded-[50%] bg-[#1C66D8]/20 blur-3xl" />

      <div className="relative aspect-[9/18] w-full rounded-[46px] border-[6px] border-[#0A0F17] bg-[#071426] p-[3px] shadow-[0_38px_75px_rgba(19,37,65,0.27),0_8px_22px_rgba(17,28,45,0.16),inset_0_0_0_1px_rgba(255,255,255,0.12)] sm:rounded-[50px]">
        <span className="absolute -left-[9px] top-[17%] h-[8%] w-[4px] rounded-l-full bg-[#252B34]" />
        <span className="absolute -left-[9px] top-[28%] h-[11%] w-[4px] rounded-l-full bg-[#252B34]" />
        <span className="absolute -right-[9px] top-[24%] h-[15%] w-[4px] rounded-r-full bg-[#252B34]" />

        <div className="relative flex h-full flex-col overflow-hidden rounded-[37px] border border-white/[0.07] bg-[linear-gradient(180deg,#08172A_0%,#061220_100%)] text-white sm:rounded-[41px]">
          <div className="relative flex h-[46px] shrink-0 items-center justify-between px-6 pt-2 text-[10px] font-semibold">
            <span>{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>

            <span className="absolute left-1/2 top-[9px] h-[25px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

            <div className="flex items-center gap-1.5 text-white/90">
              <CellularIcon />
              <WifiIcon />
              <BatteryIcon />
            </div>
          </div>

          <div className="flex h-[75px] shrink-0 items-center border-b border-white/[0.08] px-5">
            <img
              src={faceImage}
              alt="Ernest Makarov"
              width="44"
              height="44"
              className="h-11 w-11 rounded-full border border-white/20 object-cover"
            />

            <div className="ml-3 min-w-0">
              <p className="truncate text-[13px] font-semibold tracking-[-0.01em]">Ernest Makarov</p>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="text-[9px] text-[#8FA5C1]">{t("phone.online")}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#1682FF]" />
              </div>
            </div>

            <span className="ml-auto text-[18px] leading-none tracking-[0.18em] text-white/55">•••</span>
          </div>

          <div className="relative min-h-0 flex-1">
            <div ref={scrollRef} className="chat-phone-scroll absolute inset-0 overflow-y-auto px-4 py-5">
              <div className="flex min-h-full flex-col justify-end gap-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`chat-phone-message max-w-[82%] px-4 py-3 text-[12px] leading-[1.48] sm:text-[12.5px] ${
                      message.role === "user"
                        ? "ml-auto rounded-[16px] rounded-br-[5px] bg-[#0768F8] text-white shadow-[0_8px_22px_rgba(0,87,255,0.2)]"
                        : "mr-auto rounded-[16px] rounded-bl-[5px] border border-white/[0.08] bg-[#15253A] text-white/94"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}

                {typing && <TypingBubble />}

                {step === 1 && !typing && (
                  <div className="chat-phone-message flex flex-wrap gap-2 pt-1">
                    {projectOptions.map((project) => (
                      <button
                        key={project}
                        type="button"
                        onClick={() => selectProject(project)}
                        className="rounded-full border border-white/20 bg-white/[0.035] px-3 py-2 text-[10px] text-white/78 transition duration-300 hover:border-[#1475FF] hover:bg-[#0B5FE4] hover:text-white"
                      >
                        {t(`phone.projects.${project}`)}
                      </button>
                    ))}
                  </div>
                )}

                {step === 3 && !form.channel && !typing && (
                  <div className="chat-phone-message flex flex-wrap gap-2 pt-1">
                    {channelOptions.map((channel) => (
                      <button
                        key={channel}
                        type="button"
                        onClick={() => selectChannel(channel)}
                        className="rounded-full border border-white/20 bg-white/[0.035] px-3 py-2 text-[10px] text-white/78 transition duration-300 hover:border-[#1475FF] hover:bg-[#0B5FE4] hover:text-white"
                      >
                        {t(`phone.channels.${channel}`)}
                      </button>
                    ))}
                  </div>
                )}

                {step === 4 && (
                  <div className="chat-phone-message mt-1 rounded-[19px] border border-white/[0.12] bg-white/[0.045] p-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8299B8]">
                      {t("phone.summary.eyebrow")}
                    </p>

                    <dl className="mt-4 grid gap-3 text-[11px]">
                      <div>
                        <dt className="text-[#7186A3]">{t("phone.summary.name")}</dt>
                        <dd className="mt-1 text-white/92">{form.name}</dd>
                      </div>
                      <div>
                        <dt className="text-[#7186A3]">{t("phone.summary.project")}</dt>
                        <dd className="mt-1 text-white/92">{form.projectLabel}</dd>
                      </div>
                      <div>
                        <dt className="text-[#7186A3]">{t("phone.summary.contact")}</dt>
                        <dd className="mt-1 break-words text-white/92">
                          {form.channelLabel}: {form.contact}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-5 flex gap-2">
                      <button
                        type="button"
                        onClick={sendApplication}
                        disabled={submitState === "sending" || submitState === "sent"}
                        className="flex min-h-11 flex-1 items-center justify-center rounded-[12px] bg-[#0768F8] px-3 text-[12px] font-medium transition hover:bg-[#0861DF] disabled:cursor-default disabled:opacity-65"
                      >
                        {submitState === "sending"
                          ? t("phone.actions.sending")
                          : submitState === "sent"
                            ? t("phone.actions.sent")
                            : t("phone.actions.send")}
                      </button>

                      <button
                        type="button"
                        onClick={() => resetConversation(true)}
                        className="min-h-11 rounded-[12px] border border-white/20 px-3 text-[11px] text-white/72 transition hover:border-white/40 hover:text-white"
                      >
                        {t("phone.actions.restart")}
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          <div className="shrink-0 px-4 pb-4 pt-2">
            <div className="mb-2.5 flex items-center justify-between text-[9px] text-[#758AA6]">
              <span>{t("phone.step", { current: Math.min(step + 1, 4) })}</span>
              <span>{progress}%</span>
            </div>

            <div className="mb-3 h-[3px] overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#0872FF] transition-[width] duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex min-h-[54px] items-end gap-2 rounded-[17px] border border-white/[0.11] bg-white/[0.045] p-2 pl-4">
              {inputVisible ? (
                <textarea
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={inputDisabled}
                  rows="1"
                  aria-label={placeholder}
                  placeholder={placeholder}
                  className="max-h-20 min-h-[36px] min-w-0 flex-1 resize-none bg-transparent py-2 text-[12px] leading-5 text-white outline-none placeholder:text-[#62758E] disabled:cursor-default"
                />
              ) : (
                <p className="min-w-0 flex-1 py-2 text-[11px] leading-5 text-[#62758E]">
                  {step === 4 ? t("phone.placeholders.complete") : t("phone.placeholders.choose")}
                </p>
              )}

              <button
                type="button"
                onClick={submitText}
                disabled={!value.trim() || inputDisabled || !inputVisible}
                aria-label={t("phone.actions.continue")}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#0768F8] text-white transition duration-300 hover:bg-[#1677FF] disabled:bg-white/10 disabled:text-white/25"
              >
                <ArrowIcon />
              </button>
            </div>

            {error && <p className="mt-2 px-1 text-[9px] leading-[1.4] text-[#FF6B72]">{error}</p>}
          </div>
        </div>
      </div>

      <style>{`
        .chat-phone-scroll {
          scrollbar-width: none;
        }

        .chat-phone-scroll::-webkit-scrollbar {
          display: none;
        }

        .chat-phone-message {
          animation: chatPhoneMessageIn 480ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .chat-phone-dot {
          animation: chatPhoneTyping 1s ease-in-out infinite;
        }

        @keyframes chatPhoneMessageIn {
          from {
            opacity: 0;
            transform: translate3d(0, 10px, 0) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes chatPhoneTyping {
          0%, 65%, 100% {
            opacity: 0.35;
            transform: translateY(0);
          }
          32% {
            opacity: 1;
            transform: translateY(-3px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .chat-phone-message {
            animation-duration: 1ms;
          }
        }
      `}</style>
    </div>
  );
}

export default ProjectChatPhone;
