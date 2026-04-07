const questions = [
  {
    "id": 1,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "You have 100 chatbots that each has its own Language Understanding model. Frequently, you must add the same phrases to each model. ou need to programmatically update the Language Understanding models to include the new phrases. How should you complete the code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. ou may need to drag the split bar between panes or scroll to view content. IOTE: Each correct selection is worth one point. ielect and Place:",
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
        "text": "var phraselistId = await client.Features.",
        "answer": "AddPhraseListAsync"
      },
      {
        "text": "(appId, versionId, new",
        "answer": "PhraselistCreateObject"
      }
    ]
  },
  {
    "id": 2,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You plan to use a Language Understanding application named app1 that is deployed to a container. App1 was developed by using a Language Understanding authoring resource named lu1. App1 has the versions shown in the following table. Version Trained date Published date V1.2 None None V1.1 2020-10-01 None V1.0 2020-09-01 2020-09-15 You need to create a container that uses the latest deployable version of app1. Whic thre actions should you performin sequence?To answer, move theappropriat actions from the lst actions to the answer are an arrange them in the cor order.",
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
      "Export the model by using the Export for containers (GZIP) option.",
      "Select v1.1 of app1.",
      "Run a container and mount the model file."
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
    "img": null,
    "prompt": "You need to create a new resource that wil be used to perform sentiment analysis and optical character recognition (ocR). The solution must meet the following requirements: Use a single key and endpoint to access multiple services. Consolidate billing for future services that you might use. Support the use of Computer Vision in the future. How should you complete the HTTP request to create the new resource? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "[answer choice 1]",
        "options": [
          "https://management.azure.com/subscriptions/xxxxxxxx-xxxx-",
          "PATCH",
          "POST",
          "PUT",
          "xXXX-XXXX-",
          "xxxxxxxxxxxx/resourceGroups/RGl/providers/Microsoft.CognitiveServices/",
          "ccounts/cs1?api-version=2017-04-18",
          "\"location\": \"West US\",",
          "\"kind\": \""
        ],
        "answer": "PUT"
      },
      {
        "text": "[answer choice 2]",
        "options": [
          "CognitiveServices",
          "ComputerVision",
          "TextAnalytics",
          "\"sku\": {",
          "\"name\": \"So\"",
          "\"properties\": {},",
          "\"identity\": {",
          "\"type\": \"SystemAssigned\"",
          "}"
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
    "img": null,
    "prompt": "You plan to deploy a containerized version of an Azure Cognitive Services service that will be used for text analysis. You configure https://contoso.cognitiveservices.azure.com as the endpoint URI for the service, and you pul the latest version of the Text Analytics Sentiment Analysis container. You need to run the container on an Azure virtual machine by using Docker. How should you complete the command? To answer, select the appropriate options in the answer area.",
    "items": [
      {
        "text": "[answer choice 1]",
        "options": [
          "docker run --rm -it -p 5000:5000 --memory 8g --cpus 1 \\",
          "http://contoso.blob.core.windows.net",
          "https://contoso.cognitiveservices.azure.com",
          "mcr.microsoft.com/azure-cognitive-services/textanalytics/keyphrase",
          "mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment",
          "Eula=accept \\",
          "Billing=",
          "http://contoso.blob.core.windows.net",
          "https://contoso.cognitiveservices.azure.com",
          "mcr.microsoft.com/azure-cognitive-services/textanalytics/keyphrase",
          "mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment",
          "ApiKey=xxxxxxxxxxxxxxxxxxx"
        ],
        "answer": "https://contoso.cognitiveservices.azure.com"
      }
    ]
  },
  {
    "id": 9,
    "type": "multiple_choice",
    "img": null,
    "question": "You have the following C# method for creating Azure Cognitive Services resources programmatically static void create resource(CognitiveServicesManagementClient client, string resource name, string kind, string account tier, string location) CognitiveServicesAccount parameters = new CognitiveServicesAccount(null, null, kind, location, resource name, new CognitiveServicesAccountProperties(), new Sku(account tier)); var result = client.Accounts.Create(resource group name, account_tier, parameters); You need to call the method to create a free Azure resource in the West US Azure region. The resource will be used to generate captions of images automatically Which code should you use?",
    "choices": {
      "A": "create_resource(client, \"res1\", \"ComputerVision\", \"F0\", \"westus\")",
      "B": "create_resource(client, \"res1\", \"CustomVision.Prediction\", \"F0\", \"westus\")",
      "C": "create_resource(client, \"res1\", \"ComputerVision\", \"S0\", \"westus\")",
      "D": "create_resource(client, \"res1\", \"CustomVision.Prediction\", \"S0\", \"westus\")"
    },
    "answer": "A"
  },
  {
    "id": 20,
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
    "id": 21,
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
    "id": 22,
    "type": "multiple_choice",
    "img": null,
    "question": "o s   t n i ee goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NoT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Cognitive Search service. During the past 12 months, query volume steadily increased. ou discover that some search query requests to the Cognitive Search service are being throttled. ou need to reduce the likelihood that search query requests are throttled. Solution: You migrate to a Cognitive Search service that uses a higher tier. Does this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "A"
  },
  {
    "id": 23,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "You need to develop an automated call handling system that can respond to callers in their own language. The system will support only French and English. Which Azure Cognitive Services service should you use to meet each requirement? To answer, drag the appropriate services to the correct requirements. Each service may be used once, more than once, or not at all. You may need to drag the split bat between panes or scroll to view content. vOTE: Each correct selection is worth one point. telect and Place:",
    "choices_pool": [
      "Speaker Recognition",
      "Text Analytics",
      "Translator"
    ],
    "targets": [
      {
        "text": "Speech to Text",
        "answer": "Text Analytics"
      },
      {
        "text": "Detect the incoming language:",
        "answer": "Translator"
      }
    ]
  },
  {
    "id": 24,
    "type": "multiple_choice",
    "img": null,
    "question": "QueSlloll #Z4 You have receipts that are accessible from a URL. You need to extract data from the receipts by using Form Recognizer and the SDK. The solution must use a prebuilt model. Which client and method should you use?",
    "choices": {
      "A": "the FormRecognizerClient client and the StartRecognizeContentFromUri method",
      "B": "the FormTrainingClient client and the StartRecognizeContentFromUri method",
      "C": "the FormRecognizerClient client and the StartRecognizeReceiptsFromUri method",
      "D": "the FormTrainingClient client and the StartRecognizeReceiptsFromUri method"
    },
    "answer": "C"
  },
  {
    "id": 25,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a collection of 50,o00 scanned documents that contain text. You plan to make the text available through Azure Cognitive Search. You need to configure an enrichment pipeline to perform optical character recognition (OcR) and text analytics. The solution must minimize costs. What should you attach to the skillset?",
    "choices": {
      "A": "a new Computer Vision resource",
      "B": "a free (Limited enrichments) Cognitive Services resource",
      "C": "an Azure Machine Learning Designer pipeline",
      "D": "a new Cognitive Services resource that uses the S0 pricing tier"
    },
    "answer": "D"
  },
  {
    "id": 26,
    "type": "multiple_choice",
    "img": null,
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NoT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Cognitive Search service. Ouring the past 12 months, query volume steadily increased. You discover that some search query requests to the Cognitive Search service are being throttled. You need to reduce the likelihood that search query requests are throttled. Solution: You add indexes. Does this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "B"
  },
  {
    "id": 27,
    "type": "multiple_choice",
    "img": null,
    "question": "goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NoT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Cognitive Search service. During the past 12 months, query volume steadily increased. ou discover that some search query requests to the Cognitive Search service are being throttled. ou need to reduce the likelihood that search query requests are throttled. Solution: You enable customer-managed key (CMK) encryption. Does this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "B"
  },
  {
    "id": 28,
    "type": "multiple_choice",
    "img": null,
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NoT be able to return to it. As a result, these questions will not appear in the review screen. You create a web app named app1 that runs on an Azure virtual machine named vm1. Vm1 is on an Azure virtual network named vnet1. You plan to create a new Azure Cognitive Search service named service1. You need to ensure that app1 can connect directly to service1 without routing traffic over the public internet. Solution: You deploy service1 and a private endpoint to vnet1. Does this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "A"
  },
  {
    "id": 29,
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
    "id": 30,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You are building an app that will process incoming email and direct messages to either French or English language support teams. Which Azure Cognitive Services API should you use? To answer, select the appropriate options in the answer area. vOTE: Each correct selection is worth one point.",
    "items": [
      {
        "text": "[answer choice 1]",
        "options": [
          "https://",
          "V",
          "api.cognitive.microsofttranslator.com",
          "/text/analytics/v3.1/entities/recognition/general",
          "eastus.api.cognitive.microsoft.com",
          "/text/analytics/v3.1/languages",
          "portal.azure.com",
          "/translator/text/v3.0/translate?to=en",
          "/translator/text/v3.0/translate?to=fr"
        ],
        "answer": "/text/analytics/v3.1/entities/recognition/general"
      }
    ]
  },
  {
    "id": 31,
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
    "id": 32,
    "type": "multiple_choice",
    "img": null,
    "question": "Topic Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NoT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Cognitive Search service. During the past 12 months, query volume steadily increased. You discover that some search query requests to the Cognitive Search service are being throttled. You need to reduce the likelihood that search query requests are throttled. Solution: You add replicas. Does this meet the goal?",
    "choices": {
      "A": "Yes",
      "B": "No"
    },
    "answer": "A"
  },
  {
    "id": 33,
    "type": "multiple_choice",
    "img": null,
    "question": "Topic SIMULATION - (ou need to create a Text Analytics service named Text12345678, and then enable logging for Text12345678. The solution must ensure that any changes to Text12345678 will be stored in a Log Analytics workspace. To complete this task, siqn in to the Azure portal.",
    "choices": {},
    "answer": "S"
  },
  {
    "id": 34,
    "type": "multiple_choice",
    "img": null,
    "question": "siMulation - ou need to create a search service named search12345678 that will index a sample Azure Cosmos DB database named hotels-sample. The solution must ensure that only English language fields are retrievable. To complete this task, sign in to the Azure portal.",
    "choices": {},
    "answer": "S"
  },
  {
    "id": 35,
    "type": "multiple_choice",
    "img": null,
    "question": "SIMULATION - You plan to create a solution to generate captions for images that will be read from Azure Blob Storage. You need to create a service in Azure Cognitive Services for the solution. The service must be named captions12345678 and must use the Free pricing tier. To complete this task, sign in to the Azure portal.",
    "choices": {},
    "answer": "S"
  },
  {
    "id": 36,
    "type": "multiple_choice",
    "img": null,
    "question": "sIMULaTioN - You need to create a Form Recognizer resource named fr12345678. Jse the Form Recognizer sample labeling tool at https://fott-2-1.azurewebsites.net/ to analyze the invoice located in the C:\\Resources\\Invoices folder. Save the results as C:\\Resources\\Invoices\\Results.json. To complete this task, sign in to the Azure portal and open the Form Recognizer sample labeling tool.",
    "choices": {},
    "answer": "S"
  },
  {
    "id": 37,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a factory that produces food products. You need to build a monitoring solution for staff compliance with personal protective equipment (PPE) requirements. The solution must meet the following requirements: r Identify staff who have removed masks or safety glasses. Perform a compliance check every 15 minutes. Minimize development effort. Minimize costs. Which service should you use?",
    "choices": {
      "A": "Face",
      "B": "Computer Vision",
      "C": "Azure Video Analyzer for Media (formerly Video Indexer)"
    },
    "answer": "C"
  },
  {
    "id": 38,
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
    "id": 39,
    "type": "multiple_choice",
    "img": null,
    "question": "SIMULATION - Use the following login credentials as needed: To enter your username, place your cursor in the Sign in box and click on the username below. To enter your password, place your cursor in the Enter password box and click on the password below. Azure Username: admin@abc.com - Azure Password: Xxxxxxxxxxxx - The following information is for technical support purposes only: Lab Instance: 12345678 - Task - You plan to build an API that will identify whether an image includes a Microsoft Surface Pro or Surface Studio. You need to deploy a service in Azure Cognitive Services for the APl. The service must be named AAA12345678 and must be in the East US Azure region. The solution nust use the Free pricing tier. To complete this task, sign in to the Azure portal.",
    "choices": {},
    "answer": "S"
  },
  {
    "id": 40,
    "type": "multiple_choice",
    "img": null,
    "question": "SIMULATION - Use the following login credentials as needed: To enter your username, place your cursor in the Sign in box and click on the username below. To enter your password, place your cursor in the Enter password box and click on the password below. Azure Username: admin@abc.com - Azure Password: Xxxxxxxxxxxx - The following information is for technical support purposes only: Lab Instance: 12345678 - Task - You need to build an API that uses the service in Azure Cognitive Services named AAA12345678 to identify whether an image includes a Microsoft Surface Pro or Surface Studio. To achieve this goal, you must use the sample images in the C:\\Resources\\Images folder. To complete this task, sign in to the Azure portal.",
    "choices": {},
    "answer": "S"
  },
  {
    "id": 41,
    "type": "multiple_choice",
    "img": null,
    "question": "SIMULATIoN - Jse the following login credentials as needed: To enter your username, place your cursor in the Sign in box and click on the username below. To enter your password, place your cursor in the Enter password box and click on the password below. Azure Username: admin@abc.com - Azure Password: Xxxxxxxxxxxx - The following information is for technical support purposes only: Lab Instance: 12345678 - [ask - You need to get insights from a video file located in the C:\\Resources\\Video\\Media.mp4 folder. Save the insights to the C:\\Resources\\Video\\Insights.json folder. o complete this task, sign in to the Azure Video Analyzer for Media at https://www.videoindexer.ai/ by using admin@abc.com",
    "choices": {},
    "answer": "S"
  },
  {
    "id": 42,
    "type": "multiple_choice",
    "img": null,
    "question": "SIMULATION - Use the following login credentials as needed: To enter your username, place your cursor in the Sign in box and click on the username below. To enter your password, place your cursor in the Enter password box and click on the password below. Azure Username: admin@abc.com - Azure Password: Xxxxxxxxxxxx - The following information is for technical support purposes only: Lab Instance: 12345678 - Task - You plan to analyze stock photography and automatically generate captions for the images. You need to create a service in Azure to analyze the images. The service must be named caption12345678 and must be in the East US Azure region. The solution must ise the Free pricing tier. n the C:\\Resources\\Caption\\Params.json folder, enter the value for Key 1 and the endpoint for the new service. To complete this task, sign in to the Azure portal.",
    "choices": {},
    "answer": ""
  },
  {
    "id": 43,
    "type": "multiple_choice",
    "img": null,
    "question": "SIMULATION - Use the following login credentials as needed: To enter your username, place your cursor in the Sign in box and click on the username below. To enter your password, place your cursor in the Enter password box and click on the password below. Azure Username: admin@abc.com - Azure Password: xxxxxxxxxxxx - The following information is for technical support purposes only: Lab Instance: 12345678 - Task - You plan to build an application that will use caption12345678. The application will be deployed to a virtual network named VNet1. You need to ensure that only virtual machines on VNet1 can access caption12345678. To complete this task, sign in to the Azure portal.",
    "choices": {},
    "answer": "S"
  },
  {
    "id": 44,
    "type": "multiple_choice",
    "img": null,
    "question": "SIMULATION - Use the following login credentials as needed: To enter your username, place your cursor in the Sign in box and click on the username below. To enter your password, place your cursor in the Enter password box and click on the password below. Azure Username: admin@abc.com - Azure Password: Xxxxxxxxxxxx - The following information is for technical support purposes only: Lab Instance: 12345678 - Task - You need to ensure that a user named admin@abc.com can regenerate the subscription keys of AAA12345678. The solution must use the principle of least privilege. [o complete this task, sign in to the Azure portal.",
    "choices": {},
    "answer": "S"
  },
  {
    "id": 45,
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
    "id": 46,
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
    "id": 47,
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
    "answer_order": []
  },
  {
    "id": 48,
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
    "id": 49,
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
    "id": 50,
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
    "id": 51,
    "type": "multiple_choice",
    "img": null,
    "question": "Topic You have an app named App1 that uses an Azure Cognitive Services model to identify anomalies in a time series data stream. You need to run App1 in a location that has limited connectivity. The solution must minimize costs. What should you use to host the model?",
    "choices": {
      "A": "Azure Kubernetes Service (AKS)",
      "B": "Azure Container Instances",
      "C": "a Kubernetes cluster hosted in an Azure Stack Hub integrated system",
      "D": "the Docker Engine"
    },
    "answer": ""
  },
  {
    "id": 52,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You have an Azure Cognitive Search resource named Search1 that is used by multiple apps. You need to secure Search1, The solution must meet the following requirements: • Prevent access to Search1 from the internet. • Limit the access of each app to specific queries. What should you do? To answer, select the appropriate options in the answer area.",
    "items": []
  },
  {
    "id": 53,
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
    "id": 54,
    "type": "drag_and_drop_order",
    "img": null,
    "prompt": "You are building an app that will scan confidential documents and use the Language service to analyze the contents. You provision an Azure Cognitive Services resource. You need to ensure that the app can make requests to the Language service endpoint. The solution must ensure that confidential documents remain on-premises. Vhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct rder.",
    "choices_pool": [
      "Run the container and specify an App ID and Client Secret.",
      "Provision an on-premises Kubernetes cluster that is isolated from the internet.",
      "Pull an image from the Microsoft Container Registry (MCR).",
      "Run the container and specify an APl key and the Endpoint URL of the Cognitive Services",
      "resource.",
      "Provision an on-premises Kubernetes cluster that has internet connectivity.",
      "Pull an image from Docker Hub.",
      "Provision an Azure Kubernetes Service (AKS) resource."
    ],
    "answer_order": []
  },
  {
    "id": 55,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You have an Azure subscription that has the following configurations: • Subscription ID: 8d3591aa-96b8-4737-ad09-00f9b1ed35ad • Tenant ID: 3edfe572-cb54-3ced-ae12-c5c177f39a12 You plan to create a resource that will perform sentiment analysis and optical character recognition (OCR). You need to use an HTTP request to create the resource in the subscription. The solution must use a single key and endpoint. How should you complete the request? To answer, select the appropriate options in the answer area.",
    "items": []
  },
  {
    "id": 56,
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
    "id": 57,
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
    "id": 58,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "You need to ensure that the resource can respond to 600 requests per minute. How should you complete the template? To answer, select the appropriate options in the answer area. Answer Area { \"type\": \"Microsoft.CognitiveServices/accounts/deployments\", \"apiVersion\": \"2023-05-01\", \"name\": \"arm-aoai-sample-resource/arm-je-std-deployment\", \"dependsOn\": [ \"[resourceId('Microsoft.CognitiveServices/accounts', 'arm-aoai-sample-resource')]\" ], \"sku\": { \"name\": \"Standard\", •• \"capacity\"",
    "choices": {},
    "answer": []
  },
  {
    "id": 59,
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
    "answer_order": []
  },
  {
    "id": 60,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You have an Azure OpenAl resource named Al1 that hosts three deployments of the GPT 3.5 model. Each deployment is optimized for a unique workload. You plan to deploy three apps. Each app will access Al1 by using the REST API and will use the deployment that was optimized for the app's intended workload. You need to provide each app with access to Al1 and the appropriate deployment. The solution must ensure that only the apps can access Al1. What should you use to provide access to Al1, and what should each app use to connect to its appropriate deployment? To answer, select the appropriate options in the answer area.",
    "items": []
  },
  {
    "id": 61,
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
    "id": 62,
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
    "id": 63,
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
    "id": 64,
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
    "id": 65,
    "type": "hotspot_dropdown",
    "img": null,
    "prompt": "You plan to deploy a containerized version of an Azure Cognitive Services service that will be used for sentiment analysis. You configure https://contoso.cognitiveservices.azure.com as the endpoint URI for the service. You need to run the container on an Azure virtual machine by using Docker. How should you complete the command? To answer, select the appropriate options in the answer area. vOTE: Each correct selection is worth one point.",
    "items": []
  },
  {
    "id": 66,
    "type": "multiple_choice",
    "img": null,
    "question": "O You are developing a system that will monitor temperature data from a data stream. The system must generate an alert in response to atypical values. The solution mus minimize development effort. What should you include in the solution?",
    "choices": {
      "A": "Multivariate Anomaly Detection",
      "B": "Azure Stream Analytics",
      "C": "metric alerts in Azure Monitor",
      "D": "Univariate Anomaly Detection"
    },
    "answer": "C"
  },
  {
    "id": 67,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a Microsoft OneDrive folder that contains a 20-GB video file named File1 .avi. You need to index File1.avi by using the Azure Video Indexer website. Vhat should you do?",
    "choices": {
      "A": "Upload File1 .avi to the www.youtube.com webpage, and then copy the URL of the video to the Azure AI Video Indexer website.",
      "B": "Download File1.avi to a local computer, and then upload the file to the Azure Al Video Indexer website.",
      "C": "From OneDrive, create a download link, and then copy the link to the Azure Al Video Indexer website.",
      "D": "From OneDrive, create a sharing link for File1 .avi, and then copy the link to the Azure Al Video Indexer website."
    },
    "answer": "C"
  },
  {
    "id": 68,
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
    "id": 69,
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
    "id": 70,
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
  }
];

export default questions;