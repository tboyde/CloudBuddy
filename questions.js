// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "You are a project owner and need your co-worker to deploy a new version of your application to App Engine. You want to follow Googles recommended practices. Which IAM roles should you grant your co-worker?",
    answer: "App Engine Deployer",
    options: [
      "Project Editor",
      "App Engine Service Admin",
      "App Engine Deployer",
      "App Engine"
    ]
  },
    {
    numb: 2,
    question: "You have a project using BigQuery. You want to list all BigQuery jobs for that project. You want to set this project as the default for the bq command-line tool. What should you do?",
    answer: "Use 'gcloud config set project' to set the default project.",
    options: [
      "Use 'bq config set project' to set the default project.",
      "Use 'gcloud config set project' to set the default project.",
      "Use 'gcloud generate config-url' to generate a URL to the Google Cloud Platform Console to set the default project.",
      "Use 'bq generate config-url' to generate a URL to the Google Cloud Platform Console to set the default project."
    ]
  },
    {
    numb: 3,
    question: "Your company has reserved a monthly budget for your project. You want to be informed automatically of your project spend so that you can take action when you approach the limit. What should you do?",
    answer: "Create a budget alert for 50%, 90%, and 100% of your total monthly budget.",
    options: [
      "In App Engine Settings, set a daily budget at the rate of 1/30 of your monthly budget.",
      "In the GCP Console, configure billing export to BigQuery. Create a saved view that queries your total spend.",
      "Link a credit card with a monthly limit equal to your budget.",
      "Create a budget alert for 50%, 90%, and 100% of your total monthly budget."
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "You developed a new application for App Engine and are ready to deploy it to production. You need to estimate the costs of running your application on Google Cloud Platform as accurately as possible. What should you do?",
    answer: "Use the pricing calculator for App Engine to get an accurate estimation of the expected charges.",
    options: [
      "Multiply the costs of your application when it was in development by the number of expected users to get an accurate estimation.",
      "Use the pricing calculator for App Engine to get an accurate estimation of the expected charges.",
      "Create a YAML file with the expected usage. Pass this file to the “gcloud app estimate” command to get an accurate estimation.",
      "Create a ticket with Google Cloud Billing Support to get an accurate estimation."
    ]
  },
     {
    numb: 6,
    question: "Your company processes high volumes of IoT data that are time-stamped. The total data volume can be several petabytes. The data needs to be written and changed at a high speed. You want to use the most performant storage option for your data. Which product should you use?",
    answer: "Cloud Bigtable",
    options: [
       "Cloud Bigtable",
       "BigQuery",
       "Cloud Datastore",
       "Cloud Storage"
    ]
 },
  {
  numb: 7,
  question: "Your Question is Your application has a large international audience and runs stateless virtual machines within a managed instance group across multiple locations. One feature of the application lets users upload files and share them with other users. Files must be available for 30 days; after that, they are removed from the system entirely. Which storage solution should you choose?",
  answer: "A multi-regional Cloud Storage bucket.",
  options: [
     "Persistent SSD on virtual machine instances.",
     "A Cloud Datastore database.",
     "A managed instance group of Filestore servers.",
     "A multi-regional Cloud Storage bucket."
  ]
},
  {
    numb: 8,
    question: "Your company has a mission-critical application that serves users globally. You need to select a transactional, relational data storage system for this application. Which product would you consider?",
    answer: "Cloud Spanner",
    options: [
       "BigQuery",
       "Cloud Spanner",
       "Cloud Bigtable",
       "Cloud Datastore"
    ]
},
  {
  numb: 9,
  question: "Which of the following role provide granular access for a specific service and is managed by GCP?",
  answer: "Predefined",
  options: [
     "Admin",
     "Custom",
     "Predefined",
     "Primitive"
  ]
}
];