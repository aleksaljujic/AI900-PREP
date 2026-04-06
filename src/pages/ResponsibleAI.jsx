export default function ResponsibleAI() {
  const principles = [
    {
      title: 'Fairness',
      description: 'AI systems must treat all people equally, without discrimination based on protected characteristics.',
      examples: [
        'Loan approval system that approves more applications from men than women, even when financial data is identical — a fairness violation caused by biased training data.',
        'A hiring algorithm trained on historical data that favors certain ethnicities because past employees shared those traits.',
        'A facial recognition system that performs worse on darker skin tones because training data was not representative.',
      ],
      triggers: ['bias', 'discrimination', 'gender', 'race', 'equal treatment', 'representative dataset'],
    },
    {
      title: 'Reliability & Safety',
      description: 'AI systems must perform consistently and safely, including under unexpected or unusual conditions.',
      examples: [
        'A self-driving car AI that behaves unpredictably when it encounters fog or unusual road markings.',
        'A medical diagnosis model that returns a confident but wrong prediction when key fields like patient age or weight are missing.',
        'An industrial AI that continues operating machinery even when sensor readings are clearly abnormal.',
      ],
      triggers: ['unusual values', 'missing data', 'unexpected conditions', 'consistent operation', 'self-driving', 'safety-critical'],
    },
    {
      title: 'Privacy & Security',
      description: 'AI systems must protect personal and sensitive data, and data must only be collected and used with proper consent.',
      examples: [
        'An NLP model trained on private customer emails that were scraped without permission.',
        'A healthcare AI that exposes patient records to staff who are not involved in that patient\'s care.',
        'A recommendation system that stores and shares user behavior data without informing users.',
      ],
      triggers: ['personal data', 'consent', 'collected without permission', 'visible only to authorized staff', 'data storage'],
    },
    {
      title: 'Inclusiveness',
      description: 'AI systems must be designed so that no group of people is unintentionally excluded, including people with disabilities.',
      examples: [
        'A voice assistant that only recognizes standard accents, leaving out non-native speakers or people with speech impediments.',
        'A smart home device that has no screen reader support, making it unusable for visually impaired users.',
        'An AI hiring tool with a video interview component that disadvantages deaf candidates because it relies entirely on verbal responses.',
      ],
      triggers: ['screen readers', 'disabilities', 'hearing impairment', 'visual impairment', 'accessible to everyone', 'unintentionally excluded'],
    },
    {
      title: 'Transparency',
      description: 'AI systems must be explainable — users and stakeholders should be able to understand how and why decisions are made.',
      examples: [
        'A bank\'s loan rejection AI that gives no explanation to the customer.',
        'Enabling "Explain best model" in Azure Automated ML so that the model\'s decision logic is recorded and reviewable.',
        'Providing documentation to help developers understand why the model behaves a certain way in edge cases.',
      ],
      triggers: ['explain decision', 'explainability', 'documentation', 'why was this rejected', 'Explain best model', 'decision-making recorded'],
    },
    {
      title: 'Accountability',
      description: 'There must be human oversight over AI systems, with clear processes for reviewing and overriding AI decisions.',
      examples: [
        'A credit scoring system where no human can override an AI decision — accountability requires that approved staff can intervene.',
        'Establishing a risk governance committee with legal, risk management, and privacy officers to oversee AI deployment.',
        'Logging all automated decisions so that a responsible team can audit why a particular outcome was produced.',
      ],
      triggers: ['override', 'human oversight', 'governance committee', 'audit trail', 'responsible team', 'humans can intervene'],
    },
  ];

  return (
    <section className="space-y-10 pb-10">
      <div className="card-base">
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Responsible AI
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Responsible AI — 6 Principles with Examples</h2>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
          Review each principle with example exam scenarios and the key trigger words to recognize on test questions.
        </p>
      </div>

      <div className="space-y-6">
        {principles.map((principle) => (
          <div key={principle.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{principle.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{principle.description}</p>
              </div>
              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                Key principle
              </span>
            </div>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Examples</p>
                <ul className="mt-3 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  {principle.examples.map((example) => (
                    <li key={example} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Key trigger words</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {principle.triggers.map((trigger) => (
                    <span key={trigger} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
                      {trigger}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Quick cheat sheet for the exam</h3>
        <div className="mt-4 space-y-4 text-sm text-slate-700 dark:text-slate-300">
          <p>When you see a scenario, ask yourself:</p>
          <ul className="space-y-2">
            <li>• Is it about equal treatment / bias? → Fairness</li>
            <li>• Is it about system behavior under bad data or extreme conditions? → Reliability &amp; Safety</li>
            <li>• Is it about protecting personal data / consent? → Privacy &amp; Security</li>
            <li>• Is it about making sure no group is left out? → Inclusiveness</li>
            <li>• Is it about explaining decisions / documentation? → Transparency</li>
            <li>• Is it about humans overseeing or overriding AI? → Accountability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
