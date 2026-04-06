// AI-900 Exam Questions - Auto-generated from questions.json
// Total: 246 questions

const questions = [
  {
    "id": 1,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set to e.g. 'q1.png' or URL if this question needs an image",
    "question": "Which business benefit should the company expect as a result of creating the webchat bot solution?",
    "choices": {
      "A": "increased sales",
      "B": "a reduced workload for the customer service agents",
      "C": "improved product reliability"
    },
    "answer": "B"
  },
  {
    "id": 2,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set to e.g. 'q1.png' or URL if this question needs an image",
    "question": "For a machine learning progress, how should you split data for training and evaluation?",
    "choices": {
      "A": "Use features for training and labels for evaluation.",
      "B": "Randomly split the data into rows for training and rows for evaluation.",
      "C": "Use labels for training and features for evaluation.",
      "D": "Randomly split the data into columns for training and columns for evaluation."
    },
    "answer": "B"
  },
  {
    "id": 3,
    "type": "hotspot_dropdown",
    "img": "/imgs/q3.png",
    "_img_comment": "placeholder; likely required (confusion matrix graphic)",
    "prompt": "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
    "items": [
      {
        "text": "There are [answer choice] correctly predicted positives.",
        "options": [
          "4",
          "5",
          "11",
          "1,033",
          "13,951"
        ],
        "answer": "11"
      },
      {
        "text": "There are [answer choice] false negatives.",
        "options": [
          "5",
          "11",
          "1,033",
          "13,951"
        ],
        "answer": "1,033"
      }
    ]
  },
  {
    "id": 4,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set to e.g. 'q3.png' or URL if this question needs an image",
    "question": "You need to ensure that the model meets the Microsoft transparency principle for responsible AI. What should you do?",
    "choices": {
      "A": "Set Validation type to Auto.",
      "B": "Enable Explain best model.",
      "C": "Set Primary metric to accuracy.",
      "D": "Set Max concurrent iterations to O."
    },
    "answer": "B"
  },
  {
    "id": 5,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Forecasting housing prices based on historical data is an example of anomaly detection.",
        "answer": "No"
      },
      {
        "text": "Identifying suspicious sign-ins by looking for deviations from usual patterns is an example of anomaly detection.",
        "answer": "Yes"
      },
      {
        "text": "Predicting whether a patient will develop diabetes based on the patient's medical history is an example of anomaly detection.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 6,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "The handling of unusual or missing values provided to an AI system is a consideration for the Microsoft principle for responsible AI.",
    "options": [
      "inclusiveness",
      "privacy and security",
      "reliability and safety",
      "transparency"
    ],
    "answer": "reliability and safety"
  },
  {
    "id": 7,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the types of AI workloads to the appropriate scenarios.",
    "choices_pool": [
      "Anomaly detection",
      "Computer vision",
      "Conversational AI",
      "Knowledge mining",
      "Natural language processing"
    ],
    "targets": [
      {
        "text": "An automated chat to answer questions about refunds and exchange",
        "answer": "Conversational AI"
      },
      {
        "text": "Determining whether a photo contains a person",
        "answer": "Computer vision"
      },
      {
        "text": "Determining whether a review is positive or negative",
        "answer": "Natural language processing"
      }
    ]
  },
  {
    "id": 8,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set to e.g. 'q7.png' or URL if this question needs an image",
    "question": "You are designing an AI system that empowers everyone, including people who have hearing, visual, and other impairments. This is an example of which Microsoft guiding principle for responsible AI?",
    "choices": {
      "A": "fairness",
      "B": "inclusiveness",
      "C": "reliability and safety",
      "D": "accountability"
    },
    "answer": "B"
  },
  {
    "id": 9,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the Microsoft guiding principles of responsible AI to the appropriate descriptions.",
    "choices_pool": [
      "Accountability",
      "Fairness",
      "Inclusiveness",
      "Privacy and security",
      "Reliability and safety"
    ],
    "targets": [
      {
        "text": "Ensure that AI systems operate as they were originally designed, respond to unanticipated conditions, and resist harmful manipulation.",
        "answer": "Reliability and safety"
      },
      {
        "text": "Implementing processes to ensure that decisions made by AI systems can be overridden by humans.",
        "answer": "Accountability"
      },
      {
        "text": "Provide consumers with information and controls over the collection, use, and storage of their data.",
        "answer": "Privacy and security"
      }
    ]
  },
  {
    "id": 10,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "When developing an AI system for self-driving cars, the Microsoft principle for responsible AI should be applied to ensure consistent operation of the system during unexpected circumstances.",
    "options": [
      "inclusiveness",
      "accountability",
      "reliability and safety",
      "fairness"
    ],
    "answer": "reliability and safety"
  },
  {
    "id": 11,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set to e.g. 'q10.png' or URL if this question needs an image",
    "question": "Which task should you include to ensure that the service meets the Microsoft transparency principle for responsible AI?",
    "choices": {
      "A": "Ensure that all visuals have an associated text that can be read by a screen reader.",
      "B": "Enable autoscaling to ensure that a service scales based on demand.",
      "C": "Provide documentation to help developers debug code.",
      "D": "Ensure that a training dataset is representative of the population."
    },
    "answer": "C"
  },
  {
    "id": 12,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the types of AI workloads to the appropriate scenarios.",
    "choices_pool": [
      "Anomaly detection",
      "Computer vision",
      "Machine Learning (Regression)",
      "Natural language processing"
    ],
    "targets": [
      {
        "text": "Identify handwritten letters.",
        "answer": "Computer vision"
      },
      {
        "text": "Predict the sentiment of a social media post.",
        "answer": "Natural language processing"
      },
      {
        "text": "Identify a fraudulent credit card payment.",
        "answer": "Anomaly detection"
      },
      {
        "text": "Predict next month's toy sales.",
        "answer": "Machine Learning (Regression)"
      }
    ]
  },
  {
    "id": 13,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "[BLANK] is used to extract dates, quantities, and locations from text.",
    "options": [
      "Key phrase extraction",
      "Language detection",
      "Named Entity Recognition (NER)",
      "Sentiment Analysis"
    ],
    "answer": "Named Entity Recognition (NER)"
  },
  {
    "id": 14,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "What are three Microsoft guiding principles for responsible AI? Each correct answer presents a complete solution.",
    "choices": {
      "A": "knowledgeability",
      "B": "decisiveness",
      "C": "inclusiveness",
      "D": "fairness",
      "E": "opinionatedness",
      "F": "reliability and safety"
    },
    "answer": [
      "C",
      "D",
      "F"
    ]
  },
  {
    "id": 15,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Returning a bounding box that indicates the location of a vehicle in an image is an example of [BLANK].",
    "options": [
      "image classification.",
      "object detection.",
      "optical character recognizer (OCR).",
      "semantic segmentation."
    ],
    "answer": "object detection."
  },
  {
    "id": 16,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "[BLANK] is used to generate additional features.",
    "options": [
      "Feature engineering",
      "Feature selection",
      "Model evaluation",
      "Model training"
    ],
    "answer": "Feature engineering"
  },
  {
    "id": 17,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You run a charity event that involves posting photos of people wearing sunglasses on Twitter. You need to ensure that you only retweet photos that meet the following requirements: Include one or more faces. Contain at least one person wearing sunglasses. What should you use to analyze the images?",
    "choices": {
      "A": "the Verify operation in the Face service",
      "B": "the Detect operation in the Face service",
      "C": "the Describe Image operation in the Computer Vision service",
      "D": "the Analyze Image operation in the Computer Vision service"
    },
    "answer": "B"
  },
  {
    "id": 18,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "When you design an AI system to assess whether loans should be approved, the factors used to make the decision should be explainable. This is an example of which Microsoft guiding principle for responsible AI?",
    "choices": {
      "A": "transparency",
      "B": "inclusiveness",
      "C": "fairness",
      "D": "privacy and security"
    },
    "answer": "A"
  },
  {
    "id": 19,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Providing an explanation of the outcome of a credit loan application is an example of the Microsoft transparency principle for responsible AI.",
        "answer": "Yes"
      },
      {
        "text": "A triage bot that prioritizes insurance claims based on injuries is an example of the Microsoft reliability and safety principle for responsible AI.",
        "answer": "Yes"
      },
      {
        "text": "An AI solution that is offered at different prices for different sales territories is an example of the Microsoft inclusiveness principle for responsible AI.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 20,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the principles of responsible AI to appropriate requirements.",
    "choices_pool": [
      "Fairness",
      "Privacy and security",
      "Reliability and safety",
      "Transparency"
    ],
    "targets": [
      {
        "text": "The system must not discriminate based on gender, race",
        "answer": "Fairness"
      },
      {
        "text": "Personal data must be visible only to approve",
        "answer": "Privacy and security"
      },
      {
        "text": "Automated decision-making processes must be recorded so that approved users can identify why a decision was made",
        "answer": "Transparency"
      }
    ]
  },
  {
    "id": 21,
    "type": "drag_and_drop_order",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop ordering UI)",
    "prompt": "Which three processes should you perform in sequence before you deploy the model? Arrange them in the correct order.",
    "choices_pool": [
      "data encryption",
      "model retraining",
      "model training",
      "data preparation",
      "model evaluation",
      "nothing"
    ],
    "answer_order": [
      "data preparation",
      "model training",
      "model evaluation",
      "nothing"
    ]
  },
  {
    "id": 22,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are building an AI-based app. You need to ensure that the app uses the principles for responsible AI. Which two principles should you follow? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Implement an Agile software development methodology",
      "B": "Implement a process of AI model validation as part of the software review process",
      "C": "Establish a risk governance committee that includes members of the legal team, members of the risk management team, and a privacy officer",
      "D": "Prevent the disclosure of the use of AI-based algorithms for automated decision making"
    },
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": 23,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "According to Microsoft's principle of responsible AI, AI systems should NOT reflect biases from the data sets that are used to train the systems.",
    "options": [
      "accountability",
      "fairness",
      "inclusiveness",
      "transparency"
    ],
    "answer": "fairness"
  },
  {
    "id": 24,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "According to Microsoft's principle of responsible AI, AI systems should NOT reflect biases from the data sets that are used to train the systems.",
    "options": [
      "accountability",
      "fairness",
      "inclusiveness",
      "transparency"
    ],
    "answer": "fairness"
  },
  {
    "id": 25,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the types of AI workloads to the appropriate scenarios.",
    "choices_pool": [
      "Anomaly detection",
      "Computer vision",
      "Knowledge mining",
      "Natural language processing"
    ],
    "targets": [
      {
        "text": "An automated chatbot to answer questions about refunds and exchanges",
        "answer": "Knowledge mining"
      },
      {
        "text": "Determining whether a photo contains a person",
        "answer": "Computer vision"
      },
      {
        "text": "Determining whether a review is positive or negative",
        "answer": "Natural language processing"
      }
    ]
  },
  {
    "id": 26,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the machine learning tasks to the appropriate scenarios.",
    "choices_pool": [
      "Feature engineering",
      "Feature selection",
      "Model deployment",
      "Model evaluation",
      "Model training"
    ],
    "targets": [
      {
        "text": "Examining the values of a confusion matrix",
        "answer": "Model evaluation"
      },
      {
        "text": "Splitting a date into month, day, and year fields",
        "answer": "Feature engineering"
      },
      {
        "text": "Picking temperature and pressure to train a weather model",
        "answer": "Feature selection"
      }
    ]
  },
  {
    "id": 27,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Data values that influence the prediction of a model are called [BLANK].",
    "options": [
      "dependant variables.",
      "features.",
      "identifiers.",
      "labels."
    ],
    "answer": "features."
  },
  {
    "id": 28,
    "type": "multiple_choice",
    "img": "/imgs/q28.png",
    "_img_comment": "placeholder; likely required (chart/graphic)",
    "question": "Which type of model is the chart used to evaluate?",
    "choices": {
      "A": "classification",
      "B": "regression",
      "C": "clustering"
    },
    "answer": "B"
  },
  {
    "id": 29,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which type of machine learning should you use to predict the number of gift cards that will be sold next month?",
    "choices": {
      "A": "classification",
      "B": "regression",
      "C": "clustering"
    },
    "answer": "B"
  },
  {
    "id": 30,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have a dataset that contains information about taxi journeys that occurred during a given period. You need to train a model to predict the fare of a taxi journey. What should you use as a feature?",
    "choices": {
      "A": "the number of taxi journeys in the dataset",
      "B": "the trip distance of individual taxi journeys",
      "C": "the fare of individual taxi journeys",
      "D": "the trip ID of individual taxi journeys"
    },
    "answer": "B"
  },
  {
    "id": 31,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to predict the sea level in meters for the next 10 years. Which type of machine learning should you use?",
    "choices": {
      "A": "classification",
      "B": "regression",
      "C": "clustering"
    },
    "answer": "B"
  },
  {
    "id": 32,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Automated machine learning is the process of automating the time-consuming, iterative tasks of machine learning model development.",
        "answer": "Yes"
      },
      {
        "text": "Automated machine learning can automatically infer the training data from the use case provided.",
        "answer": "No"
      },
      {
        "text": "Automated machine learning works by running multiple training iterations that are scored and ranked by the metrics you specify.",
        "answer": "Yes"
      },
      {
        "text": "Automated machine learning enables you to specify a dataset and will automatically understand which label to predict.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 33,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "A banking system that predicts whether a loan will be repaid is an example of the [BLANK] type of machine learning.",
    "options": [
      "classification",
      "regression",
      "clustering"
    ],
    "answer": "classification"
  },
  {
    "id": 34,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Labelling is the process of tagging training data with known values.",
        "answer": "Yes"
      },
      {
        "text": "You should evaluate a model by using the same data used to train the model.",
        "answer": "No"
      },
      {
        "text": "Accuracy is always the primary metric used to measure a model's performance.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 35,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which service should you use to extract text, key/value pairs, and table data automatically from scanned documents?",
    "choices": {
      "A": "Form Recognizer",
      "B": "Text Analytics",
      "C": "Language Understanding",
      "D": "Custom Vision"
    },
    "answer": "A"
  },
  {
    "id": 36,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "The ability to extract subtotals and totals from a receipt is a capability of the [BLANK] service.",
    "options": [
      "Custom Vision",
      "Form Recognizer",
      "Ink Recognizer",
      "Text Analytics"
    ],
    "answer": "Form Recognizer"
  },
  {
    "id": 37,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You use Azure Machine Learning designer to publish an inference pipeline. Which two parameters should you use to access the web service? Each correct answer presents part of the solution.",
    "choices": {
      "A": "the model name",
      "B": "the training endpoint",
      "C": "the authentication key",
      "D": "the REST endpoint"
    },
    "answer": [
      "C",
      "D"
    ]
  },
  {
    "id": 38,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "From Azure Machine Learning designer, to deploy a real-time inference pipeline as a service for others to consume, you must deploy the model to [BLANK].",
    "options": [
      "a local web service.",
      "Azure Container Instances.",
      "Azure Kubernetes Service (AKS).",
      "Azure Machine Learning compute."
    ],
    "answer": "Azure Container Instances."
  },
  {
    "id": 39,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Predicting how many hours of overtime a delivery person will work based on the number of orders received is an example of [BLANK].",
    "options": [
      "classification.",
      "clustering.",
      "regression."
    ],
    "answer": "regression."
  },
  {
    "id": 40,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Azure Machine Learning designer provides a drag-and-drop visual canvas to build, test, and deploy machine learning models.",
        "answer": "Yes"
      },
      {
        "text": "Azure Machine Learning designer enables you to save your progress as a pipeline draft.",
        "answer": "Yes"
      },
      {
        "text": "Azure Machine Learning designer enables you to include custom JavaScript functions.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 41,
    "type": "hotspot_dropdown",
    "img": "/imgs/q41.png",
    "_img_comment": "placeholder; likely required (dataset table shown)",
    "prompt": "You have the following dataset. What are Household Income and House Price Category? To answer, select the appropriate option in the answer area.",
    "items": [
      {
        "text": "Household Income:",
        "options": [
          "A feature",
          "A label"
        ],
        "answer": "A feature"
      },
      {
        "text": "House Price Category:",
        "options": [
          "A feature",
          "A label"
        ],
        "answer": "A label"
      }
    ]
  },
  {
    "id": 42,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Azure Machine Learning designer lets you create machine learning models by [BLANK].",
    "options": [
      "adding and connecting modules on a visual canvas.",
      "automatically performing common data preparation tasks.",
      "automatically selecting an algorithm to build the most accurate model.",
      "using a code-first notebook experience."
    ],
    "answer": "adding and connecting modules on a visual canvas."
  },
  {
    "id": 43,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Automated machine learning provides you with the ability to include custom Python scripts in a training pipeline.",
        "answer": "Yes"
      },
      {
        "text": "Automated machine learning implements machine learning solutions without the need for programming experience.",
        "answer": "No"
      },
      {
        "text": "Automated machine learning provides you with the ability to visually connect datasets and modules on an interactive canvas.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 44,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "A medical research project uses a large anonymized dataset of brain scan images that are categorized into predefined brain haemorrhage types. You need to use machine learning to support early detection of the different brain haemorrhage types in the images before the images are reviewed by a person. This is an example of which type of machine learning?",
    "choices": {
      "A": "clustering",
      "B": "regression",
      "C": "classification"
    },
    "answer": "C"
  },
  {
    "id": 45,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "When training a model, why should you randomly split the rows into separate subsets?",
    "choices": {
      "A": "to train the model twice to attain better accuracy",
      "B": "to train multiple models simultaneously to attain better performance",
      "C": "to test the model by using data that was not used to train the model"
    },
    "answer": "C"
  },
  {
    "id": 46,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are evaluating whether to use a basic workspace or an enterprise workspace in Azure Machine Learning. What are two tasks that require an enterprise workspace? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Use a graphical user interface (GUI) to run automated machine learning experiments.",
      "B": "Create a compute instance to use as a workstation.",
      "C": "Use a graphical user interface (GUI) to define and run machine learning experiments from Azure Machine Learning designer.",
      "D": "Create a dataset from a comma-separated value (CSV) file."
    },
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": 47,
    "type": "multiple_choice_multi_select",
    "img": "/imgs/q47.png",
    "_img_comment": "placeholder; likely required (dataset table shown)",
    "question": "You need to predict the income range of a given customer by using the following dataset. Which two fields should you use as features? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Education Level",
      "B": "Last Name",
      "C": "Age",
      "D": "Income Range",
      "E": "First Name"
    },
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": 48,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are building a tool that will process images from retail stores and identify the products of competitors. The solution will use a custom model. Which Azure Cognitive Services service should you use?",
    "choices": {
      "A": "Custom Vision",
      "B": "Form Recognizer",
      "C": "Face",
      "D": "Computer Vision"
    },
    "answer": "A"
  },
  {
    "id": 49,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Organizing documents into groups based on similarities of the text contained in the documents is an example of clustering.",
        "answer": "Yes"
      },
      {
        "text": "Grouping similar patients based on symptoms and diagnostic test results is an example of clustering.",
        "answer": "Yes"
      },
      {
        "text": "Predicting whether a person will develop mild, moderate, or severe allergy symptoms based on pollen count is an example of clustering.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 50,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A validation set includes the set of input examples that will be used to train a model.",
        "answer": "No"
      },
      {
        "text": "A validation set can be used to determine how well a model predicts labels.",
        "answer": "Yes"
      },
      {
        "text": "A validation set can be used to verify that all the training data was used to train the model.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 51,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "What are two metrics that you can use to evaluate a regression model? Each correct answer presents a complete solution.",
    "choices": {
      "A": "coefficient of determination (R2)",
      "B": "F1 score",
      "C": "root mean squared error (RMSE)",
      "D": "area under curve (AUC)",
      "E": "balanced accuracy"
    },
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": 52,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Predicting how many vehicles will travel across a bridge on a given day is an example of [BLANK].",
    "options": [
      "classification.",
      "clustering.",
      "regression."
    ],
    "answer": "regression."
  },
  {
    "id": 53,
    "type": "drag_and_drop",
    "img": "/imgs/q53.png",
    "_img_comment": "placeholder; likely required (designer canvas shown)",
    "prompt": "You need to use Azure Machine Learning designer to build a model that will predict automobile prices. Which type of modules should you use to complete the model?",
    "choices_pool": [
      "Convert to CSV",
      "K-Means Clustering",
      "Linear Regression",
      "Split Data",
      "Clean Missing Data",
      "Select Columns in Dataset",
      "Remove missing value rows",
      "Summarize Data",
      "Train Model",
      "Score Model"
    ],
    "targets": [
      {
        "text": "Box 1.",
        "answer": "Select Columns in Dataset"
      },
      {
        "text": "Box 2.",
        "answer": "Split Data"
      },
      {
        "text": "Box 3.",
        "answer": "Linear Regression"
      }
    ]
  },
  {
    "id": 54,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which type of machine learning should you use to identify groups of people who have similar purchasing habits?",
    "choices": {
      "A": "classification",
      "B": "regression",
      "C": "clustering"
    },
    "answer": "C"
  },
  {
    "id": 55,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "[BLANK] models can be used to predict the sale price of auctioned items.",
    "options": [
      "Classification",
      "Clustering",
      "Regression"
    ],
    "answer": "Regression"
  },
  {
    "id": 56,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which metric can you use to evaluate a classification model?",
    "choices": {
      "A": "true positive rate",
      "B": "mean absolute error (MAE)",
      "C": "coefficient of determination (R2)",
      "D": "root mean squared error (RMSE)"
    },
    "answer": "A"
  },
  {
    "id": 57,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which two components can you drag onto a canvas in Azure Machine Learning designer? Each correct answer presents a complete solution.",
    "choices": {
      "A": "dataset",
      "B": "compute",
      "C": "pipeline",
      "D": "module"
    },
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "id": 58,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to create a training dataset and validation dataset from an existing dataset. Which module in the Azure Machine Learning designer should you use?",
    "choices": {
      "A": "Select Columns in Dataset",
      "B": "Add Rows",
      "C": "Split Data",
      "D": "Join Data"
    },
    "answer": "C"
  },
  {
    "id": 60,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the types of machine learning to the appropriate scenarios.",
    "choices_pool": [
      "Classification",
      "Clustering",
      "Regression"
    ],
    "targets": [
      {
        "text": "Predict how many minutes late a flight will arrive based on the amount of snowfall at an airport.",
        "answer": "Regression"
      },
      {
        "text": "Segment customers into different groups to support a marketing department.",
        "answer": "Clustering"
      },
      {
        "text": "Predict whether a student will complete a university course.",
        "answer": "Classification"
      }
    ]
  },
  {
    "id": 60,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "[BLANK] is the calculated probability of a correct image classification.",
    "options": [
      "Accuracy",
      "Confidence",
      "Root Mean Square Error",
      "Sentiment"
    ],
    "answer": "Confidence"
  },
  {
    "id": 61,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Ensuring an AI system does not provide a prediction when important fields contain unusual or missing values is a [BLANK] principle for responsible AI.",
    "options": [
      "an inclusiveness",
      "a privacy and security",
      "a reliability and safety",
      "a transparency"
    ],
    "answer": "a reliability and safety"
  },
  {
    "id": 62,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Ensuring that the numeric variables in training data are on a similar scale is an example of [BLANK].",
    "options": [
      "data ingestion.",
      "feature engineering.",
      "feature selection.",
      "model training."
    ],
    "answer": "feature engineering."
  },
  {
    "id": 63,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Assigning classes to images before training a classification model is an example of [BLANK].",
    "options": [
      "evaluation.",
      "feature engineering",
      "hyperparameter tuning.",
      "labeling."
    ],
    "answer": "labeling."
  },
  {
    "id": 64,
    "type": "hotspot_yes_no",
    "img": "/imgs/q64.png",
    "_img_comment": "placeholder; likely required (dataset/table shown)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Mass (kg) is a feature.",
        "answer": "Yes"
      },
      {
        "text": "Quality Test is a label.",
        "answer": "Yes"
      },
      {
        "text": "Temperature (C) is a label.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 65,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "You train a regression model by using unlabeled data.",
        "answer": "No"
      },
      {
        "text": "The classification technique is used to predict sequential numerical data over time.",
        "answer": "No"
      },
      {
        "text": "Grouping items by their common characteristics is an example of clustering.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 66,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which two actions are performed during the data ingestion and data preparation stage of an Azure Machine Learning process? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Calculate the accuracy of the model.",
      "B": "Score test data by using the model.",
      "C": "Combine multiple datasets.",
      "D": "Use the model for real-time predictions.",
      "E": "Remove records that have missing values."
    },
    "answer": [
      "C",
      "E"
    ]
  },
  {
    "id": 67,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to predict the animal population of an area. Which Azure Machine Learning type should you use?",
    "choices": {
      "A": "regression",
      "B": "clustering",
      "C": "classification"
    },
    "answer": "A"
  },
  {
    "id": 68,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which two languages can you use to write custom code for Azure Machine Learning designer? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Python",
      "B": "R",
      "C": "C#",
      "D": "Scala"
    },
    "answer": [
      "A",
      "B"
    ]
  },
  {
    "id": 70,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "For a regression model, labels must be numeric.",
        "answer": "Yes"
      },
      {
        "text": "For a clustering model, labels must be used.",
        "answer": "No"
      },
      {
        "text": "For a classification model, labels must be numeric.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 70,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Your company wants to build a recycling machine for bottles. The recycling machine must automatically identify bottles of the correct shape and reject all other items. Which type of AI workload should the company use?",
    "choices": {
      "A": "anomaly detection",
      "B": "conversational AI",
      "C": "computer vision",
      "D": "natural language processing"
    },
    "answer": "C"
  },
  {
    "id": 71,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "When creating an object detection model in the Custom Vision service, you must choose a classification type of either Multilabel or Multiclass.",
        "answer": "No"
      },
      {
        "text": "You can create an object detection model in the Custom Vision service to find the location of content within an image.",
        "answer": "Yes"
      },
      {
        "text": "When creating an object detection model in the Custom Vision service, you can select from a set of predefined domains.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 72,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "In which two scenarios can you use the Form Recognizer service? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Extract the invoice number from an invoice.",
      "B": "Translate a form from French to English.",
      "C": "Find image of product in a catalog.",
      "D": "Identify the retailer from a receipt."
    },
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "id": 73,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "Counting the number of animals in an area based on a video feed is an example of [BLANK].",
    "options": [
      "forecasting.",
      "computer vision.",
      "conversational AI.",
      "anomaly detection."
    ],
    "answer": "computer vision."
  },
  {
    "id": 74,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The Face service can be used to perform facial recognition for employees.",
        "answer": "Yes"
      },
      {
        "text": "The Face service will be more accurate if you provide more sample photos of each employee from different angles.",
        "answer": "Yes"
      },
      {
        "text": "If an employee is wearing sunglasses, the Face service will always fail to recognize the employee.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 75,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to develop a mobile app for employees to scan and store their expenses while travelling. Which type of computer vision should you use?",
    "choices": {
      "A": "semantic segmentation",
      "B": "image classification",
      "C": "object detection",
      "D": "optical character recognition (OCR)"
    },
    "answer": "D"
  },
  {
    "id": 76,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The Custom Vision service can be used to detect objects in an image.",
        "answer": "Yes"
      },
      {
        "text": "The Custom Vision service requires that you provide your own data to train the model.",
        "answer": "Yes"
      },
      {
        "text": "The Custom Vision service can be used to analyze video files.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 77,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are processing photos of runners in a race. You need to read the numbers on the runners' shirts to identify the runners in the photos. Which type of computer vision should you use?",
    "choices": {
      "A": "facial recognition",
      "B": "optical character recognition (OCR)",
      "C": "image classification",
      "D": "object detection"
    },
    "answer": "B"
  },
  {
    "id": 78,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the types of machine learning to the appropriate scenarios.",
    "choices_pool": [
      "Facial detection",
      "Facial recognition",
      "Image classification",
      "Object detection",
      "Optical character recognition (OCR)",
      "Semantic segmentation"
    ],
    "targets": [
      {
        "text": "Separate images of polar bears and brown bears.",
        "answer": "Image classification"
      },
      {
        "text": "Determine the location of a bear in a photo.",
        "answer": "Object detection"
      },
      {
        "text": "Determine which pixels in an image are part of a bear.",
        "answer": "Semantic segmentation"
      }
    ]
  },
  {
    "id": 79,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; likely required (drone imagery context)",
    "question": "You use drones to identify where weeds grow between rows of crops to send an instruction for the removal of the weeds. This is an example of which type of computer vision?",
    "choices": {
      "A": "object detection",
      "B": "optical character recognition (OCR)",
      "C": "scene segmentation"
    },
    "answer": "A"
  },
  {
    "id": 80,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the facial recognition tasks to the appropriate questions.",
    "choices_pool": [
      "grouping",
      "identification",
      "similarity",
      "verification"
    ],
    "targets": [
      {
        "text": "Do two images of a face belong to the same person?",
        "answer": "verification"
      },
      {
        "text": "Does this person look like other people?",
        "answer": "similarity"
      },
      {
        "text": "Do all the faces belong together?",
        "answer": "grouping"
      },
      {
        "text": "Who is this person in this group of people?",
        "answer": "identification"
      }
    ]
  },
  {
    "id": 81,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the types of computer vision workloads to the appropriate scenarios.",
    "choices_pool": [
      "Facial recognition",
      "Image classification",
      "Object detection",
      "Optical character recognition (OCR)"
    ],
    "targets": [
      {
        "text": "Identify celebrities in images.",
        "answer": "Facial recognition"
      },
      {
        "text": "Extract movie title names from movie poster images.",
        "answer": "Optical character recognition (OCR)"
      },
      {
        "text": "Locate vehicles in images.",
        "answer": "Object detection"
      }
    ]
  },
  {
    "id": 82,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to determine the location of cars in an image so that you can estimate the distance between the cars. Which type of computer vision should you use?",
    "choices": {
      "A": "optical character recognition (OCR)",
      "B": "object detection",
      "C": "image classification",
      "D": "face detection"
    },
    "answer": "B"
  },
  {
    "id": 83,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "You can use the [BLANK] service to train an object detection model by using your own images.",
    "options": [
      "Computer Vision",
      "Custom Vision",
      "Form Recognizer",
      "Video Indexer"
    ],
    "answer": "Custom Vision"
  },
  {
    "id": 84,
    "type": "multiple_choice",
    "img": "/imgs/q84.png",
    "_img_comment": "placeholder; image exhibit likely required (annotated image)",
    "question": "You send an image to a Computer Vision API and receive back the annotated image shown in the exhibit (orange: 96.77%, banana: 97.90%, apple: 98.21%). Which type of computer vision was used?",
    "choices": {
      "A": "object detection",
      "B": "face detection",
      "C": "optical character recognition (OCR)",
      "D": "image classification"
    },
    "answer": "A"
  },
  {
    "id": 85,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "What are two tasks that can be performed by using the Computer Vision service? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Train a custom image classification model.",
      "B": "Detect faces in an image.",
      "C": "Recognize handwritten text.",
      "D": "Translate the text in an image between languages."
    },
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": 86,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "What is a use case for classification?",
    "choices": {
      "A": "predicting how many cups of coffee a person will drink based on how many hours the person slept the previous night.",
      "B": "analyzing the contents of images and grouping images that have similar colors",
      "C": "predicting whether someone uses a bicycle to travel to work based on the distance from home to work",
      "D": "predicting how many minutes it will take someone to run a race based on past race times"
    },
    "answer": "C"
  },
  {
    "id": 87,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "What are two tasks that can be performed by using computer vision? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Predict stock prices.",
      "B": "Detect brands in an image.",
      "C": "Detect the color scheme in an image.",
      "D": "Translate text between languages.",
      "E": "Extract key phrases."
    },
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": 88,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to build an image tagging solution for social media that tags images of your friends automatically. Which Azure Cognitive Services service should you use?",
    "choices": {
      "A": "Face",
      "B": "Form Recognizer",
      "C": "Text Analytics",
      "D": "Computer Vision"
    },
    "answer": "A"
  },
  {
    "id": 89,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "In which two scenarios can you use the Form Recognizer service? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Identify the retailer from a receipt",
      "B": "Translate from French to English",
      "C": "Extract the invoice number from an invoice",
      "D": "Find images of products in a catalog"
    },
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": 90,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the facial recognition tasks to the appropriate questions.",
    "choices_pool": [
      "grouping",
      "identification",
      "similarity",
      "verification"
    ],
    "targets": [
      {
        "text": "Do two images of a face belong to the same person?",
        "answer": "verification"
      },
      {
        "text": "Does this person look like other people?",
        "answer": "similarity"
      },
      {
        "text": "Who is this person in this group of people?",
        "answer": "identification"
      }
    ]
  },
  {
    "id": 91,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which Computer Vision feature can you use to generate automatic captions for digital photographs?",
    "choices": {
      "A": "Recognize text.",
      "B": "Identify the areas of interest.",
      "C": "Detect objects.",
      "D": "Describe the images."
    },
    "answer": "D"
  },
  {
    "id": 92,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which service should you use to extract text, key/value pairs, and table data automatically from scanned documents?",
    "choices": {
      "A": "Custom Vision",
      "B": "Face",
      "C": "Form Recognizer",
      "D": "Language"
    },
    "answer": "C"
  },
  {
    "id": 93,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "[BLANK] extracts text from handwritten documents.",
    "options": [
      "Object detection",
      "Facial recognition",
      "Image classification",
      "Optical character recognition (OCR)"
    ],
    "answer": "Optical character recognition (OCR)"
  },
  {
    "id": 94,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are developing a solution that uses the Text Analytics service. You need to identify the main talking points in a collection of documents. Which type of natural language processing should you use?",
    "choices": {
      "A": "entity recognition",
      "B": "key phrase extraction",
      "C": "sentiment analysis",
      "D": "language detection"
    },
    "answer": "B"
  },
  {
    "id": 95,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "In which two scenarios can you use speech recognition? Each correct answer presents a complete solution.",
    "choices": {
      "A": "an in-car system that reads text messages aloud",
      "B": "providing closed captions for recorded or live videos",
      "C": "creating an automated public address system for a train station",
      "D": "creating a transcript of a telephone call or meeting"
    },
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": 96,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "While presenting at a conference, your session is transcribed into subtitles for the audience. This is an example of [BLANK].",
    "options": [
      "sentiment analysis.",
      "speech recognition.",
      "speech synthesis.",
      "translation."
    ],
    "answer": "speech recognition."
  },
  {
    "id": 97,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to build an app that will read recipe instructions aloud to support users who have reduced vision. Which service should you use?",
    "choices": {
      "A": "Text Analytics",
      "B": "Translator",
      "C": "Speech",
      "D": "Language Understanding (LUIS)"
    },
    "answer": "C"
  },
  {
    "id": 98,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "You can use the Speech service to transcribe a call to text.",
        "answer": "Yes"
      },
      {
        "text": "You can use the Text Analytics service to extract key entities from a call transcript.",
        "answer": "Yes"
      },
      {
        "text": "You can use the Speech service to translate the audio of a call to a different language.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 99,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Your website has a chatbot to assist customers. You need to detect when a customer is upset based on what the customer types in the chatbot. Which type of AI workload should you use?",
    "choices": {
      "A": "anomaly detection",
      "B": "computer vision",
      "C": "regression",
      "D": "natural language processing"
    },
    "answer": "D"
  },
  {
    "id": 100,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You plan to develop a bot that will enable users to query a knowledge base by using natural language processing. Which two services should you include in the solution? Each correct answer presents part of the solution.",
    "choices": {
      "A": "QnA Maker",
      "B": "Azure Bot Service",
      "C": "Form Recognizer",
      "D": "Anomaly Detector"
    },
    "answer": [
      "A",
      "B"
    ]
  },
  {
    "id": 101,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "In which two scenarios can you use a speech synthesis solution? Each correct answer presents a complete solution.",
    "choices": {
      "A": "an automated voice that reads back a credit card number entered into a telephone by using a numeric keypad",
      "B": "generating live captions for a news broadcast",
      "C": "extracting key phrases from the audio recording of a meeting",
      "D": "an AI character in a computer game that speaks audibly to a player"
    },
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "id": 102,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "You can use the Translator service to translate text between languages.",
        "answer": "Yes"
      },
      {
        "text": "You can use the Translator service to detect the language of a given text.",
        "answer": "Yes"
      },
      {
        "text": "You can use the Translator service to transcribe audible speech into text.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 103,
    "type": "drag_and_drop",
    "img": "/imgs/q103.png",
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the tasks to the appropriate scenarios.",
    "choices_pool": [
      "Entity recognition",
      "Sentiment analysis",
      "Speech synthesis",
      "Translation"
    ],
    "targets": [
      {
        "text": "Task 1",
        "answer": "Entity recognition"
      },
      {
        "text": "Task 2",
        "answer": "Sentiment analysis"
      }
    ]
  },
  {
    "id": 104,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are building a knowledge base by using QnA Maker. Which file format can you use to populate the knowledge base?",
    "choices": {
      "A": "PPTX",
      "B": "XML",
      "C": "ZIP",
      "D": "PDF"
    },
    "answer": "D"
  },
  {
    "id": 105,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "In which scenario should you use key phrase extraction?",
    "choices": {
      "A": "identifying whether reviews of a restaurant are positive or negative",
      "B": "generating captions for a video based on the audio track",
      "C": "identifying which documents provide information about the same topics",
      "D": "translating a set of documents from English to German"
    },
    "answer": "C"
  },
  {
    "id": 106,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have insurance claim reports that are stored as text. You need to extract key terms from the reports to generate summaries. Which type of AI workload should you use?",
    "choices": {
      "A": "natural language processing",
      "B": "conversational AI",
      "C": "anomaly detection",
      "D": "computer vision"
    },
    "answer": "A"
  },
  {
    "id": 107,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Natural language processing can be used to [BLANK].",
    "options": [
      "classify email messages as work-related or personal.",
      "predict the number of future car rentals.",
      "predict which website visitors will make a transaction.",
      "stop a process in a factory when extremely high temperatures are registered."
    ],
    "answer": "classify email messages as work-related or personal."
  },
  {
    "id": 108,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which AI service can you use to interpret the meaning of a user input such as \"Call me back later?\"",
    "choices": {
      "A": "Translator",
      "B": "Text Analytics",
      "C": "Speech",
      "D": "Language Understanding (LUIS)"
    },
    "answer": "D"
  },
  {
    "id": 109,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are developing a chatbot solution in Azure. Which service should you use to determine a user's intent?",
    "choices": {
      "A": "Translator",
      "B": "QnA Maker",
      "C": "Speech",
      "D": "Language Understanding (LUIS)"
    },
    "answer": "D"
  },
  {
    "id": 110,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to make the written press releases of your company available in a range of languages. Which service should you use?",
    "choices": {
      "A": "Translator",
      "B": "Text Analytics",
      "C": "Speech",
      "D": "Language Understanding (LUIS)"
    },
    "answer": "A"
  },
  {
    "id": 111,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The Text Analytics service can identify in which language text is written.",
        "answer": "Yes"
      },
      {
        "text": "The Text Analytics service can detect handwritten signatures in a document.",
        "answer": "No"
      },
      {
        "text": "The Text Analytics service can identify companies and organizations mentioned in a document.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 112,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the types of natural language processing workloads to the appropriate scenarios.",
    "choices_pool": [
      "Entity recognition",
      "Key phrase extraction",
      "Language modeling",
      "Sentiment analysis",
      "Translation",
      "Speech recognition and speech synthesis"
    ],
    "targets": [
      {
        "text": "Extracts persons, locations, and organizations from the text",
        "answer": "Entity recognition"
      },
      {
        "text": "Evaluates text along a positive-negative scale",
        "answer": "Sentiment analysis"
      },
      {
        "text": "Converts text to a different language",
        "answer": "Translation"
      }
    ]
  },
  {
    "id": 113,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Monitoring online service reviews for profanities is an example of natural language processing.",
        "answer": "Yes"
      },
      {
        "text": "Identifying brand logos in an image is an example of natural language processing.",
        "answer": "No"
      },
      {
        "text": "Monitoring public news sites for negative mentions of a product is an example of natural language processing.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 114,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are developing a natural language processing solution in Azure. The solution will analyze customer reviews and determine how positive or negative each review is. This is an example of which type of natural language processing workload?",
    "choices": {
      "A": "language detection",
      "B": "sentiment analysis",
      "C": "key phrase extraction",
      "D": "entity recognition"
    },
    "answer": "B"
  },
  {
    "id": 115,
    "type": "multiple_choice",
    "img": "/imgs/q115.png",
    "_img_comment": "placeholder; likely requires exhibit/output text",
    "question": "You use natural language processing to process text from a Microsoft news story and receive labeled output (e.g., PersonType, Organization, Location, DateTime). Which type of natural language processing was performed?",
    "choices": {
      "A": "entity recognition",
      "B": "key phrase extraction",
      "C": "sentiment analysis",
      "D": "translation"
    },
    "answer": "A"
  },
  {
    "id": 116,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the Text Analytics API features to the appropriate natural language processing scenarios.",
    "choices_pool": [
      "Entity recognition",
      "Key phrase extraction",
      "Language detection",
      "Sentiment analysis"
    ],
    "targets": [
      {
        "text": "Understand how upset a customer is based on the text contained in the support ticket.",
        "answer": "Sentiment analysis"
      },
      {
        "text": "Summarize important information from the support ticket.",
        "answer": "Key phrase extraction"
      },
      {
        "text": "Extract key dates from the support ticket.",
        "answer": "Entity recognition"
      }
    ]
  },
  {
    "id": 117,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are authoring a Language Understanding (LUIS) application to support a music festival. You want users to be able to ask questions about scheduled shows, such as: \"Which act is playing on the main stage?\" The question \"Which act is playing on the main stage?\" is an example of which type of element?",
    "choices": {
      "A": "an intent",
      "B": "an utterance",
      "C": "a domain",
      "D": "an entity"
    },
    "answer": "B"
  },
  {
    "id": 118,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You build a QnA Maker bot by using a frequently asked questions (FAQ) page. You need to add professional greetings and other responses to make the bot more user friendly. What should you do?",
    "choices": {
      "A": "Increase the confidence threshold of responses",
      "B": "Enable active learning",
      "C": "Create multi-turn questions",
      "D": "Add chit-chat"
    },
    "answer": "D"
  },
  {
    "id": 119,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to develop a chatbot for a website. The chatbot must answer users' questions based on the information in the following documents: a product troubleshooting guide in a Microsoft Word document and a frequently asked questions (FAQ) list on a webpage. Which service should you use to process the documents?",
    "choices": {
      "A": "Azure Bot Service",
      "B": "Language Understanding",
      "C": "Text Analytics",
      "D": "QnA Maker"
    },
    "answer": "D"
  },
  {
    "id": 120,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are building a Language Understanding model for an e-commerce business. You need to ensure that the model detects when utterances are outside the intended scope of the model. What should you do?",
    "choices": {
      "A": "Test the model by using new utterances",
      "B": "Add utterances to the None intent",
      "C": "Create a prebuilt task entity",
      "D": "Create a new model"
    },
    "answer": "B"
  },
  {
    "id": 121,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which two scenarios are examples of a natural language processing workload? Each correct answer presents a complete solution.",
    "choices": {
      "A": "monitoring the temperature of machinery to turn on a fan when the temperature reaches a specific threshold",
      "B": "a smart device in the home that responds to questions such as, \"What will the weather be like today?\"",
      "C": "a website that uses a knowledge base to interactively respond to users' questions",
      "D": "assembly line machinery that autonomously inserts headlamps into cars"
    },
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": 122,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have an AI solution that provides users with the ability to control smart devices by using verbal commands. Which two types of natural language processing (NLP) workloads does the solution use? Each correct answer presents part of the solution.",
    "choices": {
      "A": "text-to-speech",
      "B": "key phrase extraction",
      "C": "speech-to-text",
      "D": "language modeling",
      "E": "translation"
    },
    "answer": [
      "C",
      "D"
    ]
  },
  {
    "id": 123,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The Language service can identify in which language text is written.",
        "answer": "Yes"
      },
      {
        "text": "The Language service can detect handwritten signatures in a document.",
        "answer": "No"
      },
      {
        "text": "The Language service can identify companies and organizations mentioned in a document.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 124,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "You plan to use Azure Cognitive Services to develop a voice controlled personal assistant app. Match the Azure Cognitive Services to the appropriate tasks.",
    "choices_pool": [
      "Speech",
      "Language service",
      "Translator Text"
    ],
    "targets": [
      {
        "text": "Convert a user's speech to text",
        "answer": "Speech"
      },
      {
        "text": "Identify a user's intent",
        "answer": "Language service"
      },
      {
        "text": "Provide a spoken response to the user",
        "answer": "Speech"
      }
    ]
  },
  {
    "id": 125,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to make the written press releases of your company available in a range of languages. Which service should you use?",
    "choices": {
      "A": "Speech",
      "B": "Language",
      "C": "Translator",
      "D": "Personalizer"
    },
    "answer": "C"
  },
  {
    "id": 126,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have insurance claim reports that are stored as text. You need to extract key terms from the reports to generate summaries. Which type of AI workload should you use?",
    "choices": {
      "A": "anomaly detection",
      "B": "natural language processing",
      "C": "computer vision",
      "D": "knowledge mining"
    },
    "answer": "B"
  },
  {
    "id": 127,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to build an app that will read recipe instructions aloud to support users who have reduced vision. Which service should you use?",
    "choices": {
      "A": "Language service",
      "B": "Translator",
      "C": "Speech",
      "D": "Personalizer"
    },
    "answer": "C"
  },
  {
    "id": 128,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have a webchat bot that provides responses from a QnA Maker knowledge base. You need to ensure that the bot uses user feedback to improve the relevance of the responses over time. What should you use?",
    "choices": {
      "A": "key phrase extraction",
      "B": "sentiment analysis",
      "C": "business logic",
      "D": "active learning"
    },
    "answer": "D"
  },
  {
    "id": 129,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are developing a conversational AI solution that will communicate with users through multiple channels including email, Microsoft Teams, and webchat. Which service should you use?",
    "choices": {
      "A": "Text Analytics",
      "B": "Azure Bot Service",
      "C": "Translator",
      "D": "Form Recognizer"
    },
    "answer": "B"
  },
  {
    "id": 130,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A bot that responds to queries by internal users is an example of a conversational AI workload.",
        "answer": "Yes"
      },
      {
        "text": "An application that displays images relating to an entered search term is an example of a conversational AI workload.",
        "answer": "No"
      },
      {
        "text": "A web form used to submit a request to reset a password is an example of a conversational AI workload.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 131,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to provide content for a business chatbot that will help answer simple user queries. What are three ways to create question and answer text by using QnA Maker? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Generate the questions and answers from an existing webpage.",
      "B": "Use automated machine learning to train a model based on a file that contains the questions.",
      "C": "Manually enter the questions and answers.",
      "D": "Connect the bot to the Cortana channel and ask questions by using Cortana.",
      "E": "Import chit-chat content from a predefined data source."
    },
    "answer": [
      "A",
      "C",
      "E"
    ]
  },
  {
    "id": 132,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have a frequently asked questions (FAQ) PDF file. You need to create a conversational support system based on the FAQ. Which service should you use?",
    "choices": {
      "A": "QnA Maker",
      "B": "Text Analytics",
      "C": "Computer Vision",
      "D": "Language Understanding (LUIS)"
    },
    "answer": "A"
  },
  {
    "id": 133,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to reduce the load on telephone operators by implementing a chatbot to answer simple questions with predefined answers. Which two AI services should you use to achieve the goal? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Text Analytics",
      "B": "QnA Maker",
      "C": "Azure Bot Service",
      "D": "Translator"
    },
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": 134,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which two scenarios are examples of a conversational AI workload? Each correct answer presents a complete solution.",
    "choices": {
      "A": "a smart device in the home that responds to questions such as \"What will the weather be like today?\"",
      "B": "a website that uses a knowledge base to interactively respond to users' questions",
      "C": "assembly line machinery that autonomously inserts headlamps into cars",
      "D": "monitoring the temperature of machinery to turn on a fan when the temperature reaches a specific threshold"
    },
    "answer": [
      "A",
      "B"
    ]
  },
  {
    "id": 135,
    "type": "multiple_choice",
    "img": "/imgs/q135.png",
    "_img_comment": "placeholder; diagram/exhibit likely required",
    "question": "You have the process shown in the exhibit (chat bot request/response using a Knowledge Base). Which type of AI solution is shown in the diagram?",
    "choices": {
      "A": "a sentiment analysis solution",
      "B": "a chatbot",
      "C": "a machine learning model",
      "D": "a computer vision application"
    },
    "answer": "B"
  },
  {
    "id": 136,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to develop a web-based AI solution for a customer support system. Users must be able to interact with a web app that will guide them to the best resource or answer. Which service should you use?",
    "choices": {
      "A": "Custom Vision",
      "B": "QnA Maker",
      "C": "Translator Text",
      "D": "Face"
    },
    "answer": "B"
  },
  {
    "id": 137,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; answer not present in OCR (missing 'Correct Answer')",
    "question": "Which AI service should you use to create a bot from a frequently asked questions (FAQ) document?",
    "choices": {
      "A": "QnA Maker",
      "B": "Language Understanding (LUIS)",
      "C": "Text Analytics",
      "D": "Speech"
    },
    "answer": "A"
  },
  {
    "id": 138,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "The interactive answering of questions entered by a user as part of an application is an example of [BLANK].",
    "options": [
      "anomaly detection.",
      "computer vision.",
      "conversational AI.",
      "forecasting"
    ],
    "answer": "conversational AI."
  },
  {
    "id": 139,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which scenario is an example of a webchat bot?",
    "choices": {
      "A": "Determine whether reviews entered on a website for a concert are positive or negative, and then add a thumbs up or thumbs down emoji to the reviews.",
      "B": "Translate into English questions entered by customers at a kiosk so that the appropriate person can call the customers back.",
      "C": "Accept questions through email, and then route the email messages to the correct person based on the content of the message.",
      "D": "From a website interface, answer common questions about scheduled events and ticket purchases for a music festival."
    },
    "answer": "D"
  },
  {
    "id": 140,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "You can use QnA Maker to query an Azure SQL database.",
        "answer": "No"
      },
      {
        "text": "You should use QnA Maker when you want a knowledge base to provide the same answer to different users who submit similar questions.",
        "answer": "Yes"
      },
      {
        "text": "The QnA Maker service can determine the intent of a user utterance.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 141,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "You can communicate with a bot by using Cortana.",
        "answer": "Yes"
      },
      {
        "text": "You can communicate with a bot by using Microsoft Teams.",
        "answer": "Yes"
      },
      {
        "text": "You can communicate with a bot by using a webchat interface.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 142,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A restaurant can use a chatbot to empower customers to make reservations by using a website or an app.",
        "answer": "Yes"
      },
      {
        "text": "A restaurant can use a chatbot to answer inquiries about business hours from a webpage.",
        "answer": "Yes"
      },
      {
        "text": "A restaurant can use a chatbot to automate responses to customer reviews on an external website.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 143,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which two scenarios are examples of a conversational AI workload? Each correct answer presents a complete solution.",
    "choices": {
      "A": "a telephone answering service that has a pre-recorded message",
      "B": "a chatbot that provides users with the ability to find answers on a website by themselves",
      "C": "telephone voice menus to reduce the load on human resources",
      "D": "a service that creates frequently asked questions (FAQ) documents by crawling public websites"
    },
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": 144,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Azure Bot Service and Azure Cognitive Services can be integrated.",
        "answer": "Yes"
      },
      {
        "text": "Azure Bot Service engages with customers in a conversational manner.",
        "answer": "Yes"
      },
      {
        "text": "Azure Bot Service can import frequently asked questions (FAQ) to question and answer sets.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 145,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A webchat bot can interact with users visiting a website.",
        "answer": "Yes"
      },
      {
        "text": "Automatically generating captions for pre-recorded videos is an example of conversational AI.",
        "answer": "No"
      },
      {
        "text": "A smart device in the home that responds to questions such as \"What will the weather be like today?\" is an example of conversational AI.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 146,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have a knowledge base of frequently asked questions (FAQ). You create a bot that uses the knowledge base to respond to customer requests. You need to identify what the bot can perform without adding additional skills. What should you identify?",
    "choices": {
      "A": "Register customer purchases.",
      "B": "Register customer complaints.",
      "C": "Answer questions from multiple users simultaneously.",
      "D": "Provide customers with return materials authorization (RMA) numbers."
    },
    "answer": "C"
  },
  {
    "id": 147,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A restaurant can use a chatbot to answer queries through Cortana.",
        "answer": "Yes"
      },
      {
        "text": "A restaurant can use a chatbot to answer inquiries about business hours from a webpage.",
        "answer": "Yes"
      },
      {
        "text": "A restaurant can use a chatbot to automate responses to customer reviews on an external website.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 148,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Chatbots can only be built by using custom code.",
        "answer": "No"
      },
      {
        "text": "The Azure Bot Service provides services that can be used to host conversational bots.",
        "answer": "Yes"
      },
      {
        "text": "Bots built by using the Azure Bot Service can communicate with Microsoft Teams users.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 149,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "Computer vision capabilities can be deployed to [BLANK].",
    "options": [
      "develop a text-based chatbot for a website.",
      "identify anomalous customer behavior on an online store.",
      "integrate a facial recognition feature into an app.",
      "suggest automated responses to incoming email."
    ],
    "answer": "integrate a facial recognition feature into an app."
  },
  {
    "id": 150,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have an Azure Machine Learning pipeline that contains a Split Data module. The Split Data module outputs to a Train Model module and a Score Model module. What is the function of the Split Data module?",
    "choices": {
      "A": "scaling numeric variables so that they are within a consistent numeric range",
      "B": "splitting data into separate subsets for training and evaluation",
      "C": "diverting records that have missing data",
      "D": "selecting columns that must be included in the model"
    },
    "answer": "B"
  },
  {
    "id": 151,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which statement is an example of a Microsoft responsible AI principle?",
    "choices": {
      "A": "AI systems must use only publicly available data",
      "B": "AI systems must be transparent and inclusive",
      "C": "AI systems must keep personal details public",
      "D": "AI systems must protect the interests of the company"
    },
    "answer": "B"
  },
  {
    "id": 152,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the types of natural language processing workloads to the appropriate scenarios.",
    "choices_pool": [
      "Entity recognition",
      "Key phrase extraction",
      "Language modeling",
      "Sentiment analysis",
      "Speech recognition and speech synthesis",
      "Translation"
    ],
    "targets": [
      {
        "text": "Extracts persons, locations, and organizations from the text.",
        "answer": "Entity recognition"
      },
      {
        "text": "Evaluates text along a positive-negative scale.",
        "answer": "Sentiment analysis"
      },
      {
        "text": "Converts text to a different language.",
        "answer": "Translation"
      }
    ]
  },
  {
    "id": 153,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to reduce the load on telephone operators by implementing a chatbot to answer simple questions with predefined answers. Which two AI services should you use to achieve the goal? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Azure Machine Learning",
      "B": "Azure Bot Service",
      "C": "Language Service",
      "D": "Translator"
    },
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": 154,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the principles of responsible AI to the appropriate descriptions.",
    "choices_pool": [
      "Fairness",
      "Inclusiveness",
      "Privacy and security",
      "Reliability and safety"
    ],
    "targets": [
      {
        "text": "AI systems must consistently operate as intended, even under unexpected conditions.",
        "answer": "Reliability and safety"
      },
      {
        "text": "AI systems must protect and secure personal and business information.",
        "answer": "Privacy and security"
      }
    ]
  },
  {
    "id": 155,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "During the process of Machine Learning, when should you review evaluation metrics?",
    "choices": {
      "A": "Before you train a model.",
      "B": "After you clean the data.",
      "C": "Before you choose the type of model.",
      "D": "After you test a model on the validation data."
    },
    "answer": "D"
  },
  {
    "id": 156,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have a natural language processing (NLP) model that was created by using data obtained without permission. Which Microsoft principle for responsible AI does this breach?",
    "choices": {
      "A": "reliability and safety",
      "B": "privacy and security",
      "C": "inclusiveness",
      "D": "transparency"
    },
    "answer": "B"
  },
  {
    "id": 157,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "Ensuring an AI system does not provide a prediction when important fields contain unusual or missing values is a [BLANK] principle for responsible AI.",
    "options": [
      "an inclusiveness",
      "a privacy and security",
      "a reliability and safety",
      "a transparency"
    ],
    "answer": "a reliability and safety"
  },
  {
    "id": 158,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the services to the appropriate descriptions.",
    "choices_pool": [
      "Azure Storage",
      "Azure Bot Service",
      "Language Service",
      "Speech"
    ],
    "targets": [
      {
        "text": "Enables the use of natural language to query a knowledge base.",
        "answer": "Language Service"
      },
      {
        "text": "Enables the real-time transcription of speech-to-text.",
        "answer": "Speech"
      }
    ]
  },
  {
    "id": 159,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which machine learning technique can be used for anomaly detection?",
    "choices": {
      "A": "A machine learning technique that classifies objects based on user supplied images.",
      "B": "A machine learning technique that understands written and spoken language.",
      "C": "A machine learning technique that classifies images based on their contents.",
      "D": "A machine learning technique that analyzes data over time and identifies unusual changes."
    },
    "answer": "D"
  },
  {
    "id": 160,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have an AI-based loan approval system. During testing, you discover that the system has a gender bias. Which responsible AI principle does this violate?",
    "choices": {
      "A": "accountability",
      "B": "reliability and safety",
      "C": "transparency",
      "D": "fairness"
    },
    "answer": "D"
  },
  {
    "id": 161,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are developing a system to predict the prices of insurance for drivers in the United Kingdom. You need to minimize bias in the system. What should you do?",
    "choices": {
      "A": "Remove information about protected characteristics from the data before sampling.",
      "B": "Take a training sample that is representative of the population in the United Kingdom.",
      "C": "Create a training dataset that uses data from global insurers.",
      "D": "Take a completely random training sample."
    },
    "answer": "B"
  },
  {
    "id": 162,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "Azure Machine Learning designer lets you create machine learning models by [BLANK].",
    "options": [
      "adding and connecting modules on a visual canvas.",
      "automatically performing common data preparation tasks.",
      "automatically selecting an algorithm to build the most accurate model.",
      "using a code-first notebook experience."
    ],
    "answer": "adding and connecting modules on a visual canvas."
  },
  {
    "id": 163,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have a dataset. You need to build an Azure Machine Learning classification model that will identify defective products. What should you do first?",
    "choices": {
      "A": "Load the dataset.",
      "B": "Create a clustering model.",
      "C": "Split the data into training and testing datasets.",
      "D": "Create a classification model."
    },
    "answer": "A"
  },
  {
    "id": 164,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You use Azure Machine Learning designer to build a model pipeline. What should you create before you can run the pipeline?",
    "choices": {
      "A": "a registered model",
      "B": "a compute resource",
      "C": "a Jupyter notebook"
    },
    "answer": "B"
  },
  {
    "id": 165,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the tool to the Azure Machine Learning task.",
    "choices_pool": [
      "Automated machine learning (automated ML)",
      "The Azure portal",
      "Machine Learning designer"
    ],
    "targets": [
      {
        "text": "Create a Machine Learning workspace",
        "answer": "The Azure portal"
      },
      {
        "text": "Use a drag-and-drop interface used to train and deploy models",
        "answer": "Machine Learning designer"
      },
      {
        "text": "Use a wizard to select configurations for a machine learning run",
        "answer": "Automated machine learning (automated ML)"
      }
    ]
  },
  {
    "id": 166,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to create a customer support solution to help customers access information. The solution must support email, phone, and live chat channels. Which type of AI solution should you use?",
    "choices": {
      "A": "machine learning",
      "B": "computer vision",
      "C": "chatbot",
      "D": "natural language processing (NLP)"
    },
    "answer": "C"
  },
  {
    "id": 167,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the types of AI workloads to the appropriate scenarios.",
    "choices_pool": [
      "Anomaly detection",
      "Computer vision",
      "Machine Learning (Clustering)",
      "Natural language processing"
    ],
    "targets": [
      {
        "text": "Identify handwritten letters.",
        "answer": "Computer vision"
      },
      {
        "text": "Predict the sentiment of a social media post.",
        "answer": "Natural language processing"
      },
      {
        "text": "Identify an unusual credit card payment.",
        "answer": "Anomaly detection"
      },
      {
        "text": "Group animals based on multiple measurements.",
        "answer": "Machine Learning (Clustering)"
      }
    ]
  },
  {
    "id": 168,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Predicting how many vehicles will travel across a bridge on a given day is an example of [BLANK].",
    "choices": {
      "A": "regression",
      "B": "translation",
      "C": "classification",
      "D": "clustering"
    },
    "answer": "A"
  },
  {
    "id": 169,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "In a machine learning model, the data that is used as inputs are called [BLANK].",
    "choices": {
      "A": "dataset",
      "B": "labels",
      "C": "variables"
    },
    "answer": "C"
  },
  {
    "id": 170,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "Using Recency, Frequency, and Monetary (RFM) values to identify segments of a customer base is an example of [BLANK].",
    "options": [
      "clustering.",
      "regression.",
      "classification.",
      "regularization."
    ],
    "answer": "clustering."
  },
  {
    "id": 171,
    "type": "drag_and_drop_order",
    "img": null,
    "_img_comment": "placeholder; likely required (ordering UI)",
    "prompt": "You plan to deploy an Azure Machine Learning model by using the Machine Learning designer. Which four actions should you perform in sequence?",
    "choices_pool": [
      "Ingest and prepare a dataset.",
      "Split the data randomly into training data and validation data.",
      "Train the model.",
      "Evaluate the model against the original dataset.",
      "Evaluate the model against the validation dataset."
    ],
    "answer_order": [
      "Ingest and prepare a dataset.",
      "Split the data randomly into training data and validation data.",
      "Train the model.",
      "Evaluate the model against the validation dataset."
    ]
  },
  {
    "id": 172,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Organizing documents into groups based on different usage statistics is an example of clustering.",
        "answer": "Yes"
      },
      {
        "text": "Grouping similar patients based on symptoms and diagnostic test results is an example of clustering.",
        "answer": "Yes"
      },
      {
        "text": "Predicting whether a person will develop mild, moderate, or severe allergy symptoms based on pollen count is an example of clustering.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 173,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "When building a regression model, labels must have a data type of [BLANK].",
    "options": [
      "boolean.",
      "datetime.",
      "numeric.",
      "text."
    ],
    "answer": "numeric."
  },
  {
    "id": 174,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to create a clustering model and evaluate the model by using Azure Machine Learning designer. What should you do?",
    "choices": {
      "A": "Split the original dataset into a dataset for training and a dataset for testing. Use the testing dataset for evaluation.",
      "B": "Use the original dataset for training and evaluation.",
      "C": "Split the original dataset into a dataset for features and a dataset for labels. Use the features dataset for evaluation.",
      "D": "Split the original dataset into a dataset for training and a dataset for testing. Use the training dataset for evaluation."
    },
    "answer": "B"
  },
  {
    "id": 175,
    "type": "multiple_choice",
    "img": "/imgs/q175.png",
    "_img_comment": "placeholder; dataset/table shown",
    "question": "You have a machine learning model that predicts the value of ColumnE based on the other numeric columns. Which type of model is this?",
    "choices": {
      "A": "analysis",
      "B": "clustering",
      "C": "regression"
    },
    "answer": "C"
  },
  {
    "id": 176,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to track multiple versions of a model that was trained by using Azure Machine Learning. What should you do?",
    "choices": {
      "A": "Explain the model.",
      "B": "Register the model.",
      "C": "Register the training data.",
      "D": "Provision an inference cluster."
    },
    "answer": "B"
  },
  {
    "id": 177,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to identify groups of rows with similar numeric values in a dataset. Which type of machine learning should you use?",
    "choices": {
      "A": "clustering",
      "B": "regression",
      "C": "classification"
    },
    "answer": "A"
  },
  {
    "id": 178,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "A banking system that predicts whether a loan will be repaid is an example of the [BLANK] type of machine learning.",
    "options": [
      "clustering",
      "regression",
      "classification"
    ],
    "answer": "classification"
  },
  {
    "id": 179,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "[BLANK] models can be used to predict the sale price of auctioned items.",
    "options": [
      "Classification",
      "Clustering",
      "Regression"
    ],
    "answer": "Regression"
  },
  {
    "id": 180,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "A historian can use [BLANK] to digitize newspaper articles.",
    "choices": {
      "A": "Object detection",
      "B": "Facial recognition",
      "C": "Image classification",
      "D": "Optical character recognition (OCR)"
    },
    "answer": "D"
  },
  {
    "id": 181,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Object detection can identify the location of a damaged product in an image.",
        "answer": "Yes"
      },
      {
        "text": "Object detection can identify multiple instances of a damaged product in an image.",
        "answer": "Yes"
      },
      {
        "text": "Object detection can identify multiple types of damaged products in an image.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 182,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to create a model that labels a collection of your personal digital photographs. Which Azure Cognitive Services service should you use?",
    "choices": {
      "A": "Form Recognizer",
      "B": "Custom Vision",
      "C": "Language",
      "D": "Computer Vision"
    },
    "answer": "B"
  },
  {
    "id": 183,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "[BLANK] is used to identify multiple types of items in one image.",
    "options": [
      "Object detection",
      "Image description",
      "Image classification",
      "Optical character recognition (OCR)"
    ],
    "answer": "Object detection"
  },
  {
    "id": 184,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "Identifying whether a kiosk user is annoyed by monitoring a video feed from the kiosk is an example of [BLANK].",
    "options": [
      "face detection.",
      "facial analysis.",
      "facial recognition.",
      "optical character recognition (OCR)."
    ],
    "answer": "facial analysis."
  },
  {
    "id": 185,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the Azure Cognitive Services to the appropriate actions.",
    "choices_pool": [
      "Custom Vision",
      "Face",
      "Form Recognizer"
    ],
    "targets": [
      {
        "text": "Identify objects in an image.",
        "answer": "Custom Vision"
      },
      {
        "text": "Automatically import data from an invoice to a database.",
        "answer": "Form Recognizer"
      },
      {
        "text": "Identify people in an image.",
        "answer": "Face"
      }
    ]
  },
  {
    "id": 186,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "An AI solution that helps photographers take better portrait photographs by providing feedback on exposure, noise, and occlusion is an example of facial [BLANK].",
    "options": [
      "analysis.",
      "detection.",
      "recognition."
    ],
    "answer": "analysis."
  },
  {
    "id": 187,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have 1,000 digital photos of widgets. You need to identify the location of the widgets within the photos. What should you use?",
    "choices": {
      "A": "Computer Vision Spatial Analysis",
      "B": "Custom Vision object detection",
      "C": "Computer Vision Image Analysis",
      "D": "Custom Vision classification"
    },
    "answer": "B"
  },
  {
    "id": 188,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to convert handwritten notes into digital text. Which type of computer vision should you use?",
    "choices": {
      "A": "facial detection",
      "B": "optical character recognition (OCR)",
      "C": "image classification",
      "D": "object detection"
    },
    "answer": "B"
  },
  {
    "id": 189,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "[BLANK] is used to identify multiple types of items in one image.",
    "options": [
      "Image classification",
      "Image description",
      "Object detection",
      "Optical character recognition (OCR)"
    ],
    "answer": "Object detection"
  },
  {
    "id": 190,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to develop a mobile app for employees to scan and store their expenses while travelling. Which type of computer vision should you use?",
    "choices": {
      "A": "face detection",
      "B": "image classification",
      "C": "object detection",
      "D": "optical character recognition (OCR)"
    },
    "answer": "D"
  },
  {
    "id": 191,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (hot area options)",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "You can use the [BLANK] service to train an object detection model by using your own images.",
    "options": [
      "Computer Vision",
      "Custom Vision",
      "Form Recognizer",
      "Azure Video Analyzer for Media"
    ],
    "answer": "Custom Vision"
  },
  {
    "id": 192,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "An AI solution that helps photographers take better portrait photographs by providing feedback on exposure, noise, and occlusion is an example of facial [BLANK].",
    "options": [
      "analysis.",
      "detection.",
      "recognition."
    ],
    "answer": "analysis."
  },
  {
    "id": 193,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the Azure Cognitive Services to the appropriate AI workloads.",
    "choices_pool": [
      "Custom Vision",
      "Face",
      "Form Recognizer"
    ],
    "targets": [
      {
        "text": "Identify objects in an image.",
        "answer": "Custom Vision"
      },
      {
        "text": "Automatically import data from an invoice to a database.",
        "answer": "Form Recognizer"
      },
      {
        "text": "Identify people in an image.",
        "answer": "Face"
      }
    ]
  },
  {
    "id": 194,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to implement a pre-built solution that will identify well-known brands in digital photographs. Which Azure Cognitive Services service should you use?",
    "choices": {
      "A": "Custom Vision",
      "B": "Form Recognizer",
      "C": "Face",
      "D": "Computer Vision"
    },
    "answer": "D"
  },
  {
    "id": 195,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Natural language processing can be used to [BLANK].",
    "choices": {
      "A": "Analyze video content",
      "B": "Generate speech",
      "C": "Classify email messages as work-related or personal.",
      "D": "Classify images"
    },
    "answer": "C"
  },
  {
    "id": 196,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You plan to develop a bot that will enable users to query a knowledge base by using natural language processing. Which two services should you include in the solution? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Language Service",
      "B": "Azure Bot Service",
      "C": "Form Recognizer",
      "D": "Anomaly Detector"
    },
    "answer": [
      "A",
      "B"
    ]
  },
  {
    "id": 197,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The following service call will accept English text as an input and output Italian and French text: /translate?from=it&to=fr&to=en",
        "answer": "No"
      },
      {
        "text": "The following service call will accept English text as an input and output Italian and French text: /translate?from=en&to=fr&to=it",
        "answer": "Yes"
      },
      {
        "text": "The Translator service can be used to translate documents from English to French.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 198,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "An app that analyzes social media posts to identify their tone is an example of which type of natural language processing (NLP) workload?",
    "choices": {
      "A": "sentiment analysis",
      "B": "speech recognition",
      "C": "key phrase extraction",
      "D": "entity recognition"
    },
    "answer": "A"
  },
  {
    "id": 199,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You're building a chatbot that will use natural language processing (NLP) to perform the following actions based on the text input from a user: accept customer orders, retrieve support documents, and retrieve order status updates. Which type of NLP should you use?",
    "choices": {
      "A": "sentiment analysis",
      "B": "named entity recognition",
      "C": "translation",
      "D": "language modeling"
    },
    "answer": "D"
  },
  {
    "id": 200,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the Azure Cognitive Services service to the appropriate actions.",
    "choices_pool": [
      "Language service",
      "Speech",
      "Translator"
    ],
    "targets": [
      {
        "text": "Convert spoken requests into text.",
        "answer": "Speech"
      },
      {
        "text": "Identify the intent of a user's requests.",
        "answer": "Language service"
      },
      {
        "text": "Apply intent to entities and utterances.",
        "answer": "Language service"
      }
    ]
  },
  {
    "id": 201,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A webchat bot can interact with users visiting a website.",
        "answer": "Yes"
      },
      {
        "text": "Automatically generating captions for pre-recorded videos is an example of natural language processing.",
        "answer": "No"
      },
      {
        "text": "A smart device in the home that responds to questions such as \"What will the weather be like today?\" is an example of natural language processing.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 202,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have a website that includes customer reviews. You need to store the reviews in English and present the reviews to users in their respective language by recognizing each user's geographical location. Which type of natural language processing workload should you use?",
    "choices": {
      "A": "key phrase extraction",
      "B": "speech recognition",
      "C": "language modeling",
      "D": "translation"
    },
    "answer": "D"
  },
  {
    "id": 203,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Chatbots can support voice input.",
        "answer": "Yes"
      },
      {
        "text": "A separate chatbot is required for each communication channel.",
        "answer": "No"
      },
      {
        "text": "Chatbots manage conversation flows by using a combination of natural language and constrained option responses.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 204,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A bot that responds to queries by internal users is an example of a natural language processing workload.",
        "answer": "Yes"
      },
      {
        "text": "A mobile application that displays images relating to an entered search term is an example of a natural language processing workload.",
        "answer": "No"
      },
      {
        "text": "A web form used to submit a request to reset a password is an example of a natural language processing workload.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 205,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have a solution that analyzes social media posts to extract the mentions of city names and the city names discussed most frequently. Which type of natural language processing (NLP) workload does the solution use?",
    "choices": {
      "A": "speech recognition",
      "B": "sentiment analysis",
      "C": "key phrase extraction",
      "D": "entity recognition"
    },
    "answer": "D"
  },
  {
    "id": 206,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "You can use Language Service's question answering to query an Azure SQL database.",
        "answer": "No"
      },
      {
        "text": "You should use Language Service's question answering when you want a knowledge base to provide the same answer to different users who submit similar questions.",
        "answer": "Yes"
      },
      {
        "text": "Language Service's question answering can determine the intent of a user utterance.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 207,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are developing a solution that uses the Language service. You need to identify the main talking points in a collection of documents. Which type of natural language processing should you use?",
    "choices": {
      "A": "language detection",
      "B": "sentiment analysis",
      "C": "entity recognition",
      "D": "key phrase extraction"
    },
    "answer": "D"
  },
  {
    "id": 208,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the Microsoft responsible AI principles to the appropriate requirements.",
    "choices_pool": [
      "Accountability",
      "Fairness",
      "Inclusiveness",
      "Privacy and security",
      "Reliability and safety",
      "Transparency"
    ],
    "targets": [
      {
        "text": "A customer's personal information must be visible only to staff who are involved in the decision-making process.",
        "answer": "Privacy and security"
      },
      {
        "text": "The decision-making process must be recorded so that staff can identify the reasoning behind a particular quote.",
        "answer": "Transparency"
      },
      {
        "text": "The system must be accessible to customers who use screen readers or other assistive technology.",
        "answer": "Inclusiveness"
      }
    ]
  },
  {
    "id": 209,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which type of natural language processing (NLP) entity is used to identify a phone number?",
    "choices": {
      "A": "regular expression",
      "B": "machine-learned",
      "C": "list",
      "D": "Pattern.any"
    },
    "answer": "A"
  },
  {
    "id": 210,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Returning a bounding box that indicates the location of a vehicle in an image is an example of [BLANK].",
    "options": [
      "image classification",
      "object detection",
      "optical character recognition (OCR)",
      "facial detection"
    ],
    "answer": "object detection"
  },
  {
    "id": 211,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Your company is exploring the use of voice recognition technologies in its smart home devices. The company wants to identify any barriers that might unintentionally leave out specific user groups. This is an example of which Microsoft guiding principle for responsible AI?",
    "choices": {
      "A": "accountability",
      "B": "fairness",
      "C": "privacy and security",
      "D": "inclusiveness"
    },
    "answer": "D"
  },
  {
    "id": 212,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely required (UI screenshot shown)",
    "prompt": "Select the appropriate task in the answer area.",
    "sentence": "You have a large dataset that contains motor vehicle sales data. Which task should you select?",
    "options": [
      "Classification",
      "Regression",
      "Time series forecasting",
      "Natural Language Processing (preview)",
      "Computer Vision (preview)"
    ],
    "answer": "Time series forecasting"
  },
  {
    "id": 213,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "When evaluating the performance of a model, the [BLANK] displays the predicted and actual positives and negatives by using a grid of 0 and 1 values.",
    "options": [
      "AUC metric",
      "confusion matrix",
      "ROC curve",
      "threshold"
    ],
    "answer": "confusion matrix"
  },
  {
    "id": 214,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to convert receipts into transactions in a spreadsheet. The spreadsheet must include the date of the transaction, the merchant, the total spent, and any taxes paid. Which Azure AI service should you use?",
    "choices": {
      "A": "Custom Vision",
      "B": "Form Recognizer",
      "C": "Face",
      "D": "Language"
    },
    "answer": "B"
  },
  {
    "id": 215,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "Predicting how many vehicles will travel across a bridge on a given day is an example of [BLANK].",
    "options": [
      "classification",
      "clustering",
      "regression"
    ],
    "answer": "regression"
  },
  {
    "id": 216,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; answer not present in OCR (missing 'Correct Answer')",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "In a machine learning model, the data that is used as inputs are called [BLANK].",
    "options": [
      "features",
      "functions",
      "labels",
      "instances"
    ],
    "answer": "features"
  },
  {
    "id": 217,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have a security system that analyzes images from CCTV to provide authorized staff entry into a restricted area. Which type of computer vision does the system use?",
    "choices": {
      "A": "optical character recognition (OCR)",
      "B": "semantic segmentation",
      "C": "facial detection and facial recognition",
      "D": "image analysis"
    },
    "answer": "C"
  },
  {
    "id": 218,
    "type": "multiple_choice_multi_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "For which two workloads can you use computer vision? Each correct answer presents a complete solution.",
    "choices": {
      "A": "assigning the color pixels in an image to object names",
      "B": "detecting inconsistencies and anomalies in a stream of data",
      "C": "creating visual representations of numerical data",
      "D": "creating photorealistic images by using three-dimensional models",
      "E": "describing the contents of an image"
    },
    "answer": [
      "A",
      "E"
    ]
  },
  {
    "id": 219,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have an app that identifies the coordinates of a product in an image of a supermarket shelf. Which service does the app use?",
    "choices": {
      "A": "Custom Vision classification",
      "B": "Custom Vision object detection",
      "C": "Computer Vision Read",
      "D": "Computer Vision optical character recognition (OCR)"
    },
    "answer": "B"
  },
  {
    "id": 220,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; likely requires CCTV/video context",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "A traffic monitoring system that collects vehicle registration numbers from CCTV footage is an example of [BLANK] in the Computer Vision service.",
    "options": [
      "image classification",
      "object detection",
      "spatial Analysis",
      "text extraction"
    ],
    "answer": "text extraction"
  },
  {
    "id": 221,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to build an image tagging solution for social media that tags images of your friends automatically. Which Azure Cognitive Services service should you use?",
    "choices": {
      "A": "Face",
      "B": "Form Recognizer",
      "C": "Language",
      "D": "Computer Vision"
    },
    "answer": "A"
  },
  {
    "id": 222,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "A historian can use [BLANK] to digitize newspaper articles.",
    "options": [
      "facial analysis",
      "image classification",
      "object detection",
      "optical character recognition (OCR)"
    ],
    "answer": "optical character recognition (OCR)"
  },
  {
    "id": 223,
    "type": "hotspot_dropdown",
    "img": null,
    "_img_comment": "placeholder; likely required (bird image shown)",
    "prompt": "Which type of computer vision does each task use? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "Locate the birds:",
        "options": [
          "Automated captioning",
          "Image classification",
          "Object detection",
          "Optical character recognition (OCR)"
        ],
        "answer": "Object detection"
      },
      {
        "text": "Identify the species of the birds:",
        "options": [
          "Automated captioning",
          "Image classification",
          "Object detection",
          "Optical character recognition (OCR)"
        ],
        "answer": "Image classification"
      }
    ]
  },
  {
    "id": 224,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have a solution that reads manuscripts in different languages and categorizes the manuscripts based on topic. Which types of natural language processing (NLP) workloads does the solution use?",
    "choices": {
      "A": "speech recognition and entity recognition",
      "B": "speech recognition and language modeling",
      "C": "translation and key phrase extraction",
      "D": "translation and sentiment analysis"
    },
    "answer": "C"
  },
  {
    "id": 225,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "The interactive answering of questions entered by a user as part of an application is an example of [BLANK].",
    "options": [
      "anomaly detection.",
      "computer vision.",
      "natural language processing.",
      "forecasting."
    ],
    "answer": "natural language processing."
  },
  {
    "id": 226,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have 100 instructional videos that do NOT contain any audio. Each instructional video has a script. You need to generate a narration audio file for each video based on the script. Which type of workload should you use?",
    "choices": {
      "A": "language modeling",
      "B": "speech recognition",
      "C": "speech synthesis",
      "D": "translation"
    },
    "answer": "C"
  },
  {
    "id": 227,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "Natural language processing can be used to [BLANK].",
    "options": [
      "classify email messages as work-related or personal",
      "predict the number of future car rentals",
      "predict which website visitors will make a transaction",
      "stop a process in a factory when extremely high temperatures are registered"
    ],
    "answer": "classify email messages as work-related or personal"
  },
  {
    "id": 228,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Which AI service can you use to extract intent from a user input such as \"Call me back later\"?",
    "choices": {
      "A": "Azure Cognitive Search",
      "B": "Translator",
      "C": "Language",
      "D": "Speech"
    },
    "answer": "C"
  },
  {
    "id": 229,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are building a Language Understanding model for an e-commerce business. You need to ensure that the model detects when utterances are outside the intended scope of the model. What should you do?",
    "choices": {
      "A": "Export the model",
      "B": "Add utterances to the None intent",
      "C": "Create a prebuilt task entity",
      "D": "Create a new model"
    },
    "answer": "B"
  },
  {
    "id": 230,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "[BLANK] can be used to build no-code apps that use built-in natural language processing models.",
    "options": [
      "Azure Health Bot",
      "Microsoft Bot Framework",
      "Power Virtual Agents"
    ],
    "answer": "Power Virtual Agents"
  },
  {
    "id": 231,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statement, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A smart device in the home that responds to questions such as \"When is my next appointment?\" is an example of conversational AI.",
        "answer": "Yes"
      },
      {
        "text": "An interactive webchat feature on a company website can be implemented by using Azure Bot Service.",
        "answer": "Yes"
      },
      {
        "text": "Automatically generating captions for pre-recorded videos is an example of conversational AI.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 232,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "What is an example of the Microsoft responsible AI principle of transparency?",
    "choices": {
      "A": "ensuring that opportunities are allocated equally to all applicants",
      "B": "helping users understand the decisions made by an AI system",
      "C": "ensuring that developers are accountable for the solutions they create",
      "D": "ensuring that the privileged data of users is stored in a secure manner"
    },
    "answer": "B"
  },
  {
    "id": 233,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to provide customers with the ability to query the status of orders by using phones, social media, or digital assistants. What should you use?",
    "choices": {
      "A": "an Azure Machine Learning model",
      "B": "the Translator service",
      "C": "a Form Recognizer model",
      "D": "Azure Bot Service"
    },
    "answer": "D"
  },
  {
    "id": 234,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You plan to build a conversational AI solution that can integrate with Microsoft Teams, Microsoft Cortana, and Amazon Alexa. Which service should you use?",
    "choices": {
      "A": "Azure Bot Service",
      "B": "Azure Cognitive Search",
      "C": "Speech",
      "D": "Language service"
    },
    "answer": "A"
  },
  {
    "id": 235,
    "type": "hotspot_yes_no",
    "img": null,
    "_img_comment": "placeholder; likely required (hotspot/table layout)",
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "An interactive webchat feature on a company website can be implemented by using Azure Bot Service.",
        "answer": "Yes"
      },
      {
        "text": "Automatically generating captions for pre-recorded videos is an example of conversational AI.",
        "answer": "No"
      },
      {
        "text": "A smart device in the home that responds to questions such as \"When is my next appointment?\" is an example of conversational AI.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 236,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; answer derived from OCR though question numbering missing",
    "question": "Which Azure Cognitive Services service can be used to identify documents that contain sensitive information?",
    "choices": {
      "A": "Custom Vision",
      "B": "Conversational Language Understanding",
      "C": "Form Recognizer"
    },
    "answer": "C"
  },
  {
    "id": 237,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "Detecting unusual temperature fluctuations for a large machine is an example of [BLANK].",
    "options": [
      "a computer vision workload.",
      "a knowledge mining workload.",
      "a natural language processing (NLP) workload.",
      "an anomaly detection workload."
    ],
    "answer": "an anomaly detection workload."
  },
  {
    "id": 238,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "A smart device that responds to the question \"What is the stock price of Contoso, Ltd.?\" is an example of which AI workload?",
    "choices": {
      "A": "knowledge mining",
      "B": "natural language processing",
      "C": "computer vision",
      "D": "anomaly detection"
    },
    "answer": "B"
  },
  {
    "id": 239,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the machine learning models to the appropriate descriptions.",
    "choices_pool": [
      "Classification",
      "Clustering",
      "Regression"
    ],
    "targets": [
      {
        "text": "A supervised machine learning model used to predict numeric values.",
        "answer": "Regression"
      },
      {
        "text": "A supervised machine learning model used to predict categories.",
        "answer": "Classification"
      },
      {
        "text": "An unsupervised machine learning model used to group similar entities based on features.",
        "answer": "Clustering"
      }
    ]
  },
  {
    "id": 240,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are building a tool that will process images from retail stores and identify the products of competitors. The solution must be trained on images provided by your company. Which Azure AI service should you use?",
    "choices": {
      "A": "Form Recognizer",
      "B": "Custom Vision",
      "C": "Face",
      "D": "Computer Vision"
    },
    "answer": "B"
  },
  {
    "id": 241,
    "type": "hotspot_single_select",
    "img": null,
    "_img_comment": "placeholder; answer not present in OCR (missing 'Correct Answer')",
    "prompt": "Select the answer that correctly completes the sentence.",
    "sentence": "Predicting how many hours of overtime a delivery person will work based on the number of orders received is an example of [BLANK].",
    "options": [
      "classification.",
      "clustering.",
      "regression."
    ],
    "answer": "regression."
  },
  {
    "id": 242,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "Predicting agricultural yields based on weather conditions and soil quality measurements is an example of which type of machine learning model?",
    "choices": {
      "A": "classification",
      "B": "regression",
      "C": "clustering"
    },
    "answer": "B"
  },
  {
    "id": 243,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You need to identify street names based on street signs in photographs. Which type of computer vision should you use?",
    "choices": {
      "A": "object detection",
      "B": "optical character recognition (OCR)",
      "C": "image classification",
      "D": "facial recognition"
    },
    "answer": "B"
  },
  {
    "id": 244,
    "type": "drag_and_drop",
    "img": null,
    "_img_comment": "placeholder; likely required (drag/drop UI)",
    "prompt": "Match the types of computer vision workloads to the appropriate scenarios.",
    "choices_pool": [
      "Image classification",
      "Object detection",
      "Optical character recognition (OCR)"
    ],
    "targets": [
      {
        "text": "Generate captions for images.",
        "answer": "Image classification"
      },
      {
        "text": "Extract movie title names from movie poster images.",
        "answer": "Optical character recognition (OCR)"
      },
      {
        "text": "Locate vehicles in images.",
        "answer": "Object detection"
      }
    ]
  },
  {
    "id": 245,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You have a bot that identifies the brand names of products in images of supermarket shelves. Which service does the bot use?",
    "choices": {
      "A": "AI enrichment for Azure Search capabilities",
      "B": "Computer Vision Image Analysis capabilities",
      "C": "Custom Vision Image Classification capabilities",
      "D": "Language Understanding capabilities"
    },
    "answer": "B"
  },
  {
    "id": 246,
    "type": "multiple_choice",
    "img": null,
    "_img_comment": "placeholder; set if question needs an image",
    "question": "You are developing a chatbot solution in Azure. Which service should you use to determine a user's intent?",
    "choices": {
      "A": "Translator",
      "B": "Language",
      "C": "Azure Cognitive Search",
      "D": "Speech"
    },
    "answer": "B"
  }
];

export default questions;
