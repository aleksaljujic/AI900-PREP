// AI-900 Synthetic Question Set
// Total: 100 synthetic questions

const questions = [
  {
    "id": 247,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to extract the total amount and vendor name from scanned paper receipts automatically. Which Azure AI service should you use?",
    "choices": {
      "A": "Custom Vision",
      "B": "Computer Vision",
      "C": "Form Recognizer",
      "D": "Text Analytics"
    },
    "answer": "C"
  },
  {
    "id": 248,
    "type": "multiple_choice",
    "img": null,
    "question": "You want to build a chatbot that answers common customer questions using an existing FAQ document. Which service should you use to process the FAQ content?",
    "choices": {
      "A": "Azure Bot Service",
      "B": "QnA Maker",
      "C": "Language Understanding (LUIS)",
      "D": "Text Analytics"
    },
    "answer": "B"
  },
  {
    "id": 249,
    "type": "multiple_choice",
    "img": null,
    "question": "A loan approval AI system rejects significantly more applications from women than men, even when financial profiles are identical. Which responsible AI principle is being violated?",
    "choices": {
      "A": "Reliability and safety",
      "B": "Transparency",
      "C": "Fairness",
      "D": "Inclusiveness"
    },
    "answer": "C"
  },
  {
    "id": 250,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to convert a spoken customer support call into a written transcript. Which Azure AI service should you use?",
    "choices": {
      "A": "Translator",
      "B": "Language service",
      "C": "Speech",
      "D": "Form Recognizer"
    },
    "answer": "C"
  },
  {
    "id": 251,
    "type": "multiple_choice",
    "img": null,
    "question": "Which type of machine learning should you use to predict the number of units of a product that will be sold next quarter?",
    "choices": {
      "A": "Clustering",
      "B": "Classification",
      "C": "Regression",
      "D": "Anomaly detection"
    },
    "answer": "C"
  },
  {
    "id": 252,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a model that will identify whether an email is spam or not spam. Which type of machine learning should you use?",
    "choices": {
      "A": "Regression",
      "B": "Clustering",
      "C": "Classification",
      "D": "Reinforcement learning"
    },
    "answer": "C"
  },
  {
    "id": 253,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a dataset of customer purchase histories. You want to group customers into segments based on their buying behavior without using predefined categories. Which type of machine learning should you use?",
    "choices": {
      "A": "Regression",
      "B": "Classification",
      "C": "Supervised learning",
      "D": "Clustering"
    },
    "answer": "D"
  },
  {
    "id": 254,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to identify the location of cars in parking lot images and draw a bounding box around each one. Which type of computer vision should you use?",
    "choices": {
      "A": "Image classification",
      "B": "Semantic segmentation",
      "C": "Object detection",
      "D": "Optical character recognition"
    },
    "answer": "C"
  },
  {
    "id": 255,
    "type": "multiple_choice",
    "img": null,
    "question": "A historian wants to make old handwritten manuscripts searchable by converting the handwriting into digital text. Which type of computer vision should you use?",
    "choices": {
      "A": "Object detection",
      "B": "Image classification",
      "C": "Facial recognition",
      "D": "Optical character recognition (OCR)"
    },
    "answer": "D"
  },
  {
    "id": 256,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to determine whether product reviews on your website are positive, negative, or neutral. Which natural language processing workload should you use?",
    "choices": {
      "A": "Key phrase extraction",
      "B": "Sentiment analysis",
      "C": "Named entity recognition",
      "D": "Language detection"
    },
    "answer": "B"
  },
  {
    "id": 257,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to identify the names of people, places, and organizations mentioned in a collection of news articles. Which natural language processing workload should you use?",
    "choices": {
      "A": "Sentiment analysis",
      "B": "Language detection",
      "C": "Named entity recognition",
      "D": "Key phrase extraction"
    },
    "answer": "C"
  },
  {
    "id": 258,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to summarize a large collection of insurance claim reports by identifying the most important topics discussed. Which natural language processing workload should you use?",
    "choices": {
      "A": "Sentiment analysis",
      "B": "Translation",
      "C": "Named entity recognition",
      "D": "Key phrase extraction"
    },
    "answer": "D"
  },
  {
    "id": 259,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a voice assistant that reads recipe instructions aloud to users who have reduced vision. Which Azure AI service should you use?",
    "choices": {
      "A": "Translator",
      "B": "Language service",
      "C": "Speech",
      "D": "QnA Maker"
    },
    "answer": "C"
  },
  {
    "id": 260,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to deploy a customer service bot that can communicate with users through Microsoft Teams, webchat, and email. Which Azure service should you use?",
    "choices": {
      "A": "QnA Maker",
      "B": "Language Understanding (LUIS)",
      "C": "Azure Bot Service",
      "D": "Text Analytics"
    },
    "answer": "C"
  },
  {
    "id": 261,
    "type": "multiple_choice",
    "img": null,
    "question": "An AI medical diagnosis system gives a confident prediction even when critical patient data fields are missing. Which responsible AI principle is being violated?",
    "choices": {
      "A": "Fairness",
      "B": "Inclusiveness",
      "C": "Transparency",
      "D": "Reliability and safety"
    },
    "answer": "D"
  },
  {
    "id": 262,
    "type": "multiple_choice",
    "img": null,
    "question": "An AI hiring tool does not support screen readers, making it impossible for visually impaired candidates to complete applications. Which responsible AI principle is being violated?",
    "choices": {
      "A": "Fairness",
      "B": "Inclusiveness",
      "C": "Privacy and security",
      "D": "Accountability"
    },
    "answer": "B"
  },
  {
    "id": 263,
    "type": "multiple_choice",
    "img": null,
    "question": "A bank uses an AI model to approve or reject loan applications, but customers are never told the reason for a rejection. Which responsible AI principle is being violated?",
    "choices": {
      "A": "Fairness",
      "B": "Reliability and safety",
      "C": "Transparency",
      "D": "Privacy and security"
    },
    "answer": "C"
  },
  {
    "id": 264,
    "type": "multiple_choice",
    "img": null,
    "question": "A company trains an NLP model using customer emails that were collected without the customers' knowledge or consent. Which responsible AI principle is being violated?",
    "choices": {
      "A": "Transparency",
      "B": "Fairness",
      "C": "Accountability",
      "D": "Privacy and security"
    },
    "answer": "D"
  },
  {
    "id": 265,
    "type": "multiple_choice",
    "img": null,
    "question": "A company deploys an AI system that makes credit decisions with no mechanism for a human to review or override the decision. Which responsible AI principle is being violated?",
    "choices": {
      "A": "Inclusiveness",
      "B": "Accountability",
      "C": "Transparency",
      "D": "Reliability and safety"
    },
    "answer": "B"
  },
  {
    "id": 266,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to enable the 'Explain best model' feature in Azure Automated ML. Which responsible AI principle does this support?",
    "choices": {
      "A": "Fairness",
      "B": "Privacy and security",
      "C": "Transparency",
      "D": "Reliability and safety"
    },
    "answer": "C"
  },
  {
    "id": 267,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to build a custom image classification model to identify whether photos of food are safe for posting on your platform. Which Azure service should you use?",
    "choices": {
      "A": "Computer Vision",
      "B": "Custom Vision",
      "C": "Form Recognizer",
      "D": "Face"
    },
    "answer": "B"
  },
  {
    "id": 268,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to use a prebuilt model to detect well-known brand logos in photographs without training your own model. Which Azure service should you use?",
    "choices": {
      "A": "Custom Vision",
      "B": "Face",
      "C": "Computer Vision",
      "D": "Form Recognizer"
    },
    "answer": "C"
  },
  {
    "id": 269,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to verify whether two photographs show the same person. Which Azure AI service should you use?",
    "choices": {
      "A": "Computer Vision",
      "B": "Custom Vision",
      "C": "Face",
      "D": "Form Recognizer"
    },
    "answer": "C"
  },
  {
    "id": 270,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building an Azure Machine Learning pipeline to predict house prices. What should you do immediately before running the pipeline?",
    "choices": {
      "A": "Register the model",
      "B": "Create a compute resource",
      "C": "Deploy to AKS",
      "D": "Export the dataset"
    },
    "answer": "B"
  },
  {
    "id": 271,
    "type": "multiple_choice",
    "img": null,
    "question": "You want to create a machine learning pipeline using a drag-and-drop interface without writing code. Which Azure Machine Learning tool should you use?",
    "choices": {
      "A": "Azure Machine Learning Notebooks",
      "B": "Automated ML",
      "C": "Azure Machine Learning Designer",
      "D": "Azure Kubernetes Service"
    },
    "answer": "C"
  },
  {
    "id": 272,
    "type": "multiple_choice",
    "img": null,
    "question": "You want Azure Machine Learning to automatically try multiple algorithms and select the best performing one for a regression task. Which feature should you use?",
    "choices": {
      "A": "Azure Machine Learning Designer",
      "B": "Automated ML",
      "C": "Azure Notebooks",
      "D": "Azure Data Factory"
    },
    "answer": "B"
  },
  {
    "id": 273,
    "type": "multiple_choice",
    "img": null,
    "question": "You have trained a model using Azure Machine Learning Designer. You need to split the original dataset so that part is used for training and part for evaluation. Which module should you use?",
    "choices": {
      "A": "Select Columns in Dataset",
      "B": "Clean Missing Data",
      "C": "Join Data",
      "D": "Split Data"
    },
    "answer": "D"
  },
  {
    "id": 274,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to translate a company's product documentation from English into Spanish, French, and German. Which Azure AI service should you use?",
    "choices": {
      "A": "Language service",
      "B": "Translator",
      "C": "Speech",
      "D": "QnA Maker"
    },
    "answer": "B"
  },
  {
    "id": 275,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a LUIS application for a music streaming service. A user says 'Play something relaxing by Adele'. What is this sentence an example of?",
    "choices": {
      "A": "An intent",
      "B": "An entity",
      "C": "An utterance",
      "D": "A domain"
    },
    "answer": "C"
  },
  {
    "id": 276,
    "type": "multiple_choice",
    "img": null,
    "question": "In a Language Understanding (LUIS) model, what does the None intent represent?",
    "choices": {
      "A": "A fallback intent when the model is uncertain",
      "B": "Utterances that are outside the scope of the application",
      "C": "An intent with no entities attached",
      "D": "A system-generated intent for greetings"
    },
    "answer": "B"
  },
  {
    "id": 277,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a QnA Maker bot and you want it to learn from users over time and improve the relevance of its answers. What should you enable?",
    "choices": {
      "A": "Chit-chat",
      "B": "Multi-turn conversations",
      "C": "Active learning",
      "D": "Confidence threshold"
    },
    "answer": "C"
  },
  {
    "id": 278,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to add casual, friendly responses to your QnA Maker bot, such as greetings and jokes. What should you add?",
    "choices": {
      "A": "Active learning",
      "B": "Chit-chat",
      "C": "Multi-turn questions",
      "D": "Custom entities"
    },
    "answer": "B"
  },
  {
    "id": 279,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to evaluate a classification model. Which metric should you use?",
    "choices": {
      "A": "Root mean squared error (RMSE)",
      "B": "Coefficient of determination (R2)",
      "C": "Mean absolute error (MAE)",
      "D": "Area under the curve (AUC)"
    },
    "answer": "D"
  },
  {
    "id": 280,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to evaluate a regression model. Which metric should you use?",
    "choices": {
      "A": "Accuracy",
      "B": "F1 score",
      "C": "Root mean squared error (RMSE)",
      "D": "AUC"
    },
    "answer": "C"
  },
  {
    "id": 281,
    "type": "multiple_choice",
    "img": null,
    "question": "You have trained a classification model and want to see its true positives, false positives, true negatives, and false negatives. Which tool should you use?",
    "choices": {
      "A": "ROC curve",
      "B": "Confusion matrix",
      "C": "Scatter plot",
      "D": "Feature importance chart"
    },
    "answer": "B"
  },
  {
    "id": 282,
    "type": "multiple_choice",
    "img": null,
    "question": "You are predicting taxi fares. The dataset contains columns: trip_id, distance_km, passenger_count, pickup_zone, and fare_amount. Which column is the label?",
    "choices": {
      "A": "trip_id",
      "B": "distance_km",
      "C": "passenger_count",
      "D": "fare_amount"
    },
    "answer": "D"
  },
  {
    "id": 283,
    "type": "multiple_choice",
    "img": null,
    "question": "You are predicting taxi fares. The dataset contains: trip_id, distance_km, passenger_count, pickup_zone, and fare_amount. Which column should NOT be used as a feature?",
    "choices": {
      "A": "distance_km",
      "B": "pickup_zone",
      "C": "trip_id",
      "D": "passenger_count"
    },
    "answer": "C"
  },
  {
    "id": 284,
    "type": "multiple_choice",
    "img": null,
    "question": "You split a raw date field into three separate columns: day, month, and year, to improve your model. This is an example of which process?",
    "choices": {
      "A": "Feature selection",
      "B": "Data labeling",
      "C": "Model evaluation",
      "D": "Feature engineering"
    },
    "answer": "D"
  },
  {
    "id": 285,
    "type": "multiple_choice",
    "img": null,
    "question": "You choose to use only the temperature and humidity columns from a weather dataset and ignore all other columns when training a model. This is an example of which process?",
    "choices": {
      "A": "Feature engineering",
      "B": "Feature selection",
      "C": "Model training",
      "D": "Data normalization"
    },
    "answer": "B"
  },
  {
    "id": 286,
    "type": "multiple_choice",
    "img": null,
    "question": "You detect unusual spikes in factory sensor readings that may indicate equipment failure. Which type of AI workload is this?",
    "choices": {
      "A": "Computer vision",
      "B": "Natural language processing",
      "C": "Anomaly detection",
      "D": "Conversational AI"
    },
    "answer": "C"
  },
  {
    "id": 287,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to identify unusual credit card transactions that might indicate fraud. Which type of AI workload should you use?",
    "choices": {
      "A": "Regression",
      "B": "Clustering",
      "C": "Anomaly detection",
      "D": "Computer vision"
    },
    "answer": "C"
  },
  {
    "id": 288,
    "type": "multiple_choice",
    "img": null,
    "question": "You are deploying an inference pipeline for a low-traffic test scenario. Which deployment option should you choose?",
    "choices": {
      "A": "Azure Kubernetes Service (AKS)",
      "B": "Azure Container Instances (ACI)",
      "C": "Azure Functions",
      "D": "Azure SQL Database"
    },
    "answer": "B"
  },
  {
    "id": 289,
    "type": "multiple_choice",
    "img": null,
    "question": "You are deploying an inference pipeline that must handle millions of requests per day in production. Which deployment option should you choose?",
    "choices": {
      "A": "Azure Container Instances (ACI)",
      "B": "Azure Machine Learning compute cluster",
      "C": "Azure Kubernetes Service (AKS)",
      "D": "Azure App Service"
    },
    "answer": "C"
  },
  {
    "id": 290,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to track and manage multiple versions of a trained model in Azure Machine Learning. What should you do?",
    "choices": {
      "A": "Publish a pipeline",
      "B": "Register the model",
      "C": "Create a compute cluster",
      "D": "Export the dataset"
    },
    "answer": "B"
  },
  {
    "id": 291,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure AI service provides prebuilt models for reading text from images and documents, including handwriting?",
    "choices": {
      "A": "Form Recognizer",
      "B": "Custom Vision",
      "C": "Computer Vision",
      "D": "Face"
    },
    "answer": "C"
  },
  {
    "id": 292,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to automatically generate a text description of the content of a digital photograph to create alt-text for a website. Which Computer Vision feature should you use?",
    "choices": {
      "A": "Object detection",
      "B": "Facial analysis",
      "C": "OCR",
      "D": "Image description"
    },
    "answer": "D"
  },
  {
    "id": 293,
    "type": "multiple_choice",
    "img": null,
    "question": "Identifying which pixels in an image belong to a road, which belong to a car, and which belong to the sky is an example of which computer vision workload?",
    "choices": {
      "A": "Object detection",
      "B": "Image classification",
      "C": "Semantic segmentation",
      "D": "Optical character recognition"
    },
    "answer": "C"
  },
  {
    "id": 294,
    "type": "multiple_choice",
    "img": null,
    "question": "You are designing an AI system for self-driving cars that must continue to operate safely when road markings are worn or partially obscured. Which responsible AI principle is most relevant?",
    "choices": {
      "A": "Fairness",
      "B": "Reliability and safety",
      "C": "Inclusiveness",
      "D": "Transparency"
    },
    "answer": "B"
  },
  {
    "id": 295,
    "type": "multiple_choice",
    "img": null,
    "question": "You are designing an AI voice recognition system and want to ensure it works equally well for users with different accents and speech impediments. Which responsible AI principle are you applying?",
    "choices": {
      "A": "Accountability",
      "B": "Privacy and security",
      "C": "Reliability and safety",
      "D": "Inclusiveness"
    },
    "answer": "D"
  },
  {
    "id": 296,
    "type": "multiple_choice",
    "img": null,
    "question": "Your company establishes a risk governance committee including legal, risk management, and privacy officers to oversee all AI deployments. Which responsible AI principle does this demonstrate?",
    "choices": {
      "A": "Transparency",
      "B": "Fairness",
      "C": "Accountability",
      "D": "Reliability and safety"
    },
    "answer": "C"
  },
  {
    "id": 297,
    "type": "multiple_choice",
    "img": null,
    "question": "A facial recognition system performs well on lighter skin tones but poorly on darker skin tones due to imbalanced training data. Which responsible AI principle is being violated?",
    "choices": {
      "A": "Accountability",
      "B": "Inclusiveness",
      "C": "Fairness",
      "D": "Privacy and security"
    },
    "answer": "C"
  },
  {
    "id": 298,
    "type": "multiple_choice",
    "img": null,
    "question": "You want to use Automated ML in Azure Machine Learning. You must still provide which of the following?",
    "choices": {
      "A": "The algorithm to use",
      "B": "The training code",
      "C": "A labeled dataset and the target label column",
      "D": "A pre-trained model"
    },
    "answer": "C"
  },
  {
    "id": 299,
    "type": "multiple_choice",
    "img": null,
    "question": "You are evaluating a model and want to understand why it made specific predictions. Which Azure Machine Learning feature should you enable?",
    "choices": {
      "A": "Data labeling",
      "B": "Model interpretability / Explain model",
      "C": "Compute clustering",
      "D": "Pipeline scheduling"
    },
    "answer": "B"
  },
  {
    "id": 300,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure Cognitive Services service should you use to identify the language in which a document is written?",
    "choices": {
      "A": "Translator",
      "B": "Speech",
      "C": "Language service",
      "D": "Form Recognizer"
    },
    "answer": "C"
  },
  {
    "id": 301,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to count animals in a wildlife reserve using drone footage. Which type of AI workload should you use?",
    "choices": {
      "A": "Natural language processing",
      "B": "Computer vision",
      "C": "Anomaly detection",
      "D": "Conversational AI"
    },
    "answer": "B"
  },
  {
    "id": 302,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to identify which of three photographs shows the same person as a reference photo. Which Face API operation should you use?",
    "choices": {
      "A": "Detect",
      "B": "Group",
      "C": "Find Similar",
      "D": "Verify"
    },
    "answer": "D"
  },
  {
    "id": 303,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a large set of unlabeled photos of people and want to automatically group photos that appear to show the same person. Which Face API operation should you use?",
    "choices": {
      "A": "Verify",
      "B": "Identify",
      "C": "Group",
      "D": "Detect"
    },
    "answer": "C"
  },
  {
    "id": 304,
    "type": "multiple_choice",
    "img": null,
    "question": "A user types 'I'd like to book a flight to Paris for next Friday' into a chatbot. In Language Understanding (LUIS), 'Paris' and 'next Friday' are examples of which element?",
    "choices": {
      "A": "Intents",
      "B": "Utterances",
      "C": "Entities",
      "D": "Domains"
    },
    "answer": "C"
  },
  {
    "id": 305,
    "type": "multiple_choice",
    "img": null,
    "question": "In Language Understanding (LUIS), 'BookFlight' is an example of which element?",
    "choices": {
      "A": "Entity",
      "B": "Intent",
      "C": "Utterance",
      "D": "Domain"
    },
    "answer": "B"
  },
  {
    "id": 306,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to make a web service call to the Translator API to translate English text into both Spanish and Italian in a single call. Which parameter format is correct?",
    "choices": {
      "A": "/translate?from=es&to=it&to=en",
      "B": "/translate?from=en&to=es&to=it",
      "C": "/translate?to=en&from=es,it",
      "D": "/translate?source=en&target=es,it"
    },
    "answer": "B"
  },
  {
    "id": 307,
    "type": "multiple_choice",
    "img": null,
    "question": "A recycling machine must automatically identify bottles by shape and reject all other items. Which type of AI workload should you use?",
    "choices": {
      "A": "Anomaly detection",
      "B": "Natural language processing",
      "C": "Computer vision",
      "D": "Conversational AI"
    },
    "answer": "C"
  },
  {
    "id": 308,
    "type": "multiple_choice",
    "img": null,
    "question": "You use Azure Machine Learning Designer to build and test a model. After testing, you want to make it available as a REST endpoint. What must you create first?",
    "choices": {
      "A": "A training pipeline",
      "B": "A compute cluster",
      "C": "A real-time inference pipeline",
      "D": "A dataset"
    },
    "answer": "C"
  },
  {
    "id": 309,
    "type": "multiple_choice",
    "img": null,
    "question": "Normalizing all numeric features in a dataset to a range between 0 and 1 before training is an example of which process?",
    "choices": {
      "A": "Feature selection",
      "B": "Model evaluation",
      "C": "Feature engineering",
      "D": "Data labeling"
    },
    "answer": "C"
  },
  {
    "id": 310,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to predict whether a patient will be re-admitted to hospital within 30 days based on their medical history. Which type of machine learning should you use?",
    "choices": {
      "A": "Regression",
      "B": "Clustering",
      "C": "Classification",
      "D": "Anomaly detection"
    },
    "answer": "C"
  },
  {
    "id": 311,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to predict the energy consumption in kilowatt-hours of a building next month based on historical usage data. Which type of machine learning should you use?",
    "choices": {
      "A": "Clustering",
      "B": "Regression",
      "C": "Classification",
      "D": "Reinforcement learning"
    },
    "answer": "B"
  },
  {
    "id": 312,
    "type": "multiple_choice",
    "img": null,
    "question": "A smart home device responds to the question 'What is the weather like today?' and speaks an answer aloud. Which two AI workloads does this involve?",
    "choices": {
      "A": "Computer vision and translation",
      "B": "Anomaly detection and OCR",
      "C": "Speech recognition and speech synthesis",
      "D": "Sentiment analysis and entity recognition"
    },
    "answer": "C"
  },
  {
    "id": 313,
    "type": "multiple_choice",
    "img": null,
    "question": "You want to use Azure AI to search through thousands of scanned legal contracts and extract key clauses. Which type of AI workload is this?",
    "choices": {
      "A": "Conversational AI",
      "B": "Knowledge mining",
      "C": "Anomaly detection",
      "D": "Computer vision"
    },
    "answer": "B"
  },
  {
    "id": 314,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure AI service is used to index and search content across a large set of documents, images, and files using AI enrichment?",
    "choices": {
      "A": "QnA Maker",
      "B": "Azure Cognitive Search",
      "C": "Language service",
      "D": "Form Recognizer"
    },
    "answer": "B"
  },
  {
    "id": 315,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to tag photographs shared on a social media platform so that they are automatically labeled with the names of known people. Which Azure AI service should you use?",
    "choices": {
      "A": "Custom Vision",
      "B": "Computer Vision",
      "C": "Face",
      "D": "Form Recognizer"
    },
    "answer": "C"
  },
  {
    "id": 316,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a QnA Maker knowledge base from multiple sources. Which file format CAN be used to populate it?",
    "choices": {
      "A": "XLSX",
      "B": "PDF",
      "C": "ZIP",
      "D": "PPTX"
    },
    "answer": "B"
  },
  {
    "id": 317,
    "type": "multiple_choice",
    "img": null,
    "question": "You have trained a regression model and want to understand how well it fits the data overall. Which metric best represents this?",
    "choices": {
      "A": "F1 score",
      "B": "Accuracy",
      "C": "Coefficient of determination (R2)",
      "D": "True positive rate"
    },
    "answer": "C"
  },
  {
    "id": 318,
    "type": "multiple_choice",
    "img": null,
    "question": "When should you review evaluation metrics during a machine learning project?",
    "choices": {
      "A": "Before you choose the type of model",
      "B": "Before you clean the data",
      "C": "After you test the model on validation data",
      "D": "While the model is training"
    },
    "answer": "C"
  },
  {
    "id": 319,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to build a model that groups news articles into topics. You do not have predefined topic categories. Which machine learning approach should you use?",
    "choices": {
      "A": "Supervised regression",
      "B": "Supervised classification",
      "C": "Unsupervised clustering",
      "D": "Reinforcement learning"
    },
    "answer": "C"
  },
  {
    "id": 320,
    "type": "multiple_choice",
    "img": null,
    "question": "You want to evaluate a clustering model in Azure Machine Learning Designer. Which dataset should you use for evaluation?",
    "choices": {
      "A": "A separate test dataset not used in training",
      "B": "The original training dataset",
      "C": "A validation dataset with labels",
      "D": "A dataset from a different domain"
    },
    "answer": "B"
  },
  {
    "id": 321,
    "type": "multiple_choice",
    "img": null,
    "question": "Which of the following is an example of a conversational AI workload?",
    "choices": {
      "A": "A model that detects anomalies in server logs",
      "B": "A website bot that answers user questions about order status",
      "C": "A pipeline that classifies product images",
      "D": "A report that summarizes sales trends"
    },
    "answer": "B"
  },
  {
    "id": 322,
    "type": "multiple_choice",
    "img": null,
    "question": "Automatically generating captions for pre-recorded training videos is an example of which workload?",
    "choices": {
      "A": "Conversational AI",
      "B": "Knowledge mining",
      "C": "Speech recognition",
      "D": "Anomaly detection"
    },
    "answer": "C"
  },
  {
    "id": 323,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building an AI solution. You want Azure to record all automated decisions so that authorized staff can audit why a specific decision was made. Which responsible AI principle does this reflect?",
    "choices": {
      "A": "Privacy and security",
      "B": "Transparency",
      "C": "Fairness",
      "D": "Inclusiveness"
    },
    "answer": "B"
  },
  {
    "id": 324,
    "type": "multiple_choice",
    "img": null,
    "question": "You want to ensure a training dataset is representative of the full population to reduce model bias. Which responsible AI principle does this support?",
    "choices": {
      "A": "Accountability",
      "B": "Fairness",
      "C": "Reliability and safety",
      "D": "Transparency"
    },
    "answer": "B"
  },
  {
    "id": 325,
    "type": "multiple_choice",
    "img": null,
    "question": "A chatbot confirms a customer reservation at a restaurant. This is an example of which type of AI workload?",
    "choices": {
      "A": "Natural language processing",
      "B": "Computer vision",
      "C": "Conversational AI",
      "D": "Knowledge mining"
    },
    "answer": "C"
  },
  {
    "id": 326,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building an AI system that uses customer photos to approve or deny insurance claims for vehicle damage. Which type of computer vision is primarily used?",
    "choices": {
      "A": "Optical character recognition",
      "B": "Image classification",
      "C": "Facial recognition",
      "D": "Object detection"
    },
    "answer": "B"
  },
  {
    "id": 327,
    "type": "multiple_choice",
    "img": null,
    "question": "You have 100 narration scripts and 100 silent training videos. You need to generate an audio file for each video from its script. Which AI workload should you use?",
    "choices": {
      "A": "Speech recognition",
      "B": "Translation",
      "C": "Speech synthesis",
      "D": "Language modeling"
    },
    "answer": "C"
  },
  {
    "id": 328,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to provide customers with the ability to query their order status via phone, social media, and a website. Which Azure service should you use?",
    "choices": {
      "A": "QnA Maker",
      "B": "Azure Cognitive Search",
      "C": "Azure Bot Service",
      "D": "Language service"
    },
    "answer": "C"
  },
  {
    "id": 329,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to analyze social media posts to identify mentions of city names and determine which cities are discussed most frequently. Which NLP workload should you use?",
    "choices": {
      "A": "Sentiment analysis",
      "B": "Key phrase extraction",
      "C": "Named entity recognition",
      "D": "Language detection"
    },
    "answer": "C"
  },
  {
    "id": 330,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to read manuscripts written in multiple languages and categorize each one by subject matter. Which two NLP workloads are required?",
    "choices": {
      "A": "Sentiment analysis and OCR",
      "B": "Translation and key phrase extraction",
      "C": "Named entity recognition and sentiment analysis",
      "D": "Speech recognition and language modeling"
    },
    "answer": "B"
  },
  {
    "id": 331,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure AI capability can be used to build no-code apps with built-in natural language processing models?",
    "choices": {
      "A": "Azure Health Bot",
      "B": "Microsoft Bot Framework",
      "C": "Power Virtual Agents",
      "D": "Azure Machine Learning Designer"
    },
    "answer": "C"
  },
  {
    "id": 332,
    "type": "multiple_choice",
    "img": null,
    "question": "What is generative AI primarily used for?",
    "choices": {
      "A": "Detecting anomalies in time series data",
      "B": "Generating new content such as text, images, and code based on natural language prompts",
      "C": "Classifying images into predefined categories",
      "D": "Identifying named entities in documents"
    },
    "answer": "B"
  },
  {
    "id": 333,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure service provides access to large language models such as GPT-4 for building generative AI applications?",
    "choices": {
      "A": "Azure Machine Learning",
      "B": "Azure Cognitive Search",
      "C": "Azure OpenAI Service",
      "D": "Azure Bot Service"
    },
    "answer": "C"
  },
  {
    "id": 334,
    "type": "multiple_choice",
    "img": null,
    "question": "What is a large language model (LLM)?",
    "choices": {
      "A": "A model trained on labeled image datasets to classify photographs",
      "B": "A model trained on massive amounts of text data to understand and generate human language",
      "C": "A model that detects anomalies in structured data",
      "D": "A model that clusters similar records in a database"
    },
    "answer": "B"
  },
  {
    "id": 335,
    "type": "multiple_choice",
    "img": null,
    "question": "Which technique involves providing a large language model with examples in the prompt to guide its responses, without changing the model's weights?",
    "choices": {
      "A": "Fine-tuning",
      "B": "Prompt engineering",
      "C": "Transfer learning",
      "D": "Retrieval-augmented generation"
    },
    "answer": "B"
  },
  {
    "id": 336,
    "type": "multiple_choice",
    "img": null,
    "question": "What is the purpose of grounding a generative AI model?",
    "choices": {
      "A": "To prevent the model from generating responses in unsupported languages",
      "B": "To connect the model to specific, verified data sources so its responses are based on factual content",
      "C": "To reduce the model size for deployment on mobile devices",
      "D": "To ensure the model only responds to questions about a single topic"
    },
    "answer": "B"
  },
  {
    "id": 337,
    "type": "multiple_choice",
    "img": null,
    "question": "A generative AI system produces a confident but factually incorrect response not grounded in any source data. This type of error is known as what?",
    "choices": {
      "A": "Overfitting",
      "B": "A classification error",
      "C": "A hallucination",
      "D": "Model drift"
    },
    "answer": "C"
  },
  {
    "id": 338,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure AI service includes content safety filters to prevent harmful outputs from generative AI models?",
    "choices": {
      "A": "Azure Machine Learning",
      "B": "Azure OpenAI Service",
      "C": "Azure Cognitive Search",
      "D": "Azure Bot Service"
    },
    "answer": "B"
  },
  {
    "id": 339,
    "type": "multiple_choice",
    "img": null,
    "question": "A system prompt is used when deploying a generative AI application. What is the purpose of a system prompt?",
    "choices": {
      "A": "It defines the hardware resources allocated to the model",
      "B": "It sets the behavior, tone, and boundaries of the AI assistant before users interact with it",
      "C": "It controls the number of tokens the model can generate per request",
      "D": "It specifies the language the model will respond in"
    },
    "answer": "B"
  },
  {
    "id": 340,
    "type": "multiple_choice",
    "img": null,
    "question": "Microsoft Copilot is an example of which type of AI?",
    "choices": {
      "A": "Anomaly detection AI",
      "B": "Generative AI",
      "C": "Clustering AI",
      "D": "Computer vision AI"
    },
    "answer": "B"
  },
  {
    "id": 341,
    "type": "multiple_choice",
    "img": null,
    "question": "Which of the following is an example of responsible AI practice specifically for generative AI systems?",
    "choices": {
      "A": "Using a confusion matrix to evaluate model performance",
      "B": "Implementing content filters to block harmful or offensive outputs",
      "C": "Deploying the model to Azure Kubernetes Service for scalability",
      "D": "Using feature selection to reduce model complexity"
    },
    "answer": "B"
  },
  {
    "id": 342,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Form Recognizer can extract key-value pairs from scanned forms.",
        "answer": "Yes"
      },
      {
        "text": "Form Recognizer can translate extracted text into another language.",
        "answer": "No"
      },
      {
        "text": "Form Recognizer can identify tables within a scanned document.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 343,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Azure Bot Service can deliver a bot across Microsoft Teams and webchat simultaneously.",
        "answer": "Yes"
      },
      {
        "text": "Azure Bot Service is used to create the knowledge base content for a FAQ bot.",
        "answer": "No"
      },
      {
        "text": "A bot built with Azure Bot Service can communicate with Cortana users.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 344,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Automated ML in Azure Machine Learning can select the best algorithm for a task automatically.",
        "answer": "Yes"
      },
      {
        "text": "Automated ML can infer which column to use as the label without user input.",
        "answer": "No"
      },
      {
        "text": "Automated ML supports regression, classification, and time series forecasting tasks.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 345,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The Speech service can convert spoken audio into written text.",
        "answer": "Yes"
      },
      {
        "text": "The Speech service can translate text between two written languages.",
        "answer": "No"
      },
      {
        "text": "The Speech service can convert written text into spoken audio.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 346,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The Translator service can detect the language of a text input.",
        "answer": "Yes"
      },
      {
        "text": "The Translator service can transcribe spoken audio into text.",
        "answer": "No"
      },
      {
        "text": "The Translator service can translate a document from English into multiple target languages in a single call.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 347,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Custom Vision requires you to provide your own labeled training images.",
        "answer": "Yes"
      },
      {
        "text": "Custom Vision can be used to analyze video streams in real time.",
        "answer": "No"
      },
      {
        "text": "Custom Vision supports both image classification and object detection project types.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 348,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A regression model requires numeric labels.",
        "answer": "Yes"
      },
      {
        "text": "A clustering model requires labeled training data.",
        "answer": "No"
      },
      {
        "text": "A classification model can use non-numeric labels such as 'Yes' and 'No'.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 349,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Predicting the sale price of a house based on size and location is an example of regression.",
        "answer": "Yes"
      },
      {
        "text": "Predicting whether a customer will churn is an example of regression.",
        "answer": "No"
      },
      {
        "text": "Grouping products into categories based on purchase patterns without predefined groups is an example of clustering.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 350,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The Language service can identify the sentiment of a text.",
        "answer": "Yes"
      },
      {
        "text": "The Language service can detect faces in an image.",
        "answer": "No"
      },
      {
        "text": "The Language service can identify organizations mentioned in a document.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 351,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "In Azure Machine Learning Designer, you can save a pipeline in progress as a draft.",
        "answer": "Yes"
      },
      {
        "text": "Azure Machine Learning Designer supports writing custom JavaScript modules.",
        "answer": "No"
      },
      {
        "text": "Azure Machine Learning Designer lets you add and connect modules on a visual canvas.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 352,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Object detection can identify the location of multiple objects of different types in a single image.",
        "answer": "Yes"
      },
      {
        "text": "Image classification assigns a single label to an entire image.",
        "answer": "Yes"
      },
      {
        "text": "Object detection and image classification always produce the same output.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 353,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A generative AI model can produce original text based on a natural language prompt.",
        "answer": "Yes"
      },
      {
        "text": "Azure OpenAI Service includes built-in content safety filters.",
        "answer": "Yes"
      },
      {
        "text": "Generative AI models cannot be used for writing code.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 354,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A hallucination in a generative AI system refers to a confident but factually incorrect output.",
        "answer": "Yes"
      },
      {
        "text": "Grounding a model means connecting it to verified data sources to improve factual accuracy.",
        "answer": "Yes"
      },
      {
        "text": "Prompt engineering involves retraining a model's weights using new examples.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 355,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The Face service can detect whether a person is wearing glasses.",
        "answer": "Yes"
      },
      {
        "text": "The Face service will always fail to recognize a person if they are wearing sunglasses.",
        "answer": "No"
      },
      {
        "text": "Providing more sample photos of a person from different angles improves Face service recognition accuracy.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 356,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "You should evaluate a model using data that was not used to train it.",
        "answer": "Yes"
      },
      {
        "text": "Accuracy is always the best metric for evaluating any machine learning model.",
        "answer": "No"
      },
      {
        "text": "Labeling is the process of tagging training data with known output values.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 357,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "QnA Maker can generate a knowledge base from an existing FAQ webpage.",
        "answer": "Yes"
      },
      {
        "text": "QnA Maker can query an Azure SQL database to retrieve answers.",
        "answer": "No"
      },
      {
        "text": "QnA Maker supports active learning to improve answer relevance over time.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 358,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A chatbot built with Azure Bot Service can support voice input through integration with the Speech service.",
        "answer": "Yes"
      },
      {
        "text": "A single bot built with Azure Bot Service requires a separate deployment for each communication channel.",
        "answer": "No"
      },
      {
        "text": "Chatbots can manage conversation flows using a combination of natural language and structured menu options.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 359,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Predicting whether a new patient will develop type 2 diabetes based on clinical measurements is an example of [BLANK].",
    "options": ["regression.", "clustering.", "classification.", "anomaly detection."],
    "answer": "classification."
  },
  {
    "id": 360,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Predicting the exact temperature in Celsius for a city tomorrow is an example of [BLANK].",
    "options": ["classification.", "clustering.", "regression.", "reinforcement learning."],
    "answer": "regression."
  },
  {
    "id": 361,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "The [BLANK] type of machine learning is used when training data does not include labels.",
    "options": ["supervised", "unsupervised", "reinforcement", "deep"],
    "answer": "unsupervised"
  },
  {
    "id": 362,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "An AI system that provides captions for photos uploaded to a website is using [BLANK].",
    "options": ["natural language processing.", "computer vision.", "anomaly detection.", "conversational AI."],
    "answer": "computer vision."
  },
  {
    "id": 363,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Identifying the street name from a photo of a road sign is an example of [BLANK].",
    "options": ["object detection.", "image classification.", "optical character recognition (OCR).", "semantic segmentation."],
    "answer": "optical character recognition (OCR)."
  },
  {
    "id": 364,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "An AI model that does not allow a human supervisor to override its decisions violates the [BLANK] principle of responsible AI.",
    "options": ["fairness", "transparency", "accountability", "reliability and safety"],
    "answer": "accountability"
  },
  {
    "id": 365,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "An AI system trained on data obtained without user consent violates the [BLANK] principle of responsible AI.",
    "options": ["fairness", "transparency", "accountability", "privacy and security"],
    "answer": "privacy and security"
  },
  {
    "id": 366,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "When building a machine learning model in Azure Designer, a [BLANK] resource must exist before you can run the pipeline.",
    "options": ["registered model", "compute", "published endpoint", "linked service"],
    "answer": "compute"
  },
  {
    "id": 367,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "In a Language Understanding (LUIS) application, an example of something a user might say is called [BLANK].",
    "options": ["an intent", "an entity", "an utterance", "a domain"],
    "answer": "an utterance"
  },
  {
    "id": 368,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "The [BLANK] service should be used to translate text from English into German and Japanese in a single API call.",
    "options": ["Speech", "Language service", "Translator", "Form Recognizer"],
    "answer": "Translator"
  },
  {
    "id": 369,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "An AI assistant that generates new marketing copy from a brief description is an example of [BLANK].",
    "options": ["anomaly detection.", "generative AI.", "computer vision.", "clustering."],
    "answer": "generative AI."
  },
  {
    "id": 370,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "When a generative AI model produces a plausible-sounding but incorrect answer with no factual basis, this is called a [BLANK].",
    "options": ["regression error.", "hallucination.", "false negative.", "model drift."],
    "answer": "hallucination."
  },
  {
    "id": 371,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Connecting a generative AI model to a company's internal knowledge base so its answers are based on verified documents is called [BLANK].",
    "options": ["fine-tuning.", "grounding.", "prompt chaining.", "clustering."],
    "answer": "grounding."
  },
  {
    "id": 372,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "The [BLANK] principle of responsible AI requires that AI systems work correctly even when they encounter unexpected inputs.",
    "options": ["fairness", "transparency", "reliability and safety", "inclusiveness"],
    "answer": "reliability and safety"
  },
  {
    "id": 373,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Designing an AI solution so that it works equally well for users with hearing, visual, or motor impairments reflects the [BLANK] principle.",
    "options": ["fairness", "inclusiveness", "accountability", "transparency"],
    "answer": "inclusiveness"
  },
  {
    "id": 374,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Using RFM (Recency, Frequency, Monetary) values to divide customers into segments is an example of [BLANK].",
    "options": ["classification.", "regression.", "clustering.", "anomaly detection."],
    "answer": "clustering."
  },
  {
    "id": 375,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each scenario to the correct type of machine learning.",
    "choices_pool": ["Classification", "Clustering", "Regression"],
    "targets": [
      {"text": "Predict the exact number of minutes a flight will be delayed.", "answer": "Regression"},
      {"text": "Determine whether a tumor is malignant or benign.", "answer": "Classification"},
      {"text": "Group news articles into topics without predefined categories.", "answer": "Clustering"}
    ]
  },
  {
    "id": 376,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each scenario to the correct computer vision workload.",
    "choices_pool": ["Facial recognition", "Image classification", "Object detection", "Optical character recognition (OCR)", "Semantic segmentation"],
    "targets": [
      {"text": "Determine which pixels in a satellite image belong to a building.", "answer": "Semantic segmentation"},
      {"text": "Extract the invoice number from a scanned invoice.", "answer": "Optical character recognition (OCR)"},
      {"text": "Determine whether a photo shows a cat or a dog.", "answer": "Image classification"},
      {"text": "Identify the exact position of vehicles in a traffic camera image.", "answer": "Object detection"}
    ]
  },
  {
    "id": 377,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each responsible AI principle to the correct scenario.",
    "choices_pool": ["Accountability", "Fairness", "Inclusiveness", "Privacy and security", "Reliability and safety", "Transparency"],
    "targets": [
      {"text": "An AI hiring system approves candidates without bias based on gender or ethnicity.", "answer": "Fairness"},
      {"text": "Users are shown an explanation of why their insurance claim was denied by AI.", "answer": "Transparency"},
      {"text": "A committee of humans can review and override AI-generated medical diagnoses.", "answer": "Accountability"},
      {"text": "Customer data used to train a fraud detection model is encrypted and access-controlled.", "answer": "Privacy and security"}
    ]
  },
  {
    "id": 378,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each Azure AI service to the correct use case.",
    "choices_pool": ["Azure Bot Service", "Custom Vision", "Face", "Form Recognizer", "Language service", "Speech", "Translator"],
    "targets": [
      {"text": "Extract key-value pairs from a scanned expense receipt.", "answer": "Form Recognizer"},
      {"text": "Convert a recorded meeting audio file into a written transcript.", "answer": "Speech"},
      {"text": "Identify the intent of a customer typing in a support chat.", "answer": "Language service"},
      {"text": "Deploy a bot that works across Teams, email, and webchat.", "answer": "Azure Bot Service"}
    ]
  },
  {
    "id": 379,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each NLP workload to the correct scenario.",
    "choices_pool": ["Entity recognition", "Key phrase extraction", "Language detection", "Sentiment analysis", "Translation"],
    "targets": [
      {"text": "Determine whether a restaurant review is mostly positive or negative.", "answer": "Sentiment analysis"},
      {"text": "Identify dates, people, and locations mentioned in a legal document.", "answer": "Entity recognition"},
      {"text": "Identify the main topics discussed across thousands of customer feedback forms.", "answer": "Key phrase extraction"},
      {"text": "Convert product descriptions from English into French and German.", "answer": "Translation"}
    ]
  },
  {
    "id": 380,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each Face service task to the correct question it answers.",
    "choices_pool": ["grouping", "identification", "similarity", "verification"],
    "targets": [
      {"text": "Do these two photos show the same person?", "answer": "verification"},
      {"text": "Who is this person in our employee database?", "answer": "identification"},
      {"text": "Which photos in this collection show the same person?", "answer": "grouping"},
      {"text": "Does this person's face look like others in the database?", "answer": "similarity"}
    ]
  },
  {
    "id": 381,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each Azure Machine Learning tool to the correct description.",
    "choices_pool": ["Automated ML", "Azure Machine Learning Designer", "Azure portal"],
    "targets": [
      {"text": "Create and configure an Azure Machine Learning workspace.", "answer": "Azure portal"},
      {"text": "Build a machine learning pipeline using a drag-and-drop canvas.", "answer": "Azure Machine Learning Designer"},
      {"text": "Automatically test multiple algorithms and select the best one.", "answer": "Automated ML"}
    ]
  },
  {
    "id": 382,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each scenario to the correct AI workload type.",
    "choices_pool": ["Anomaly detection", "Computer vision", "Conversational AI", "Knowledge mining", "Natural language processing"],
    "targets": [
      {"text": "A chatbot on a bank website that answers customer questions.", "answer": "Conversational AI"},
      {"text": "Detecting an unusual drop in server response time.", "answer": "Anomaly detection"},
      {"text": "Searching thousands of legal contracts for relevant clauses.", "answer": "Knowledge mining"},
      {"text": "Identifying car license plates from CCTV footage.", "answer": "Computer vision"}
    ]
  },
  {
    "id": 383,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each machine learning task to the correct description.",
    "choices_pool": ["Feature engineering", "Feature selection", "Model deployment", "Model evaluation", "Model training"],
    "targets": [
      {"text": "Splitting a timestamp column into hour, day, and month columns.", "answer": "Feature engineering"},
      {"text": "Choosing only the most relevant columns from a dataset to train on.", "answer": "Feature selection"},
      {"text": "Reviewing the confusion matrix and RMSE after testing.", "answer": "Model evaluation"},
      {"text": "Publishing the trained model as a REST endpoint.", "answer": "Model deployment"}
    ]
  },
  {
    "id": 384,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each generative AI concept to its correct definition.",
    "choices_pool": ["Fine-tuning", "Grounding", "Hallucination", "Prompt engineering", "System prompt"],
    "targets": [
      {"text": "Writing instructions given to a model before user interaction to control its behavior.", "answer": "System prompt"},
      {"text": "Connecting a model to verified external data to improve factual accuracy.", "answer": "Grounding"},
      {"text": "A confident but factually incorrect response generated by the model.", "answer": "Hallucination"},
      {"text": "Crafting effective inputs to guide a model's responses without changing its weights.", "answer": "Prompt engineering"}
    ]
  },
  {
    "id": 385,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two metrics are appropriate for evaluating a regression model? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Coefficient of determination (R2)",
      "B": "F1 score",
      "C": "Root mean squared error (RMSE)",
      "D": "Area under the curve (AUC)",
      "E": "Accuracy"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 386,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two services should you use to build a bot that answers questions from a FAQ document and deploy it to Microsoft Teams? Each correct answer presents part of the solution.",
    "choices": {
      "A": "QnA Maker",
      "B": "Azure Bot Service",
      "C": "Custom Vision",
      "D": "Form Recognizer",
      "E": "Translator"
    },
    "answer": ["A", "B"]
  },
  {
    "id": 387,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two tasks must you complete before you can run a pipeline in Azure Machine Learning Designer? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Register the trained model",
      "B": "Attach a compute resource",
      "C": "Deploy to AKS",
      "D": "Load a dataset into the pipeline",
      "E": "Publish a REST endpoint"
    },
    "answer": ["B", "D"]
  },
  {
    "id": 388,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two scenarios are examples of a natural language processing workload? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Detecting unusual temperature readings in a factory",
      "B": "Identifying the sentiment of product reviews",
      "C": "Recognizing faces in security camera footage",
      "D": "Extracting named entities from news articles",
      "E": "Predicting next month's sales volume"
    },
    "answer": ["B", "D"]
  },
  {
    "id": 389,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two scenarios are examples of a conversational AI workload? Each correct answer presents a complete solution.",
    "choices": {
      "A": "A smart speaker that plays music when asked",
      "B": "A model that classifies X-ray images",
      "C": "A website chat assistant that helps users track orders",
      "D": "A pipeline that detects anomalies in server logs",
      "E": "A model that predicts employee churn"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 390,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two services can you use to create a voice-controlled personal assistant app on Azure? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Speech",
      "B": "Language service",
      "C": "Form Recognizer",
      "D": "Custom Vision",
      "E": "Anomaly Detector"
    },
    "answer": ["A", "B"]
  },
  {
    "id": 391,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two tasks can be performed using the Computer Vision service without training a custom model? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Detect faces in an image",
      "B": "Train a custom product recognition model",
      "C": "Read text from a handwritten document",
      "D": "Translate the text in an image",
      "E": "Classify images using a company-specific taxonomy"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 392,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two practices are most important when ensuring responsible AI in a facial recognition deployment? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Train the model on a dataset that represents diverse demographics",
      "B": "Deploy the model to the fastest available hardware",
      "C": "Implement a process for humans to review and appeal decisions",
      "D": "Disable logging to protect user privacy",
      "E": "Use the smallest possible model to save costs"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 393,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two are valid ways to populate a QnA Maker knowledge base? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Import content from an existing FAQ webpage",
      "B": "Connect directly to an Azure SQL database",
      "C": "Manually enter question and answer pairs",
      "D": "Use Automated ML to generate answers",
      "E": "Train a neural network on the FAQ content"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 394,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two are valid use cases for the Form Recognizer service? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Extract line items and totals from a scanned invoice",
      "B": "Translate an invoice from French to English",
      "C": "Identify the merchant name from a receipt",
      "D": "Detect the emotion of a person in a photo",
      "E": "Generate a description of an image"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 395,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two are examples of speech synthesis use cases? Each correct answer presents a complete solution.",
    "choices": {
      "A": "A phone system that reads back a confirmation number aloud",
      "B": "Generating live subtitles for a conference presentation",
      "C": "Transcribing a recorded interview into a text document",
      "D": "An AI game character that speaks dialogue to the player",
      "E": "Detecting the language of an audio recording"
    },
    "answer": ["A", "D"]
  },
  {
    "id": 396,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two responsible AI principles are most relevant when deploying an AI system that denies people access to government services? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Fairness",
      "B": "Reliability and safety",
      "C": "Transparency",
      "D": "Inclusiveness",
      "E": "Privacy and security"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 397,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two statements about Azure Automated ML are true? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Automated ML automatically selects the best-performing algorithm for a task",
      "B": "Automated ML does not require you to specify which column is the target label",
      "C": "Automated ML runs multiple training iterations scored by the metrics you choose",
      "D": "Automated ML eliminates the need to provide any training data",
      "E": "Automated ML supports classification, regression, and forecasting task types"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 398,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two components can you drag onto a canvas in Azure Machine Learning Designer? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Dataset",
      "B": "Compute cluster",
      "C": "Module",
      "D": "Pipeline endpoint",
      "E": "Datastore"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 399,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two languages can you use to write custom code modules in Azure Machine Learning Designer? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Python",
      "B": "R",
      "C": "C#",
      "D": "JavaScript",
      "E": "Scala"
    },
    "answer": ["A", "B"]
  },
  {
    "id": 400,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two are examples of generative AI workloads? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Generating a marketing email from a brief bullet-point outline",
      "B": "Detecting unusual patterns in network traffic",
      "C": "Classifying photos of animals into species categories",
      "D": "Generating a summary of a long legal document using a large language model",
      "E": "Predicting next month's electricity demand"
    },
    "answer": ["A", "D"]
  },
  {
    "id": 401,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two are true about grounding in generative AI? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Grounding connects the model to verified external data sources",
      "B": "Grounding retrains the model weights with new data",
      "C": "Grounding helps reduce hallucinations in model outputs",
      "D": "Grounding is the same as prompt engineering",
      "E": "Grounding eliminates the need for content safety filters"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 402,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to build an AI solution that monitors network traffic in real time and flags unusual patterns that could indicate a cyberattack. Which type of AI workload should you use?",
    "choices": {
      "A": "Computer vision",
      "B": "Natural language processing",
      "C": "Anomaly detection",
      "D": "Conversational AI"
    },
    "answer": "C"
  },
  {
    "id": 403,
    "type": "multiple_choice",
    "img": null,
    "question": "You want to use an Azure AI service to classify whether a satellite image shows a forest, a city, or an ocean. Which service should you use?",
    "choices": {
      "A": "Face",
      "B": "Form Recognizer",
      "C": "Custom Vision",
      "D": "Language service"
    },
    "answer": "C"
  },
  {
    "id": 404,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure OpenAI model type is best suited for generating natural language text, code, and summaries?",
    "choices": {
      "A": "DALL-E",
      "B": "Whisper",
      "C": "GPT",
      "D": "Embeddings"
    },
    "answer": "C"
  },
  {
    "id": 405,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure OpenAI model type is used to generate images from natural language descriptions?",
    "choices": {
      "A": "GPT-4",
      "B": "DALL-E",
      "C": "Whisper",
      "D": "Embeddings"
    },
    "answer": "B"
  },
  {
    "id": 406,
    "type": "multiple_choice",
    "img": null,
    "question": "What is the primary benefit of retrieval-augmented generation (RAG) in a generative AI application?",
    "choices": {
      "A": "It increases the speed of model training",
      "B": "It allows the model to generate images as well as text",
      "C": "It improves response accuracy by retrieving relevant documents before generating an answer",
      "D": "It reduces the cost of deploying the model to production"
    },
    "answer": "C"
  },
  {
    "id": 407,
    "type": "multiple_choice",
    "img": null,
    "question": "You are deploying a generative AI application and want to ensure it does not produce harmful, offensive, or violent content. What should you configure?",
    "choices": {
      "A": "Model fine-tuning",
      "B": "Content safety filters",
      "C": "Retrieval-augmented generation",
      "D": "Prompt chaining"
    },
    "answer": "B"
  },
  {
    "id": 408,
    "type": "multiple_choice",
    "img": null,
    "question": "Which term describes the process of adapting a pre-trained large language model to a specific domain by training it further on domain-specific data?",
    "choices": {
      "A": "Grounding",
      "B": "Prompt engineering",
      "C": "Fine-tuning",
      "D": "Content filtering"
    },
    "answer": "C"
  },
  {
    "id": 409,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "DALL-E is an Azure OpenAI model used to generate images from text descriptions.",
        "answer": "Yes"
      },
      {
        "text": "GPT models in Azure OpenAI can only generate text and cannot process images.",
        "answer": "No"
      },
      {
        "text": "Azure OpenAI Service requires responsible AI content filters to be configured before deployment.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 410,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Retrieval-augmented generation (RAG) helps reduce hallucinations by grounding responses in retrieved documents.",
        "answer": "Yes"
      },
      {
        "text": "Fine-tuning a model means providing better prompts without changing model weights.",
        "answer": "No"
      },
      {
        "text": "Microsoft Copilot is built on generative AI technology.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 411,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each Azure OpenAI model to its primary use case.",
    "choices_pool": ["DALL-E", "GPT-4", "Whisper"],
    "targets": [
      {"text": "Generate a written summary of a long business report.", "answer": "GPT-4"},
      {"text": "Create an illustration from a text description.", "answer": "DALL-E"},
      {"text": "Transcribe audio from a recorded meeting into text.", "answer": "Whisper"}
    ]
  },
  {
    "id": 412,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to build a pipeline in Azure Machine Learning Designer that predicts whether a customer will default on a loan. In the pipeline, after loading the dataset, what is the next step?",
    "choices": {
      "A": "Train Model",
      "B": "Score Model",
      "C": "Split Data",
      "D": "Evaluate Model"
    },
    "answer": "C"
  },
  {
    "id": 413,
    "type": "multiple_choice",
    "img": null,
    "question": "You have deployed a machine learning model as a web service. Which two pieces of information does a developer need to call the service?",
    "choices": {
      "A": "The model name and version",
      "B": "The REST endpoint URL and authentication key",
      "C": "The training dataset path and feature names",
      "D": "The Azure subscription ID and resource group name"
    },
    "answer": "B"
  },
  {
    "id": 414,
    "type": "multiple_choice",
    "img": null,
    "question": "What does the Split Data module do in an Azure Machine Learning Designer pipeline?",
    "choices": {
      "A": "Removes rows with missing values from the dataset",
      "B": "Selects specific columns to include in the model",
      "C": "Divides the dataset into separate subsets for training and evaluation",
      "D": "Normalizes numeric values to a common scale"
    },
    "answer": "C"
  },
  {
    "id": 415,
    "type": "multiple_choice",
    "img": null,
    "question": "You are predicting crop yield using weather data. The dataset has columns: date, temperature, humidity, rainfall, and yield_kg_per_hectare. Which column is the label?",
    "choices": {
      "A": "date",
      "B": "temperature",
      "C": "humidity",
      "D": "yield_kg_per_hectare"
    },
    "answer": "D"
  },
  {
    "id": 416,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to build a machine learning model to forecast monthly sales volumes for the next year. Which Azure Automated ML task type should you select?",
    "choices": {
      "A": "Classification",
      "B": "Regression",
      "C": "Time series forecasting",
      "D": "Clustering"
    },
    "answer": "C"
  },
  {
    "id": 417,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "In a machine learning pipeline, the module that feeds labeled data into the training algorithm is called the [BLANK] module.",
    "options": ["Split Data", "Train Model", "Score Model", "Evaluate Model"],
    "answer": "Train Model"
  },
  {
    "id": 418,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "After training a model in Azure Machine Learning Designer, you use the [BLANK] module to apply the model to test data and produce predictions.",
    "options": ["Train Model", "Split Data", "Score Model", "Evaluate Model"],
    "answer": "Score Model"
  },
  {
    "id": 419,
    "type": "multiple_choice",
    "img": null,
    "question": "A company wants to build a customer service AI that can handle inquiries over phone, email, and live chat from a single codebase. Which Azure service enables this multi-channel deployment?",
    "choices": {
      "A": "QnA Maker",
      "B": "Language Understanding (LUIS)",
      "C": "Azure Bot Service",
      "D": "Azure Cognitive Search"
    },
    "answer": "C"
  },
  {
    "id": 420,
    "type": "multiple_choice",
    "img": null,
    "question": "Which responsible AI principle is most relevant when ensuring that an AI system used in criminal justice does not disadvantage a particular racial group?",
    "choices": {
      "A": "Reliability and safety",
      "B": "Fairness",
      "C": "Transparency",
      "D": "Accountability"
    },
    "answer": "B"
  },
  {
    "id": 421,
    "type": "multiple_choice",
    "img": null,
    "question": "You want to store and compare multiple trained versions of a model in Azure Machine Learning so you can roll back if needed. What should you do?",
    "choices": {
      "A": "Export the model to a CSV file",
      "B": "Register the model in the model registry",
      "C": "Deploy the model to AKS",
      "D": "Save the model as a pipeline draft"
    },
    "answer": "B"
  },
  {
    "id": 422,
    "type": "multiple_choice",
    "img": null,
    "question": "You are designing an AI application and want to ensure the AI does not store or share personal health information outside of what is needed for the task. Which responsible AI principle are you applying?",
    "choices": {
      "A": "Fairness",
      "B": "Accountability",
      "C": "Privacy and security",
      "D": "Inclusiveness"
    },
    "answer": "C"
  },
  {
    "id": 423,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a large language model deployed for a customer support application. Users are reporting that the model sometimes answers questions about topics outside the intended scope. What should you configure to prevent this?",
    "choices": {
      "A": "Grounding",
      "B": "A system prompt with clear behavioral boundaries",
      "C": "Fine-tuning on all possible topics",
      "D": "Retrieval-augmented generation with a broader index"
    },
    "answer": "B"
  },
  {
    "id": 424,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure AI service would you use to identify the emotional state (happy, sad, surprised) of a person in a photograph?",
    "choices": {
      "A": "Computer Vision",
      "B": "Custom Vision",
      "C": "Face",
      "D": "Form Recognizer"
    },
    "answer": "C"
  },
  {
    "id": 425,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to check whether a submitted passport photo contains a valid human face before processing an application. Which Face API operation should you use?",
    "choices": {
      "A": "Verify",
      "B": "Identify",
      "C": "Detect",
      "D": "Group"
    },
    "answer": "C"
  },
  {
    "id": 426,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to identify what a photo shows without knowing in advance what categories exist. Which is the most appropriate approach?",
    "choices": {
      "A": "Train a Custom Vision classification model",
      "B": "Use Computer Vision image description to generate a caption",
      "C": "Use Form Recognizer to extract content",
      "D": "Use the Face service to analyze the photo"
    },
    "answer": "B"
  },
  {
    "id": 427,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Azure Cognitive Search can use AI enrichment to extract content from images and documents during indexing.",
        "answer": "Yes"
      },
      {
        "text": "Azure Cognitive Search can directly answer questions using a QnA Maker knowledge base without Azure Bot Service.",
        "answer": "No"
      },
      {
        "text": "Knowledge mining workloads involve extracting useful information from large collections of unstructured documents.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 428,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Power Virtual Agents allows non-developers to build chatbots without writing code.",
        "answer": "Yes"
      },
      {
        "text": "Power Virtual Agents is built on Azure Kubernetes Service.",
        "answer": "No"
      },
      {
        "text": "Power Virtual Agents uses built-in natural language understanding models.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 429,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Semantic segmentation assigns each pixel in an image to a class.",
        "answer": "Yes"
      },
      {
        "text": "Semantic segmentation and image classification produce the same type of output.",
        "answer": "No"
      },
      {
        "text": "Object detection can return the location and type of multiple objects in a single image.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 430,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A large language model (LLM) is trained on large amounts of text data to understand and generate language.",
        "answer": "Yes"
      },
      {
        "text": "Fine-tuning a model and providing better prompts are the same technique.",
        "answer": "No"
      },
      {
        "text": "Azure OpenAI Service provides access to GPT models through a managed API.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 431,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each type of responsible AI consideration to the correct example.",
    "choices_pool": ["Accountability", "Fairness", "Inclusiveness", "Privacy and security", "Reliability and safety", "Transparency"],
    "targets": [
      {"text": "An AI system for diagnosing eye disease stops giving predictions when the image quality is too low.", "answer": "Reliability and safety"},
      {"text": "An AI-powered recruitment tool excludes candidates with disabilities due to inaccessible form design.", "answer": "Inclusiveness"},
      {"text": "A credit scoring company keeps records of all AI decisions so that customers can request a review.", "answer": "Accountability"},
      {"text": "A medical AI system was trained using patient data without obtaining proper informed consent.", "answer": "Privacy and security"}
    ]
  },
  {
    "id": 432,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building an AI system that will prioritize which patients receive medical treatment. You need to ensure that no human can override the AI's decisions. Which responsible AI principle does this VIOLATE?",
    "choices": {
      "A": "Fairness",
      "B": "Accountability",
      "C": "Reliability and safety",
      "D": "Transparency"
    },
    "answer": "B"
  },
  {
    "id": 433,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to build a solution that automatically reads vehicle number plates from parking lot camera images and logs them in a database. Which computer vision workload should you use?",
    "choices": {
      "A": "Image classification",
      "B": "Object detection",
      "C": "Optical character recognition (OCR)",
      "D": "Semantic segmentation"
    },
    "answer": "C"
  },
  {
    "id": 434,
    "type": "multiple_choice",
    "img": null,
    "question": "Your company wants to detect whether employees are wearing hard hats in construction site photos. Which Azure AI service and workload type should you use?",
    "choices": {
      "A": "Computer Vision — image description",
      "B": "Custom Vision — object detection",
      "C": "Face — facial recognition",
      "D": "Form Recognizer — key extraction"
    },
    "answer": "B"
  },
  {
    "id": 435,
    "type": "multiple_choice",
    "img": null,
    "question": "You want to provide documentation to help developers understand why a machine learning model produced a specific output. Which responsible AI principle does this support?",
    "choices": {
      "A": "Inclusiveness",
      "B": "Fairness",
      "C": "Transparency",
      "D": "Privacy and security"
    },
    "answer": "C"
  },
  {
    "id": 436,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure AI service would you use to automatically extract structured data from tax forms submitted by users?",
    "choices": {
      "A": "Custom Vision",
      "B": "Computer Vision",
      "C": "Language service",
      "D": "Form Recognizer"
    },
    "answer": "D"
  },
  {
    "id": 437,
    "type": "multiple_choice",
    "img": null,
    "question": "You are evaluating a binary classification model. The model identifies fraudulent transactions. It is more important to catch all fraud (even at the cost of some false alarms) than to miss any fraud. Which metric is most important to maximize?",
    "choices": {
      "A": "Precision",
      "B": "Recall (true positive rate)",
      "C": "Specificity",
      "D": "R2"
    },
    "answer": "B"
  },
  {
    "id": 438,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "The practice of crafting effective inputs to control how a generative AI model responds, without modifying the model itself, is called [BLANK].",
    "options": ["fine-tuning.", "prompt engineering.", "grounding.", "model deployment."],
    "answer": "prompt engineering."
  },
  {
    "id": 439,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "An AI solution that describes the contents of an uploaded photo to help visually impaired users is using [BLANK].",
    "options": ["conversational AI.", "computer vision.", "anomaly detection.", "natural language processing."],
    "answer": "computer vision."
  },
  {
    "id": 440,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "The first step in a machine learning project, before any modeling, is [BLANK].",
    "options": ["model evaluation.", "model training.", "data preparation.", "model deployment."],
    "answer": "data preparation."
  },
  {
    "id": 441,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two are true about the Azure OpenAI Service? Each correct answer presents a complete solution.",
    "choices": {
      "A": "It provides access to large language models including GPT-4 and DALL-E",
      "B": "It can only be used for generating images, not text",
      "C": "It includes responsible AI content safety features",
      "D": "It is only available to Microsoft internal teams",
      "E": "It requires no configuration before deployment"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 442,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two statements about the None intent in Language Understanding (LUIS) are true? Each correct answer presents a complete solution.",
    "choices": {
      "A": "The None intent captures utterances that fall outside the app's intended scope",
      "B": "The None intent is automatically populated by LUIS without user input",
      "C": "Adding utterances to the None intent helps the model recognize out-of-scope input",
      "D": "The None intent is only used for greeting messages",
      "E": "The None intent cannot be used in production applications"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 443,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each responsible AI principle to the correct definition.",
    "choices_pool": ["Accountability", "Fairness", "Inclusiveness", "Privacy and security", "Reliability and safety", "Transparency"],
    "targets": [
      {"text": "AI systems must treat all people equally regardless of protected characteristics.", "answer": "Fairness"},
      {"text": "AI systems must protect personal data and only use it with consent.", "answer": "Privacy and security"},
      {"text": "AI systems must be accessible and usable by people with disabilities.", "answer": "Inclusiveness"},
      {"text": "AI systems must have processes for humans to oversee and correct decisions.", "answer": "Accountability"}
    ]
  },
  {
    "id": 444,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to index and make searchable a collection of thousands of PDF contracts, including text within embedded images. Which Azure service should you use?",
    "choices": {
      "A": "Azure Bot Service",
      "B": "Azure Cognitive Search with AI enrichment",
      "C": "Form Recognizer only",
      "D": "QnA Maker"
    },
    "answer": "B"
  },
  {
    "id": 445,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a solution that monitors factory equipment and sends an alert whenever a sensor reading deviates significantly from the normal historical pattern. Which Azure AI service should you use?",
    "choices": {
      "A": "Azure Machine Learning — regression model",
      "B": "Anomaly Detector",
      "C": "Computer Vision",
      "D": "Language service"
    },
    "answer": "B"
  },
  {
    "id": 446,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Azure Container Instances (ACI) is recommended for high-scale production deployments of ML models.",
        "answer": "No"
      },
      {
        "text": "Azure Kubernetes Service (AKS) is suitable for deploying ML models that must handle large production traffic.",
        "answer": "Yes"
      },
      {
        "text": "Both ACI and AKS can be used as deployment targets for Azure Machine Learning real-time inference pipelines.",
        "answer": "Yes"
      }
    ]
  }
];

export default questions;
