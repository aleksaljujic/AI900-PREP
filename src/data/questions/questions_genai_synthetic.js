// AI-900 Synthetic Question Set
// Total: 200 synthetic questions

const questions = [
  {
    "id": 447,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to generate an original image of a product concept based on a written description. Which Azure AI Foundry model should you deploy?",
    "choices": {
      "A": "GPT-4",
      "B": "Whisper",
      "C": "DALL-E",
      "D": "Embeddings"
    },
    "answer": "C"
  },
  {
    "id": 448,
    "type": "multiple_choice",
    "img": null,
    "question": "A generative AI assistant returns a confident answer about a recent news event, but the answer is completely fabricated. What is this type of error called?",
    "choices": {
      "A": "Overfitting",
      "B": "Hallucination",
      "C": "False negative",
      "D": "Model drift"
    },
    "answer": "B"
  },
  {
    "id": 449,
    "type": "multiple_choice",
    "img": null,
    "question": "You are deploying a customer-facing generative AI chat application. You need to prevent the model from responding to requests for violent content. What should you configure?",
    "choices": {
      "A": "Prompt engineering",
      "B": "Fine-tuning",
      "C": "Content filters",
      "D": "Grounding"
    },
    "answer": "C"
  },
  {
    "id": 450,
    "type": "multiple_choice",
    "img": null,
    "question": "You want a deployed GPT model to always respond in formal English, never discuss competitor products, and introduce itself as 'Aria'. Where should you define these instructions?",
    "choices": {
      "A": "In the user prompt",
      "B": "In the system message",
      "C": "In the content filter settings",
      "D": "In the model fine-tuning dataset"
    },
    "answer": "B"
  },
  {
    "id": 451,
    "type": "multiple_choice",
    "img": null,
    "question": "You need a generative AI model to answer questions based only on your company's internal policy documents, not on general internet knowledge. What should you implement?",
    "choices": {
      "A": "Fine-tuning on random data",
      "B": "Grounding with your internal documents",
      "C": "A stricter system message only",
      "D": "Disabling content filters"
    },
    "answer": "B"
  },
  {
    "id": 452,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure service provides access to OpenAI models including GPT-4, DALL-E, and Whisper within a managed, enterprise-grade environment?",
    "choices": {
      "A": "Azure Machine Learning",
      "B": "Azure Cognitive Search",
      "C": "Azure OpenAI Service",
      "D": "Azure Bot Service"
    },
    "answer": "C"
  },
  {
    "id": 453,
    "type": "multiple_choice",
    "img": null,
    "question": "What is Azure AI Foundry primarily used for?",
    "choices": {
      "A": "Storing and querying structured relational data",
      "B": "Building, evaluating, and deploying generative AI applications and models",
      "C": "Training classical machine learning models using drag-and-drop",
      "D": "Indexing documents for full-text search"
    },
    "answer": "B"
  },
  {
    "id": 454,
    "type": "multiple_choice",
    "img": null,
    "question": "You want to adapt a pre-trained GPT model to use the specific terminology and tone of your legal department by training it further on internal legal documents. What technique should you use?",
    "choices": {
      "A": "Grounding",
      "B": "Prompt engineering",
      "C": "Fine-tuning",
      "D": "Retrieval-augmented generation"
    },
    "answer": "C"
  },
  {
    "id": 455,
    "type": "multiple_choice",
    "img": null,
    "question": "Which technique involves augmenting a user's prompt with relevant documents retrieved from a knowledge base before sending it to a language model?",
    "choices": {
      "A": "Fine-tuning",
      "B": "Retrieval-augmented generation (RAG)",
      "C": "System message configuration",
      "D": "Content filtering"
    },
    "answer": "B"
  },
  {
    "id": 456,
    "type": "multiple_choice",
    "img": null,
    "question": "Microsoft Copilot is an example of which type of AI capability?",
    "choices": {
      "A": "Anomaly detection",
      "B": "Classical machine learning",
      "C": "Generative AI",
      "D": "Computer vision"
    },
    "answer": "C"
  },
  {
    "id": 457,
    "type": "multiple_choice",
    "img": null,
    "question": "Content filters in Azure OpenAI Service classify content into four categories of potential harm. Which of the following is NOT one of those four categories?",
    "choices": {
      "A": "Hate",
      "B": "Violence",
      "C": "Fraud",
      "D": "Self-harm"
    },
    "answer": "C"
  },
  {
    "id": 458,
    "type": "multiple_choice",
    "img": null,
    "question": "Within the responsible generative AI framework, at which layer are content filters applied to suppress harmful prompts and responses?",
    "choices": {
      "A": "Model layer",
      "B": "User interface layer",
      "C": "Safety system layer",
      "D": "Data layer"
    },
    "answer": "C"
  },
  {
    "id": 459,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to transcribe the audio from a recorded boardroom meeting into text. Which Azure OpenAI model is designed for this task?",
    "choices": {
      "A": "GPT-4",
      "B": "DALL-E",
      "C": "Whisper",
      "D": "Embeddings"
    },
    "answer": "C"
  },
  {
    "id": 460,
    "type": "multiple_choice",
    "img": null,
    "question": "A user asks a generative AI assistant 'How do I make a bomb?' The assistant refuses to answer. What mechanism prevented this response?",
    "choices": {
      "A": "Fine-tuning",
      "B": "Grounding",
      "C": "Content filtering",
      "D": "Prompt engineering by the user"
    },
    "answer": "C"
  },
  {
    "id": 461,
    "type": "multiple_choice",
    "img": null,
    "question": "You want to guide a GPT model's responses by providing two or three example question-answer pairs directly in the prompt, without changing model weights. What is this technique called?",
    "choices": {
      "A": "Fine-tuning",
      "B": "Few-shot prompting",
      "C": "Grounding",
      "D": "Transfer learning"
    },
    "answer": "B"
  },
  {
    "id": 462,
    "type": "multiple_choice",
    "img": null,
    "question": "Which of the following is a common scenario for generative AI?",
    "choices": {
      "A": "Detecting fraudulent transactions in real time",
      "B": "Classifying X-ray images into disease categories",
      "C": "Generating a first draft of a marketing email from bullet points",
      "D": "Grouping customers into segments based on purchase history"
    },
    "answer": "C"
  },
  {
    "id": 463,
    "type": "multiple_choice",
    "img": null,
    "question": "The Azure AI Foundry model catalog allows you to do which of the following?",
    "choices": {
      "A": "Browse, evaluate, and deploy a wide range of foundation AI models from Microsoft and third parties",
      "B": "Store and version your company's proprietary training datasets",
      "C": "Design drag-and-drop machine learning pipelines",
      "D": "Monitor application performance in production"
    },
    "answer": "A"
  },
  {
    "id": 464,
    "type": "multiple_choice",
    "img": null,
    "question": "A generative AI solution produces biased outputs because the model was trained on data that over-represents certain demographics. Which responsible AI principle is most relevant?",
    "choices": {
      "A": "Reliability and safety",
      "B": "Fairness",
      "C": "Transparency",
      "D": "Accountability"
    },
    "answer": "B"
  },
  {
    "id": 465,
    "type": "multiple_choice",
    "img": null,
    "question": "You need a generative AI model to generate accurate answers about events that happened after the model's training cutoff date. What is the best approach?",
    "choices": {
      "A": "Modify the system message",
      "B": "Use a stricter content filter",
      "C": "Add grounding data from current sources",
      "D": "Increase the model's temperature setting"
    },
    "answer": "C"
  },
  {
    "id": 466,
    "type": "multiple_choice",
    "img": null,
    "question": "What is the Transformer architecture primarily known for in the context of generative AI?",
    "choices": {
      "A": "It is used exclusively for image classification tasks",
      "B": "It is the foundational architecture behind most modern large language models",
      "C": "It is a type of decision tree algorithm used for regression",
      "D": "It converts voice input into structured data"
    },
    "answer": "B"
  },
  {
    "id": 467,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A system message is used to define the behavior and constraints of a generative AI model before users interact with it.",
        "answer": "Yes"
      },
      {
        "text": "Fine-tuning and prompt engineering both modify the underlying weights of a language model.",
        "answer": "No"
      },
      {
        "text": "Grounding connects a generative AI model to verified external data to reduce hallucinations.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 468,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "DALL-E is used to generate images from natural language descriptions.",
        "answer": "Yes"
      },
      {
        "text": "Whisper is used to generate text summaries of long documents.",
        "answer": "No"
      },
      {
        "text": "GPT-4 can process both text and image inputs.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 469,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Content filters in Azure OpenAI Service can suppress both user prompts and model responses.",
        "answer": "Yes"
      },
      {
        "text": "Content filters are configured at the user interface layer of a generative AI solution.",
        "answer": "No"
      },
      {
        "text": "Content filters classify harmful content into four severity levels.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 470,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Generative AI can produce original text, images, and code in response to natural language prompts.",
        "answer": "Yes"
      },
      {
        "text": "Generative AI is an older form of AI that is being replaced by classical machine learning.",
        "answer": "No"
      },
      {
        "text": "Generative AI models are based on the Transformer architecture.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 471,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Azure AI Foundry provides a model catalog where you can browse and deploy foundation models.",
        "answer": "Yes"
      },
      {
        "text": "Azure AI Foundry is only available to Microsoft internal development teams.",
        "answer": "No"
      },
      {
        "text": "Azure AI Foundry can be used to evaluate generative AI model performance before deployment.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 472,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Retrieval-augmented generation (RAG) retrieves relevant documents and includes them in the prompt before the model generates a response.",
        "answer": "Yes"
      },
      {
        "text": "RAG retrains the language model on new documents.",
        "answer": "No"
      },
      {
        "text": "RAG helps reduce hallucinations by anchoring responses to retrieved factual content.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 473,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Copilots are typically built on generative AI models and are integrated into applications to help users with tasks.",
        "answer": "Yes"
      },
      {
        "text": "Copilots can only be created by Microsoft and cannot be customized for specific business applications.",
        "answer": "No"
      },
      {
        "text": "Microsoft 365 Copilot is an example of a generative AI solution embedded in productivity software.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 474,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "To prevent a generative AI model from returning hateful or violent responses, you should configure [BLANK].",
    "options": ["grounding.", "content filters.", "a system message.", "fine-tuning."],
    "answer": "content filters."
  },
  {
    "id": 475,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "A confident but factually incorrect output from a generative AI model is known as a [BLANK].",
    "options": ["false positive.", "hallucination.", "classification error.", "regression error."],
    "answer": "hallucination."
  },
  {
    "id": 476,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Connecting a generative AI model to your company's SharePoint documents so that answers are based on those files is an example of [BLANK].",
    "options": ["fine-tuning.", "few-shot prompting.", "grounding.", "content filtering."],
    "answer": "grounding."
  },
  {
    "id": 477,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "The [BLANK] model in Azure OpenAI Service is used to generate images from text descriptions.",
    "options": ["GPT-4", "Whisper", "DALL-E", "Embeddings"],
    "answer": "DALL-E"
  },
  {
    "id": 478,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Instructions provided to a generative AI model before any user interaction, used to set its behavior, tone, and limits, are called a [BLANK].",
    "options": ["user prompt.", "system message.", "grounding document.", "content filter."],
    "answer": "system message."
  },
  {
    "id": 479,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "The practice of writing effective inputs to guide a generative AI model's outputs without changing the model's weights is called [BLANK].",
    "options": ["fine-tuning.", "grounding.", "prompt engineering.", "transfer learning."],
    "answer": "prompt engineering."
  },
  {
    "id": 480,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "The [BLANK] model in Azure OpenAI is specifically designed to convert spoken audio into written text.",
    "options": ["DALL-E", "GPT-4", "Whisper", "Codex"],
    "answer": "Whisper"
  },
  {
    "id": 481,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each Azure OpenAI model to its primary purpose.",
    "choices_pool": ["DALL-E", "GPT-4", "Whisper"],
    "targets": [
      {"text": "Generate a written summary of a legal contract.", "answer": "GPT-4"},
      {"text": "Create an original illustration from a text description.", "answer": "DALL-E"},
      {"text": "Produce a transcript of a recorded video lecture.", "answer": "Whisper"}
    ]
  },
  {
    "id": 482,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each generative AI technique to its correct description.",
    "choices_pool": ["Content filtering", "Fine-tuning", "Grounding", "Prompt engineering", "System message"],
    "targets": [
      {"text": "Adapting a pre-trained model by training it further on domain-specific data.", "answer": "Fine-tuning"},
      {"text": "Connecting the model to verified external documents to anchor its responses.", "answer": "Grounding"},
      {"text": "Crafting inputs to guide model behavior without changing model weights.", "answer": "Prompt engineering"},
      {"text": "Blocking harmful content in both inputs and outputs at the safety system layer.", "answer": "Content filtering"}
    ]
  },
  {
    "id": 483,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each generative AI concept to the correct scenario.",
    "choices_pool": ["Content filtering", "Few-shot prompting", "Fine-tuning", "Grounding", "System message"],
    "targets": [
      {"text": "You include three example Q&A pairs in the prompt to show the model the expected response style.", "answer": "Few-shot prompting"},
      {"text": "You train a GPT model further on 10,000 internal support tickets to improve domain responses.", "answer": "Fine-tuning"},
      {"text": "You link the model to a real-time database of product inventory before it answers stock questions.", "answer": "Grounding"},
      {"text": "You write instructions telling the model to always respond in Spanish and never discuss pricing.", "answer": "System message"}
    ]
  },
  {
    "id": 484,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two scenarios are valid use cases for generative AI? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Generating a personalized cover letter from a job description and resume",
      "B": "Detecting temperature anomalies in factory sensor data",
      "C": "Summarizing a 50-page research paper into three paragraphs",
      "D": "Grouping website visitors by browsing behavior using clustering",
      "E": "Predicting next month's sales volume"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 485,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two statements are true about content filters in Azure OpenAI Service? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Content filters can block both user prompts and model-generated responses",
      "B": "Content filters are applied at the model layer, not the safety system layer",
      "C": "Content filters categorize harmful content into four categories: hate, sexual, violence, and self-harm",
      "D": "Content filters are only applied to image generation, not text generation",
      "E": "Content filters eliminate the need for a system message"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 486,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two techniques reduce hallucinations in a generative AI application? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Grounding the model with verified external documents",
      "B": "Using a stricter content filter",
      "C": "Implementing retrieval-augmented generation (RAG)",
      "D": "Increasing the model temperature",
      "E": "Disabling the system message"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 487,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two are features of Azure AI Foundry? Each correct answer presents a complete solution.",
    "choices": {
      "A": "A model catalog for browsing and deploying foundation models",
      "B": "A drag-and-drop interface for building classical ML pipelines",
      "C": "Tools for evaluating generative AI model performance",
      "D": "A relational database for storing structured business data",
      "E": "Real-time anomaly detection for IoT sensors"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 488,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two responsible AI considerations are most important when deploying a generative AI solution to the public? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Implementing content filters to block harmful outputs",
      "B": "Maximizing model response speed above all other factors",
      "C": "Ensuring users understand they are interacting with AI, not a human",
      "D": "Using the cheapest available model",
      "E": "Disabling grounding to reduce costs"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 489,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a document processing solution that must extract the vendor name, invoice date, line items, and total amount from thousands of supplier invoices. Which Azure AI service should you use?",
    "choices": {
      "A": "Azure AI Vision",
      "B": "Azure AI Language",
      "C": "Azure AI Document Intelligence",
      "D": "Azure AI Face"
    },
    "answer": "C"
  },
  {
    "id": 490,
    "type": "multiple_choice",
    "img": null,
    "question": "A logistics company needs to automatically read handwritten parcel labels and enter the data into their system. Which AI workload type should they use?",
    "choices": {
      "A": "Natural language processing",
      "B": "Anomaly detection",
      "C": "Document processing with OCR",
      "D": "Conversational AI"
    },
    "answer": "C"
  },
  {
    "id": 491,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to identify whether a photo taken at a building entrance contains a human face. You do not need to identify who the person is. Which Azure AI service feature should you use?",
    "choices": {
      "A": "Facial recognition",
      "B": "Facial detection",
      "C": "Facial analysis",
      "D": "Object detection"
    },
    "answer": "B"
  },
  {
    "id": 492,
    "type": "multiple_choice",
    "img": null,
    "question": "A retail store wants to analyze CCTV footage to count how many customers are present in each aisle at any given moment. Which computer vision capability should they use?",
    "choices": {
      "A": "Image classification",
      "B": "Optical character recognition",
      "C": "Object detection",
      "D": "Semantic segmentation"
    },
    "answer": "C"
  },
  {
    "id": 493,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a safety monitoring system for a construction site. The system must detect whether workers are wearing hard hats and flag violations in real time. Which approach should you use?",
    "choices": {
      "A": "Train a Custom Vision object detection model on labeled images of workers with and without hard hats",
      "B": "Use the Azure AI Vision prebuilt describe image feature",
      "C": "Use the Face service to analyze facial expressions",
      "D": "Use Form Recognizer to extract data from safety reports"
    },
    "answer": "A"
  },
  {
    "id": 494,
    "type": "multiple_choice",
    "img": null,
    "question": "A medical imaging company wants to classify brain scan images into four predefined categories of hemorrhage type. Which Azure AI approach should they use?",
    "choices": {
      "A": "Azure AI Vision prebuilt describe image",
      "B": "Custom Vision image classification with a labeled training dataset",
      "C": "Form Recognizer prebuilt document model",
      "D": "Azure AI Language sentiment analysis"
    },
    "answer": "B"
  },
  {
    "id": 495,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to identify which specific employee entered a restricted server room by matching their face against a registered employee database. Which Face service operation should you use?",
    "choices": {
      "A": "Detect",
      "B": "Verify",
      "C": "Identify",
      "D": "Group"
    },
    "answer": "C"
  },
  {
    "id": 496,
    "type": "multiple_choice",
    "img": null,
    "question": "You are processing thousands of scanned insurance claim forms. Each form has the same layout. You need to extract the claim number, date, and damage description from each form automatically. Which Azure AI service should you use?",
    "choices": {
      "A": "Azure AI Language",
      "B": "Azure AI Vision",
      "C": "Azure AI Document Intelligence",
      "D": "Azure AI Face"
    },
    "answer": "C"
  },
  {
    "id": 497,
    "type": "multiple_choice",
    "img": null,
    "question": "An autonomous vehicle's AI system misidentifies a stop sign covered in snow as a speed limit sign. Which responsible AI principle is most relevant?",
    "choices": {
      "A": "Fairness",
      "B": "Transparency",
      "C": "Reliability and safety",
      "D": "Inclusiveness"
    },
    "answer": "C"
  },
  {
    "id": 498,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure AI Vision feature assigns a descriptive caption to an uploaded photograph, enabling automatic alt-text generation for websites?",
    "choices": {
      "A": "Object detection",
      "B": "OCR",
      "C": "Image description",
      "D": "Facial analysis"
    },
    "answer": "C"
  },
  {
    "id": 499,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to determine the approximate age, whether a person is smiling, and whether they are wearing glasses from a photograph. Which Azure AI service feature should you use?",
    "choices": {
      "A": "Facial detection",
      "B": "Facial recognition",
      "C": "Facial analysis",
      "D": "Object detection"
    },
    "answer": "C"
  },
  {
    "id": 500,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Azure AI Document Intelligence can extract structured data from forms with a consistent layout.",
        "answer": "Yes"
      },
      {
        "text": "Azure AI Document Intelligence can translate extracted text into another language.",
        "answer": "No"
      },
      {
        "text": "Azure AI Document Intelligence supports prebuilt models for receipts and invoices.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 501,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The Azure AI Vision service can read printed and handwritten text from images.",
        "answer": "Yes"
      },
      {
        "text": "The Azure AI Vision service requires you to provide labeled training images before it can analyze photographs.",
        "answer": "No"
      },
      {
        "text": "The Azure AI Vision service can generate automatic captions for images.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 502,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Custom Vision requires labeled training images provided by the user.",
        "answer": "Yes"
      },
      {
        "text": "Custom Vision and Azure AI Vision serve the same purpose and are interchangeable.",
        "answer": "No"
      },
      {
        "text": "Custom Vision supports both image classification and object detection project types.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 503,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Identifying whether a photo of a skin lesion looks like known melanoma images is an example of [BLANK].",
    "options": ["object detection.", "image classification.", "optical character recognition.", "semantic segmentation."],
    "answer": "image classification."
  },
  {
    "id": 504,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "A system that maps each pixel in a satellite image to either 'building', 'road', 'water', or 'vegetation' is using [BLANK].",
    "options": ["object detection.", "image classification.", "optical character recognition.", "semantic segmentation."],
    "answer": "semantic segmentation."
  },
  {
    "id": 505,
    "type": "multiple_choice",
    "img": null,
    "question": "A customer service team receives thousands of support tickets daily. You need to automatically identify the main topics being discussed across all tickets. Which NLP feature should you use?",
    "choices": {
      "A": "Sentiment analysis",
      "B": "Language detection",
      "C": "Key phrase extraction",
      "D": "Named entity recognition"
    },
    "answer": "C"
  },
  {
    "id": 506,
    "type": "multiple_choice",
    "img": null,
    "question": "You are analyzing hospital patient records and need to automatically extract drug names, dosage amounts, and treatment dates mentioned in free-text clinical notes. Which NLP feature should you use?",
    "choices": {
      "A": "Sentiment analysis",
      "B": "Named entity recognition",
      "C": "Key phrase extraction",
      "D": "Translation"
    },
    "answer": "B"
  },
  {
    "id": 507,
    "type": "multiple_choice",
    "img": null,
    "question": "A hotel chain collects guest reviews in multiple languages. They want to understand whether guests are satisfied or dissatisfied without reading each review manually. Which NLP feature should they use?",
    "choices": {
      "A": "Language detection",
      "B": "Named entity recognition",
      "C": "Key phrase extraction",
      "D": "Sentiment analysis"
    },
    "answer": "D"
  },
  {
    "id": 508,
    "type": "multiple_choice",
    "img": null,
    "question": "A news aggregator receives articles from global sources and needs to detect what language each article is written in before routing it to the correct team. Which Azure AI Language feature should they use?",
    "choices": {
      "A": "Sentiment analysis",
      "B": "Language detection",
      "C": "Translation",
      "D": "Key phrase extraction"
    },
    "answer": "B"
  },
  {
    "id": 509,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a voice-activated smart home system. The user speaks a command, the system converts it to text, identifies the intent, and responds with spoken audio. Which two Azure AI services are required?",
    "choices": {
      "A": "Azure AI Speech and Azure AI Language",
      "B": "Azure AI Vision and Azure AI Face",
      "C": "Azure AI Translator and Azure AI Document Intelligence",
      "D": "Azure AI Search and Azure Bot Service"
    },
    "answer": "A"
  },
  {
    "id": 510,
    "type": "multiple_choice",
    "img": null,
    "question": "A railway operator wants to automatically broadcast platform announcements in audio format from a written schedule. Which Azure AI Speech feature should they use?",
    "choices": {
      "A": "Speech recognition (speech-to-text)",
      "B": "Speech synthesis (text-to-speech)",
      "C": "Speech translation",
      "D": "Speaker recognition"
    },
    "answer": "B"
  },
  {
    "id": 511,
    "type": "multiple_choice",
    "img": null,
    "question": "An international conference wants to provide real-time subtitles in English for a speaker presenting in Mandarin. Which Azure AI service should they use?",
    "choices": {
      "A": "Azure AI Language",
      "B": "Azure AI Document Intelligence",
      "C": "Azure AI Speech with translation",
      "D": "Azure AI Vision"
    },
    "answer": "C"
  },
  {
    "id": 512,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to identify the intent behind user messages in a chatbot, such as distinguishing 'book a flight' from 'check flight status'. Which Azure AI Language feature should you use?",
    "choices": {
      "A": "Sentiment analysis",
      "B": "Conversational language understanding",
      "C": "Key phrase extraction",
      "D": "Named entity recognition"
    },
    "answer": "B"
  },
  {
    "id": 513,
    "type": "multiple_choice",
    "img": null,
    "question": "The Azure AI Language service can identify companies and organizations mentioned in a document. This is an example of which NLP capability?",
    "choices": {
      "A": "Sentiment analysis",
      "B": "Key phrase extraction",
      "C": "Language detection",
      "D": "Named entity recognition"
    },
    "answer": "D"
  },
  {
    "id": 514,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The Azure AI Speech service can convert spoken language into written text.",
        "answer": "Yes"
      },
      {
        "text": "The Azure AI Speech service can translate written text between languages.",
        "answer": "No"
      },
      {
        "text": "The Azure AI Speech service can convert written text into spoken audio output.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 515,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The Azure AI Translator service can detect the language of an input text.",
        "answer": "Yes"
      },
      {
        "text": "The Azure AI Translator service can produce spoken audio output from translated text.",
        "answer": "No"
      },
      {
        "text": "The Azure AI Translator service can translate a single text into multiple target languages in one API call.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 516,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Sentiment analysis can return a score indicating how positive or negative a text is.",
        "answer": "Yes"
      },
      {
        "text": "Sentiment analysis can identify the names of people mentioned in the text.",
        "answer": "No"
      },
      {
        "text": "Sentiment analysis is useful for monitoring customer satisfaction from online reviews.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 517,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "A phone banking system that reads account balances aloud to callers is using [BLANK].",
    "options": ["speech recognition.", "speech synthesis.", "translation.", "key phrase extraction."],
    "answer": "speech synthesis."
  },
  {
    "id": 518,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "A court reporting service that automatically produces a written transcript from recorded audio of legal proceedings is using [BLANK].",
    "options": ["speech synthesis.", "translation.", "speech recognition.", "entity recognition."],
    "answer": "speech recognition."
  },
  {
    "id": 519,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each NLP scenario to the correct Azure AI Language feature.",
    "choices_pool": ["Entity recognition", "Key phrase extraction", "Language detection", "Sentiment analysis", "Translation"],
    "targets": [
      {"text": "Determine whether a product review on an e-commerce site is mostly positive or negative.", "answer": "Sentiment analysis"},
      {"text": "Identify the medications and dosages mentioned in a clinical note.", "answer": "Entity recognition"},
      {"text": "Find the main topics discussed across a collection of employee survey responses.", "answer": "Key phrase extraction"},
      {"text": "Convert customer feedback written in French into English for the support team.", "answer": "Translation"}
    ]
  },
  {
    "id": 520,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each computer vision scenario to the correct capability.",
    "choices_pool": ["Facial analysis", "Facial detection", "Facial recognition", "Image classification", "Object detection", "Optical character recognition (OCR)", "Semantic segmentation"],
    "targets": [
      {"text": "Scan a printed menu at a restaurant and convert it to editable text.", "answer": "Optical character recognition (OCR)"},
      {"text": "Determine whether a photo shows a hotdog or not a hotdog.", "answer": "Image classification"},
      {"text": "Locate the position of all pedestrians in a dashcam image.", "answer": "Object detection"},
      {"text": "Identify whether a person in an airport photo is smiling and approximately how old they are.", "answer": "Facial analysis"}
    ]
  },
  {
    "id": 521,
    "type": "multiple_choice",
    "img": null,
    "question": "A startup monitors social media for mentions of their brand. They want to be alerted when the tone of mentions shifts from positive to negative. Which NLP capability should they implement?",
    "choices": {
      "A": "Named entity recognition",
      "B": "Sentiment analysis",
      "C": "Key phrase extraction",
      "D": "Language modeling"
    },
    "answer": "B"
  },
  {
    "id": 522,
    "type": "multiple_choice",
    "img": null,
    "question": "You are processing a large collection of scientific papers. You need to automatically identify the chemical compound names and gene identifiers mentioned in each paper. Which NLP feature is most suitable?",
    "choices": {
      "A": "Sentiment analysis",
      "B": "Key phrase extraction",
      "C": "Named entity recognition",
      "D": "Translation"
    },
    "answer": "C"
  },
  {
    "id": 523,
    "type": "multiple_choice",
    "img": null,
    "question": "You have a machine learning model that predicts annual salary based on years of experience, education level, and job title. Which type of machine learning is this?",
    "choices": {
      "A": "Clustering",
      "B": "Classification",
      "C": "Regression",
      "D": "Reinforcement learning"
    },
    "answer": "C"
  },
  {
    "id": 524,
    "type": "multiple_choice",
    "img": null,
    "question": "You build a model that assigns each incoming support ticket to one of five support teams based on the ticket content. Which type of machine learning is this?",
    "choices": {
      "A": "Regression",
      "B": "Clustering",
      "C": "Classification",
      "D": "Anomaly detection"
    },
    "answer": "C"
  },
  {
    "id": 525,
    "type": "multiple_choice",
    "img": null,
    "question": "A music streaming service wants to group its 50 million songs into thematic playlists automatically, without using any predefined genre categories. Which type of machine learning should they use?",
    "choices": {
      "A": "Supervised classification",
      "B": "Supervised regression",
      "C": "Unsupervised clustering",
      "D": "Reinforcement learning"
    },
    "answer": "C"
  },
  {
    "id": 526,
    "type": "multiple_choice",
    "img": null,
    "question": "A dataset for predicting student exam scores contains the columns: student_id, hours_studied, attendance_rate, prior_gpa, and final_score. Which column should NOT be used as a feature?",
    "choices": {
      "A": "hours_studied",
      "B": "attendance_rate",
      "C": "student_id",
      "D": "prior_gpa"
    },
    "answer": "C"
  },
  {
    "id": 527,
    "type": "multiple_choice",
    "img": null,
    "question": "A dataset for predicting student exam scores contains: student_id, hours_studied, attendance_rate, prior_gpa, and final_score. Which column is the label?",
    "choices": {
      "A": "student_id",
      "B": "hours_studied",
      "C": "prior_gpa",
      "D": "final_score"
    },
    "answer": "D"
  },
  {
    "id": 528,
    "type": "multiple_choice",
    "img": null,
    "question": "You convert an order timestamp column into four separate columns: year, month, day_of_week, and hour_of_day to help a model detect purchase patterns. This is an example of which process?",
    "choices": {
      "A": "Feature selection",
      "B": "Feature engineering",
      "C": "Model evaluation",
      "D": "Data labeling"
    },
    "answer": "B"
  },
  {
    "id": 529,
    "type": "multiple_choice",
    "img": null,
    "question": "After analyzing feature importance scores, you decide to drop the 'customer_id' and 'zip_code' columns from your training dataset because they do not contribute to model accuracy. This is an example of which process?",
    "choices": {
      "A": "Feature engineering",
      "B": "Data labeling",
      "C": "Feature selection",
      "D": "Model deployment"
    },
    "answer": "C"
  },
  {
    "id": 530,
    "type": "multiple_choice",
    "img": null,
    "question": "You have trained a classification model to detect defective products on a factory line. You evaluate the model and find it has 95% accuracy but misses 40% of all defective items. Which metric reveals this problem?",
    "choices": {
      "A": "R-squared (R2)",
      "B": "Root mean squared error (RMSE)",
      "C": "Recall (true positive rate)",
      "D": "Mean absolute error (MAE)"
    },
    "answer": "C"
  },
  {
    "id": 531,
    "type": "multiple_choice",
    "img": null,
    "question": "Which metric is most appropriate for evaluating a regression model that predicts apartment rental prices?",
    "choices": {
      "A": "Accuracy",
      "B": "F1 score",
      "C": "Mean absolute error (MAE)",
      "D": "AUC (area under the ROC curve)"
    },
    "answer": "C"
  },
  {
    "id": 532,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to identify unusual spikes in electricity consumption across a city's power grid that could indicate theft or equipment failure. Which Azure AI capability should you use?",
    "choices": {
      "A": "Azure AI Vision",
      "B": "Azure AI Anomaly Detector",
      "C": "Azure AI Language",
      "D": "Azure AI Document Intelligence"
    },
    "answer": "B"
  },
  {
    "id": 533,
    "type": "multiple_choice",
    "img": null,
    "question": "What is the primary difference between supervised and unsupervised machine learning?",
    "choices": {
      "A": "Supervised learning uses neural networks; unsupervised learning uses decision trees",
      "B": "Supervised learning requires labeled training data; unsupervised learning finds patterns in unlabeled data",
      "C": "Supervised learning is used for images; unsupervised learning is used for text",
      "D": "Supervised learning runs on cloud; unsupervised learning runs on edge devices"
    },
    "answer": "B"
  },
  {
    "id": 534,
    "type": "multiple_choice",
    "img": null,
    "question": "Deep learning models are a subset of machine learning. What distinguishes deep learning from traditional machine learning?",
    "choices": {
      "A": "Deep learning only works with structured tabular data",
      "B": "Deep learning uses multi-layered neural networks that can automatically learn feature representations from raw data",
      "C": "Deep learning always produces better results than classical ML regardless of the dataset",
      "D": "Deep learning requires no training data"
    },
    "answer": "B"
  },
  {
    "id": 535,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "In a regression model, the label must be a numeric value.",
        "answer": "Yes"
      },
      {
        "text": "In a clustering model, labeled training data is required.",
        "answer": "No"
      },
      {
        "text": "In a classification model, the label can be a non-numeric category such as 'approved' or 'rejected'.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 536,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Predicting the number of goals scored in a football match is an example of regression.",
        "answer": "Yes"
      },
      {
        "text": "Determining whether a bank transaction is fraudulent or legitimate is an example of regression.",
        "answer": "No"
      },
      {
        "text": "Grouping news articles into topic clusters without predefined categories is an example of clustering.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 537,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Automated ML in Azure Machine Learning can automatically select the best-performing algorithm for a given task.",
        "answer": "Yes"
      },
      {
        "text": "Automated ML can automatically determine which column in a dataset to use as the prediction target.",
        "answer": "No"
      },
      {
        "text": "Automated ML supports classification, regression, and time series forecasting task types.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 538,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "A model that predicts whether an online order will be returned by the customer is an example of [BLANK].",
    "options": ["regression.", "clustering.", "classification.", "anomaly detection."],
    "answer": "classification."
  },
  {
    "id": 539,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Predicting the exact number of days until a machine part will need replacement based on sensor readings is an example of [BLANK].",
    "options": ["classification.", "clustering.", "regression.", "deep learning."],
    "answer": "regression."
  },
  {
    "id": 540,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each machine learning scenario to the correct type.",
    "choices_pool": ["Classification", "Clustering", "Regression"],
    "targets": [
      {"text": "Predict the monthly churn rate percentage for a subscription service.", "answer": "Regression"},
      {"text": "Determine whether a patient's chest X-ray shows signs of pneumonia.", "answer": "Classification"},
      {"text": "Segment retail customers into groups based on purchasing patterns without predefined segments.", "answer": "Clustering"}
    ]
  },
  {
    "id": 541,
    "type": "multiple_choice",
    "img": null,
    "question": "An AI model used to shortlist job applicants consistently ranks candidates from certain universities lower, even when their qualifications are equivalent. Which responsible AI principle is being violated?",
    "choices": {
      "A": "Reliability and safety",
      "B": "Fairness",
      "C": "Privacy and security",
      "D": "Transparency"
    },
    "answer": "B"
  },
  {
    "id": 542,
    "type": "multiple_choice",
    "img": null,
    "question": "An AI-powered medical device continues to operate and provide readings even when its sensors report clearly impossible values, such as a body temperature of 65°C. Which responsible AI principle is being violated?",
    "choices": {
      "A": "Fairness",
      "B": "Inclusiveness",
      "C": "Reliability and safety",
      "D": "Accountability"
    },
    "answer": "C"
  },
  {
    "id": 543,
    "type": "multiple_choice",
    "img": null,
    "question": "A healthcare app shares patient interaction data with third-party advertisers without the patients' knowledge or consent. Which responsible AI principle is being violated?",
    "choices": {
      "A": "Fairness",
      "B": "Transparency",
      "C": "Privacy and security",
      "D": "Reliability and safety"
    },
    "answer": "C"
  },
  {
    "id": 544,
    "type": "multiple_choice",
    "img": null,
    "question": "A government benefits application portal does not work with screen readers, making it inaccessible to blind users. Which responsible AI principle is being violated?",
    "choices": {
      "A": "Transparency",
      "B": "Accountability",
      "C": "Fairness",
      "D": "Inclusiveness"
    },
    "answer": "D"
  },
  {
    "id": 545,
    "type": "multiple_choice",
    "img": null,
    "question": "An insurance company uses an AI model to set premiums but does not inform customers how the decision was made and does not provide documentation of the model's decision logic. Which responsible AI principle is being violated?",
    "choices": {
      "A": "Inclusiveness",
      "B": "Transparency",
      "C": "Reliability and safety",
      "D": "Privacy and security"
    },
    "answer": "B"
  },
  {
    "id": 546,
    "type": "multiple_choice",
    "img": null,
    "question": "A city deploys an AI system to allocate social services. There is no committee or process for residents to challenge or appeal the AI's decisions. Which responsible AI principle is being violated?",
    "choices": {
      "A": "Fairness",
      "B": "Transparency",
      "C": "Accountability",
      "D": "Inclusiveness"
    },
    "answer": "C"
  },
  {
    "id": 547,
    "type": "multiple_choice",
    "img": null,
    "question": "Your company forms a cross-functional AI ethics board that includes legal, privacy, and risk officers who can review and override any AI decision affecting customers. Which responsible AI principle does this demonstrate?",
    "choices": {
      "A": "Fairness",
      "B": "Inclusiveness",
      "C": "Privacy and security",
      "D": "Accountability"
    },
    "answer": "D"
  },
  {
    "id": 548,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "An AI credit scoring system that approves more men than women for identical financial profiles violates the Fairness principle.",
        "answer": "Yes"
      },
      {
        "text": "An AI system that provides explanations of its decisions to users demonstrates the Accountability principle.",
        "answer": "No"
      },
      {
        "text": "An AI system that stops making predictions when key input fields contain unusual values demonstrates the Reliability and safety principle.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 549,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Using training data that was collected without user consent violates the Privacy and security principle.",
        "answer": "Yes"
      },
      {
        "text": "Designing an AI system to be usable by people with hearing impairments relates to the Transparency principle.",
        "answer": "No"
      },
      {
        "text": "Implementing a process for humans to override AI decisions reflects the Accountability principle.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 550,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each responsible AI violation to the correct principle.",
    "choices_pool": ["Accountability", "Fairness", "Inclusiveness", "Privacy and security", "Reliability and safety", "Transparency"],
    "targets": [
      {"text": "An AI parole recommendation system approves fewer applications from one ethnic group than another.", "answer": "Fairness"},
      {"text": "A hospital AI system continues diagnosing patients even when critical blood test results are missing.", "answer": "Reliability and safety"},
      {"text": "A fitness app sells users' health and exercise data to insurance companies without their knowledge.", "answer": "Privacy and security"},
      {"text": "An AI-driven loan rejection provides no explanation to the applicant about why they were declined.", "answer": "Transparency"}
    ]
  },
  {
    "id": 551,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "An AI hiring tool that rejects candidates based on characteristics like gender or age violates the [BLANK] principle of responsible AI.",
    "options": ["accountability", "transparency", "fairness", "reliability and safety"],
    "answer": "fairness"
  },
  {
    "id": 552,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Requiring all AI-generated decisions to be logged so that authorized staff can audit them reflects the [BLANK] principle of responsible AI.",
    "options": ["fairness", "transparency", "accountability", "inclusiveness"],
    "answer": "transparency"
  },
  {
    "id": 553,
    "type": "multiple_choice",
    "img": null,
    "question": "You are indexing a library of 500,000 scanned academic papers. You need users to be able to search for papers by topic, author name, and publication date using natural language queries. Which Azure AI service should you use?",
    "choices": {
      "A": "Azure AI Document Intelligence",
      "B": "Azure AI Language",
      "C": "Azure AI Search",
      "D": "Azure AI Bot Service"
    },
    "answer": "C"
  },
  {
    "id": 554,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure service combines AI enrichment skills (such as OCR, entity recognition, and key phrase extraction) with full-text search indexing?",
    "choices": {
      "A": "Azure AI Document Intelligence",
      "B": "Azure AI Search",
      "C": "Azure AI Language",
      "D": "Azure Machine Learning"
    },
    "answer": "B"
  },
  {
    "id": 555,
    "type": "multiple_choice",
    "img": null,
    "question": "A financial services company wants to allow analysts to search through 10 years of earnings call transcripts using natural language questions like 'What did the CFO say about margins in 2022?'. Which type of AI workload is this?",
    "choices": {
      "A": "Conversational AI",
      "B": "Knowledge mining",
      "C": "Anomaly detection",
      "D": "Computer vision"
    },
    "answer": "B"
  },
  {
    "id": 556,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to build a bot that handles customer inquiries via your website, WhatsApp, and Microsoft Teams from a single configuration. Which Azure service should you use?",
    "choices": {
      "A": "Azure AI Language",
      "B": "Azure AI Bot Service",
      "C": "Azure AI Document Intelligence",
      "D": "Azure AI Vision"
    },
    "answer": "B"
  },
  {
    "id": 557,
    "type": "multiple_choice",
    "img": null,
    "question": "A telecommunications company wants to implement an automated phone menu that understands spoken customer requests like 'I want to pay my bill' and routes them correctly. Which two Azure AI services are required?",
    "choices": {
      "A": "Azure AI Speech and Azure AI Language",
      "B": "Azure AI Vision and Azure AI Face",
      "C": "Azure AI Document Intelligence and Azure AI Translator",
      "D": "Azure AI Anomaly Detector and Azure Machine Learning"
    },
    "answer": "A"
  },
  {
    "id": 558,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to prevent a deployed Azure OpenAI model from generating sexual content in any of its responses. What is the most direct way to achieve this?",
    "choices": {
      "A": "Add instructions to the system message only",
      "B": "Configure the content filter to block sexual content at all severity levels",
      "C": "Fine-tune the model on safe content",
      "D": "Increase the temperature parameter"
    },
    "answer": "B"
  },
  {
    "id": 559,
    "type": "multiple_choice",
    "img": null,
    "question": "You are deploying a generative AI application for children's education. Which two precautions are most important from a responsible AI standpoint?",
    "choices": {
      "A": "Configure strict content filters and clearly inform users (and parents) that they are interacting with AI",
      "B": "Use the highest-cost model available and disable the system message",
      "C": "Remove all content filters to improve response speed",
      "D": "Allow the model to access all internet content without grounding restrictions"
    },
    "answer": "A"
  },
  {
    "id": 560,
    "type": "multiple_choice",
    "img": null,
    "question": "Which of the following best describes the difference between Azure AI Document Intelligence and Azure AI Vision's OCR?",
    "choices": {
      "A": "Azure AI Vision OCR reads text from images; Azure AI Document Intelligence extracts structured data with field names and values from forms and documents",
      "B": "They are identical services with different names",
      "C": "Azure AI Document Intelligence only works with handwritten documents; Azure AI Vision OCR only works with printed text",
      "D": "Azure AI Vision OCR supports more languages than Azure AI Document Intelligence"
    },
    "answer": "A"
  },
  {
    "id": 561,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Azure AI Search can index content from PDFs, Word documents, and images using AI enrichment.",
        "answer": "Yes"
      },
      {
        "text": "Azure AI Search can generate new content such as summaries or translations autonomously.",
        "answer": "No"
      },
      {
        "text": "Azure AI Search supports natural language queries over indexed content.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 562,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Azure AI Bot Service can deliver the same bot across multiple communication channels without a separate deployment for each channel.",
        "answer": "Yes"
      },
      {
        "text": "Azure AI Bot Service is the service that creates and manages a question-and-answer knowledge base.",
        "answer": "No"
      },
      {
        "text": "Power Virtual Agents enables non-developers to build chatbots using a no-code interface.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 563,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each Azure AI service to the correct task.",
    "choices_pool": ["Azure AI Bot Service", "Azure AI Document Intelligence", "Azure AI Language", "Azure AI Search", "Azure AI Speech", "Azure AI Vision", "Azure AI Translator"],
    "targets": [
      {"text": "Make thousands of scanned legal contracts searchable using natural language queries.", "answer": "Azure AI Search"},
      {"text": "Extract structured fields from thousands of tax return forms.", "answer": "Azure AI Document Intelligence"},
      {"text": "Deploy a customer support bot to Teams, WhatsApp, and webchat simultaneously.", "answer": "Azure AI Bot Service"},
      {"text": "Detect the language of incoming support emails from global customers.", "answer": "Azure AI Language"}
    ]
  },
  {
    "id": 564,
    "type": "multiple_choice",
    "img": null,
    "question": "A factory detects that one of its production machines is vibrating more than usual for several consecutive days. An AI system raises an alert before the machine breaks down. Which type of AI workload is this?",
    "choices": {
      "A": "Computer vision",
      "B": "Natural language processing",
      "C": "Anomaly detection",
      "D": "Conversational AI"
    },
    "answer": "C"
  },
  {
    "id": 565,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to monitor website traffic and automatically detect unusual patterns that might indicate a DDoS attack. Which Azure AI service should you use?",
    "choices": {
      "A": "Azure AI Language",
      "B": "Azure AI Anomaly Detector",
      "C": "Azure AI Document Intelligence",
      "D": "Azure AI Vision"
    },
    "answer": "B"
  },
  {
    "id": 566,
    "type": "multiple_choice",
    "img": null,
    "question": "Which of the following is NOT an example of an anomaly detection workload?",
    "choices": {
      "A": "Detecting a sudden drop in website conversion rates",
      "B": "Identifying unusual energy consumption in a building",
      "C": "Flagging a credit card transaction that deviates from a customer's spending history",
      "D": "Classifying incoming emails as work-related or personal"
    },
    "answer": "D"
  },
  {
    "id": 567,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure AI Language capability allows a chatbot to understand that 'I want to cancel my subscription' and 'Please stop my plan' both have the same underlying user goal?",
    "choices": {
      "A": "Named entity recognition",
      "B": "Sentiment analysis",
      "C": "Conversational language understanding",
      "D": "Key phrase extraction"
    },
    "answer": "C"
  },
  {
    "id": 568,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building an Azure Machine Learning pipeline to predict apartment prices. Which is the correct sequence of modules after loading the dataset?",
    "choices": {
      "A": "Train Model → Split Data → Score Model → Evaluate Model",
      "B": "Split Data → Train Model → Score Model → Evaluate Model",
      "C": "Score Model → Train Model → Split Data → Evaluate Model",
      "D": "Evaluate Model → Train Model → Split Data → Score Model"
    },
    "answer": "B"
  },
  {
    "id": 569,
    "type": "multiple_choice",
    "img": null,
    "question": "You have deployed a machine learning model as a real-time web service. A developer needs to consume this service from a custom application. Which two pieces of information does the developer need?",
    "choices": {
      "A": "The REST endpoint URL and the authentication key",
      "B": "The Azure subscription ID and the resource group name",
      "C": "The model version number and training dataset path",
      "D": "The compute cluster name and the pipeline draft ID"
    },
    "answer": "A"
  },
  {
    "id": 570,
    "type": "multiple_choice",
    "img": null,
    "question": "You have finished training a model in Azure Machine Learning and want to ensure you can roll back to this specific version if a future retrained version performs worse. What should you do?",
    "choices": {
      "A": "Export the training dataset to CSV",
      "B": "Register the model in the Azure Machine Learning model registry",
      "C": "Publish the training pipeline",
      "D": "Create a new compute cluster"
    },
    "answer": "B"
  },
  {
    "id": 571,
    "type": "multiple_choice",
    "img": null,
    "question": "You are deploying a machine learning model for a critical production system that must handle 100,000 requests per hour. Which deployment target should you choose?",
    "choices": {
      "A": "Azure Container Instances (ACI)",
      "B": "Azure Functions",
      "C": "Azure Kubernetes Service (AKS)",
      "D": "Azure Logic Apps"
    },
    "answer": "C"
  },
  {
    "id": 572,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Azure Container Instances (ACI) is recommended for quick testing of a deployed model.",
        "answer": "Yes"
      },
      {
        "text": "Azure Kubernetes Service (AKS) is recommended for large-scale production deployments of ML models.",
        "answer": "Yes"
      },
      {
        "text": "Both ACI and AKS require the model to be retrained before deployment.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 573,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "In Azure Machine Learning Designer, a compute resource must be attached before the pipeline can run.",
        "answer": "Yes"
      },
      {
        "text": "Azure Machine Learning Designer pipelines can only be written using Python code.",
        "answer": "No"
      },
      {
        "text": "The Split Data module in Azure Machine Learning Designer divides a dataset into training and evaluation subsets.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 574,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two statements about Azure Machine Learning Designer are true? Each correct answer presents a complete solution.",
    "choices": {
      "A": "It provides a visual drag-and-drop interface for building ML pipelines",
      "B": "It automatically selects the best algorithm without user input",
      "C": "It allows custom Python and R code modules",
      "D": "It requires no dataset to run a pipeline",
      "E": "It can only deploy models to Azure Container Instances"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 575,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two tasks does Automated ML in Azure Machine Learning perform automatically? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Tries multiple algorithms and selects the best-performing one",
      "B": "Automatically identifies which column to use as the label",
      "C": "Runs multiple training iterations scored by a chosen metric",
      "D": "Generates labeled training data from raw unlabeled data",
      "E": "Deploys the model to AKS without user configuration"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 576,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two scenarios represent document processing AI workloads? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Automatically extracting vendor names and totals from scanned supplier invoices",
      "B": "Detecting whether a factory machine is vibrating abnormally",
      "C": "Reading handwritten text from completed paper application forms",
      "D": "Grouping customers by purchase behavior without predefined categories",
      "E": "Predicting the next month's sales revenue"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 577,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two are valid responsible AI practices when building a generative AI application? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Implementing content filters to prevent harmful outputs",
      "B": "Maximizing model output speed by disabling safety checks",
      "C": "Being transparent with users that they are interacting with AI",
      "D": "Using the largest available model regardless of task requirements",
      "E": "Removing grounding to allow more creative responses"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 578,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two Azure AI services would you combine to build a solution that listens to customer phone calls and determines whether callers are frustrated? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Azure AI Speech (to transcribe calls to text)",
      "B": "Azure AI Vision (to analyze facial expressions)",
      "C": "Azure AI Language (to detect sentiment in the transcript)",
      "D": "Azure AI Document Intelligence (to extract key fields)",
      "E": "Azure AI Search (to index call transcripts)"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 579,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two are true about the Transformer architecture in the context of generative AI? Each correct answer presents a complete solution.",
    "choices": {
      "A": "It is the foundational architecture behind most modern large language models",
      "B": "It was designed specifically for image classification tasks",
      "C": "It enables models to process and generate sequential text efficiently",
      "D": "It only works with structured tabular data",
      "E": "It requires no training data to generate responses"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 580,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two practices help ensure a generative AI model provides accurate, factual responses about your company's products? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Ground the model with your company's product documentation",
      "B": "Use retrieval-augmented generation (RAG) to fetch relevant product pages before generating answers",
      "C": "Increase the model's temperature to make responses more creative",
      "D": "Disable content filters to allow more detailed answers",
      "E": "Use a system message only without any external data"
    },
    "answer": ["A", "B"]
  },
  {
    "id": 581,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each AI workload type to the correct scenario.",
    "choices_pool": ["Anomaly detection", "Computer vision", "Conversational AI", "Document processing", "Generative AI", "Knowledge mining", "Natural language processing"],
    "targets": [
      {"text": "An AI assistant that writes first drafts of press releases from bullet points provided by PR staff.", "answer": "Generative AI"},
      {"text": "A chatbot on a bank's mobile app that answers questions about account balances and transactions.", "answer": "Conversational AI"},
      {"text": "A system that automatically reads and files incoming paper invoices into accounting software.", "answer": "Document processing"},
      {"text": "A solution that detects when a server's response time deviates significantly from its baseline pattern.", "answer": "Anomaly detection"}
    ]
  },
  {
    "id": 582,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each responsible AI principle to the correct real-world example.",
    "choices_pool": ["Accountability", "Fairness", "Inclusiveness", "Privacy and security", "Reliability and safety", "Transparency"],
    "targets": [
      {"text": "A mortgage AI explains exactly which factors led to a loan rejection so the applicant can appeal.", "answer": "Transparency"},
      {"text": "An AI hiring tool is tested across different demographic groups to ensure no group is disadvantaged.", "answer": "Fairness"},
      {"text": "An AI chatbot is designed to support keyboard-only navigation for users who cannot use a mouse.", "answer": "Inclusiveness"},
      {"text": "An independent ethics board reviews and can override any AI-generated medical diagnosis.", "answer": "Accountability"}
    ]
  },
  {
    "id": 583,
    "type": "multiple_choice",
    "img": null,
    "question": "Which of the following is an example of a knowledge mining workload?",
    "choices": {
      "A": "A chatbot that answers questions about store opening hours",
      "B": "A system that searches through 20 years of patent filings to find relevant prior art",
      "C": "A model that detects defective products on a conveyor belt",
      "D": "A voice assistant that reads recipes aloud"
    },
    "answer": "B"
  },
  {
    "id": 584,
    "type": "multiple_choice",
    "img": null,
    "question": "You want to explore and compare different foundation models before selecting one for your generative AI project. Which Azure AI Foundry feature should you use?",
    "choices": {
      "A": "The Azure Machine Learning Designer",
      "B": "The Azure AI Foundry model catalog",
      "C": "The Azure Cognitive Search index",
      "D": "The Azure Automated ML wizard"
    },
    "answer": "B"
  },
  {
    "id": 585,
    "type": "multiple_choice",
    "img": null,
    "question": "A user submits a prompt asking a generative AI application to produce instructions for illegal activity. The application refuses and returns a safety message. Which layer of the responsible generative AI framework handled this?",
    "choices": {
      "A": "Model layer",
      "B": "User interface layer",
      "C": "Safety system layer",
      "D": "Data layer"
    },
    "answer": "C"
  },
  {
    "id": 586,
    "type": "multiple_choice",
    "img": null,
    "question": "Which of the following best describes what embeddings are used for in generative AI systems?",
    "choices": {
      "A": "Generating photorealistic images from text",
      "B": "Converting text into numerical vectors that capture semantic meaning, enabling similarity search",
      "C": "Transcribing audio into written text",
      "D": "Filtering harmful content from model outputs"
    },
    "answer": "B"
  },
  {
    "id": 587,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Azure AI Foundry provides tools to evaluate generative AI models for quality and safety before deployment.",
        "answer": "Yes"
      },
      {
        "text": "Azure AI Foundry can only be used to deploy Microsoft's own GPT models.",
        "answer": "No"
      },
      {
        "text": "The Azure AI Foundry model catalog includes models from third-party providers in addition to Microsoft models.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 588,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Anomaly detection AI can identify unusual patterns in time series data.",
        "answer": "Yes"
      },
      {
        "text": "Anomaly detection AI can predict the exact time a machine will fail.",
        "answer": "No"
      },
      {
        "text": "Anomaly detection AI is suitable for detecting unusual network traffic that may indicate a security threat.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 589,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Searching through thousands of unstructured legal documents to find relevant precedents using AI is an example of [BLANK].",
    "options": ["conversational AI.", "knowledge mining.", "anomaly detection.", "computer vision."],
    "answer": "knowledge mining."
  },
  {
    "id": 590,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "An AI assistant embedded in Microsoft Word that helps users rewrite sentences and suggests improvements is an example of [BLANK].",
    "options": ["anomaly detection.", "classical machine learning.", "generative AI.", "computer vision."],
    "answer": "generative AI."
  },
  {
    "id": 591,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "When an Azure OpenAI deployment blocks a user's request because it contains hate speech, this is handled by the [BLANK] layer.",
    "options": ["model", "grounding", "safety system", "user interface"],
    "answer": "safety system"
  },
  {
    "id": 592,
    "type": "multiple_choice",
    "img": null,
    "question": "You are building a generative AI solution for a bank. The solution must only discuss topics related to banking and financial services and must refuse all other queries. What is the best way to enforce this constraint?",
    "choices": {
      "A": "Fine-tune the model on banking data only",
      "B": "Define the constraint in the system message",
      "C": "Set a very low temperature on the model",
      "D": "Use RAG with a banking-only knowledge base"
    },
    "answer": "B"
  },
  {
    "id": 593,
    "type": "multiple_choice",
    "img": null,
    "question": "A developer wants to test whether their Azure OpenAI deployment might produce problematic outputs. What is the recommended first step in evaluating potential harms?",
    "choices": {
      "A": "Deploy to production and monitor user complaints",
      "B": "Prepare a diverse set of test prompts and evaluate the outputs against predefined criteria",
      "C": "Disable content filters to see the unfiltered model behavior",
      "D": "Increase model temperature to explore edge cases"
    },
    "answer": "B"
  },
  {
    "id": 594,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure AI service would you use to analyze customer feedback submitted in multiple languages and determine the overall sentiment for each region?",
    "choices": {
      "A": "Azure AI Vision",
      "B": "Azure AI Document Intelligence",
      "C": "Azure AI Language",
      "D": "Azure AI Anomaly Detector"
    },
    "answer": "C"
  },
  {
    "id": 595,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to extract the meeting date, participants, and action items from thousands of unstructured meeting notes stored as Word documents. Which approach is most appropriate?",
    "choices": {
      "A": "Use Azure AI Vision image classification",
      "B": "Use Azure AI Language named entity recognition",
      "C": "Use Azure AI Face detection",
      "D": "Use Azure AI Anomaly Detector"
    },
    "answer": "B"
  },
  {
    "id": 596,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each Azure service to the type of AI workload it primarily supports.",
    "choices_pool": ["Azure AI Anomaly Detector", "Azure AI Bot Service", "Azure AI Document Intelligence", "Azure AI Language", "Azure AI Search", "Azure AI Speech", "Azure AI Vision", "Azure OpenAI Service"],
    "targets": [
      {"text": "Convert spoken customer calls into written transcripts.", "answer": "Azure AI Speech"},
      {"text": "Generate marketing copy from a bullet-point brief.", "answer": "Azure OpenAI Service"},
      {"text": "Detect sudden drops in daily sales that deviate from historical norms.", "answer": "Azure AI Anomaly Detector"},
      {"text": "Extract structured fields from thousands of scanned tax forms.", "answer": "Azure AI Document Intelligence"}
    ]
  },
  {
    "id": 597,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two statements about the Transformer architecture are true? Each correct answer presents a complete solution.",
    "choices": {
      "A": "The Transformer architecture uses attention mechanisms to process relationships between words in a sequence",
      "B": "The Transformer architecture can only process images, not text",
      "C": "Most modern large language models, including GPT, are based on the Transformer architecture",
      "D": "The Transformer architecture was designed exclusively for anomaly detection",
      "E": "Transformer models require labeled data for all tasks"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 598,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two are true about Azure AI Foundry? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Azure AI Foundry provides a hub for building, testing, and deploying generative AI applications",
      "B": "Azure AI Foundry is only available for image generation tasks",
      "C": "Azure AI Foundry includes evaluation tools to measure the quality and safety of AI model outputs",
      "D": "Azure AI Foundry replaces Azure Machine Learning entirely",
      "E": "Azure AI Foundry requires users to train models from scratch"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 599,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two NLP capabilities are needed to build a solution that monitors news articles in French and determines whether coverage of your company is positive or negative? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Translation (French to English)",
      "B": "Object detection",
      "C": "Sentiment analysis",
      "D": "Speech synthesis",
      "E": "Facial recognition"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 600,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two statements about responsible AI for generative AI solutions are true? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Content filters should be configured to block harmful categories such as hate, violence, and self-harm",
      "B": "Users should always be informed when they are interacting with a generative AI system rather than a human",
      "C": "Grounding eliminates the need for content filters",
      "D": "Fine-tuning always prevents hallucinations completely",
      "E": "Increasing model temperature reduces harmful outputs"
    },
    "answer": ["A", "B"]
  },
  {
    "id": 601,
    "type": "multiple_choice",
    "img": null,
    "question": "A company wants to use AI to generate personalized product recommendations in natural language for each website visitor, based on their browsing history. Which type of AI is most appropriate?",
    "choices": {
      "A": "Anomaly detection",
      "B": "Generative AI",
      "C": "Classical classification",
      "D": "OCR"
    },
    "answer": "B"
  },
  {
    "id": 602,
    "type": "multiple_choice",
    "img": null,
    "question": "You are evaluating your Azure OpenAI deployment and notice the model occasionally produces responses that are off-topic and unrelated to your business. What is the most effective first step to fix this?",
    "choices": {
      "A": "Retrain the model from scratch",
      "B": "Refine the system message to clearly define the model's purpose and boundaries",
      "C": "Increase the content filter sensitivity",
      "D": "Switch to a different model version"
    },
    "answer": "B"
  },
  {
    "id": 603,
    "type": "multiple_choice",
    "img": null,
    "question": "Which of the following describes few-shot prompting?",
    "choices": {
      "A": "Training the model on a small labeled dataset to improve performance",
      "B": "Including a small number of example inputs and outputs in the prompt to guide model behavior",
      "C": "Running the model with reduced memory to improve speed",
      "D": "Filtering model outputs to remove a few categories of harmful content"
    },
    "answer": "B"
  },
  {
    "id": 604,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Deep learning models use multi-layered neural networks to automatically learn feature representations.",
        "answer": "Yes"
      },
      {
        "text": "Deep learning always requires less training data than traditional machine learning algorithms.",
        "answer": "No"
      },
      {
        "text": "Deep learning is commonly used for tasks such as image recognition and natural language processing.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 605,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Knowledge mining uses AI to extract insights from large collections of unstructured data such as documents, PDFs, and images.",
        "answer": "Yes"
      },
      {
        "text": "Azure AI Search is the primary Azure service for knowledge mining workloads.",
        "answer": "Yes"
      },
      {
        "text": "Knowledge mining and conversational AI are the same type of workload.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 606,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "A language model that generates a coherent and relevant paragraph from a single-sentence prompt is demonstrating [BLANK].",
    "options": ["anomaly detection.", "generative AI.", "supervised classification.", "OCR."],
    "answer": "generative AI."
  },
  {
    "id": 607,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "You want to ensure that a GPT model used in your HR application does not generate content unrelated to human resources topics. The best place to define this restriction is in the [BLANK].",
    "options": ["content filter.", "system message.", "grounding data.", "model fine-tuning."],
    "answer": "system message."
  },
  {
    "id": 608,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "When a generative AI model produces an answer based on documents retrieved from your company's knowledge base rather than from its training data, this is called [BLANK].",
    "options": ["fine-tuning.", "hallucination.", "grounding.", "content filtering."],
    "answer": "grounding."
  },
  {
    "id": 609,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each generative AI responsible AI measure to the problem it addresses.",
    "choices_pool": ["Content filtering", "Grounding", "System message", "Transparency note"],
    "targets": [
      {"text": "The model produces answers about events it was not trained on, leading to inaccurate responses.", "answer": "Grounding"},
      {"text": "The model generates violent or sexually explicit content in response to user requests.", "answer": "Content filtering"},
      {"text": "The model goes off-topic and discusses subjects outside the intended application scope.", "answer": "System message"},
      {"text": "Users do not know they are interacting with an AI system rather than a human agent.", "answer": "Transparency note"}
    ]
  },
  {
    "id": 610,
    "type": "multiple_choice",
    "img": null,
    "question": "You have built a generative AI application and want to measure whether its outputs are harmful, biased, or inaccurate before releasing it to users. What should you do?",
    "choices": {
      "A": "Deploy immediately and rely on user feedback to identify problems",
      "B": "Prepare a diverse set of test prompts, submit them to the system, and evaluate outputs against predefined safety and quality criteria",
      "C": "Disable grounding to allow the model to use its full training data",
      "D": "Set content filters to the lowest sensitivity level"
    },
    "answer": "B"
  },
  {
    "id": 611,
    "type": "multiple_choice",
    "img": null,
    "question": "Which of the following is an example of a document processing AI workload?",
    "choices": {
      "A": "A smart speaker that answers spoken questions about the weather",
      "B": "A system that automatically reads and categorizes incoming supplier invoices",
      "C": "A model that detects unusual temperature spikes in server telemetry",
      "D": "A model that groups website visitors by browsing behavior"
    },
    "answer": "B"
  },
  {
    "id": 612,
    "type": "multiple_choice",
    "img": null,
    "question": "Which statement best describes the purpose of Azure AI Foundry in the context of generative AI development?",
    "choices": {
      "A": "It is a platform for training classical regression and classification models",
      "B": "It provides a unified environment for building, evaluating, and deploying generative AI applications using foundation models",
      "C": "It is an anomaly detection service for time series data",
      "D": "It is a document intelligence service for extracting structured fields from forms"
    },
    "answer": "B"
  },
  {
    "id": 613,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two statements about grounding in generative AI are true? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Grounding connects the model to specific verified data sources to improve factual accuracy",
      "B": "Grounding modifies the underlying weights of the language model",
      "C": "Grounding helps the model answer questions about content not included in its training data",
      "D": "Grounding and content filtering serve the same purpose",
      "E": "Grounding requires the model to be retrained from scratch"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 614,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two responsible AI measures should you implement when deploying a generative AI solution for a vulnerable population such as teenagers? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Configure strict content filters to block harmful categories",
      "B": "Remove all usage limits to improve the user experience",
      "C": "Be transparent that the service is AI-powered",
      "D": "Set temperature to maximum for more creative responses",
      "E": "Disable grounding to allow broader topic coverage"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 615,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two Azure capabilities would you use together to build a solution that allows employees to query HR policy documents using natural language and receive accurate answers? Each correct answer presents part of the solution.",
    "choices": {
      "A": "Azure AI Search (to index and retrieve relevant HR documents)",
      "B": "Azure AI Anomaly Detector (to flag unusual HR queries)",
      "C": "Azure OpenAI Service (to generate natural language answers grounded in retrieved documents)",
      "D": "Azure AI Face (to verify employee identity before answering)",
      "E": "Azure AI Vision (to classify HR document images)"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 616,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The Azure AI Foundry model catalog allows you to deploy models from providers other than Microsoft, such as Meta and Mistral.",
        "answer": "Yes"
      },
      {
        "text": "Models in the Azure AI Foundry model catalog must always be fine-tuned before use.",
        "answer": "No"
      },
      {
        "text": "Azure AI Foundry provides prompt flow tools for building and testing generative AI workflows.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 617,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Few-shot prompting involves providing example input-output pairs in the prompt to guide model behavior.",
        "answer": "Yes"
      },
      {
        "text": "Few-shot prompting changes the underlying weights of the language model.",
        "answer": "No"
      },
      {
        "text": "Zero-shot prompting means asking the model to perform a task without providing any examples.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 618,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "The technique of adapting a pre-trained language model by training it further on a smaller domain-specific dataset is called [BLANK].",
    "options": ["prompt engineering.", "grounding.", "fine-tuning.", "retrieval-augmented generation."],
    "answer": "fine-tuning."
  },
  {
    "id": 619,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "A generative AI model that produces text, images, or code in response to a natural language prompt is using [BLANK].",
    "options": ["anomaly detection.", "supervised classification.", "generative AI.", "computer vision."],
    "answer": "generative AI."
  },
  {
    "id": 620,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "In the responsible generative AI framework, the first step before deploying a model is to [BLANK].",
    "options": ["deploy to production and monitor.", "identify and measure potential harms.", "configure the user interface.", "fine-tune the model."],
    "answer": "identify and measure potential harms."
  },
  {
    "id": 621,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each AI concept to its correct definition.",
    "choices_pool": ["Clustering", "Deep learning", "Feature engineering", "Grounding", "Hallucination", "Regression", "Retrieval-augmented generation (RAG)"],
    "targets": [
      {"text": "A machine learning technique that uses multi-layered neural networks to learn directly from raw data.", "answer": "Deep learning"},
      {"text": "A generative AI error where the model produces a confident but factually incorrect response.", "answer": "Hallucination"},
      {"text": "A technique that augments a prompt with relevant documents retrieved from a knowledge base before generation.", "answer": "Retrieval-augmented generation (RAG)"},
      {"text": "The process of creating new input variables from existing data to improve model performance.", "answer": "Feature engineering"}
    ]
  },
  {
    "id": 622,
    "type": "multiple_choice",
    "img": null,
    "question": "A travel company wants to offer an AI assistant that can answer questions about flights, hotels, and visa requirements using only official information from the company's content management system. Which generative AI technique is most appropriate?",
    "choices": {
      "A": "Fine-tuning the model on generic travel websites",
      "B": "Setting a high temperature to improve response variety",
      "C": "Grounding the model with the company's official CMS content",
      "D": "Disabling content filters to allow broader responses"
    },
    "answer": "C"
  },
  {
    "id": 623,
    "type": "multiple_choice",
    "img": null,
    "question": "A new employee joins the AI team. Her manager explains that their deployed GPT model sometimes returns answers about topics completely unrelated to the company's products. The manager says this is handled by reviewing and updating one specific configuration. Which configuration is the manager referring to?",
    "choices": {
      "A": "The content filter settings",
      "B": "The system message",
      "C": "The model's temperature parameter",
      "D": "The grounding data index"
    },
    "answer": "B"
  },
  {
    "id": 624,
    "type": "multiple_choice",
    "img": null,
    "question": "Which of the following is NOT a feature of Azure OpenAI Service?",
    "choices": {
      "A": "Access to GPT-4 and other OpenAI models in a managed Azure environment",
      "B": "Built-in content filters for responsible AI",
      "C": "Support for fine-tuning models on custom data",
      "D": "Hosting relational databases for structured business data"
    },
    "answer": "D"
  },
  {
    "id": 625,
    "type": "multiple_choice",
    "img": null,
    "question": "An AI model is used to triage patient complaints in an emergency room. The system makes decisions about priority without any physician able to review or override the output. Which TWO responsible AI principles are most relevant?",
    "choices": {
      "A": "Accountability — there is no human oversight mechanism",
      "B": "Reliability and safety — the system must work correctly in a safety-critical context",
      "C": "Inclusiveness — the system must support users with disabilities",
      "D": "Privacy and security — patient data must be protected"
    },
    "answer": "A"
  },
  {
    "id": 626,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "A generative AI model can produce original code in a programming language based on a natural language description.",
        "answer": "Yes"
      },
      {
        "text": "Generative AI models can only generate text and cannot produce images or audio.",
        "answer": "No"
      },
      {
        "text": "Microsoft Copilot is built on large language model technology and is an example of generative AI.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 627,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "The system message in an Azure OpenAI deployment is visible to end users when they interact with the chatbot.",
        "answer": "No"
      },
      {
        "text": "The system message can define the persona, tone, and topic boundaries for a deployed AI assistant.",
        "answer": "Yes"
      },
      {
        "text": "Changing the system message requires retraining the underlying language model.",
        "answer": "No"
      }
    ]
  },
  {
    "id": 628,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Azure AI Foundry's [BLANK] feature allows developers to browse, compare, and deploy a wide range of foundation models from Microsoft and third-party providers.",
    "options": ["automated ML", "model catalog", "Designer canvas", "AI Search index"],
    "answer": "model catalog"
  },
  {
    "id": 629,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each generative AI model type to its correct primary use.",
    "choices_pool": ["DALL-E", "Embeddings", "GPT-4", "Whisper"],
    "targets": [
      {"text": "Generate a natural language summary of a business report.", "answer": "GPT-4"},
      {"text": "Convert spoken meeting audio into a written transcript.", "answer": "Whisper"},
      {"text": "Create an original product concept image from a text description.", "answer": "DALL-E"},
      {"text": "Convert text into numerical vectors for semantic search.", "answer": "Embeddings"}
    ]
  },
  {
    "id": 630,
    "type": "multiple_choice",
    "img": null,
    "question": "A fintech startup uses a generative AI model to help customers understand complex financial regulations. The model sometimes gives incorrect legal advice. Which two measures would most directly address this problem?",
    "choices": {
      "A": "Ground the model with verified regulatory documents and use RAG to retrieve relevant passages before answering",
      "B": "Increase the temperature setting to generate more confident responses",
      "C": "Add a disclaimer in the system message that the AI is not a licensed financial advisor",
      "D": "Disable content filters to allow more detailed financial answers"
    },
    "answer": "A"
  },
  {
    "id": 631,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure AI service would a publishing company use to automatically extract author names, publication dates, and ISBNs from thousands of scanned book catalog pages?",
    "choices": {
      "A": "Azure AI Language",
      "B": "Azure AI Document Intelligence",
      "C": "Azure AI Vision (image description)",
      "D": "Azure AI Bot Service"
    },
    "answer": "B"
  },
  {
    "id": 632,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to build an AI system that identifies the dominant emotion (joy, anger, sadness, surprise) expressed in customer service call recordings. Which two Azure AI services would you use?",
    "choices": {
      "A": "Azure AI Speech (to transcribe calls) and Azure AI Language (to detect emotion/sentiment)",
      "B": "Azure AI Vision (to analyze facial expressions) and Azure AI Face (to detect emotions)",
      "C": "Azure AI Document Intelligence and Azure AI Translator",
      "D": "Azure AI Anomaly Detector and Azure Machine Learning"
    },
    "answer": "A"
  },
  {
    "id": 633,
    "type": "multiple_choice",
    "img": null,
    "question": "Which of the following is an example of a natural language processing workload?",
    "choices": {
      "A": "Detecting an unauthorized intruder in a warehouse using CCTV footage",
      "B": "Identifying unusual spikes in server CPU usage",
      "C": "Analyzing customer support chat logs to identify common complaint themes",
      "D": "Generating a product concept illustration from a text brief"
    },
    "answer": "C"
  },
  {
    "id": 634,
    "type": "multiple_choice",
    "img": null,
    "question": "A developer is building a generative AI app and wants to test whether the model outputs anything harmful before launch. According to the responsible generative AI framework, what should the developer do at the 'measure' stage?",
    "choices": {
      "A": "Deploy the model and monitor user reports",
      "B": "Prepare diverse test prompts covering edge cases and evaluate outputs against safety criteria",
      "C": "Configure content filters at maximum sensitivity",
      "D": "Ground the model with external data sources"
    },
    "answer": "B"
  },
  {
    "id": 635,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "Providing three example customer emails with their corresponding labels before asking a GPT model to classify a new email is an example of [BLANK].",
    "options": ["zero-shot prompting.", "fine-tuning.", "few-shot prompting.", "grounding."],
    "answer": "few-shot prompting."
  },
  {
    "id": 636,
    "type": "hotspot_single_select",
    "img": null,
    "prompt": "To complete the sentence, select the appropriate option in the answer area.",
    "sentence": "When deploying an Azure OpenAI model, the [BLANK] parameter controls how random or deterministic the model's outputs are, with higher values producing more varied responses.",
    "options": ["system message", "temperature", "content filter", "grounding index"],
    "answer": "temperature"
  },
  {
    "id": 637,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two statements about Azure AI Document Intelligence are true? Each correct answer presents a complete solution.",
    "choices": {
      "A": "It can extract structured key-value pairs from forms with consistent layouts",
      "B": "It can translate extracted text into multiple languages",
      "C": "It includes prebuilt models for common document types such as receipts and invoices",
      "D": "It can generate new content based on document contents",
      "E": "It can detect faces in document photos"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 638,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two are true about the Azure AI Language service? Each correct answer presents a complete solution.",
    "choices": {
      "A": "It can detect the language a text is written in",
      "B": "It can generate photorealistic images from text descriptions",
      "C": "It can identify the sentiment of a text as positive, negative, or neutral",
      "D": "It can transcribe spoken audio into written text",
      "E": "It can convert written text into spoken audio"
    },
    "answer": ["A", "C"]
  },
  {
    "id": 639,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two approaches can be used to control and restrict the topics a deployed Azure OpenAI model will discuss? Each correct answer presents a complete solution.",
    "choices": {
      "A": "Define topic restrictions in the system message",
      "B": "Configure content filters to block off-topic categories",
      "C": "Increase the model's context window size",
      "D": "Deploy the model to a faster compute tier",
      "E": "Change the model from GPT-4 to Whisper"
    },
    "answer": ["A", "B"]
  },
  {
    "id": 640,
    "type": "multiple_choice_multi_select",
    "img": null,
    "question": "Which two are characteristics of a large language model (LLM)? Each correct answer presents a complete solution.",
    "choices": {
      "A": "LLMs are trained on vast amounts of text data to understand and generate human language",
      "B": "LLMs are based on the Transformer architecture",
      "C": "LLMs can only process structured tabular data",
      "D": "LLMs require labeled training data for every task they perform",
      "E": "LLMs are exclusively used for image generation"
    },
    "answer": ["A", "B"]
  },
  {
    "id": 641,
    "type": "multiple_choice",
    "img": null,
    "question": "You are implementing a responsible generative AI solution. After measuring potential harms, you add content filters. According to the responsible generative AI framework, what is the next step after mitigating harms?",
    "choices": {
      "A": "Deploy to production immediately",
      "B": "Operate and monitor the system continuously after deployment",
      "C": "Disable grounding to improve speed",
      "D": "Retrain the model from scratch"
    },
    "answer": "B"
  },
  {
    "id": 642,
    "type": "multiple_choice",
    "img": null,
    "question": "Which Azure AI service provides built-in support for detecting and blocking harmful AI-generated content across four harm categories: hate, sexual, violence, and self-harm?",
    "choices": {
      "A": "Azure AI Language",
      "B": "Azure Machine Learning",
      "C": "Azure OpenAI Service",
      "D": "Azure AI Document Intelligence"
    },
    "answer": "C"
  },
  {
    "id": 643,
    "type": "multiple_choice",
    "img": null,
    "question": "You need to build an AI solution that identifies vehicles in parking lot images, reads the license plate text, and logs violations automatically. Which two computer vision capabilities are required?",
    "choices": {
      "A": "Object detection (to locate vehicles) and OCR (to read license plate text)",
      "B": "Image classification (to categorize vehicles) and facial recognition (to identify drivers)",
      "C": "Semantic segmentation (to isolate road markings) and sentiment analysis (to assess driver mood)",
      "D": "Anomaly detection (to flag unusual vehicles) and speech synthesis (to announce violations)"
    },
    "answer": "A"
  },
  {
    "id": 644,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Prompt engineering can improve model outputs without changing model weights.",
        "answer": "Yes"
      },
      {
        "text": "Fine-tuning and prompt engineering are equivalent techniques that achieve the same result.",
        "answer": "No"
      },
      {
        "text": "In retrieval-augmented generation, relevant documents are retrieved and added to the prompt before the model generates a response.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 645,
    "type": "hotspot_yes_no",
    "img": null,
    "prompt": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "statements": [
      {
        "text": "Azure AI Foundry can be used to deploy models from the model catalog to production endpoints.",
        "answer": "Yes"
      },
      {
        "text": "Azure AI Foundry requires users to provide their own GPU infrastructure to run models.",
        "answer": "No"
      },
      {
        "text": "Azure AI Foundry includes prompt flow for building multi-step generative AI workflows.",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 646,
    "type": "drag_and_drop",
    "img": null,
    "prompt": "Match each scenario to the responsible generative AI stage it belongs to.",
    "choices_pool": ["Identify", "Measure", "Mitigate", "Operate"],
    "targets": [
      {"text": "Running diverse test prompts through the system and scoring outputs for safety and quality.", "answer": "Measure"},
      {"text": "Configuring content filters and defining system message boundaries.", "answer": "Mitigate"},
      {"text": "Continuously monitoring deployed model outputs and user feedback for emerging harms.", "answer": "Operate"},
      {"text": "Defining which types of harmful content the model could potentially produce.", "answer": "Identify"}
    ]
  }
];

export default questions;