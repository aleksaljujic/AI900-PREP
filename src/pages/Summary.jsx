import { useState } from 'react';
import { Link } from 'react-router-dom';

const domains = [
  {
    id: 'workloads',
    title: 'AI Workloads',
    count: 64,
    topics: [
      {
        title: 'AI workload categories',
        count: 14,
        bullets: [
          'Vision, speech, language, and decision workloads each serve different scenarios.',
          'Choose a service based on the type of data and task required.',
          'Avoid using the wrong workload for a scenario, such as using Language service for image-only tasks.',
        ],
        chips: ['Vision', 'Speech', 'Language'],
      },
      {
        title: 'Service selection',
        count: 16,
        bullets: [
          'Use Computer Vision for general image analysis and Custom Vision for custom image models.',
          'Use Form Recognizer for document extraction, not general vision tasks.',
          'Use Translator when the scenario requires language translation across cultures.',
        ],
        chips: ['Custom Vision', 'Form Recognizer', 'Translator'],
      },
      {
        title: 'Cognitive Services understanding',
        count: 18,
        bullets: [
          'Cognitive Services are prebuilt APIs for quick AI integration.',
          'They reduce the need for custom model training in many business scenarios.',
          'Choose prebuilt services when speed and simplicity matter.',
        ],
        chips: ['Prebuilt APIs', 'Managed AI', 'Rapid deployment'],
      },
      {
        title: 'Cloud and edge deployment',
        count: 16,
        bullets: [
          'Cloud AI is best for centralized model management and scale.',
          'Edge AI is best for low latency and intermittent connectivity.',
          'Hybrid deployments combine cloud intelligence with local inference.',
        ],
        chips: ['Edge AI', 'Hybrid cloud', 'Latency'],
      },
    ],
  },
  {
    id: 'vision',
    title: 'Computer Vision',
    count: 58,
    topics: [
      {
        title: 'Computer Vision API',
        count: 14,
        bullets: [
          'Detects objects, describes images, and reads text in pictures.',
          'Used for general-purpose image understanding without custom training.',
          'Can also analyze video frames and spatial data.',
        ],
        chips: ['Image analysis', 'OCR', 'Scene understanding'],
      },
      {
        title: 'Custom Vision models',
        count: 14,
        bullets: [
          'Custom Vision trains on labeled images for classification or object detection.',
          'It supports Multiclass and Multilabel classification domains.',
          'Useful when built-in vision models do not cover the scenario.',
        ],
        chips: ['Object detection', 'Image classification', 'Custom training'],
      },
      {
        title: 'Form Recognizer usage',
        count: 12,
        bullets: [
          'Extracts fields and tables from forms, receipts, and invoices.',
          'Works with custom forms as well as prebuilt models.',
          'Not the same as general Computer Vision image analysis.',
        ],
        chips: ['Receipt extraction', 'Key-value pairs', 'Table extraction'],
      },
      {
        title: 'OCR and document text',
        count: 10,
        bullets: [
          'OCR turns printed or handwritten text into searchable content.',
          'Use it when text appears in images, receipts, or scanned documents.',
          'Works as a foundation for downstream language and search functions.',
        ],
        chips: ['Text extraction', 'Read API', 'Searchable content'],
      },
      {
        title: 'Video and spatial analysis',
        count: 8,
        bullets: [
          'Video analysis monitors scenes and motion over time.',
          'Spatial analysis counts people and tracks occupancy for safety.',
          'Use these when the scenario needs video insights rather than static image analysis.',
        ],
        chips: ['Video', 'People tracking', 'Occupancy'],
      },
    ],
  },
  {
    id: 'language',
    title: 'Language & Speech',
    count: 54,
    topics: [
      {
        title: 'Text Analytics',
        count: 14,
        bullets: [
          'Sentiment analysis identifies tone in customer feedback.',
          'Entity recognition extracts people, locations, dates, and more.',
          'Key phrase extraction surfaces main ideas from text.',
        ],
        chips: ['Sentiment', 'Entities', 'Key phrases'],
      },
      {
        title: 'Azure Language service',
        count: 14,
        bullets: [
          'Provides text classification, entity recognition, and other prebuilt language features.',
          'Supports language detection for multilingual scenarios.',
          'Use it for text understanding and document processing.',
        ],
        chips: ['Intent', 'NER', 'Language detection'],
      },
      {
        title: 'Speech service',
        count: 12,
        bullets: [
          'Speech-to-text transcribes spoken words into text.',
          'Text-to-speech converts text into natural voice output.',
          'Speech translation supports multilingual audio interactions.',
        ],
        chips: ['STT', 'TTS', 'Translation'],
      },
      {
        title: 'Translator service',
        count: 8,
        bullets: [
          'Translates text and speech between languages.',
          'Use Translator for multilingual apps and real-time communication.',
          'It does not replace intent recognition or general text analytics.',
        ],
        chips: ['Text translation', 'Speech translation', 'Multilingual'],
      },
    ],
  },
  {
    id: 'conversational',
    title: 'Conversational AI',
    count: 56,
    topics: [
      {
        title: 'Azure Bot Service',
        count: 14,
        bullets: [
          'Hosts chatbots and connects them to channels like Teams and web.',
          'Handles dialog flows and user interactions.',
          'Often integrates with QnA Maker or LUIS for intelligence.',
        ],
        chips: ['Bot Framework', 'Channels', 'Dialogs'],
      },
      {
        title: 'QnA Maker',
        count: 14,
        bullets: [
          'Builds FAQ-style knowledge bases from documents and URLs.',
          'Supports active learning and markup-based answers.',
          'Good for static answer retrieval rather than intent-based dialogs.',
        ],
        chips: ['Knowledge base', 'FAQ', 'Active learning'],
      },
      {
        title: 'Language Understanding (LUIS)',
        count: 14,
        bullets: [
          'Recognizes user intents and extracts entities from utterances.',
          'Includes None intent for out-of-scope or unknown queries.',
          'Use it for conversational flows that require more than simple Q&A.',
        ],
        chips: ['Intent', 'Entities', 'Utterances'],
      },
      {
        title: 'Knowledge mining and integration',
        count: 14,
        bullets: [
          'Combine search with knowledge bases to answer questions from documents.',
          'Integrate QnA Maker with bots for richer experiences.',
          'Choose the right service mix for the scenario.',
        ],
        chips: ['Search', 'Integration', 'Knowledge'],
      },
    ],
  },
  {
    id: 'responsible',
    title: 'Responsible AI',
    count: 30,
    topics: [
      {
        title: 'Fairness and bias',
        count: 10,
        bullets: [
          'Check model outputs for bias across groups.',
          'Choose data and metrics to avoid unfair results.',
          'Azure offers tools for bias mitigation in AI models.',
        ],
        chips: ['Fairness', 'Bias', 'Evaluation'],
      },
      {
        title: 'Privacy and security',
        count: 8,
        bullets: [
          'Protect user data with encryption and access controls.',
          'Use privacy-preserving features in AI services.',
          'Ensure sensitive content is handled appropriately.',
        ],
        chips: ['Privacy', 'Security', 'Data protection'],
      },
      {
        title: 'Transparency and accountability',
        count: 6,
        bullets: [
          'Explain how AI decisions are made when possible.',
          'Track responsibility for model outcomes and user feedback.',
          'Communicate AI limitations clearly.',
        ],
        chips: ['Transparency', 'Accountability', 'Governance'],
      },
      {
        title: 'Reliability and safety',
        count: 6,
        bullets: [
          'Design systems to behave safely under expected conditions.',
          'Use guardrails and testing to reduce unwanted outcomes.',
          'Review AI performance before release.',
        ],
        chips: ['Reliability', 'Safety', 'Testing'],
      },
    ],
  },
];

const domainStyles = {
  workloads: 'from-sky-500 to-sky-300',
  vision: 'from-orange-500 to-orange-300',
  language: 'from-violet-500 to-violet-300',
  conversational: 'from-amber-500 to-amber-300',
  responsible: 'from-slate-500 to-slate-300',
};

export default function Summary() {
  const [openDomain, setOpenDomain] = useState('workloads');

  return (
    <section className="space-y-10 pb-10">
      <div className="card-base">
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Study guide
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">AI-900 domain summary</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Use this study guide to review the most frequently tested domains, identify high-value topics, and watch out for common exam traps.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {domains.map((domain) => (
            <div key={domain.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{domain.title}</p>
                  <p className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">{domain.count}</p>
                </div>
                <div className={`h-12 w-12 rounded-3xl bg-gradient-to-br ${domainStyles[domain.id]} shadow-sm`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Domain key topics</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Expand each domain to review its most important subtopics and exam warnings.
            </p>
          </div>
          <Link
            to="/responsible-ai"
            className="inline-flex items-center rounded-3xl border border-slate-200 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:border-slate-800 dark:bg-slate-100 dark:text-slate-950"
          >
            Responsible AI deep dive
          </Link>
        </div>

        <div className="space-y-4">
          {domains.map((domain) => {
            const isOpen = openDomain === domain.id;
            return (
              <div key={domain.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <button
                  type="button"
                  onClick={() => setOpenDomain(isOpen ? '' : domain.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{domain.title}</p>
                    <p className="mt-2 text-xl font-bold text-slate-950 dark:text-white">{domain.count} questions</p>
                  </div>
                  <div className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                    {isOpen ? 'Collapse' : 'Expand'}
                  </div>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-200 bg-slate-50 px-6 py-5 dark:border-slate-800 dark:bg-slate-900">
                    <div className="grid gap-4 lg:grid-cols-2">
                      {domain.topics.map((topic) => (
                        <div key={topic.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <h4 className="text-lg font-semibold text-slate-950 dark:text-white">{topic.title}</h4>
                              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Approx. {topic.count} questions</p>
                            </div>
                            {topic.warning && (
                              <div className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700 dark:bg-rose-900/20 dark:text-rose-200">
                                Warning
                              </div>
                            )}
                          </div>
                          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                            {topic.bullets.map((bullet) => (
                              <li key={bullet} className="flex items-start gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {topic.chips.map((chip) => (
                              <span key={chip} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                                {chip}
                              </span>
                            ))}
                          </div>
                          {topic.warning && (
                            <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900 dark:border-rose-900 dark:bg-rose-900/20 dark:text-rose-100">
                              {topic.warning}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
