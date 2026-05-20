const questions = [
  {
    "id": 1,
    "type": "drag_and_drop",
    "img": "/AI102_imgs/q1.png",
    "prompt": "You have 100 chatbots that each has its own Language Understanding model. Frequently, you must add the same phrases to each model. ou need to programmatically update the Language Understanding models to include the new phrases. How should you complete the code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. ou may need to drag the split bar between panes or scroll to view content. ielect and Place:",
    "choices_pool": [
      "AddPhraseListAsync",
      "Phraselist",
      "PhraselistCreateObject",
      "Phrases",
      "SavePhraselistAsync",
      "UploadPhraseListAsync"
    ],
    "targets": [
      {
        "text": "Target 1",
        "answer": "AddPhraseListAsync"
      },
      {
        "text": "Target 2",
        "answer": "PhraselistCreateObject"
      }
    ]
  },
  {
    "id": 2,
    "type": "drag_and_drop_order",
    "img": "/AI102_imgs/q2.png",
    "prompt": "You plan to use a Language Understanding application named app1 that is deployed to a container. App1 was developed by using a Language Understanding authoring resource named lu1. App1 has the versions shown in the following table. Version Trained date Published date V1.2 None None V1.1 2020-10-01 None V1.0 2020-09-01 2020-09-15 You need to create a container that uses the latest deployable version of app1. Which three actions should you performin sequence?",
    "choices_pool": [
      "Run a container that has version set as an environment variable.",
      "Export the model by using the Export as JSON option.",
      "Select v1.1 of app1.",
      "Run a container and mount the model file.",
      "Select v1.0 of app1.",
      "Export the model by using the Export for containers (GZIP) option.",
      "Select v1.2 of app1."
    ],
    "answer_order": [
      "Select v1.1 of app1.",
      "Export the model by using the Export for containers (GZIP) option.",
      "Run a container and mount the model file.",
    ]
  },
  {
    "id": 3,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to build a chatbot that meets the following requirements: Supports chit-chat, knowledge base, and multilingual models Performs sentiment analysis on user messages Selects the best language model automatically What should you integrate into the chatbot?",
    "choices": {
      "A": "QnA Maker, Language Understanding, and Dispatch",
      "B": "Translator, Speech, and Dispatch",
      "C": "Language Understanding, Text Analytics, and QnA Maker",
      "D": "Text Analytics, Translator, and Dispatch"
    },
    "answer": "C"
  },
  {
    "id": 4,
    "type": "multiple_choice",
    "img": null,
    "question": "Your company wants to reduce how long it takes for employees to log receipts in expense reports. All the receipts are in English. You need to extract top-level information from the receipts, such as the vendor and the transaction total. The solution must minimize development effort. Which Azure service should you use?",
    "choices": {
      "A": "Custom Vision",
      "B": "Personalizer",
      "C": "Form Recognizer",
      "D": "Computer Vision"
    },
    "answer": "C"
  },
  {
    "id": 5,
    "type": "hotspot_dropdown",
    "img": "/AI102_imgs/q5.png",
    "prompt": "You need to create a new resource that wil be used to perform sentiment analysis and optical character recognition (ocR). The solution must meet the following requirements: Use a single key and endpoint to access multiple services. Consolidate billing for future services that you might use. Support the use of Computer Vision in the future. How should you complete the HTTP request to create the new resource? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "[answer choice 1]",
        "options": [
          "PATCH",
          "POST",
          "PUT",
        ],
        "answer": "PUT"
      },
      {
        "text": "[answer choice 2]",
        "options": [
          "CognitiveServices",
          "ComputerVision",
          "TextAnalytics",
        ],
        "answer": "CognitiveServices"
      }
    ]
  },
  {
    "id": 6,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "You are developing a new sales system that will process the video and text from a public-facing website. You plan to monitor the sales system to ensure that it provides equitable results regardless of the user's location or background. Which two responsible Al principles provide guidance to meet the monitoring requirements? Each correct answer presents part of the solution. OTE: Each correct selection is worth one point.",
    "choices": {
      "A": "transparency",
      "B": "fairness",
      "C": "inclusiveness",
      "D": "reliability and safety",
      "E": "privacy and security"
    },
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": 7,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You plan to use containerized versions of the Anomaly Detector APl on local devices for testing and in on-premises datacenters. You need to ensure that the containerized deployments meet the following requirements: Prevent billing and APl information from being stored in the command-line histories of the devices that run the container. Control access to the container images by using Azure role-based access control (Azure RBAC). Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "choices_pool": [
      "Create a custom Dockerfile.",
      "Pull the Anomaly Detector container image.",
      "Distribute a docker run script.",
      "Push the image to an Azure container registry.",
      "Build the image.",
      "Push the image to Docker Hub."
    ],
    "answer_order": [
        "Pull the Anomaly Detector container image.",
        "Create a custom Dockerfile.",
        "Push the image to an Azure container registry.",
        "Distribute a docker run script."
    ]
  },
  {
    "id": 8,
    "type": "hotspot_dropdown",
    "img": "/AI102_imgs/q8.png",
    "prompt": "You plan to deploy a containerized version of an Azure Cognitive Services service that will be used for text analysis. You configure https://contoso.cognitiveservices.azure.com as the endpoint URI for the service, and you pull the latest version of the Text Analytics Sentiment Analysis container. You need to run the container on an Azure virtual machine by using Docker. How should you complete the command? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "[answer choice 1]",
        "options": [
          "http://contoso.blob.core.windows.net",
          "https://contoso.cognitiveservices.azure.com",
          "mcr.microsoft.com/azure-cognitive-services/textanalytics/keyphrase",
          "mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment",
        ],
        "answer": "mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment"
      },
      {
        "text": "[answer choice 2]",
        "options": [
          "http://contoso.blob.core.windows.net",
          "https://contoso.cognitiveservices.azure.com",
          "mcr.microsoft.com/azure-cognitive-services/textanalytics/keyphrase",
          "mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment",
        ],
        "answer": "https://contoso.cognitiveservices.azure.com"
      }
    ]
  },
  {
    "id": 9,
    "type": "multiple_choice",
    "img": "/AI102_imgs/q9.png",
    "question": "You have the following C# method for creating Azure Cognitive Services resources programmatically. You need to call the method to create a free Azure resource in the West US Azure region. The resource will be used to generate captions of images automatically Which code should you use?",
    "choices": {
      "A": "create_resource(client, \"res1\", \"ComputerVision\", \"F0\", \"westus\")",
      "B": "create_resource(client, \"res1\", \"CustomVision.Prediction\", \"F0\", \"westus\")",
      "C": "create_resource(client, \"res1\", \"ComputerVision\", \"S0\", \"westus\")",
      "D": "create_resource(client, \"res1\", \"CustomVision.Prediction\", \"S0\", \"westus\")"
    },
    "answer": "A"
  },
  {
    "id": 10,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Topic You plan to provision a QnA Maker service in a new resource group named RG1. In RG1, you create an App Service plan named AP1. Which two Azure resources are automatically created in RG1 when you provision the QnA Maker service? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Language Understanding",
      "B": "Azure SQL Database",
      "C": "Azure Storage",
      "D": "Azure Cognitive Search",
      "E": "Azure App Service"
    },
    "answer": [
      "D",
      "E"
    ]
  },
  {
    "id": 11,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a language model by using a Language Understanding (classic) service. You create a new Language Understanding (classic) resource. You need to add more contributors. What should you use?",
    "choices": {
      "A": "a conditional access policy in Azure Active Directory (Azure AD)",
      "B": "the Access control (IAM) page for the authoring resources in the Azure portal",
      "C": "the Access control (IAM) page for the prediction resources in the Azure portal"
    },
    "answer": "B"
  },
  {
    "id": 12,
    "type": "multiple_choice",
    "img": null,
    "question": "NOTE: Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NoT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Cognitive Search service. During the past 12 months, query volume steadily increased. ou discover that some search query requests to the Cognitive Search service are being throttled. ou need to reduce the likelihood that search query requests are throttled. Solution: You migrate to a Cognitive Search service that uses a higher tier. Does this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "A"
  },
  {
    "id": 13,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "You need to develop an automated call handling system that can respond to callers in their own language. The system will support only French and English. Which Azure Cognitive Services service should you use to meet each requirement? To answer, drag the appropriate services to the correct requirements. Each service may be used once, more than once, or not at all. You may need to drag the split bat between panes or scroll to view content. telect and Place:",
    "choices_pool": [
      "Speaker Recognition",
      "Speech to Text",
      "Text Analytics",
      "Text to Speech",
      "Translator"
    ],
    "targets": [
      {
        "text": "Detect the incoming language:",
        "answer": "Text Analytics"
      },
      {
        "text": "Respond in the callers' own language:",
        "answer": "Translator"
      }
    ]
  },
  {
    "id": 14,
    "type": "multiple_choice",
    "img": null,
    "question": "You have receipts that are accessible from a URL. You need to extract data from the receipts by using Form Recognizer and the SDK. The solution must use a prebuilt model. Which client and method should you use?",
    "choices": {
      "A": "the FormRecognizerClient client and the StartRecognizeContentFromUri method",
      "B": "the FormTrainingClient client and the StartRecognizeContentFromUri method",
      "C": "the FormRecognizerClient client and the StartRecognizeReceiptsFromUri method",
      "D": "the FormTrainingClient client and the StartRecognizeReceiptsFromUri method"
    },
    "answer": "C"
  },
  {
    "id": 15,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a collection of 50,000 scanned documents that contain text. You plan to make the text available through Azure Cognitive Search. You need to configure an enrichment pipeline to perform optical character recognition (OcR) and text analytics. The solution must minimize costs. What should you attach to the skillset?",
    "choices": {
      "A": "a new Computer Vision resource",
      "B": "a free (Limited enrichments) Cognitive Services resource",
      "C": "an Azure Machine Learning Designer pipeline",
      "D": "a new Cognitive Services resource that uses the S0 pricing tier"
    },
    "answer": "D"
  },
  {
    "id": 16,
    "type": "multiple_choice",
    "img": null,
    "question": "NOTE: Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NoT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Cognitive Search service. Ouring the past 12 months, query volume steadily increased. You discover that some search query requests to the Cognitive Search service are being throttled. You need to reduce the likelihood that search query requests are throttled. Solution: You add indexes. Does this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "B"
  },
  {
    "id": 17,
    "type": "multiple_choice",
    "img": null,
    "question": "NOTE: Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NoT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Cognitive Search service. During the past 12 months, query volume steadily increased. ou discover that some search query requests to the Cognitive Search service are being throttled. ou need to reduce the likelihood that search query requests are throttled. Solution: You enable customer-managed key (CMK) encryption. Does this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "B"
  },
  {
    "id": 18,
    "type": "multiple_choice",
    "img": null,
    "question": "NOTE: Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NoT be able to return to it. As a result, these questions will not appear in the review screen. You create a web app named app1 that runs on an Azure virtual machine named vm1. Vm1 is on an Azure virtual network named vnet1. You plan to create a new Azure Cognitive Search service named service1. You need to ensure that app1 can connect directly to service1 without routing traffic over the public internet. Solution: You deploy service1 and a private endpoint to vnet1. Does this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "A"
  },
  {
    "id": 19,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a Language Understanding resource named lu1. You build and deploy an Azure bot named bot1 that uses lu1. You need to ensure that bot1 adheres to the Microsoft responsible Al principle of inclusiveness. How should you extend bot1?",
    "choices": {
      "A": "Implement authentication for bot1.",
      "B": "Enable active learning for lu1.",
      "C": "Host lu1 in a container.",
      "D": "Add Direct Line Speech to bot1."
    },
    "answer": "D"
  },
  {
    "id": 20,
    "type": "hotspot_dropdown",
    "img": "/AI102_imgs/q30.png",
    "prompt": "You are building an app that will process incoming email and direct messages to either French or English language support teams. Which Azure Cognitive Services API should you use? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "[answer choice 1]",
        "options": [
          "api.cognitive.microsofttranslator.com",
          "eastus.api.cognitive.microsoft.com",
          "portal.azure.com",
        ],
        "answer": "eastus.api.cognitive.microsoft.com"
      },
      {
        "text": "[answer choice 2]",
        "options": [
          "/text/analytics/v3.1/entities/recognition/general",
          "/text/analytics/v3.1/languages",
          "/translator/text/v3.0/translate?to=en",
          "/translator/text/v3.0/translate?to=fr"
        ],
        "answer": "/text/analytics/v3.1/languages"
      }
    ]
  },
  {
    "id": 21,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure Cognitive Search instance that indexes purchase orders by using Form Recognizer. You need to analyze the extracted information by using Microsoft Power Bl. The solution must minimize development effort. What should you add to the indexer?",
    "choices": {
      "A": "a projection group",
      "B": "a table projection",
      "C": "a file projection",
      "D": "an object projection"
    },
    "answer": "B"
  },
  {
    "id": 22,
    "type": "multiple_choice",
    "img": null,
    "question": "NOTE: Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NoT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Cognitive Search service. During the past 12 months, query volume steadily increased. You discover that some search query requests to the Cognitive Search service are being throttled. You need to reduce the likelihood that search query requests are throttled. Solution: You add replicas. Does this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "A"
  },
  {
    "id": 23,
    "type": "simulation",
    "img": null,
    "prompt": "SIMULATION: Topic (ou need to create a Text Analytics service named Text12345678, and then enable logging for Text12345678. The solution must ensure that any changes to Text12345678 will be stored in a Log Analytics workspace. To complete this task, siqn in to the Azure portal.",
    "images": [
        "/AI102_imgs/q33.1.png",
        "/AI102_imgs/q33.2.png"
    ]
  },
  {
    "id": 24,
    "type": "simulation",
    "img": null,
    "prompt": "SIMULATION: You need to create a search service named search12345678 that will index a sample Azure Cosmos DB database named hotels-sample. The solution must ensure that only English language fields are retrievable. To complete this task, sign in to the Azure portal.",
    "images": [
        "/AI102_imgs/q34.1.png",
        "/AI102_imgs/q34.2.png",
        "/AI102_imgs/q34.3.png"
    ]
  },
  {
    "id": 25,
    "type": "simulation",
    "img": null,
    "prompt": "SIMULATION: You plan to create a solution to generate captions for images that will be read from Azure Blob Storage. You need to create a service in Azure Cognitive Services for the solution. The service must be named captions12345678 and must use the Free pricing tier. To complete this task, sign in to the Azure portal.",
    "images": [
        "/AI102_imgs/q35.1.png",
        "/AI102_imgs/q35.2.png",
        "/AI102_imgs/q35.3.png"
    ]
  },
  {
    "id": 26,
    "type": "simulation",
    "img": null,
    "prompt": "SIMULATION: You need to create a Form Recognizer resource named fr12345678. Jse the Form Recognizer sample labeling tool at https://fott-2-1.azurewebsites.net/ to analyze the invoice located in the C:\\Resources\\Invoices folder. Save the results as C:\\Resources\\Invoices\\Results.json. To complete this task, sign in to the Azure portal and open the Form Recognizer sample labeling tool.",
    "images": [
        "/AI102_imgs/q36.1.png",
        "/AI102_imgs/q36.2.png"
    ]
  },
  {
    "id": 27,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a factory that produces food products. You need to build a monitoring solution for staff compliance with personal protective equipment (PPE) requirements. The solution must meet the following requirements: r Identify staff who have removed masks or safety glasses. Perform a compliance check every 15 minutes. Minimize development effort. Minimize costs. Which service should you use?",
    "choices": {
      "A": "Face",
      "B": "Computer Vision",
      "C": "Azure Video Analyzer for Media (formerly Video Indexer)"
    },
    "answer": "A"
  },
  {
    "id": 28,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure Cognitive Search solution and a collection of blog posts that include a category field. You need to index the posts. The solution must meet the following requirements: Include the category field in the search results. Ensure that users can search for words in the category field. Ensure that users can perform drill down filtering based on category. Which index attributes should you configure for the category field?",
    "choices": {
      "A": "searchable, sortable, and retrievable",
      "B": "searchable, facetable, and retrievable",
      "C": "retrievable, filterable, and sortable",
      "D": "retrievable, facetable, and key"
    },
    "answer": "B"
  },
  {
    "id": 29,
    "type": "simulation",
    "img": null,
    "prompt": "SIMULATION: Use the following login credentials as needed: To enter your username, place your cursor in the Sign in box and click on the username below. To enter your password, place your cursor in the Enter password box and click on the password below. Azure Username: admin@abc.com - Azure Password: Xxxxxxxxxxxx - The following information is for technical support purposes only: Lab Instance: 12345678 - Task - You plan to build an API that will identify whether an image includes a Microsoft Surface Pro or Surface Studio. You need to deploy a service in Azure Cognitive Services for the APl. The service must be named AAA12345678 and must be in the East US Azure region. The solution nust use the Free pricing tier. To complete this task, sign in to the Azure portal.",
    "images": [
        "/AI102_imgs/q39.1.png",
        "/AI102_imgs/q39.2.png"
    ]
  },
  {
    "id": 30,
    "type": "simulation",
    "img": null,
    "prompt": "SIMULATION: Use the following login credentials as needed: To enter your username, place your cursor in the Sign in box and click on the username below. To enter your password, place your cursor in the Enter password box and click on the password below. Azure Username: admin@abc.com - Azure Password: Xxxxxxxxxxxx - The following information is for technical support purposes only: Lab Instance: 12345678 - Task - You need to build an API that uses the service in Azure Cognitive Services named AAA12345678 to identify whether an image includes a Microsoft Surface Pro or Surface Studio. To achieve this goal, you must use the sample images in the C:\\Resources\\Images folder. To complete this task, sign in to the Azure portal.",
    "images": [
        "/AI102_imgs/q40.png"
    ]
  },
  {
    "id": 31,
    "type": "simulation",
    "img": null,
    "prompt": "SIMULATION: Use the following login credentials as needed: To enter your username, place your cursor in the Sign in box and click on the username below. To enter your password, place your cursor in the Enter password box and click on the password below. Azure Username: admin@abc.com - Azure Password: Xxxxxxxxxxxx - The following information is for technical support purposes only: Lab Instance: 12345678 - [ask - You need to get insights from a video file located in the C:\\Resources\\Video\\Media.mp4 folder. Save the insights to the C:\\Resources\\Video\\Insights.json folder. o complete this task, sign in to the Azure Video Analyzer for Media at https://www.videoindexer.ai/ by using admin@abc.com",
    "images": [
        "/AI102_imgs/q41.png"
    ]
  },
  {
    "id": 32,
    "type": "simulation",
    "img": null,
    "prompt": "SIMULATION: Use the following login credentials as needed: To enter your username, place your cursor in the Sign in box and click on the username below. To enter your password, place your cursor in the Enter password box and click on the password below. Azure Username: admin@abc.com - Azure Password: Xxxxxxxxxxxx - The following information is for technical support purposes only: Lab Instance: 12345678 - Task - You plan to analyze stock photography and automatically generate captions for the images. You need to create a service in Azure to analyze the images. The service must be named caption12345678 and must be in the East US Azure region. The solution must ise the Free pricing tier. n the C:\\Resources\\Caption\\Params.json folder, enter the value for Key 1 and the endpoint for the new service. To complete this task, sign in to the Azure portal.",
    "images": [
        "/AI102_imgs/q42.png"
    ]
  },
  {
    "id": 33,
    "type": "simulation",
    "img": null,
    "prompt": "SIMULATION: Use the following login credentials as needed: To enter your username, place your cursor in the Sign in box and click on the username below. To enter your password, place your cursor in the Enter password box and click on the password below. Azure Username: admin@abc.com - Azure Password: xxxxxxxxxxxx - The following information is for technical support purposes only: Lab Instance: 12345678 - Task - You plan to build an application that will use caption12345678. The application will be deployed to a virtual network named VNet1. You need to ensure that only virtual machines on VNet1 can access caption12345678. To complete this task, sign in to the Azure portal.",
    "images": [
        "/AI102_imgs/q43.png"
    ]
  },
  {
    "id": 34,
    "type": "simulation",
    "img": null,
    "prompt": "SIMULATION: Use the following login credentials as needed: To enter your username, place your cursor in the Sign in box and click on the username below. To enter your password, place your cursor in the Enter password box and click on the password below. Azure Username: admin@abc.com - Azure Password: Xxxxxxxxxxxx - The following information is for technical support purposes only: Lab Instance: 12345678 - Task - You need to ensure that a user named admin@abc.com can regenerate the subscription keys of AAA12345678. The solution must use the principle of least privilege. [o complete this task, sign in to the Azure portal.",
    "images": [
        "/AI102_imgs/q44.png"
    ]
  },
  {
    "id": 35,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure loT hub that receives sensor data from machinery. You need to build an app that will perform the following actions: • Perform anomaly detection across multiple correlated sensors. • Identify the root cause of process stops. • Send incident alerts. The solution must minimize development time. Which Azure service should you use?",
    "choices": {
      "A": "Azure Metrics Advisor",
      "B": "Form Recognizer",
      "C": "Azure Machine Learning",
      "D": "Anomaly Detector"
    },
    "answer": "A"
  },
  {
    "id": 36,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an app that analyzes images by using the Computer Vision APl. You need to configure the app to provide an output for users who are vision impaired. The solution must provide the output in complete sentences. Which API call should you perform?",
    "choices": {
      "A": "readInStreamAsync",
      "B": "analyzelmagesByDomainlnStreamAsync",
      "C": "taglmagelnStreamAsync",
      "D": "describelmagelnStreamAsync"
    },
    "answer": "D"
  },
  {
    "id": 37,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You have a Custom Vision service project that performs object detection. The project uses the General domain for classification and contains a trained model. You need to export the model for use on a network that is disconnected from the internet. Vhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct rder.",
    "choices_pool": [
      "Change the classification type.",
      "Export the model.",
      "Retrain the model.",
      "Change Domains to General (compact).",
      "Create a new classification model."
    ],
    "answer_order": [
       "Change Domains to General (compact).",
       "Retrain the model.",
       "Export the model."
    ]
  },
  {
    "id": 38,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building an Al solution that will use Sentiment Analysis results from surveys to calculate bonuses for customer service staff. You need to ensure that the solution meets the Microsoft responsible Al principles. Vhat should you do?",
    "choices": {
      "A": "Add a human review and approval step before making decisions that affect the staff's financial situation.",
      "B": "Include the Sentiment Analysis results when surveys return a low confidence score.",
      "C": "Use all the surveys, including surveys by customers who requested that their account be deleted and their data be removed.",
      "D": "Publish the raw survey data to a central location and provide the staff with access to the location."
    },
    "answer": "A"
  },
  {
    "id": 39,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure subscription that contains a Language service resource named ta1 and a virtual network named vnet1. You need to ensure that only resources in vnet1 can access ta1. What should you configure?",
    "choices": {
      "A": "a network security group (NSG) for vnet1",
      "B": "Azure Firewall for vnet1",
      "C": "the virtual network settings for ta1",
      "D": "a Language service container for ta1"
    },
    "answer": "C"
  },
  {
    "id": 40,
    "type": "multiple_choice",
    "img": null,
    "question": "You are developing a monitoring system that will analyze engine sensor data, such as rotation speed, angle, temperature, and pressure. The system must generate an alert in response to atypical values. What should you include in the solution?",
    "choices": {
      "A": "Application Insights in Azure Monitor",
      "B": "metric alerts in Azure Monitor",
      "C": "Multivariate Anomaly Detection",
      "D": "Univariate Anomaly Detection"
    },
    "answer": "C"
  },
  {
    "id": 41,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an app named App1 that uses an Azure Cognitive Services model to identify anomalies in a time series data stream. You need to run App1 in a location that has limited connectivity. The solution must minimize costs. What should you use to host the model?",
    "choices": {
      "A": "Azure Kubernetes Service (AKS)",
      "B": "Azure Container Instances",
      "C": "a Kubernetes cluster hosted in an Azure Stack Hub integrated system",
      "D": "the Docker Engine"
    },
    "answer": "D"
  },
  {
    "id": 42,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You have an Azure Cognitive Search resource named Search1 that is used by multiple apps. You need to secure Search1, The solution must meet the following requirements: • Prevent access to Search1 from the internet. • Limit the access of each app to specific queries. What should you do? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "To prevent access from the internet:",
        "options": [
          "Configure an IP firewall.",
          "Create a private endpoint.",
          "Use Azure roles.",
        ],
        "answer": "Create a private endpoint."
      },
      {
        "text": "To limit access to queries:",
        "options": [
          "Create a private endpoint.",
          "Use Azure roles.",
          "Use key authentication."
        ],
        "answer": "Use Azure roles."
      }
    ]
  },
  {
    "id": 43,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a solution that will detect anomalies in sensor data from the previous 24 hours. You need to ensure that the solution scans the entire dataset, at the same time, for anomalies. Which type of detection should you use?",
    "choices": {
      "A": "batch",
      "B": "streaming",
      "C": "change points"
    },
    "answer": "A"
  },
  {
    "id": 44,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You are building an app that will scan confidential documents and use the Language service to analyze the contents. You provision an Azure Cognitive Services resource. You need to ensure that the app can make requests to the Language service endpoint. The solution must ensure that confidential documents remain on-premises. Vhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct rder.",
    "choices_pool": [
      "Run the container and specify an App ID and Client Secret.",
      "Provision an on-premises Kubernetes cluster that is isolated from the internet.",
      "Pull an image from the Microsoft Container Registry (MCR).",
      "Run the container and specify an APl key and the Endpoint URL of the Cognitive Services resource.",
      "Provision an on-premises Kubernetes cluster that has internet connectivity.",
      "Pull an image from Docker Hub.",
      "Provision an Azure Kubernetes Service (AKS) resource."
    ],
    "answer_order": [
      "Provision an on-premises Kubernetes cluster that has internet connectivity.",
      "Pull an image from the Microsoft Container Registry (MCR).",
      "Run the container and specify an APl key and the Endpoint URL of the Cognitive Services resource."
    ]
  },
  {
    "id": 45,
    "type": "hotspot_dropdown",
    "img": "/AI102_imgs/q55.png",
    "prompt": "You have an Azure subscription that has the following configurations: • Subscription ID: 8d3591aa-96b8-4737-ad09-00f9b1ed35ad • Tenant ID: 3edfe572-cb54-3ced-ae12-c5c177f39a12 You plan to create a resource that will perform sentiment analysis and optical character recognition (OCR). You need to use an HTTP request to create the resource in the subscription. The solution must use a single key and endpoint. How should you complete the request? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "[answer choice 1]",
        "options": [
          "subscriptions/3edfe572-cb54-3ced-ae12-c5c177f39a12",
          "subscriptions/8d3591aa-96b8-4737-ad09-00r9b1ed35ad",
          "tenant/3edfe572-cb54-3ced-ae12-c5c177f39a12",
          "tenant/8d3591aa-96b8-4737-ad09-00f9b1ed35ad",
        ],
        "answer": "subscriptions/8d3591aa-96b8-4737-ad09-00r9b1ed35ad"
      },
      {
        "text": "[answer choice 2]",
        "options": [
          "Microsoft.ApiManagement",
          "Microsoft.CognitiveServices",
          "Microsoft.ContainerService",
          "Microsoft.KeyVault"
        ],
        "answer": "Microsoft.CognitiveServices"
      }
    ]
  },
  {
    "id": 46,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure subscription that contains an Anomaly Detector resource. You deploy a Docker host server named Server1 to the on-premises network. You need to host an instance of the Anomaly Detector service on Server1. Vhich parameter should you include in the docker run command?",
    "choices": {
      "A": "Fluentd",
      "B": "Billing",
      "C": "Http Proxy",
      "D": "Mounts"
    },
    "answer": "B"
  },
  {
    "id": 47,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "You are building an app that will use the Speech service. You need to ensure that the app can authenticate to the service by using a Microsoft Azure Active Directory (Azure AD), part of Microsoft Entra, token. Which two actions should you perform? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Enable a virtual network service endpoint.",
      "B": "Configure a custom subdomain.",
      "C": "Request an X.509 certificate.",
      "D": "Create a private endpoint.",
      "E": "Create a Conditional Access policy."
    },
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": 48,
    "type": "hotspot_dropdown",
    "img": "/AI102_imgs/q58.png",
    "prompt": "You need to ensure that the resource can respond to 600 requests per minute. How should you complete the template? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "[answer choice 1]",
        "options": [
          "capacity",
          "count",
          "maxValue",
          "size",
        ],
        "answer": "capacity"
      },
      {
        "text": "[answer choice 2]",
        "options": [
          "1",
          "60",
          "100",
          "600"
        ],
        "answer": "100"
      }
    ]
  },
  {
    "id": 49,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You have an app that manages feedback. You need to ensure that the app can detect negative comments by using the Sentiment Analysis APl in Azure Al Language. The solution must ensure that the managed feedback remains on your company's internal network. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "choices_pool": [
      "Identify the Language service endpoint URL and",
      "query the prediction endpoint.",
      "Provision the Language service resource in Azure.",
      "Run the container and query the prediction endpoint.",
      "Deploy a Docker container to an on-premises server.",
      "Deploy a Docker container to an Azure container instance."
    ],
    "answer_order": [
      "Provision the Language service resource in Azure.",
      "Deploy a Docker container to an on-premises server.",
      "Run the container and query the prediction endpoint."
    ]
  },
  {
    "id": 50,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You have an Azure OpenAl resource named Al1 that hosts three deployments of the GPT 3.5 model. Each deployment is optimized for a unique workload. You plan to deploy three apps. Each app will access Al1 by using the REST API and will use the deployment that was optimized for the app's intended workload. You need to provide each app with access to Al1 and the appropriate deployment. The solution must ensure that only the apps can access Al1. What should you use to provide access to Al1, and what should each app use to connect to its appropriate deployment? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "Provide access to Al1 by using:",
        "options": [
          "An API key",
          "A bearer token",
          "A shared access signature (SAS) token",
        ],
        "answer": "An API key"
      },
      {
        "text": "Connect to the deployment by using:",
        "options": [
          "Connect to the deployment by using:",
          "An API key",
          "A deployment endpoint",
          "A deployment name",
          "A deployment type"
        ],
        "answer": "A deployment name"
      }
    ]
  },
  {
    "id": 51,
    "type": "multiple_choice",
    "img": null,
    "question": "You build a bot by using the Microsoft Bot Framework SDK. You start the bot on a local computer. You need to validate the functionality of the bot. What should you do before you connect to the bot?",
    "choices": {
      "A": "Run the Bot Framework Emulator.",
      "B": "Run the Bot Framework Composer.",
      "C": "Register the bot with Azure Bot Service.",
      "D": "Run Windows Terminal."
    },
    "answer": "A"
  },
  {
    "id": 52,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure OpenAl model named Al1. You are building a web app named App1 by using the Azure OpenAI SDK. You need to configure App1 to connect to Al1. What information must you provide?",
    "choices": {
      "A": "the endpoint, key, and model name",
      "B": "the deployment name, key, and model name",
      "C": "the deployment name, endpoint, and key",
      "D": "the endpoint, key, and model type"
    },
    "answer": "C"
  },
  {
    "id": 53,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a solution in Azure that will use Azure Cognitive Service for Language to process sensitive customer data. You need to ensure that only specific Azure processes can access the Language service. The solution must minimize administrative effort. What should you include in the solution?",
    "choices": {
      "A": "IPsec rules",
      "B": "Azure Application Gateway",
      "C": "a virtual network gateway",
      "D": "virtual network rules"
    },
    "answer": "D"
  },
  {
    "id": 54,
    "type": "multiple_choice",
    "img": null,
    "question": "You plan to perform predictive maintenance. You collect loT sensor data from 100 industrial machines for a year. Each machine has 50 different sensors that generate data at one-minute intervals. In total, you have 5,000 time series datasets. You need to identify unusual values in each time series to help predict machinery failures. Which Azure service should you use?",
    "choices": {
      "A": "Azure Al Computer Vision",
      "B": "Cognitive Search",
      "C": "Azure Al Document Intelligence",
      "D": "Azure Al Anomaly Detector"
    },
    "answer": "D"
  },
  {
    "id": 55,
    "type": "hotspot_dropdown",
    "img": "/AI102_imgs/q65.png",
    "prompt": "You plan to deploy a containerized version of an Azure Cognitive Services service that will be used for sentiment analysis. You configure https://contoso.cognitiveservices.azure.com as the endpoint URI for the service. You need to run the container on an Azure virtual machine by using Docker. How should you complete the command? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "[answer choice 1]",
        "options": [
          "http://contoso.blob.core.windows.net",
          "https://contoso.cognitiveservices.azre.com",
          "mcr.microsoft.com/azure-cognitive-services/textanalytics/keyphrase",
          "mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment",
        ],
        "answer": "mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment"
      },
      {
        "text": "[answer choice 2]",
        "options": [
          "http://contoso.blob.core.windows.net",
          "https://contoso.cognitiveservices.azre.com",
          "mcr.microsoft.com/azure-cognitive-services/textanalytics/keyphrase",
          "mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment",
        ],
        "answer": "https://contoso.cognitiveservices.azre.com"
      }
    ]
  },
  {
    "id": 56,
    "type": "multiple_choice",
    "img": null,
    "question": "You are developing a system that will monitor temperature data from a data stream. The system must generate an alert in response to atypical values. The solution mus minimize development effort. What should you include in the solution?",
    "choices": {
      "A": "Multivariate Anomaly Detection",
      "B": "Azure Stream Analytics",
      "C": "metric alerts in Azure Monitor",
      "D": "Univariate Anomaly Detection"
    },
    "answer": "C"
  },
  {
    "id": 57,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a Microsoft OneDrive folder that contains a 20-GB video file named File1 .avi. You need to index File1.avi by using the Azure Video Indexer website. What should you do?",
    "choices": {
      "A": "Upload File1 .avi to the www.youtube.com webpage, and then copy the URL of the video to the Azure AI Video Indexer website.",
      "B": "Download File1.avi to a local computer, and then upload the file to the Azure Al Video Indexer website.",
      "C": "From OneDrive, create a download link, and then copy the link to the Azure Al Video Indexer website.",
      "D": "From OneDrive, create a sharing link for File1 .avi, and then copy the link to the Azure Al Video Indexer website."
    },
    "answer": "C"
  },
  {
    "id": 58,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "You have an Azure subscription that contains an Azure Al Service resource named CSAccount1 and a virtual network named VNet1. CSAaccount1 is connected to VNet1. You need to ensure that only specific resources can access CSAccount1. The solution must meet the following requirements: • Prevent external access to CSAccount1. • Minimize administrative effort. Which two actions should you perform? Each correct answer presents part of the solution.",
    "choices": {
      "A": "In VNet1, enable a service endpoint for CSAccount1.",
      "B": "In CSAccount1, configure the Access control (IAM) settings.",
      "C": "In VNet1, modify the virtual network settings.",
      "D": "In VNet1, create a virtual subnet.",
      "E": "In CSAccount1, modify the virtual network settings."
    },
    "answer": [
      "A",
      "E"
    ]
  },
  {
    "id": 59,
    "type": "multiple_choice",
    "img": null,
    "question": "Topi You are building an internet-based training solution. The solution requires that a user's camera and microphone remain enabled. You need to monitor a video stream of the user and detect when the user asks an instructor a question. The solution must minimize development effort. What should you include in the solution?",
    "choices": {
      "A": "speech-to-text in the Azure Al Speech service",
      "B": "language detection in Azure Al Language Service",
      "C": "the Face service in Azure Al Vision",
      "D": "object detection in Azure Al Custom Vision"
    },
    "answer": "A"
  },
  {
    "id": 60,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure DevOps pipeline named Pipeline1 that is used to deploy an app. Pipeline1 includes a step that will create an Azure Al services account. You need to add a step to Pipeline1 that will identify the created Azure Al services account. The solution must minimize development effort. Which Azure Command-Line Interface (CLl) command should you run?",
    "choices": {
      "A": "az resource link",
      "B": "az cognitiveservices account network-rule",
      "C": "az cognitiveservices account show",
      "D": "az account list"
    },
    "answer": "C"
  },
  {
    "id": 61,
    "type": "multiple_choice",
    "img": null,
    "question": "You successfully run the following HTTP request.\n\nPOST https://management.azure.com/subscriptions/18c51a87-3a69-47a8-aedc-a54745f708a1/resourceGroups/RG1/providers/Microsoft.CognitiveServices/accounts/contoso1/regenerateKey?api-version=2017-04-18\nBody{\"keyName\": \"Key2\"}\n\nWhat is the result of the request?",
    "choices": {
      "A": "A key for Azure Cognitive Services was generated in Azure Key Vault.",
      "B": "A new query key was generated.",
      "C": "The primary subscription key and the secondary subscription key were rotated.",
      "D": "The secondary subscription key was reset."
    },
    "answer": "D"
  },
  {
    "id": 62,
    "type": "multiple_choice_multi_select",
    "img": "/AI102_imgs/q11.png",
    "question": "You build a custom Form Recognizer model.\n\nYou receive sample files to use for training the model as shown in the following table. Which three files can you use to train the model? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
    "choices": {
      "A": "File1",
      "B": "File2",
      "C": "File3",
      "D": "File4",
      "E": "File5",
      "F": "File6"
    },
    "answer": ["A", "C", "F"]
  },
  {
    "id": 63,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "A customer uses Azure Cognitive Search.\n\nThe customer plans to enable a server-side encryption and use customer-managed keys (CMK) stored in Azure.\n\nWhat are three implications of the planned change? Each correct answer presents a complete solution.",
    "choices": {
      "A": "The index size will increase.",
      "B": "Query times will increase.",
      "C": "A self-signed X.509 certificate is required.",
      "D": "The index size will decrease.",
      "E": "Query times will decrease.",
      "F": "Azure Key Vault is required."
    },
    "answer": ["A", "B", "F"]
  },
  {
    "id": 64,
    "type": "multiple_choice",
    "img": null,
    "question": "You are developing a new sales system that will process the video and text from a public-facing website.\n\nYou plan to notify users that their data has been processed by the sales system.\n\nWhich responsible AI principle does this help meet?",
    "choices": {
      "A": "transparency",
      "B": "fairness",
      "C": "inclusiveness",
      "D": "reliability and safety"
    },
    "answer": "A"
  },
  {
    "id": 65,
    "type": "multiple_choice",
    "img": null,
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou create a web app named app1 that runs on an Azure virtual machine named vm1. Vm1 is on an Azure virtual network named vnet1.\n\nYou plan to create a new Azure Cognitive Search service named service1.\n\nYou need to ensure that app1 can connect directly to service1 without routing traffic over the public internet.\n\nSolution: You deploy service1 and a public endpoint to a new virtual network, and you configure Azure Private Link.\n\nDoes this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "B"
  },
  {
    "id": 66,
    "type": "multiple_choice",
    "img": null,
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou create a web app named app1 that runs on an Azure virtual machine named vm1. Vm1 is on an Azure virtual network named vnet1.\n\nYou plan to create a new Azure Cognitive Search service named service1.\n\nYou need to ensure that app1 can connect directly to service1 without routing traffic over the public internet.\n\nSolution: You deploy service1 and a public endpoint, and you configure an IP firewall rule.\n\nDoes this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "B"
  },
  {
    "id": 67,
    "type": "multiple_choice",
    "img": null,
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou create a web app named app1 that runs on an Azure virtual machine named vm1. Vm1 is on an Azure virtual network named vnet1.\n\nYou plan to create a new Azure Cognitive Search service named service1.\n\nYou need to ensure that app1 can connect directly to service1 without routing traffic over the public internet.\n\nSolution: You deploy service1 and a public endpoint, and you configure a network security group (NSG) for vnet1.\n\nDoes this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "B"
  },
  {
    "id": 68,
    "type": "multiple_choice",
    "img": null,
    "question": "You plan to perform predictive maintenance.\n\nYou collect IoT sensor data from 100 industrial machines for a year. Each machine has 50 different sensors that generate data at one-minute intervals. In total, you have 5,000 time series datasets.\n\nYou need to identify unusual values in each time series to help predict machinery failures.\n\nWhich Azure service should you use?",
    "choices": {
      "A": "Anomaly Detector",
      "B": "Cognitive Search",
      "C": "Form Recognizer",
      "D": "Custom Vision"
    },
    "answer": "A"
  },
  {
    "id": 69,
    "type": "hotspot_dropdown",
    "img": "/AI102_imgs/q18.png",
    "prompt": "You are developing a streaming Speech to Text solution that will use the Speech SDK and MP3 encoding.\n\nYou need to develop a method to convert speech to text for streaming MP3 data.\n\nHow should you complete the code? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "items": [
      {
        "text": "var audioFormat = [answer choice 1](AudioStreamContainerFormat.MP3);",
        "options": [
          "AudioConfig.SetProperty",
          "AudioStreamFormat.GetCompressedFormat",
          "AudioStreamFormat.GetWaveFormatPCM",
          "PullAudioInputStream"
        ],
        "answer": "AudioStreamFormat.GetCompressedFormat"
      },
      {
        "text": "using (var recognizer = new [answer choice 2](speechConfig, audioConfig))",
        "options": [
          "KeywordRecognizer",
          "SpeakerRecognizer",
          "SpeechRecognizer",
          "SpeechSynthesizer"
        ],
        "answer": "SpeechRecognizer"
      }
    ]
  },
  {
    "id": 70,
    "type": "hotspot_dropdown",
    "img": "/AI102_imgs/q19.png",
    "prompt": "You are developing an internet-based training solution for remote learners.\n\nYour company identifies that during the training, some learners leave their desk for long periods or become distracted.\n\nYou need to use a video and audio feed from each learner's computer to detect whether the learner is present and paying attention. The solution must minimize development effort and identify each learner.\n\nWhich Azure Cognitive Services service should you use for each requirement? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "From a learner's video feed, verify whether the learner is present: [answer choice]",
        "options": ["Face", "Speech", "Text Analytics"],
        "answer": "Face"
      },
      {
        "text": "From a learner's facial expression in the video feed, verify whether the learner is paying attention: [answer choice]",
        "options": ["Face", "Speech", "Text Analytics"],
        "answer": "Face"
      },
      {
        "text": "From a learner's audio feed, detect whether the learner is talking: [answer choice]",
        "options": ["Face", "Speech", "Text Analytics"],
        "answer": "Speech"
      }
    ]
  },
  {
    "id": 71,
    "type": "hotspot_dropdown",
    "img": "/AI102_imgs/q71.png",
    "prompt": "You have 1,000 scanned images of hand-written survey responses. The surveys do NOT have a consistent layout.\n\nYou have an Azure subscription that contains an Azure AI Document Intelligence resource named Aldoc1.\n\nYou open Document Intelligence Studio and create a new project.\n\nYou need to extract data from the survey responses. The solution must minimize development effort.\n\nTo where should you upload the images, and which type of model should you use? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "Upload to: [answer choice 1]",
        "options": [
          "An Azure Cosmos DB account",
          "An Azure Files share",
          "An Azure Storage account"
        ],
        "answer": "An Azure Storage account"
      },
      {
        "text": "Model type: [answer choice 2]",
        "options": [
          "Custom neural",
          "Custom template",
          "Identity document (ID)"
        ],
        "answer": "Custom neural"
      },
    ]
  },
  {
    "id": 72,
    "type": "hotspot_yes_no",
    "img": "/AI102_imgs/t2q1.png",
    "prompt": "You are developing an application that wil use the Computer Vision client ibrary. The application has the following code. For each of the following statements, select Yes if the statement is true. Otherwise, select No. OTE: Each correct selection is worth one point. Statements Yes No The code will perform face recognition. The code will list tags and their associated confidence. O The code will read a file from the local file system.",
    "statements": [
      {
        "text": "The code will perform face recognition.",
        "answer": "No"
      },
      {
        "text": "The code will list tags and their associated confidence.",
        "answer": "Yes"
      },
      {
        "text": "The code will read a file from the local file system.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 73,
    "type": "multiple_choice_multi_select",
    "img": "/AI102_imgs/t2q2.png",
    "question": "You are developing a method that uses the Computer Vision client library. The method will perform optical character recognition (OcR) in images. The method has the following code. During testing you discover that the callto the GetReadResultAsync method occurs before the read operation is complete. You need to prevent the GetReadResultAsync method from proceeding until the read operation is complete. Which two actions should you perform? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Remove the Guid. Parse(operationld) parameter.",
      "B": "Add code to verify the results. Status value.",
      "C": "Add code to verify the status of the txtHeaders. Status value.",
      "D": "Wrap the call to GetReadResultAsync within a loop that contains a delay."
    },
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": 74,
    "type": "hotspot_dropdown",
    "img": "/AI102_imgs/t2q3.png",
    "prompt": "You have a Computer Vision resource named contoso1 that is hosted in the West US Azure region. ou need to use contoso1 to make a different size of a product photo by using the smart cropping feature. low should you complete the API URL? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "[answer choice 1]",
        "options": [
          "https://api.projectoxford.ai",
          "https://contoso1.cognitiveservices.azure.com",
          "https:/westus.api.cognitive.microsoft.com"
        ],
        "answer": "https:/westus.api.cognitive.microsoft.com"
      },
      {
        "text": "[answer choice 2]",
        "options": [
          "areaOflnterest",
          "detect",
          "generateThumbnail"
        ],
        "answer": "areaOflnterest"
      }
    ]
  },
  {
    "id": 75,
    "type": "drag_and_drop",
    "img": "/AI102_imgs/t2q4.png",
    "prompt": "You are developing a webpage that will use the Azure Video Analyzer for Media (previously Video Indexer) service to display videos of internal company meetings. You embed the Player widget and the Cognitive Insights widget into the page. You need to configure the widgets to meet the following requirements: Ensure that users can search for keywords. Display the names and faces of people in the video. Show captions in the video in English (United States). How should you complete the URL for each widget? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
    "choices_pool": [
      "en-Us",
      "false",
      "people.keywords",
      "people.search",
      "search",
      "true"
    ],
    "targets": [
      {
        "text": "choice 1",
        "answer": "people.keywords"
      },
      {
        "text": "choice 2",
        "answer": "search"
      },
      {
        "text": "choice 3",
        "answer": "true"
      },
      {
        "text": "choice 4",
        "answer": "en-Us"
      }
    ]
  },
  {
    "id": 76,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You train a Custom Vision model to identify a company's products by using the Retail domain. You plan to deploy the model as part of an app for Android phones. You need to prepare the model for deployment. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order. elect and Place:",
    "choices_pool": [
      "Change the model domain.",
      "Retrain the model.",
      "Test the model.",
      "Export the model."
    ],
    "answer_order": [
      "Change the model domain.",
      "Retrain the model.",
      "Export the model."
    ]
  },
  {
    "id": 77,
    "type": "hotspot_yes_no",
    "img": "/AI102_imgs/t2q6.png",
    "prompt": "You are developing an application to recognize employees' faces by using the Face Recognition APl. Images of the faces will be accessible from a URl endpoint. The application has the following code. For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statements Yes No The code will add a face image to a person object in a person group. The code will work for up to 10,000 people. add face can be called multiple times to add multiple face images to a person object.",
    "statements": [
      {
        "text": "The code will add a face image to a person object in a person group.",
        "answer": "Yes"
      },
      {
        "text": "The code will work for up to 10,000 people.",
        "answer": "Yes"
      },
      {
        "text": "add face can be called multiple times to add multiple face images to a person object.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 78,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You have a Custom Vision resource named acvdev in a development environment. You have a Custom Vision resource named acvprod in a production environment. n acvdev, you build an object detection model named obj1 in a project named proj1. ou need to move obj1 to acvprod. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct rder. lect and Place:",
    "choices_pool": [
      "Use the ExportProject endpoint on acvdev.",
      "Use the GetProjects endpoint on acvdev.",
      "Use the ImportProject endpoint on acvprod.",
      "Use the ExportIteration endpoint on acvdev.",
      "Use the GetIterations endpoint on acvdev.",
      "Use the UpdateProject endpoint on acvprod."
    ],
    "answer_order": [
      "Use the GetProjects endpoint on acvdev.",
      "Use the ExportProject endpoint on acvdev.",
      "Use the ImportProject endpoint on acvprod."
    ]
  },
  {
    "id": 79,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You are developing an application that will recognize faults in components produced on a factory production line. The components are specific to your business. You need to use the Custom Vision API to help detect common faults. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order. elect and Place:",
    "choices_pool": [
      "Train the classifier model.",
      "Upload and tag images.",
      "Initialize the training dataset.",
      "Train the object detection model.",
      "Create a project."
    ],
    "answer_order": [
      "Create a project.",
      "Upload and tag the images.",
      "Train the classifier model."
    ]
  },
  {
    "id": 80,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are building a model that will be used in an iOS app. You have images of cats and dogs. Each image contains either a cat or a dog. You need to use the Custom Vision service to detect whether the images is of a cat or a dog. How should you configure the project in the Custom Vision portal? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "[answer choice 1]",
        "options": [
          "Object Detection",
          "Classification Types:"
        ],
        "answer": "Classification"
      },
      {
        "text": "[answer choice 2]",
        "options": [
          "Multilabel (Single tag per image)",
          "Multilabel (Multiple tags per image)"
        ],
        "answer": "Multilabel (Single tag per image)"
      },
      {
        "text": "[answer choice 3]",
        "options": [
          "Audit",
          "Food",
          "General",
          "General (compact)",
          "Landmarks",
          "Landmarks (compact)",
          "Retail",
          "Retail (compact)"
        ],
        "answer": "General"
      }
    ]
  },
  {
    "id": 81,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure Video Analyzer for Media (previously Video Indexer) service that is used to provide a search interface over company videos on your company's website. You need to be able to search for videos based on who is present in the video. What should you do?",
    "choices": {
      "A": "Create a person model and associate the model to the videos.",
      "B": "Create person objects and provide face images for each object.",
      "C": "Invite the entire staff of the company to Video Indexer.",
      "D": "Edit the faces in the videos.",
      "E": "Upload names to a language model."
    },
    "answer": "A"
  },
  {
    "id": 82,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "You use the Custom Vision service to build a classifier. After training is complete, you need to evaluate the classifier. Which two metrics are available for review? Each correct answer presents a complete solution.",
    "choices": {
      "A": "recall",
      "B": "F-score",
      "C": "weighted accuracy",
      "D": "precision",
      "E": "area under the curve (AUC)"
    },
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "id": 83,
    "type": "drag_and_drop",
    "img": "/AI102_imgs/t2q12.png",
    "prompt": "You are developing a call to the Face API. The call must find similar faces from an existing list named employeefaces. The employeefaces list contains 60,000 images. How should you complete the body of the HTTP request? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all.",
    "choices_pool": [
      "\"faceListId\"",
      "\"LargeFaceListId\"",
      "\"matchFace\"",
      "\"matchPerson\""
    ],
    "targets": [
      {
        "text": "The key used to reference the face list in the request body (replacing the placeholder before `: \"employeefaces\"`)",
        "answer": "\"LargeFaceListId\""
      },
      {
        "text": "The value for the \"mode\" field in the request body",
        "answer": "\"matchFace\""
      }
    ]
  },
  {
    "id": 84,
    "type": "drag_and_drop",
    "img": "/AI102_imgs/t2q13.png",
    "prompt": "You are developing a photo application that will find photos of a person based on a sample image by using the Face API. You need to create a POST request to find the photos. How should you complete the request? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all.",
    "choices_pool": [
      "detect",
      "findsimilars",
      "group",
      "identify",
      "matchFace",
      "matchPerson",
      "verify"
    ],
    "targets": [
      {
        "text": "POST {Endpoint}/face/v1.0/[answer] — the API endpoint path segment",
        "answer": "findsimilars"
      },
      {
        "text": "The value for the \"mode\" field in the request body",
        "answer": "matchPerson"
      }
    ]
  },
  {
    "id": 85,
    "type": "hotspot_yes_no",
    "img": "/AI102_imgs/t2q14.png",
    "prompt": "You develop a test method to verify the results retrieved from a call to the Computer Vision API. The call is used to analyze the existence of company logos in images. The call returns a collection of brands named brands. You have a code segment that iterates over brands and prints brand name and rectangle coordinates (x, y, w, h) for brands with confidence >= 0.75. For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The code will return the name of each detected brand with a confidence equal to or higher than 75 percent.",
        "answer": "Yes"
      },
      {
        "text": "The code will return coordinates for the top-left corner of the rectangle that contains the brand logo of the displayed brands.",
        "answer": "Yes"
      },
      {
        "text": "The code will return coordinates for the bottom-right corner of the rectangle that contains the brand logo of the displayed brands.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 86,
    "type": "hotspot_dropdown",
    "img": "/AI102_imgs/t2q15.png",
    "prompt": "You develop an application that uses the Face API. You need to add multiple images to a person group. How should you complete the code? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "using([answer choice] t = File.OpenRead(imagePath))",
        "options": [
          "File",
          "Stream",
          "Uri",
          "Url"
        ],
        "answer": "Stream"
      },
      {
        "text": "await faceClient.PersonGroupPerson.[answer choice](personGroupId, personId, t);",
        "options": [
          "AddFaceFromStreamAsync",
          "AddFaceFromUrlAsync",
          "CreateAsync",
          "GetAsync"
        ],
        "answer": "AddFaceFromStreamAsync"
      }
    ]
  },
  {
    "id": 87,
    "type": "multiple_choice",
    "img": "/AI102_imgs/t2q16.png",
    "question": "Your company uses an Azure Cognitive Services solution to detect faces in uploaded images using detection_01 model. You discover that the solution frequently fails to detect faces in blurred images and in images that contain sideways faces. You need to increase the likelihood that the solution can detect faces in blurred images and images that contain sideways faces. What should you do?",
    "choices": {
      "A": "Use a different version of the Face API.",
      "B": "Use the Computer Vision service instead of the Face service.",
      "C": "Use the Identify method instead of the Detect method.",
      "D": "Change the detection model."
    },
    "answer": "D"
  },
  {
    "id": 88,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a Python function for creating Azure Cognitive Services resources programmatically. You need to call the function to create a free Azure resource in the West US Azure region. The resource will be used to generate captions of images automatically. Which code should you use?",
    "choices": {
      "A": "create_resource(\"res1\", \"ComputerVision\", \"F0\", \"westus\")",
      "B": "create_resource(\"res1\", \"CustomVision.Prediction\", \"F0\", \"westus\")",
      "C": "create_resource(\"res1\", \"ComputerVision\", \"S0\", \"westus\")",
      "D": "create_resource(\"res1\", \"CustomVision.Prediction\", \"S0\", \"westus\")"
    },
    "answer": "A"
  },
  {
    "id": 89,
    "type": "multiple_choice_multi_select",
    "img": "/AI102_imgs/t2q18.png",
    "question": "You are developing a method that uses the Computer Vision client library to perform optical character recognition (OCR) in images. During testing, you discover that the call to the GetReadResultAsync method occurs before the read operation is complete. You need to prevent the GetReadResultAsync method from proceeding until the read operation is complete. Which two actions should you perform? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Remove the operation_id parameter.",
      "B": "Add code to verify the read_results.status value.",
      "C": "Add code to verify the status of the read_operation_location value.",
      "D": "Wrap the call to get_read_result within a loop that contains a delay."
    },
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": 91,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to build a solution that will use optical character recognition (OCR) to scan sensitive documents by using the Computer Vision APl. The solution must NOT be deployed to the public cloud. What should you do?",
    "choices": {
      "A": "Build an on-premises web app to query the Computer Vision endpoint.",
      "B": "Host the Computer Vision endpoint in a container on an on-premises server.",
      "C": "Host an exported Open Neural Network Exchange (ONNX) model on an on-premises server.",
      "D": "Build an Azure web app to query the Computer Vision endpoint."
    },
    "answer": "B"
  },
  {
    "id": 92,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure Cognitive Search solution and a collection of handwritten letters stored as JPEG files. You plan to index the collection. The solution must ensure that queries can be performed on the contents of the letters. ou need to create an indexer that has a skillset. Which skill should you include?",
    "choices": {
      "A": "image analysis",
      "B": "optical character recognition (OCR)",
      "C": "key phrase extraction",
      "D": "document extraction"
    },
    "answer": "B"
  },
  {
    "id": 93,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You have a library that contains thousands of images. You need to tag the images as photographs, drawings, or clipart. Which service endpoint and response property should you use? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "Service endpoint: [choice 1]",
        "options": [
          "Computer Vision analyze images",
          "Computer Vision object detection",
          "Custom Vision image classification",
          "Custom Vision object detection"
        ],
        "answer": "Computer Vision analyze images"
      },
      {
        "text": "Property: [choice 2]",
        "options": [
          "categories",
          "description",
          "imageType",
          "metadata",
          "objects"
        ],
        "answer": "imageType"
      }
    ]
  },
  {
    "id": 94,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an app that captures live video of exam candidates. You need to use the Face service to validate that the subjects of the videos are real people. What should you do?",
    "choices": {
      "A": "Call the face detection APl and retrieve the face rectangle by using the FaceRectangle attribute.",
      "B": "Call the face detection API repeatedly and check for changes to the FaceAttributes. HeadPose attribute.",
      "C": "Call the face detection API and use the FaceLandmarks attribute to calculate the distance between pupils.",
      "D": "Call the face detection API repeatedly and check for changes to the FaceAttributes.Accessories attribute."
    },
    "answer": "B"
  },
  {
    "id": 95,
    "type": "hotspot_dropdown",
    "img": "/AI102_imgs/t2q24.png",
    "prompt": "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in teh graphic.",
    "items": [
      {
        "text": "[choice 1]",
        "options": [
          "detects",
          "finds similar",
          "recognizes",
          "verifies"
        ],
        "answer": "detects"
      },
      {
        "text": "[choice 2]",
        "options": [
          "118, 754",
          "497, 191",
          "797, 201",
          "1167,249"
        ],
        "answer": "797, 201"
      }
    ]
  },
  {
    "id": 96,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure subscription that contains an Al enrichment pipeline in Azure Cognitive Search and an Azure Storage account that has 10 GB of scanned documents and images. You need to index the documents and images in the storage account. The solution must minimize how long it takes to build the index. What should you do?",
    "choices": {
      "A": "From the Azure portal, configure parallel indexing.",
      "B": "From the Azure portal, configure scheduled indexing.",
      "C": "Configure field mappings by using the REST API.",
      "D": "Create a text-based indexer by usinq the REST API."
    },
    "answer": "A"
  },
  {
    "id": 97,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You need to analyze video content to identify any mentions of specific company names. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the corred order.",
    "choices_pool": [
      "Add the specific company names to the exclude list",
      "Add the specific company names to the include list",
      "From Content model customization, select Language",
      "Sign in to the Custom Vision website",
      "Sign in to the Azure Video Analyzer for Media website",
      "From Content model customization, select Brands"
    ],
    "answer_order": [
      "Sign in to Azure Video Analyzer for Media website",
      "From Content model customization, select Brands",
      "Add the specific company names to the include list"
    ]
  },
  {
    "id": 98,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a mobile app that manages printed forms. You need the app to send images of the forms directly to Forms Recognizer to extract relevant information. For compliance reasons, the image files must not be stored in the cloud. In which format should you send the images to the Form Recognizer APl endpoint?",
    "choices": {
      "A": "raw image binary",
      "B": "form URL encoded",
      "C": "JSON"
    },
    "answer": "A"
  },
  {
    "id": 99,
    "type": "multiple_choice",
    "img": null,
    "question": "You plan to build an app that will generate a list of tags for uploaded images. The app must meet the following requirements: • Generate tags in a user's preferred language. • Support English, French, and Spanish. • Minimize development effort. You need to build a function that will generate the tags for the app. Which Azure service endpoint should you use?",
    "choices": {
      "A": "Content Moderator Image Moderation",
      "B": "Custom Vision image classification",
      "C": "Computer Vision Image Analysis",
      "D": "Custom Translator"
    },
    "answer": "C"
  },
  {
    "id": 100,
    "type": "hotspot_yes_no",
    "img": "/AI102_imgs/t2q29.png",
    "prompt": "You developa test method t verify he results retrieved from a call t the Computer Vision APl. The call is used o analyze the existence company logos inmaes. The call returns a collection of brands named brands. You have the following code segment, For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statements:",
    "statements": [
      {
        "text": "The code will display the name of each detected brand with a confidence equal to or higher than 75 percent.",
        "answer": "Yes"
      },
      {
        "text": "The code will display coordinates for the top-left corner of the rectangle that contains the brand logo of the displayed brands.",
        "answer": "Yes"
      },
      {
        "text": "The code will display coordinates for the bottom-right corner of the rectangle that contains the brand logo of the displayed brands.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 101,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "You have a factory that produces cardboard packaging for food products. The factory has intermittent internet connectivity. The packages are required to include four samples of each product. You need to build a Custom Vision model that willidentify defects in packaging and provide the location of the defects to an operator. The model must ensure that each package contains the four products. Which project type and domain should you use? To answer, drag the appropriate options to the correct targets. Each option may be used once, more than once, or not at all. You may need to drag the split bar between panes or scrollto view content.",
    "answer": "Options Food General Project type: General (compact) Domain: Image classification Logo Object detection",
    "choices_pool": [
      "Food",
      "General",
      "General (compact)",
      "Image classification",
      "Logo",
      "Object detection"
    ],
    "targets": [
      {
        "text": "Project type: [choice 1]",
        "answer": "Object detection"
      },
      {
        "text": "Domain: [choice 2]",
        "answer": "General (compact)"
      }
    ]
  },
  {
    "id": 102,
    "type": "drag_and_drop",
    "img": "/AI102_imgs/t2q31.png",
    "prompt": "The performance of the model based on training data is shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. The percentage of false positives is [answer cholce] The value for the number of true positives divided by the total number of true positives and false negatives is [answer choice]%.",
    "choices_pool": [
      "0",
      "25",
      "30",
      "50",
      "100"
    ],
    "targets": [
      {
        "text": "[choice 1]",
        "answer": "0"
      },
      {
        "text": "[choice 2]",
        "answer": "25"
      }
    ]
  },
  {
    "id": 103,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building an app that willinclude one million scanned magazine articles. Each article will be stored as an image file. You need to configure the app to extract text from the images. The solution must minimize development effort. What should you include in the solution?",
    "choices": {
      "A": "Computer Vision Image Analysis",
      "B": "the Read APl in Computer Vision",
      "C": "Form Recognizer",
      "D": "Azure Cognitive Service for Language"
    },
    "answer": "B"
  },
  {
    "id": 104,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a 20-GB video file named File1.avi that is stored on a local drive. You need to index File1.avi by using the Azure Video Indexer website. What should you do first?",
    "choices": {
      "A": "Upload File1. avi to an Azure Storage queue.",
      "B": "Upload File1 .avi to the Azure Video Indexer website.",
      "C": "Upload File1.avi to Microsoft OneDrive.",
      "D": "Upload File1. avi to the www.youtube. com webpage."
    },
    "answer": "C"
  },
  {
    "id": 105,
    "type": "hotspot_dropdown",
    "img": "needed",
    "prompt": "You are building an app that will share user images. You need to configure the app to meet the following requirements: • Uploaded images must be scanned and any text must be extracted from the images. • Extracted text must be analyzed for the presence of profane language. • The solution must minimize development effort. What should you use for each requirement? To answer, select the appropriate options in the answer area. ",
    "items": [
      {
        "text": "[choice 1]",
        "options": [
          "Azure Al Language",
          "Azure Al Computer Vision",
          "Content Moderator",
          "Azure Al Custiom Vision",
          "Azure Al Document Intelligence"
        ],
        "answer": "Azure Al Computer Vision"
      },
      {
        "text": "[choice 2]",
        "options": [
          "Azure Al Language",
          "Azure Al Computer Vision",
          "Content Moderator",
          "Azure Al Custiom Vision",
          "Azure Al Document Intelligence"
        ],
        "answer": "Content Moderator"
      }
    ]
  },
  {
    "id": 106,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "You are building an app that will share user images. You need to configure the app to perform the following actions when a user uploads an image: •Categorize the image as either a photograph or a drawing. •Generate a caption for the image. The solution must minimize development effort. Which two services should you include in the solution? Each correct answer presents part of the solution.",
    "choices": {
      "A": "object detection in Azure Al Computer Vision",
      "B": "content tags in Azure Al Computer Vision",
      "C": "image descriptions in Azure Al Computer Vision",
      "D": "image type detection in Azure Al Computer Vision",
      "E": "image classification in Azure Al Custom Vision"
    },
    "answer": [
      "C",
      "D"
    ]
  },
  {
    "id": 107,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building an app that will use the Azure Al Video Indexer service. You plan to train a language model to recognize industry-specific terms. You need to upload a file that contains the industry-specific terms. Which file format should you use?",
    "choices": {
      "A": "XML",
      "B": "TXT",
      "C": "XLS",
      "D": "PDF"
    },
    "answer": "B"
  },
  {
    "id": 108,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You have an app that uses Azure Al and a custom trained classifier to identify products in images. You need to add new products to the classifier. The solution must meet the following requirements: Minimize how long it takes to add the products. Minimize development effort. Witch five actions should you perform in sequence?",
    "choices_pool": [
      "Label the sample images.",
      "From Vision Studio, open the project.",
      "Publish the model.",
      "From the Custom Vision portal, open the project",
      "Retrain the model.",
      "Upload sample images of the new products.",
      "From the Azure Machine Learning studio, open the workspace."
    ],
    "answer_order": [
      "From Vision Studio, open the project.",
      "Upload sample images of the new products.",
      "Label the sample images.",
      "Retrain the model.",
      "Publish the model."
    ]
  },
  {
    "id": 109,
    "type": "hotspot_yes_no",
    "img": "/AI102_imgs/t2q38.png",
    "prompt": "You are developing an application that will use the Azure AI Vision client library. The application has the following code. For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The code will perform face recognition.",
        "answer": "No"
      },
      {
        "text": "The code will list tags and their associated confidence.",
        "answer": "Yes"
      },
      {
        "text": "The code will read a file from the local file system.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 110,
    "type": "multiple_choice_multi_select",
    "img": "/AI102_imgs/t2q39.png",
    "question": "You are developing a method that uses the Azure Al Vision client library. The method wil perform optical character recognition (ocR) in images. The method has the following code. During testing, you discover that the call to the get_read_result method occurs before the read operation is complete. You need to prevent the get_read_result method from proceeding until the read operation is complete. Which two actions should you perform? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Remove the operation_id parameter.",
      "B": "Add code to verify the read_results.status value.",
      "C": "Add code to verify the status of the read_operation_location value.",
      "D": "Wrap the call to get_read_result within a loop that contains a delay."
    },
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": 111,
    "type": "hotspot_dropdown",
    "img": "/AI102_imgs/t2q40.png",
    "prompt": "You are developing an app that will use the Azure Al Vision API to analyze an image. You need configure the request that willbe used by the app to identify whether an image is clipart or a line drawing. How should you complete the request? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "[answer choice 1]",
        "options": [
          "GET",
          "PATCH",
          "POST"
        ],
        "answer": "POST"
      },
      {
        "text": "[answer choice 2]",
        "options": [
          "description",
          "imageType",
          "objects",
          "tags"
        ],
        "answer": "imageType"
      }
    ]
  },
  {
    "id": 112,
    "type": "hotspot_dropdown",
    "img": "/AI102_imgs/t2q41.png",
    "prompt": "You have an Azure subscription that contains an Azure Al Video Indexer account. ou need to add a custom brand and logo to the indexer and configure an exclusion for the custom brand. Iow should you complete the REST API call? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "[answer choice 1]",
        "options": [
          "enabled",
          "state",
          "tags",
          "useBuiltin"
        ],
        "answer": "tags"
      },
      {
        "text": "[answer choice 2]",
        "options": [
          "[\"Excluded\"]",
          "[\"Included\"]",
          "false",
          "true"
        ],
        "answer": "[\"Excluded\"]"
      }
    ]
  },
  {
    "id": 113,
    "type": "multiple_choice",
    "img": "/AI102_imgs/t2q42.png",
    "question": "You have a local folder that contains the files shown in the following table. You need to analyze the files by using Azure Al Video Indexer. Which files can you upload to the Video Indexer website?",
    "choices": {
      "A": "File1 and File3 only",
      "B": "File1, File2, File3 and File4",
      "C": "File1, File2, and File3 only",
      "D": "File1 and File2 only",
      "E": "File1, File2, and File4 only"
    },
    "answer": "B"
  },
  {
    "id": 114,
    "type": "multiple_choice",
    "img": null,
    "question": "You build a language model by using a Language Understanding service. The language model is used to search for information on a contact list by using an intent named FindContact. A conversational expert provides you with the following list of phrases to use for training:\n- Find contacts in London.\n- Who do I know in Seattle?\n- Search for contacts in Ukraine.\n\nYou need to implement the phrase list in Language Understanding.\nSolution: You create a new pattern in the FindContact intent.\nDoes this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "A"
  },
  {
    "id": 115,
    "type": "multiple_choice",
    "img": null,
    "question": "You develop an application to identify species of flowers by training a Custom Vision model. You receive images of new flower species.\nYou need to add the new images to the classifier.\nSolution: You add the new images, and then use the Smart Labeler tool.\nDoes this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "B"
  },
  {
    "id": 116,
    "type": "multiple_choice",
    "img": null,
    "question": "You develop an application to identify species of flowers by training a Custom Vision model. You receive images of new flower species.\nYou need to add the new images to the classifier.\nSolution: You add the new images and labels to the existing model. You retrain the model, and then publish the model.\nDoes this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "A"
  },
  {
    "id": 117,
    "type": "multiple_choice",
    "img": null,
    "question": "You develop an application to identify species of flowers by training a Custom Vision model. You receive images of new flower species.\nYou need to add the new images to the classifier.\nSolution: You create a new model, and then upload the new images and labels.\nDoes this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "B"
  },
  {
    "id": 118,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are developing a service that records lectures given in English (United Kingdom). You have a method named AppendToTranscriptFile that takes translated text and a language identifier. You need to develop code that will provide transcripts of the lectures to attendees in their respective language. The supported languages are English, French, Spanish, and German.\nHow should you complete the code?",
    "items": [
      {
        "text": "var lang = new List<string> [answer choice];",
        "options": [
          "{\"en-GB\"}",
          "{\"fr\", \"de\", \"es\"}",
          "{\"French\", \"Spanish\", \"German\"}",
          "{languages}"
        ],
        "answer": "{\"fr\", \"de\", \"es\"}"
      },
      {
        "text": "using var recognizer = new [answer choice](config, audioConfig);",
        "options": [
          "IntentRecognizer",
          "SpeakerRecognizer",
          "SpeechSynthesizer",
          "TranslationRecognizer"
        ],
        "answer": "TranslationRecognizer"
      }
    ]
  },
  {
    "id": 119,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You train a Custom Vision model used in a mobile app. You receive 1,000 new images that do not have any associated data. You need to use the images to retrain the model. The solution must minimize how long it takes to retrain the model.\nWhich three actions should you perform in the Custom Vision portal, and in which order?",
    "choices_pool": [
      "Upload the images by category.",
      "Get suggested tags.",
      "Upload all the images.",
      "Group the images locally into category folders.",
      "Review the suggestions and confirm the tags.",
      "Tag the images manually."
    ],
    "answer_order": [
      "Upload all the images.",
      "Get suggested tags.",
      "Review the suggestions and confirm the tags."
    ]
  },
  {
    "id": 120,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a Conversational Language Understanding model for an e-commerce chatbot. Users can speak or type their billing address when prompted by the chatbot.\nYou need to construct an entity to capture billing addresses.\nWhich entity type should you use?",
    "choices": {
      "A": "machine learned",
      "B": "Regex",
      "C": "list",
      "D": "Pattern.any"
    },
    "answer": "A"
  },
  {
    "id": 121,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "You are building an Azure WebJob that will create knowledge bases from an array of URLs. You instantiate a QnAMakerClient object that has the relevant API keys and assign the object to a variable named client.\nYou need to develop a method to create the knowledge bases.\nWhich two actions should you include in the method? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Create a list of FileDTO objects that represents data from the WebJob.",
      "B": "Call the client.Knowledgebase.CreateAsync method.",
      "C": "Create a list of QnADTO objects that represents data from the WebJob.",
      "D": "Create a CreateKbDTO object."
    },
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": 122,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are developing an application that includes language translation. The application will translate text retrieved by using a function named getTextToBeTranslated. The text can be in one of many languages. The content of the text must remain within the Americas Azure geography.\nYou need to develop code to translate the text to a single language.\nHow should you complete the code?",
    "items": [
      {
        "text": "var endpoint = [answer choice]",
        "options": [
          "\"https://api.cognitive.microsofttranslator.com/translate\"",
          "\"https://api.cognitive.microsofttranslator.com/transliterate\"",
          "\"https://api-apc.cognitive.microsofttranslator.com/detect\"",
          "\"https://api-nam.cognitive.microsofttranslator.com/detect\"",
          "\"https://api-nam.cognitive.microsofttranslator.com/translate\""
        ],
        "answer": "\"https://api-nam.cognitive.microsofttranslator.com/translate\""
      },
      {
        "text": "var uri = endpoint + [answer choice]",
        "options": [
          "\"?from=en\"",
          "\"?suggestedFrom=en\"",
          "\"?to=en\""
        ],
        "answer": "\"?to=en\""
      }
    ]
  },
  {
    "id": 123,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a conversational language understanding model.\nYou need to enable active learning.\nWhat should you do?",
    "choices": {
      "A": "Add show-all-intents=true to the prediction endpoint query.",
      "B": "Enable speech priming.",
      "C": "Add log=true to the prediction endpoint query.",
      "D": "Enable sentiment analysis."
    },
    "answer": "C"
  },
  {
    "id": 124,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "You run the following command:\ndocker run --rm -it -p 5000:5000 --memory 10g --cpus 2 \\\nmcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment\\\nEula=accept\\\nBilling={ENDPOINT_URI}\\\nApiKey={API_KEY}\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Going to http://localhost:5000/status will query the Azure endpoint to verify whether the API key used to start the container is valid.",
        "answer": "Yes"
      },
      {
        "text": "The container logging provider will write log data.",
        "answer": "No"
      },
      {
        "text": "Going to http://localhost:5000/swagger will provide the details to access the documentation for the available endpoints.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 125,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a Language Understanding model for an e-commerce platform.\nYou need to construct an entity to capture billing addresses.\nWhich entity type should you use for the billing address?",
    "choices": {
      "A": "machine learned",
      "B": "Regex",
      "C": "geographyV2",
      "D": "Pattern.any",
      "E": "list"
    },
    "answer": "A"
  },
  {
    "id": 126,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to upload speech samples to a Speech Studio project for use in training.\nHow should you upload the samples?",
    "choices": {
      "A": "Combine the speech samples into a single audio file in the .wma format and upload the file.",
      "B": "Upload a .zip file that contains a collection of audio files in the .wav format and a corresponding text transcript file.",
      "C": "Upload individual audio files in the FLAC format and manually upload a corresponding transcript in Microsoft Word format.",
      "D": "Upload individual audio files in the .wma format."
    },
    "answer": "B"
  },
  {
    "id": 127,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "You are developing a method for an application that uses the Translator API. The method will receive the content of a webpage, and then translate the content into Greek (el). The result will also contain a transliteration that uses the Roman alphabet.\nYou need to create the URL for the call to the Translator API.\nYou have the following URI: https://api.cognitive.microsofttranslator.com/translate?api-version=3.0\nWhich three additional query parameters should you include in the URL? Each correct answer presents part of the solution.",
    "choices": {
      "A": "toScript=Cyrl",
      "B": "from=el",
      "C": "textType=html",
      "D": "to=el",
      "E": "textType=plain",
      "F": "toScript=Latn"
    },
    "answer": [
      "C",
      "D",
      "F"
    ]
  },
  {
    "id": 128,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "You have a chatbot that was built by using the Microsoft Bot Framework.\nYou need to debug the chatbot endpoint remotely.\nWhich two tools should you install on a local computer? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Fiddler",
      "B": "Bot Framework Composer",
      "C": "Bot Framework Emulator",
      "D": "Bot Framework CLI",
      "E": "ngrok",
      "F": "nginx"
    },
    "answer": [
      "C",
      "E"
    ]
  },
  {
    "id": 129,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You are building a retail chatbot that will use a QnA Maker service. You upload an internal support document to train the model. The document contains the following question: 'What is your warranty period?' Users report that the chatbot returns the default QnA Maker answer when they ask: 'How long is the warranty coverage?' Both questions should return the same answer.\nYou need to increase the accuracy of the chatbot responses.\nWhich three actions should you perform in sequence?",
    "choices_pool": [
      "Add a new question and answer (QnA) pair.",
      "Retrain the model.",
      "Add additional questions to the document.",
      "Republish the model.",
      "Add alternative phrasing to the question and answer (QnA) pair."
    ],
    "answer_order": [
      "Add alternative phrasing to the question and answer (QnA) pair.",
      "Retrain the model.",
      "Republish the model."
    ]
  },
  {
    "id": 130,
    "type": "multiple_choice",
    "img": null,
    "question": "You build a language model by using a Language Understanding service. The language model is used to search for information on a contact list by using an intent named FindContact. A conversational expert provides you with the following list of phrases to use for training:\n- Find contacts in London.\n- Who do I know in Seattle?\n- Search for contacts in Ukraine.\n\nYou need to implement the phrase list in Language Understanding.\nSolution: You create a new intent for location.\nDoes this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "B"
  },
  {
    "id": 131,
    "type": "multiple_choice",
    "img": null,
    "question": "You build a language model by using a Language Understanding service. The language model is used to search for information on a contact list by using an intent named FindContact. A conversational expert provides you with the following list of phrases to use for training:\n- Find contacts in London.\n- Who do I know in Seattle?\n- Search for contacts in Ukraine.\n\nYou need to implement the phrase list in Language Understanding.\nSolution: You create a new entity for the domain.\nDoes this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "A"
  },
  {
    "id": 132,
    "type": "multiple_choice",
    "img": null,
    "question": "You are training a Language Understanding model for a user support system. You create the first intent named GetContactDetails and add 200 examples.\nYou need to decrease the likelihood of a false positive.\nWhat should you do?",
    "choices": {
      "A": "Enable active learning.",
      "B": "Add a machine learned entity.",
      "C": "Add additional examples to the GetContactDetails intent.",
      "D": "Add examples to the None intent."
    },
    "answer": "D"
  },
  {
    "id": 133,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "You are building a Language Understanding model for purchasing tickets. You have the following utterance for an intent named PurchaseAndSendTickets:\n'Purchase [2 audit business] tickets to [Paris] [next Monday] and send tickets to [email@domain.com]'\nYou need to select the entity types. The solution must use built-in entity types to minimize training data whenever possible.\nWhich entity type should you use for each label?",
    "choices_pool": [
      "Email",
      "List",
      "Regex",
      "GeographyV2",
      "Machine learned"
    ],
    "targets": [
      {
        "text": "Paris",
        "answer": "GeographyV2"
      },
      {
        "text": "email@domain.com",
        "answer": "Email"
      },
      {
        "text": "2 audit business",
        "answer": "Machine learned"
      }
    ]
  },
  {
    "id": 134,
    "type": "multiple_choice",
    "img": null,
    "question": "You have the following C# method:\nstatic void create_resource(string resource_name, string kind, string account_tier, string location)\n{\n  CognitiveServicesAccount parameters = new CognitiveServicesAccount(null, null, kind, location, resource_name, new CognitiveServicesAccountProperties(), new Sku(account_tier));\n  var result = cog_svc_client.Accounts.Create(resource_group_name, account_tier, parameters);\n}\n\nYou need to deploy an Azure resource to the East US Azure region. The resource will be used to perform sentiment analysis.\nHow should you call the method?",
    "choices": {
      "A": "create_resource(\"res1\", \"ContentModerator\", \"S0\", \"eastus\")",
      "B": "create_resource(\"res1\", \"TextAnalytics\", \"S0\", \"eastus\")",
      "C": "create_resource(\"res1\", \"ContentModerator\", \"Standard\", \"East US\")",
      "D": "create_resource(\"res1\", \"TextAnalytics\", \"Standard\", \"East US\")"
    },
    "answer": "B"
  },
  {
    "id": 135,
    "type": "multiple_choice",
    "img": null,
    "question": "You build a Conversational Language Understanding model by using the Language Services portal. You export the model as a JSON file with the following sample:\n{\n  \"text\": \"average amount of rain by month at chicago last year\",\n  \"intent\": \"Weather.CheckWeatherValue\",\n  \"entities\": [\n    {\"entity\": \"Weather.WeatherRange\", \"startPos\": 0, \"endPos\": 6},\n    {\"entity\": \"Weather.WeatherCondition\", \"startPos\": 18, \"endPos\": 21},\n    {\"entity\": \"Weather.Historic\", \"startPos\": 23, \"endPos\": 30}\n  ]\n}\n\nWhat does the Weather.Historic entity correspond to in the utterance?",
    "choices": {
      "A": "by month",
      "B": "chicago",
      "C": "rain",
      "D": "location"
    },
    "answer": "A"
  },
  {
    "id": 136,
    "type": "multiple_choice",
    "img": null,
    "question": "You are examining the Text Analytics output of an application. The text analyzed is: 'Our tour guide took us up the Space Needle during our trip to Seattle last week.' The response contains the following data:\n- Tour guide | PersonType | 0.45\n- Space Needle | Location | 0.38\n- Trip | Event | 0.78\n- Seattle | Location | 0.78\n- Last week | DateTime | 0.80\n\nWhich Text Analytics API is used to analyze the text?",
    "choices": {
      "A": "Entity Linking",
      "B": "Named Entity Recognition",
      "C": "Sentiment Analysis",
      "D": "Key Phrase Extraction"
    },
    "answer": "B"
  },
  {
    "id": 140,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to measure the public perception of your brand on social media by using natural language processing.\nWhich Azure service should you use?",
    "choices": {
      "A": "Language service",
      "B": "Content Moderator",
      "C": "Computer Vision",
      "D": "Form Recognizer"
    },
    "answer": "A"
  },
  {
    "id": 141,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are developing an application that includes language translation. The application will translate text retrieved by using a function named get_text_to_be_translated. The text can be in one of many languages. The content of the text must remain within the Americas Azure geography.\nYou need to develop code to translate the text to a single language.\nHow should you complete the code?",
    "items": [
      {
        "text": "conn = httplib.HTTPSConnection([answer choice])",
        "options": [
          "\"api.cognitive.microsofttranslator.com\"",
          "\"api-apc.cognitive.microsofttranslator.com\"",
          "\"api-nam.cognitive.microsofttranslator.com\""
        ],
        "answer": "\"api-nam.cognitive.microsofttranslator.com\""
      },
      {
        "text": "conn.request(\"POST\", [answer choice], str(body), headers)",
        "options": [
          "\"/translate?from=en\"",
          "\"/translate?suggestedFrom=en\"",
          "\"/translate?to=en\"",
          "\"/detect?to=en\"",
          "\"/detect?from=en\""
        ],
        "answer": "\"/translate?to=en\""
      }
    ]
  },
  {
    "id": 142,
    "type": "multiple_choice",
    "img": null,
    "question": "You have the following data sources:\n- Finance: On-premises Microsoft SQL Server database\n- Sales: Azure Cosmos DB using the Core (SQL) API\n- Logs: Azure Table storage\n- HR: Azure SQL database\n\nYou need to ensure that you can search all the data by using the Azure Cognitive Search REST API.\nWhat should you do?",
    "choices": {
      "A": "Migrate the data in HR to Azure Blob storage.",
      "B": "Migrate the data in HR to the on-premises SQL server.",
      "C": "Export the data in Finance to Azure Data Lake Storage.",
      "D": "Ingest the data in Logs into Azure Sentinel."
    },
    "answer": "C"
  },
  {
    "id": 145,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a Language service resource that performs the following:\n- Sentiment analysis\n- Named Entity Recognition (NER)\n- Personally Identifiable Information (PII) identification\n\nYou need to prevent the resource from persisting input data once the data is analyzed.\nWhich query parameter in the Language service API should you configure?",
    "choices": {
      "A": "model-version",
      "B": "piiCategories",
      "C": "showStats",
      "D": "loggingOptOut"
    },
    "answer": "D"
  },
  {
    "id": 146,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure Cognitive Services model named Model1 that identifies the intent of text input. You develop an app in C# named App1.\nYou need to configure App1 to use Model1.\nWhich package should you add to App1?",
    "choices": {
      "A": "Universal.Microsoft.CognitiveServices.Speech",
      "B": "SpeechServicesToolkit",
      "C": "Azure.AI.Language.Conversations",
      "D": "Xamarin.Cognitive.Speech"
    },
    "answer": "C"
  },
  {
    "id": 147,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are building content for a video training solution. You need to create narration to accompany the video content. The solution must use Custom Neural Voice.\nWhat should you use to create a custom neural voice, and which service should you use to generate the narration?",
    "items": [
      {
        "text": "Custom neural voice: [answer choice]",
        "options": [
          "Microsoft Bot Framework Composer",
          "The Azure portal",
          "The Language Understanding portal",
          "The Speech Studio portal"
        ],
        "answer": "The Speech Studio portal"
      },
      {
        "text": "Narration: [answer choice]",
        "options": [
          "Language Understanding",
          "Speaker Recognition",
          "Speech-to-text",
          "Text-to-speech"
        ],
        "answer": "Text-to-speech"
      }
    ]
  },
  {
    "id": 148,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are building a call handling system that will receive calls from French-speaking and German-speaking callers. The system must perform the following tasks:\n- Capture inbound voice messages as text.\n- Replay messages in English on demand.\nWhich Azure Cognitive Services services should you use?",
    "items": [
      {
        "text": "To capture messages: [answer choice]",
        "options": [
          "Speaker Recognition",
          "Speech-to-text",
          "Text-to-speech",
          "Translator"
        ],
        "answer": "Speech-to-text"
      },
      {
        "text": "To replay messages: [answer choice]",
        "options": [
          "Speech-to-text only",
          "Speech-to-text and Language",
          "Speaker Recognition and Language",
          "Text-to-speech and Language",
          "Text-to-speech and Translator"
        ],
        "answer": "Text-to-speech and Translator"
      }
    ]
  },
  {
    "id": 149,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a social media extension that will convert text to speech. The solution must meet the following requirements:\n- Support messages of up to 400 characters.\n- Provide users with multiple voice options.\n- Minimize costs.\nYou create an Azure Cognitive Services resource.\nWhich Speech API endpoint provides users with the available voice options?",
    "choices": {
      "A": "https://uksouth.api.cognitive.microsoft.com/speechtotext/v3.0/models/base",
      "B": "https://uksouth.customvoice.api.speech.microsoft.com/api/texttospeech/v3.0/longaudiosynthesis/voices",
      "C": "https://uksouth.tts.speech.microsoft.com/cognitiveservices/voices/list",
      "D": "https://uksouth.voice.speech.microsoft.com/cognitiveservices/v1?deploymentId={deploymentId}"
    },
    "answer": "C"
  },
  {
    "id": 150,
    "type": "multiple_choice",
    "img": null,
    "question": "You develop a custom question answering project in Azure Cognitive Service for Language. The project will be used by a chatbot.\nYou need to configure the project to engage in multi-turn conversations.\nWhat should you do?",
    "choices": {
      "A": "Add follow-up prompts.",
      "B": "Enable active learning.",
      "C": "Add alternate questions.",
      "D": "Enable chit-chat."
    },
    "answer": "A"
  },
  {
    "id": 151,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "You use the following code:\nstatic void EntityLinker(TextAnalyticsClient client)\n{\n  var response = client.RecognizeLinkedEntities(\"Our tour guide took us up the Space Needle during our trip to Seattle last week.\");\n}\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The code will detect the language of documents.",
        "answer": "Yes"
      },
      {
        "text": "The url attribute returned for each linked entity will be a Bing search link.",
        "answer": "No"
      },
      {
        "text": "The matches attribute returned for each linked entity will provide the location in a document where the entity is referenced.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 152,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "You train a Conversational Language Understanding model to understand the natural language input of users.\nYou need to evaluate the accuracy of the model before deploying it.\nWhat are two methods you can use? Each correct answer presents a complete solution.",
    "choices": {
      "A": "From the language authoring REST endpoint, retrieve the model evaluation summary.",
      "B": "From Language Studio, enable Active Learning, and then validate the utterances logged for review.",
      "C": "From Language Studio, select Model performance.",
      "D": "From the Azure portal, enable log collection in Log Analytics, and then analyze the logs."
    },
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": 153,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You develop an app in C# named App1 that performs speech-to-speech translation. You need to configure App1 to translate English to German.\nHow should you complete the SpeechTranslationConfig object?",
    "items": [
      {
        "text": "translationConfig.[answer choice] = \"en-US\";",
        "options": [
          "addTargetLanguage",
          "speechSynthesisLanguage",
          "speechRecognitionLanguage",
          "voiceName"
        ],
        "answer": "speechRecognitionLanguage"
      },
      {
        "text": "translationConfig.[answer choice](\"de\");",
        "options": [
          "addTargetLanguage",
          "speechSynthesisLanguage",
          "speechRecognitionLanguage",
          "voiceName"
        ],
        "answer": "addTargetLanguage"
      }
    ]
  },
  {
    "id": 154,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure subscription that contains an Azure Cognitive Service for Language resource.\nYou need to identify the URL of the REST interface for the Language service.\nWhich blade should you use in the Azure portal?",
    "choices": {
      "A": "Identity",
      "B": "Keys and Endpoint",
      "C": "Networking",
      "D": "Properties"
    },
    "answer": "B"
  },
  {
    "id": 155,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You are building a transcription service for technical podcasts. Testing reveals that the service fails to transcribe technical terms accurately.\nYou need to improve the accuracy of the service.\nWhich five actions should you perform in sequence?",
    "choices_pool": [
      "Deploy the model.",
      "Create a Custom Speech project.",
      "Upload training datasets.",
      "Create a speech-to-text model.",
      "Create a Speaker Recognition model.",
      "Train the model.",
      "Create a Conversational Language Understanding model."
    ],
    "answer_order": [
      "Create a Custom Speech project.",
      "Create a speech-to-text model.",
      "Upload training datasets.",
      "Train the model.",
      "Deploy the model."
    ]
  },
  {
    "id": 156,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a retail kiosk system that will use a custom neural voice. You acquire audio samples and consent from the voice talent.\nYou need to create a voice talent profile.\nWhat should you upload to the profile?",
    "choices": {
      "A": "a .zip file that contains 10-second .wav files and the associated transcripts as .txt files",
      "B": "a five-minute .flac audio file and the associated transcript as a .txt file",
      "C": "a .wav or .mp3 file of the voice talent consenting to the creation of a synthetic version of their voice",
      "D": "a five-minute .wav or .mp3 file of the voice talent describing the kiosk system"
    },
    "answer": "C"
  },
  {
    "id": 157,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You have a Language Understanding solution that runs in a Docker container. You download the Language Understanding container image from the Microsoft Container Registry (MCR).\nYou need to deploy the container image to a host computer.\nWhich three actions should you perform in sequence?",
    "choices_pool": [
      "From the host computer, move the package file to the Docker input directory.",
      "From the Language Understanding portal, export the solution as a package file.",
      "From the host computer, build the container and specify the output directory.",
      "From the host computer, run the container and specify the input directory.",
      "From the Language Understanding portal, retrain the model."
    ],
    "answer_order": [
      "From the Language Understanding portal, export the solution as a package file.",
      "From the host computer, move the package file to the Docker input directory.",
      "From the host computer, run the container and specify the input directory."
    ]
  },
  {
    "id": 158,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are building a text-to-speech app that will use a custom neural voice. You need to create an SSML file for the app. The solution must ensure that the voice profile meets the following requirements:\n- Expresses a calm tone\n- Imitates the voice of a young adult female\nHow should you complete the code?",
    "items": [
      {
        "text": "<mstts:express-as [answer choice]=\"YoungAdultFemale\">",
        "options": [
          "role",
          "style",
          "styledegree",
          "type",
          "voice"
        ],
        "answer": "role"
      },
      {
        "text": "<mstts:express-as ... [answer choice]=\"gentle\">",
        "options": [
          "role",
          "style",
          "styledegree",
          "type",
          "voice"
        ],
        "answer": "style"
      }
    ]
  },
  {
    "id": 159,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building an Azure AI Language Understanding solution. You discover that many intents have similar utterances containing airport names or airport codes.\nYou need to minimize the number of utterances used to train the model.\nWhich type of custom entity should you use?",
    "choices": {
      "A": "Pattern.any",
      "B": "machine-learning",
      "C": "regular expression",
      "D": "list"
    },
    "answer": "A"
  },
  {
    "id": 160,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "You have a text-based chatbot. You need to enable content moderation by using the Text Moderation API of Content Moderator.\nWhich two service responses should you use? Each correct answer presents part of the solution.",
    "choices": {
      "A": "personal data",
      "B": "the adult classification score",
      "C": "text classification",
      "D": "optical character recognition (OCR)",
      "E": "the racy classification score"
    },
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": 161,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "You are developing a text processing solution. You have the following function:\nstatic void GetKeywords(TextAnalyticsClient textAnalyticsClient, string text)\n{\n  var response = textAnalyticsClient.RecognizeEntities(text);\n  Console.WriteLine(\"Key words:\");\n  foreach (CategorizedEntity entity in response.Value)\n    Console.WriteLine($\"\\t{entity.Text}\");\n}\n\nYou call the function with the string: \"Our tour of Paris included a visit to the Eiffel Tower\"\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The output will include the following words: our and included.",
        "answer": "No"
      },
      {
        "text": "The output will include the following words: Paris, Eiffel, and Tower.",
        "answer": "Yes"
      },
      {
        "text": "The function will output all the key phrases from the input string to the console.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 162,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are building an Azure web app named App1 that will translate text from English to Spanish. You need to use the Text Translation REST API to perform the translation. The solution must ensure that you have data sovereignty in the United States.\nHow should you complete the URL?",
    "items": [
      {
        "text": "https://[answer choice]/...",
        "options": [
          "api.cognitive.microsofttranslator.com",
          "api-nam.cognitive.microsofttranslator.com",
          "api-nam.cognitiveservices.azure.com",
          "eastus.api.cognitive.microsoft.com"
        ],
        "answer": "api-nam.cognitive.microsofttranslator.com"
      },
      {
        "text": "https://....[answer choice]?api-version=3.0&to=es",
        "options": [
          "detect",
          "languages",
          "text-to-speech",
          "translate"
        ],
        "answer": "translate"
      }
    ]
  },
  {
    "id": 163,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You have a Docker host named Host1 that contains a container base image. You have an Azure subscription that contains a custom speech-to-text model named model1.\nYou need to run model1 on Host1.\nWhich three actions should you perform in sequence?",
    "choices_pool": [
      "Retrain the model.",
      "Request approval to run the container.",
      "Export model1 to Host1.",
      "Run the container.",
      "Configure disk logging."
    ],
    "answer_order": [
      "Request approval to run the container.",
      "Export model1 to Host1.",
      "Run the container."
    ]
  },
  {
    "id": 164,
    "type": "multiple_choice",
    "img": null,
    "question": "You build a language model by using a Conversational Language Understanding. The language model is used to search for information on a contact list by using an intent named FindContact. A conversational expert provides you with the following list of phrases to use for training:\n- Find contacts in London.\n- Who do I know in Seattle?\n- Search for contacts in Ukraine.\n\nYou need to implement the phrase list in Conversational Language Understanding.\nSolution: You create a new utterance for each phrase in the FindContact intent.\nDoes this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "A"
  },
  {
    "id": 165,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You have a question answering project in Azure Cognitive Service for Language. You need to move the project to a Language service instance in a different Azure region.\nWhich three actions should you perform in sequence?",
    "choices_pool": [
      "From the new Language service instance, train and publish the project.",
      "From the new Language service instance, import the project file.",
      "From the new Language service instance, enable custom text classification.",
      "From the original Language service instance, export the existing project.",
      "From the new Language service instance, regenerate the keys.",
      "From the original Language service instance, train and publish the model."
    ],
    "answer_order": [
      "From the original Language service instance, export the existing project.",
      "From the new Language service instance, import the project file.",
      "From the new Language service instance, train and publish the project."
    ]
  },
  {
    "id": 166,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "You are building a customer support chatbot. You need to configure the bot to identify the following:\n- Code names for internal product development\n- Messages that include credit card numbers\nThe solution must minimize development effort.\nWhich Azure Cognitive Service for Language feature should you use for each requirement?",
    "choices_pool": [
      "Custom named entity recognition (NER)",
      "Key phrase extraction",
      "Language detection",
      "Named Entity Recognition (NER)",
      "Personally Identifiable Information (PII) detection",
      "Sentiment analysis"
    ],
    "targets": [
      {
        "text": "Identify code names for internal product development",
        "answer": "Custom named entity recognition (NER)"
      },
      {
        "text": "Identify messages that include credit card numbers",
        "answer": "Personally Identifiable Information (PII) detection"
      }
    ]
  },
  {
    "id": 167,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are building an app by using the Speech SDK. The app will translate speech from French to German by using natural language processing.\nYou need to define the source language and the output language.\nHow should you complete the code?",
    "items": [
      {
        "text": "speechTranslationConfig.[answer choice] = \"fr\"",
        "options": [
          "AddTargetLanguage",
          "SpeechRecognitionLanguage",
          "SpeechSynthesisLanguage",
          "TargetLanguages",
          "VoiceName"
        ],
        "answer": "SpeechRecognitionLanguage"
      },
      {
        "text": "speechTranslationConfig.[answer choice](\"de\")",
        "options": [
          "AddTargetLanguage",
          "SpeechRecognitionLanguage",
          "SpeechSynthesisLanguage",
          "TargetLanguages",
          "VoiceName"
        ],
        "answer": "AddTargetLanguage"
      }
    ]
  },
  {
    "id": 168,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You have a collection of Microsoft Word documents and PowerPoint presentations in German. You need to create a solution to translate the files to French. The solution must:\n- Preserve the original formatting of the files.\n- Support the use of a custom glossary.\nYou create a blob container for German files and a blob container for French files. You upload the original files to the container for German files.\nWhich three actions should you perform in sequence to complete the solution?",
    "choices_pool": [
      "Perform an asynchronous translation by using the list of files to be translated.",
      "Perform an asynchronous translation by using the document translation specification.",
      "Generate a list of files to be translated.",
      "Upload a glossary file to the container for German files.",
      "Upload a glossary file to the container for French files.",
      "Define a document translation specification that has a French target."
    ],
    "answer_order": [
      "Upload a glossary file to the container for German files.",
      "Define a document translation specification that has a French target.",
      "Perform an asynchronous translation by using the document translation specification."
    ]
  },
  {
    "id": 169,
    "type": "multiple_choice",
    "img": null,
    "question": "You have the following C# function:\nstatic void MyFunction(TextAnalyticsClient textAnalyticsClient, string text)\n{\n  var response = textAnalyticsClient.ExtractKeyPhrases(text);\n  Console.WriteLine(\"Key phrases:\");\n  foreach (string keyphrase in response.Value)\n    Console.WriteLine($\"{keyphrase}\");\n}\n\nYou call the function using: MyFunction(textAnalyticsClient, \"the quick brown fox jumps over the lazy dog\");\nWhich output will you receive?",
    "choices": {
      "A": "The quick\nThe lazy",
      "B": "the quick brown fox jumps over the lazy dog",
      "C": "jumps over the",
      "D": "quick brown fox\nlazy dog"
    },
    "answer": "D"
  },
  {
    "id": 170,
    "type": "multiple_choice",
    "img": null,
    "question": "You have the following Python method:\ndef create_resource(resource_name, kind, account_tier, location):\n  parameters = CognitiveServicesAccount(sku=Sku(name=account_tier), kind=kind, location=location, properties={})\n  result = cogSvcClient.accounts.create(resource_group_name, resource_name, parameters)\n\nYou need to deploy an Azure resource to the East US Azure region. The resource will be used to perform sentiment analysis.\nHow should you call the method?",
    "choices": {
      "A": "create_resource(\"res1\", \"TextAnalytics\", \"Standard\", \"East US\")",
      "B": "create_resource(\"res1\", \"ContentModerator\", \"S0\", \"eastus\")",
      "C": "create_resource(\"res1\", \"ContentModerator\", \"Standard\", \"East US\")",
      "D": "create_resource(\"res1\", \"TextAnalytics\", \"S0\", \"eastus\")"
    },
    "answer": "D"
  },
  {
    "id": 171,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You develop a Python app named App1 that performs speech-to-speech translation. You need to configure App1 to translate English to German.\nHow should you complete the SpeechTranslationConfig object?",
    "items": [
      {
        "text": "translation_config.[answer choice] = \"en-US\"",
        "options": [
          "add_target_language",
          "speech_synthesis_language",
          "speech_recognition_language",
          "voice_name"
        ],
        "answer": "speech_recognition_language"
      },
      {
        "text": "translation_config.[answer choice](\"de\")",
        "options": [
          "add_target_language",
          "speech_synthesis_language",
          "speech_recognition_language",
          "voice_name"
        ],
        "answer": "add_target_language"
      }
    ]
  },
  {
    "id": 172,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are developing a streaming Speech to Text solution that will use the Speech SDK and MP3 encoding.\nYou need to develop a method to convert speech to text for streaming MP3 data.\nHow should you complete the code?",
    "items": [
      {
        "text": "audio_format = speechsdk.audio.[answer choice](compressed_stream_format=speechsdk.AudioStreamContainerFormat.MP3)",
        "options": [
          "AudioConfig.SetProperty",
          "AudioStreamFormat",
          "GetWaveFormatPCM",
          "PullAudioInputStream"
        ],
        "answer": "AudioStreamFormat"
      },
      {
        "text": "recognizer = speechsdk.[answer choice](speech_config=speech_config, audio_config=audio_config)",
        "options": [
          "KeywordRecognizer",
          "SpeakerRecognizer",
          "SpeechRecognizer",
          "SpeechSynthesizer"
        ],
        "answer": "SpeechRecognizer"
      }
    ]
  },
  {
    "id": 174,
    "type": "multiple_choice",
    "img": null,
    "question": "You are developing an app that will use the Decision and Language APIs.\nYou need to provision resources for the app. The solution must ensure that each service is accessed by using a single endpoint and credential.\nWhich type of resource should you create?",
    "choices": {
      "A": "Language",
      "B": "Speech",
      "C": "Azure Cognitive Services",
      "D": "Content Moderator"
    },
    "answer": "C"
  },
  {
    "id": 175,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a chatbot. You need to ensure that the bot will recognize the names of your company's products and codenames. The solution must minimize development effort.\nWhich Azure Cognitive Service for Language service should you include in the solution?",
    "choices": {
      "A": "custom text classification",
      "B": "entity linking",
      "C": "custom Named Entity Recognition (NER)",
      "D": "key phrase extraction"
    },
    "answer": "C"
  },
  {
    "id": 176,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure subscription that contains an Azure App Service app named App1. You provision a multi-service Azure Cognitive Services resource named CSAccount1.\nYou need to configure App1 to access CSAccount1. The solution must minimize administrative effort.\nWhat should you use to configure App1?",
    "choices": {
      "A": "a system-assigned managed identity and an X.509 certificate",
      "B": "the endpoint URI and an OAuth token",
      "C": "the endpoint URI and a shared access signature (SAS) token",
      "D": "the endpoint URI and subscription key"
    },
    "answer": "D"
  },
  {
    "id": 177,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure subscription that contains a multi-service Azure Cognitive Services Translator resource named Translator1. You are building an app that will translate text and documents by using Translator1.\nYou need to create the REST API request for the app.\nWhich headers should you include in the request?",
    "choices": {
      "A": "the access control request, the content type, and the content length",
      "B": "the subscription key and the client trace ID",
      "C": "the resource ID and the content language",
      "D": "the subscription key, the subscription region, and the content type"
    },
    "answer": "D"
  },
  {
    "id": 178,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a file share that contains 5,000 images of scanned invoices. You need to analyze the images. The solution must extract the following data:\n- Invoice items\n- Sales amounts\n- Customer details\n\nWhat should you use?",
    "choices": {
      "A": "Custom Vision",
      "B": "Azure AI Computer Vision",
      "C": "Azure AI Immersive Reader",
      "D": "Azure AI Document Intelligence"
    },
    "answer": "D"
  },
  {
    "id": 179,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "You are developing a text processing solution. You have the following function:\ndef get_key_words(textAnalyticsClient, text):\n  response = textAnalyticsClient.recognize_entities(documents=[text])[0]\n  print(\"Key Words:\")\n  for entity in response.entities:\n    print(\"\\t\\t\", entity.text)\n\nYou call the function with the string: \"Our tour of Paris included a visit to the Eiffel Tower\"\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The output will include the following words: our and included.",
        "answer": "No"
      },
      {
        "text": "The output will include the following words: Paris, Eiffel, and Tower.",
        "answer": "Yes"
      },
      {
        "text": "The function will output all the key phrases from the input string to the console.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 180,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "You are developing a text processing solution. You develop the following method:\ndef get_key_phrases(text_analytics_client, text):\n  response = text_analytics_client.extract_key_phrases(text, language=\"en\")\n  print('Key phrases:')\n  for keyphrase in response.key_phrases:\n    print(f'\\t{keyphrase}')\n\nYou call the method: get_key_phrases(text_analytics_client, \"the cat sat on the mat\")\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The call will output key phrases from the input string to the console.",
        "answer": "Yes"
      },
      {
        "text": "The output will contain the following words: the, cat, sat, on, and mat.",
        "answer": "No"
      },
      {
        "text": "The output will contain the confidence level for key phrases.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 181,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are developing a service that records lectures given in English (United Kingdom). You need to develop code that will provide transcripts in French, German, and Spanish.\nHow should you complete the code?",
    "items": [
      {
        "text": "languages = [answer choice]",
        "options": [
          "(['en-GB'])",
          "(['fr', 'de', 'es'])",
          "(['French', 'Spanish', 'German'])",
          "(['languages'])"
        ],
        "answer": "(['fr', 'de', 'es'])"
      },
      {
        "text": "recognizer = speechsdk.translation.[answer choice](translation_config=translation_config, audio_config=audio_config)",
        "options": [
          "IntentRecognizer(",
          "SpeakerRecognizer(",
          "SpeechSynthesizer(",
          "TranslationRecognizer("
        ],
        "answer": "TranslationRecognizer("
      }
    ]
  },
  {
    "id": 182,
    "type": "multiple_choice",
    "img": null,
    "question": "You are developing an app that will use the text-to-speech capability of the Azure AI Speech service. The app will be used in motor vehicles.\nYou need to optimize the quality of the synthesized voice output.\nWhich Speech Synthesis Markup Language (SSML) attribute should you configure?",
    "choices": {
      "A": "the style attribute of the mstts:express-as element",
      "B": "the effect attribute of the voice element",
      "C": "the pitch attribute of the prosody element",
      "D": "the level attribute of the emphasis element"
    },
    "answer": "B"
  },
  {
    "id": 183,
    "type": "multiple_choice",
    "img": null,
    "question": "You are designing a content management system. You need to ensure that the reading experience is optimized for users who have reduced comprehension and learning differences, such as dyslexia. The solution must minimize development effort.\nWhich Azure service should you include in the solution?",
    "choices": {
      "A": "Azure AI Immersive Reader",
      "B": "Azure AI Translator",
      "C": "Azure AI Document Intelligence",
      "D": "Azure AI Language"
    },
    "answer": "A"
  },
  {
    "id": 184,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are building an app that will answer customer calls about the status of an order. The app will query a database for the order details and provide the customers with a spoken response.\nYou need to identify which Azure AI service APIs to use. The solution must minimize development effort.\nWhich object should you use for each requirement?",
    "items": [
      {
        "text": "Convert customer calls into text queries: [answer choice]",
        "options": [
          "SpeechRecognizer",
          "SpeechSynthesizer",
          "TranslationRecognizer",
          "VoiceProfileClient"
        ],
        "answer": "SpeechRecognizer"
      },
      {
        "text": "Provide customers with the order details: [answer choice]",
        "options": [
          "SpeechRecognizer",
          "SpeechSynthesizer",
          "TranslationRecognizer",
          "VoiceProfileClient"
        ],
        "answer": "SpeechSynthesizer"
      }
    ]
  },
  {
    "id": 185,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure AI service model named Model1 that identifies the intent of text input. You develop a Python app named App1.\nYou need to configure App1 to use Model1.\nWhich package should you add to App1?",
    "choices": {
      "A": "azure-cognitiveservices-language-textanalytics",
      "B": "azure-ai-language-conversations",
      "C": "azure-mgmt-cognitiveservices",
      "D": "azure-cognitiveservices-speech"
    },
    "answer": "B"
  },
  {
    "id": 186,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are building an app that will automatically translate speech from English to French, German, and Spanish by using Azure AI service.\nYou need to define the output languages and configure the Azure AI Speech service.\nHow should you complete the code?",
    "items": [
      {
        "text": "languages = [answer choice]",
        "options": [
          "['en-GB']",
          "{'en','fr','de','es'}",
          "['fr', 'de', 'es']",
          "{\"French\",\"Spanish\",\"German\"}"
        ],
        "answer": "['fr', 'de', 'es']"
      },
      {
        "text": "recognizer = speechsdk.translation.[answer choice](translation_config=translation_config)",
        "options": [
          "IntentRecognizer",
          "SpeakerRecognizer",
          "SpeechSynthesizer",
          "TranslationRecognizer"
        ],
        "answer": "TranslationRecognizer"
      }
    ]
  },
  {
    "id": 187,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You plan to implement an Azure AI Search resource that will use a custom skill based on sentiment analysis. You need to create a custom model and configure Azure AI Search to use the model.\nWhich actions should you perform in sequence?",
    "choices_pool": [
      "Create an endpoint for the model.",
      "Rerun the indexer to enrich the index.",
      "Create an Azure Machine Learning workspace.",
      "Create and train the model in the Azure Machine Learning studio.",
      "Provision an Azure AI Services resource and obtain the endpoint.",
      "Connect the custom skill to the endpoint."
    ],
    "answer_order": [
      "Create an Azure Machine Learning workspace.",
      "Create and train the model in the Azure Machine Learning studio.",
      "Create an endpoint for the model.",
      "Connect the custom skill to the endpoint.",
      "Rerun the indexer to enrich the index."
    ]
  },
  {
    "id": 188,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You have a collection of press releases stored as PDF files. You need to extract text from the files and perform sentiment analysis.\nWhich service should you use for each task?",
    "items": [
      {
        "text": "Extract text: [answer choice]",
        "options": [
          "Azure AI Search",
          "Azure AI Vision",
          "Azure AI Document Intelligence"
        ],
        "answer": "Azure AI Document Intelligence"
      },
      {
        "text": "Perform sentiment analysis: [answer choice]",
        "options": [
          "Azure Cognitive Search",
          "Azure AI Computer Vision",
          "Azure AI Document Intelligence",
          "Azure AI Language"
        ],
        "answer": "Azure AI Language"
      }
    ]
  },
  {
    "id": 189,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building an internet-based training solution. The solution requires that a user's camera and microphone remain enabled.\nYou need to monitor a video stream of the user and verify that the user is alone and is not collaborating with another user. The solution must minimize development effort.\nWhat should you include in the solution?",
    "choices": {
      "A": "speech-to-text in the Azure AI Speech service",
      "B": "object detection in Azure AI Custom Vision",
      "C": "Spatial Analysis in Azure AI Vision",
      "D": "object detection in Azure AI Custom Vision"
    },
    "answer": "C"
  },
  {
    "id": 190,
    "type": "multiple_choice",
    "img": null,
    "question": "You are developing an app that will use the Speech and Language APIs. You need to provision resources for the app. The solution must ensure that each service is accessed by using a single endpoint and credential.\nWhich type of resource should you create?",
    "choices": {
      "A": "Azure AI Language",
      "B": "Azure AI Speech",
      "C": "Azure AI Services",
      "D": "Azure AI Content Safety"
    },
    "answer": "C"
  },
  {
    "id": 191,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are building an app that will automatically translate speech from English to French, German, and Spanish by using Azure AI service.\nYou need to define the output languages and configure the Azure AI Speech service.\nHow should you complete the code?",
    "items": [
      {
        "text": "var languages = new List<string> [answer choice];",
        "options": [
          "{\"en-GB\"}",
          "[\"en\",\"fr\",\"de\",\"es\"]",
          "{\"fr\",\"de\",\"es\"}",
          "[\"French\", \"German\",\"Spanish\"]"
        ],
        "answer": "{\"fr\",\"de\",\"es\"}"
      },
      {
        "text": "using var recognizer = new [answer choice];",
        "options": [
          "IntentRecognizer",
          "SpeakerRecognizer",
          "SpeechSynthesizer",
          "TranslationRecognizer"
        ],
        "answer": "TranslationRecognizer"
      }
    ]
  },
  {
    "id": 192,
    "type": "multiple_choice",
    "img": null,
    "question": "You are developing a text processing solution. You have the following function:\nstatic void GetKeyWords(TextAnalyticsClient textAnalyticsClient, string text)\n{\n  var response = textAnalyticsClient.RecognizeEntities(text);\n  Console.WriteLine(\"Key words:\");\n  foreach (CategorizedEntity entity in response.Value)\n    Console.WriteLine($\"\\t{entity.Text}\");\n}\n\nYou call the function with the string: \"Our tour of London included a visit to Buckingham Palace\"\nWhat will the function return?",
    "choices": {
      "A": "London and Buckingham Palace only",
      "B": "Tour and visit only",
      "C": "London and Tour only",
      "D": "Our tour of London included visit to Buckingham Palace"
    },
    "answer": "A"
  },
  {
    "id": 193,
    "type": "multiple_choice",
    "img": null,
    "question": "You have the following Python function:\ndef my_function(textAnalyticsClient, text):\n  response = textAnalyticsClient.extract_key_phrases(documents=[text])[0]\n  print(\"Key Phrases:\")\n  for phrase in response.key_phrases:\n    print(phrase)\n\nYou call the function: my_function(text_analytics_client, \"the quick brown fox jumps over the lazy dog\")\nFollowing 'Key phrases', what output will you receive?",
    "choices": {
      "A": "The quick\nThe lazy",
      "B": "jumps over the",
      "C": "quick brown fox\nlazy dog",
      "D": "the quick brown fox jumps over the lazy dog"
    },
    "answer": "C"
  },
  {
    "id": 194,
    "type": "multiple_choice",
    "img": null,
    "question": "You have an Azure subscription. You need to deploy an Azure AI Search resource that will recognize geographic locations.\nWhich built-in skill should you include in the skillset for the resource?",
    "choices": {
      "A": "AzureOpenAIEmbeddingSkill",
      "B": "DocumentExtractionSkill",
      "C": "EntityRecognitionSkill",
      "D": "EntityLinkingSkill"
    },
    "answer": "C"
  }
]

export default questions;