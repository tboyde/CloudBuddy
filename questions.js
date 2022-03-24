// creating an array and passing the number, questions, options, and answers
let questions = [{
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
        question: "You need to verify the assigned permissions in a custom IAM role. What should you do?",
        answer: "Use the GCP Console, IAM section to view the information",
        options: [
            "Use the GCP Console, IAM section to view the information",
            "Use the 'gcloud init' command to view the information",
            "Use the GCP Console, Security section to view the information",
            "Use the GCP Console, API section to view the information"
        ]

    },
    {
        numb: 3,
        question: "Which of the following services provides real-time messaging?",
        answer: "Cloud Pub/Sub",
        options: [
            "Cloud Pub/Sub",
            "Datastore",
            "Big Query",
            "App Engine"
        ]

    },
    {
        numb: 4,
        question: "Which of the following tasks would Nearline Storage be well suited for?",
        answer: "Infrequently read data backups",
        options: [
            "Frequently read files",
            "A mounted Linux file system",
            "Infrequently read data backups",
            "Image assets for a high traffic website"
        ]

    },
    {
        numb: 5,
        question: "Which of the following products will allow you to perform live debugging without stopping your application?",
        answer: "Code Inspector",
        options: [
            "Stackdriver Debugger",
            "App Engine Active Debugger (AEAD)",
            "Pause IT",
            "Code Inspector"
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
        question: "Regarding Cloud Storage, which option allows any user to access to a Cloud Storage resource for a limited time, using a specific URL?",
        answer: "Signed URLs",
        options: [
            "Signed URLs",
            "Temporary Resources",
            "Signed URLs",
            "Temporary URLs"
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
        question: "Which of the following is not helpful for mitigating the impact of an unexpected failure or reboot?",
        answer: "Configure tags and labels",
        options: [
            "Configure tags and labels",
            "Use startup scripts to re-configure the system as needed",
            "Back up your data",
            "Use persistent disks"
        ]

    }
];