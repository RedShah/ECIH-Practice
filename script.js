const quizData = [
    {
        "question": "Which of the following terms may be defined as 'a measure of possible inability to achieve a goal, objective, or target within a defined security, cost plan and technical limitations that adversely affects the organization’s operation and revenues?'",
        "choices": {
            "A": "Risk",
            "B": "Vulnerability",
            "C": "Threat",
            "D": "Incident Response"
        },
        "answer": "A"
    },
    {
        "question": "A distributed Denial of Service (DDoS) attack is a more common type of DoS Attack, where a single system is targeted by a large number of infected machines over the Internet. In a DDoS attack, attackers first infect multiple systems which are known as:",
        "choices": {
            "A": "Trojans",
            "B": "Zombies",
            "C": "Spyware",
            "D": "Worms"
        },
        "answer": "B"
    },
    {
        "question": "The goal of incident response is to handle the incident in a way that minimizes damage and reduces recovery time and cost. Which of the following does NOT constitute a goal of incident response?",
        "choices": {
            "A": "Dealing with human resources department and various employee conflict behaviors.",
            "B": "Using information gathered during incident handling to prepare for handling future incidents in a better way and to provide stronger protection for systems and data.",
            "C": "Helping personal to recover quickly and efficiently from security incidents, minimizing loss or theft and disruption of services.",
            "D": "Dealing properly with legal issues that may arise during incidents."
        },
        "answer": "A"
    },
    {
        "question": "An organization faced an information security incident where a disgruntled employee passed sensitive access control information to a competitor. The organization’s incident response manager, upon investigation, found that the incident must be handled within a few hours on the same day to maintain business continuity and market competitiveness. How would you categorize such information security incident?",
        "choices": {
            "A": "High level incident",
            "B": "Middle level incident",
            "C": "Ultra-High level incident",
            "D": "Low level incident"
        },
        "answer": "A"
    },
    {
        "question": "Business continuity is defined as the ability of an organization to continue to function even after a disastrous event, accomplished through the deployment of redundant hardware and software, the use of fault tolerant systems, as well as a solid backup and recovery strategy. Identify the plan which is mandatory part of a business continuity plan?",
        "choices": {
            "A": "Forensics Procedure Plan",
            "B": "Business Recovery Plan",
            "C": "Sales and Marketing plan",
            "D": "New business strategy plan"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following is an appropriate flow of the incident recovery steps?",
        "choices": {
            "A": "System Operation-System Restoration-System Validation-System Monitoring",
            "B": "System Validation-System Operation-System Restoration-System Monitoring",
            "C": "System Restoration-System Monitoring-System Validation-System Operations",
            "D": "System Restoration-System Validation-System Operations-System Monitoring"
        },
        "answer": "D"
    },
    {
        "question": "A computer Risk Policy is a set of ideas to be implemented to overcome the risk associated with computer security incidents. Identify the procedure that is NOT part of the computer risk policy?",
        "choices": {
            "A": "Procedure to identify security funds to hedge risk",
            "B": "Procedure to monitor the efficiency of security controls",
            "C": "Procedure for the ongoing training of employees authorized to access the system",
            "D": "Provisions for continuing support if there is an interruption in the system or if the system crashes"
        },
        "answer": "C"
    },
    {
        "question": "Identify the network security incident where intended authorized users are prevented from using system, network, or applications by flooding the network with high volume of traffic that consumes all existing network resources.",
        "choices": {
            "A": "URL Manipulation",
            "B": "XSS Attack",
            "C": "SQL Injection",
            "D": "Denial of Service Attack"
        },
        "answer": "D"
    },
    {
        "question": "Incident handling and response steps help you to detect, identify, respond and manage an incident. Which of the following steps focus on limiting the scope and extent of an incident?",
        "choices": {
            "A": "Eradication",
            "B": "Containment",
            "C": "Identification",
            "D": "Data collection"
        },
        "answer": "B"
    },
    {
        "question": "Identify the malicious program that is masked as a genuine harmless program and gives the attacker unrestricted access to the user’s information and system. These programs may unleash dangerous programs that may erase the unsuspecting user’s disk and send the victim’s credit card numbers and passwords to a stranger.",
        "choices": {
            "A": "Cookie tracker",
            "B": "Worm",
            "C": "Trojan",
            "D": "Virus"
        },
        "answer": "C"
    },
    {
        "question": "Quantitative risk is the numerical determination of the probability of an adverse event and the extent of the losses due to the event. Quantitative risk is calculated as:",
        "choices": {
            "A": "(Probability of Loss) X (Loss)",
            "B": "(Loss) / (Probability of Loss)",
            "C": "(Probability of Loss) / (Loss)",
            "D": "Significant Risks X Probability of Loss X Loss"
        },
        "answer": "A"
    },
    {
        "question": "An incident recovery plan is a statement of actions that should be taken before, during or after an incident. Identify which of the following is NOT an objective of the incident recovery plan?",
        "choices": {
            "A": "Creating new business processes to maintain profitability after incident",
            "B": "Providing a standard for testing the recovery plan",
            "C": "Avoiding the legal liabilities arising due to incident",
            "D": "Providing assurance that systems are reliable"
        },
        "answer": "A"
    },
    {
        "question": "Risk is defined as the probability of the occurrence of an incident. Risk formulation generally begins with the likeliness of an event’s occurrence, the harm it may cause and is usually denoted as Risk = ∑(events)X(Probability of occurrence) X?",
        "choices": {
            "A": "Magnitude",
            "B": "Probability",
            "C": "Consequences",
            "D": "Significance"
        },
        "answer": "A"
    },
    {
        "question": "An audit trail policy collects all audit trails such as series of records of computer events, about an operating system, application or user activities. Which of the following statements is NOT true for an audit trail policy:",
        "choices": {
            "A": "It helps calculating intangible losses to the organization due to incident",
            "B": "It helps tracking individual actions and allows users to be personally accountable for their actions",
            "C": "It helps in compliance to various regulatory laws, rules, and guidelines",
            "D": "It helps in reconstructing the events after a problem has occurred"
        },
        "answer": "A"
    },
    {
        "question": "Computer forensics is a methodical series of techniques and procedures for gathering evidence from computing equipment, various storage devices and/or digital media that can be presented in a court of law in a coherent and meaningful format. Which one of the following is an appropriate flow of steps in the computer forensics process:",
        "choices": {
            "A": "Examination > Analysis > Preparation > Collection > Reporting",
            "B": "Preparation > Analysis > Collection > Examination > Reporting",
            "C": "Analysis > Preparation > Collection > Reporting > Examination",
            "D": "Preparation > Collection > Examination > Analysis > Reporting"
        },
        "answer": "D"
    },
    {
        "question": "Multiple component incidents consist of a combination of two or more attacks in a system. Which of the following is not a multiple component incident?",
        "choices": {
            "A": "An insider intentionally deleting files from a workstation",
            "B": "An attacker redirecting user to a malicious website and infects his system with Trojan",
            "C": "An attacker infecting a machine to launch a DDoS attack",
            "D": "An attacker using email with malicious code to infect internal workstation"
        },
        "answer": "A"
    },
    {
        "question": "Computer Forensics is the branch of forensic science in which legal evidence is found in any computer or any digital media device. Of the following, who is responsible for examining the evidence acquired and separating the useful evidence?",
        "choices": {
            "A": "Expert Witness",
            "B": "Incident Analyzer",
            "C": "Incident Responder",
            "D": "Evidence Documenter"
        },
        "answer": "A"
    },
    {
        "question": "The network perimeter should be configured in such a way that it denies all incoming and outgoing traffic/services that are not required. Which service listed below, if blocked, can help in preventing Denial of Service attack?",
        "choices": {
            "A": "SAM service",
            "B": "POP3 service",
            "C": "SMTP service",
            "D": "Echo service"
        },
        "answer": "D"
    },
    {
        "question": "A US Federal agency network was the target of a DoS attack that prevented and impaired the normal authorized functionality of the networks. According to agency’s reporting timeframe guidelines, this incident should be reported within two (2) HOURS of discovery/detection if the successful attack is still ongoing and the agency is unable to successfully mitigate the activity. Which incident category of the US Federal Agency does this incident belong to?",
        "choices": {
            "A": "CAT 5",
            "B": "CAT 1",
            "C": "CAT 2",
            "D": "CAT 6"
        },
        "answer": "C"
    },
    {
        "question": "US-CERT and Federal civilian agencies use the reporting timeframe criteria in the federal agency reporting categorization. What is the timeframe required to report an incident under the CAT 4 Federal Agency category?",
        "choices": {
            "A": "Weekly",
            "B": "Within four (4) hours of discovery/detection if the successful attack is still ongoing and agency is unable to successfully mitigate activity",
            "C": "Within two (2) hours of discovery/detection",
            "D": "Monthly"
        },
        "answer": "A"
    },
    {
        "question": "Identify a standard national process which establishes a set of activities, general tasks and a management structure to certify and accredit systems that will maintain the information assurance (IA) and security posture of a system or site.",
        "choices": {
            "A": "NIASAP",
            "B": "NIAAAP",
            "C": "NIPACP",
            "D": "NIACAP"
        },
        "answer": "D"
    },
    {
        "question": "Policies are designed to protect the organizational resources on the network by establishing the set rules and procedures. Which of the following policies authorizes a group of users to perform a set of actions on a set of resources?",
        "choices": {
            "A": "Access control policy",
            "B": "Audit trail policy",
            "C": "Logging policy",
            "D": "Documentation policy"
        },
        "answer": "A"
    },
    {
        "question": "When an employee is terminated from his or her job, what should be the next immediate step taken by an organization?",
        "choices": {
            "A": "All access rights of the employee to physical locations, networks, systems, applications and data should be disabled",
            "B": "The organization should enforce separation of duties",
            "C": "The access requests granted to an employee should be documented and vetted by the supervisor",
            "D": "The organization should monitor the activities of the system administrators and privileged users who have permissions to access the sensitive information"
        },
        "answer": "A"
    },
    {
        "question": "In the Control Analysis stage of the NIST’s risk assessment methodology, technical and none technical control methods are classified into two categories. What are these two control categories?",
        "choices": {
            "A": "Preventive and Detective controls",
            "B": "Detective and Disguised controls",
            "C": "Predictive and Detective controls",
            "D": "Preventive and predictive controls"
        },
        "answer": "A"
    },
    {
        "question": "Which of the following incident recovery testing methods works by creating a mock disaster, like fire to identify the reaction of the procedures that are implemented to handle such situations?",
        "choices": {
            "A": "Scenario testing",
            "B": "Facility testing",
            "C": "Live walk-through testing",
            "D": "Procedure testing"
        },
        "answer": "D"
    },
    {
        "question": "An incident is analyzed for its nature, intensity and its effects on the network and systems. Which stage of the incident response and handling process involves auditing the system and network log files?",
        "choices": {
            "A": "Incident recording",
            "B": "Reporting",
            "C": "Containment",
            "D": "Identification"
        },
        "answer": "D"
    },
    {
        "question": "Which among the following CERTs is an Internet provider to higher education institutions and various other research institutions in the Netherlands and deals with all cases related to computer security incidents in which a customer is involved either as a victim or as a suspect?",
        "choices": {
            "A": "NET-CERT",
            "B": "DFN-CERT",
            "C": "Funet CERT",
            "D": "SURFnet-CERT"
        },
        "answer": "D"
    },
    {
        "question": "One of the main objectives of incident management is to prevent incidents and attacks by tightening the physical security of the system or infrastructure. According to CERT’s incident management process, which stage focuses on implementing infrastructure improvements resulting from postmortem reviews or other process improvement mechanisms?",
        "choices": {
            "A": "Protection",
            "B": "Preparation",
            "C": "Detection",
            "D": "Triage"
        },
        "answer": "A"
    },
    {
        "question": "Risk management consists of three processes, risk assessment, mitigation and evaluation. Risk assessment determines the extent of the potential threat and the risk associated with an IT system through its SDLC. How many primary steps does NIST’s risk assessment methodology involve?",
        "choices": {
            "A": "Twelve",
            "B": "Four",
            "C": "Six",
            "D": "Nine"
        },
        "answer": "D"
    },
    {
        "question": "Insider threats can be detected by observing concerning behaviors exhibited by insiders, such as conflicts with supervisors and coworkers, decline in performance, tardiness or unexplained absenteeism. Select the technique that helps in detecting insider threats:",
        "choices": {
            "A": "Correlating known patterns of suspicious and malicious behavior",
            "B": "Protecting computer systems by implementing proper controls",
            "C": "Making it compulsory for employees to sign a non-disclosure agreement",
            "D": "Categorizing information according to its sensitivity and access rights"
        },
        "answer": "A"
    },
    {
        "question": "Contingency planning enables organizations to develop and maintain effective methods to handle emergencies. Every organization will have its own specific requirements that the planning should address. There are five major components of the IT contingency plan, namely supporting information, notification activation, recovery and reconstitution and plan appendices. What is the main purpose of the reconstitution plan?",
        "choices": {
            "A": "To restore the original site, test systems to prevent the incident and terminate operations",
            "B": "To define the notification procedures, damage assessments and offer the plan activation",
            "C": "To provide the introduction and detailed concept of the contingency plan",
            "D": "To provide a sequence of recovery activities with the help of recovery procedures"
        },
        "answer": "A"
    },
    {
        "question": "The insider risk matrix consists of technical literacy and business process knowledge vectors. Considering the matrix, one can conclude that:",
        "choices": {
            "A": "If the insider’s technical literacy is low and process knowledge is high, the risk posed by the threat will be insignificant.",
            "B": "If the insider’s technical literacy and process knowledge are high, the risk posed by the threat will be insignificant.",
            "C": "If the insider’s technical literacy is high and process knowledge is low, the risk posed by the threat will be high.",
            "D": "If the insider’s technical literacy and process knowledge are high, the risk posed by the threat will be high."
        },
        "answer": "D"
    },
    {
        "question": "Which policy recommends controls for securing and tracking organizational resources:",
        "choices": {
            "A": "Access control policy",
            "B": "Administrative security policy",
            "C": "Acceptable use policy",
            "D": "Asset control policy"
        },
        "answer": "D"
    },
    {
        "question": "Which one of the following is the correct sequence of flow of the stages in an incident response:",
        "choices": {
            "A": "Containment - Identification - Preparation - Recovery - Follow-up - Eradication",
            "B": "Preparation - Identification - Containment - Eradication - Recovery - Follow-up",
            "C": "Eradication - Containment - Identification - Preparation - Recovery - Follow-up",
            "D": "Identification - Preparation - Containment - Recovery - Follow-up - Eradication"
        },
        "answer": "B"
    },
    {
        "question": "Organizations or incident response teams need to protect the evidence for any future legal actions that may be taken against perpetrators that intentionally attacked the computer system. EVIDENCE PROTECTION is also required to meet legal compliance issues. Which of the following documents helps in protecting evidence from physical or logical damage:",
        "choices": {
            "A": "Network and host log records",
            "B": "Chain-of-Custody",
            "C": "Forensic analysis report",
            "D": "Chain-of-Precedence"
        },
        "answer": "B"
    },
    {
        "question": "The data on the affected system must be backed up so that it can be retrieved if it is damaged during incident response. The system backup can also be used for further investigations of the incident. Identify the stage of the incident response and handling process in which complete backup of the infected system is carried out?",
        "choices": {
            "A": "Containment",
            "B": "Eradication",
            "C": "Incident recording",
            "D": "Incident investigation"
        },
        "answer": "A"
    },
    {
        "question": "In a qualitative risk analysis, risk is calculated in terms of:",
        "choices": {
            "A": "(Attack Success + Criticality ) –(Countermeasures)",
            "B": "Asset criticality assessment – (Risks and Associated Risk Levels)",
            "C": "Probability of Loss X Loss",
            "D": "(Countermeasures + Magnitude of Impact) – (Reports from prior risk assessments)"
        },
        "answer": "C"
    },
    {
        "question": "A computer virus hoax is a message warning the recipient of non-existent computer virus. The message is usually a chain e-mail that tells the recipient to forward it to everyone they know. Which of the following is NOT a symptom of a virus hoax message?",
        "choices": {
            "A": "The message prompts the end user to forward it to his / her e-mail contact list and gain monetary benefits in doing so",
            "B": "The message from a known email id is caught by SPAM filters due to change of filter settings",
            "C": "The message warns to delete certain files if the user does not take appropriate action",
            "D": "The message prompts the user to install Anti-Virus"
        },
        "answer": "A"
    },
    {
        "question": "In which of the steps of NIST’s risk assessment methodology are the boundary of the IT system, along with the resources and the information that constitute the system identified?",
        "choices": {
            "A": "Likelihood Determination",
            "B": "Control recommendation",
            "C": "System characterization",
            "D": "Control analysis"
        },
        "answer": "C"
    },
    {
        "question": "ADAM, an employee from a multinational company, uses his company’s accounts to send e-mails to a third party with their spoofed mail address. How can you categorize this type of account?",
        "choices": {
            "A": "Inappropriate usage incident",
            "B": "Unauthorized access incident",
            "C": "Network intrusion incident",
            "D": "Denial of Service incident"
        },
        "answer": "A"
    },
    {
        "question": "A security policy will take the form of a document or a collection of documents, depending on the situation or usage. It can become a point of reference in case a violation occurs that results in dismissal or other penalty. Which of the following is NOT true for a good security policy?",
        "choices": {
            "A": "It must be enforceable with security tools where appropriate and with sanctions where actual prevention is not technically feasible",
            "B": "It must be approved by all employees including employees’ representatives",
            "C": "It must be implemented through system administration procedures, publishing of acceptable use guides, awareness programs or other similar steps",
            "D": "It must clearly define the responsibilities of users and administrators"
        },
        "answer": "B"
    },
    {
        "question": "Performing Vulnerability Assessment is an example of a:",
        "choices": {
            "A": "Incident Response",
            "B": "Incident Handling",
            "C": "Pre-Incident Preparation",
            "D": "Post Incident Management"
        },
        "answer": "C"
    },
    {
        "question": "The correct sequence of Incident Response and Handling is:",
        "choices": {
            "A": "Incident Identification, recording, initial response, communication and containment",
            "B": "Incident Identification, initial response, communication, recording and containment",
            "C": "Incident Identification, communication, recording, initial response and containment",
            "D": "Incident Identification, recording, initial response, containment and communication"
        },
        "answer": "A"
    },
    {
        "question": "Preventing the incident from spreading and limiting the scope of the incident is known as:",
        "choices": {
            "A": "Incident Eradication",
            "B": "Incident Protection",
            "C": "Incident Containment",
            "D": "Incident Classification"
        },
        "answer": "C"
    },
    {
        "question": "What is the best staffing model for an incident response team if current employees’ expertise is very low?",
        "choices": {
            "A": "Fully outsourced",
            "B": "Partially outsourced",
            "C": "Fully insourced",
            "D": "All the above"
        },
        "answer": "A"
    },
    {
        "question": "The correct sequence of incident management process is:",
        "choices": {
            "A": "Prepare, protect, triage, detect and respond",
            "B": "Prepare, protect, detect, triage and respond",
            "C": "Prepare, detect, protect, triage and respond",
            "D": "Prepare, protect, detect, respond and triage"
        },
        "answer": "B"
    },
    {
        "question": "Incident response team must adhere to the following:",
        "choices": {
            "A": "Stay calm and document everything",
            "B": "Assess the situation",
            "C": "Notify appropriate personnel",
            "D": "All the above"
        },
        "answer": "D"
    },
    {
        "question": "Which of the following is an incident tracking, reporting and handling tool:",
        "choices": {
            "A": "CRAMM",
            "B": "RTIR",
            "C": "NETSTAT",
            "D": "EAR/ Pilar"
        },
        "answer": "B"
    },
    {
        "question": "Removing or eliminating the root cause of the incident is called:",
        "choices": {
            "A": "Incident Eradication",
            "B": "Incident Protection",
            "C": "Incident Containment",
            "D": "Incident Classification"
        },
        "answer": "A"
    },
    {
        "question": "Which of the following is a correct statement about incident management, handling and response:",
        "choices": {
            "A": "Incident response is one of the functions provided by incident handling",
            "B": "Incident handling is one of the functions provided by incident response",
            "C": "Triage is one of the services provided by incident response",
            "D": "Incident response is one of the services provided by triage"
        },
        "answer": "A"
    },
    {
        "question": "Which of the following can be considered synonymous:",
        "choices": {
            "A": "Hazard and Threat",
            "B": "Threat and Threat Agent",
            "C": "Precaution and countermeasure",
            "D": "Vulnerability and Danger"
        },
        "answer": "A"
    },
    {
        "question": "If the loss anticipated is greater than the agreed upon threshold; the organization will:",
        "choices": {
            "A": "Accept the risk",
            "B": "Mitigate the risk",
            "C": "Accept the risk but after management approval",
            "D": "Do nothing"
        },
        "answer": "B"
    },
    {
        "question": "A payroll system has a vulnerability that cannot be exploited by current technology. Which of the following is correct about this scenario:",
        "choices": {
            "A": "The risk must be urgently mitigated",
            "B": "The risk must be transferred immediately",
            "C": "The risk is not present at this time",
            "D": "The risk is accepted"
        },
        "answer": "C"
    },
    {
        "question": "Overall Likelihood rating of a Threat to Exploit a Vulnerability is driven by:",
        "choices": {
            "A": "Threat-source motivation and capability",
            "B": "Nature of the vulnerability",
            "C": "Existence and effectiveness of the current controls",
            "D": "All the above"
        },
        "answer": "D"
    },
    {
        "question": "Absorbing minor risks while preparing to respond to major ones is called:",
        "choices": {
            "A": "Risk Mitigation",
            "B": "Risk Transfer",
            "C": "Risk Assumption",
            "D": "Risk Avoidance"
        },
        "answer": "C"
    },
    {
        "question": "The left over risk after implementing a control is called:",
        "choices": {
            "A": "Residual risk",
            "B": "Unaccepted risk",
            "C": "Low risk",
            "D": "Critical risk"
        },
        "answer": "A"
    },
    {
        "question": "Adam calculated the total cost of a control to protect 10,000 $ worth of data as 20,000 $. What do you advise Adam to do?",
        "choices": {
            "A": "Apply the control",
            "B": "Not to apply the control",
            "C": "Use qualitative risk assessment",
            "D": "Use semi-qualitative risk assessment instead"
        },
        "answer": "B"
    },
    {
        "question": "What is correct about Quantitative Risk Analysis:",
        "choices": {
            "A": "It is Subjective but faster than Qualitative Risk Analysis",
            "B": "Easily automated",
            "C": "Better than Qualitative Risk Analysis",
            "D": "Uses levels and descriptive expressions"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following is a risk assessment tool:",
        "choices": {
            "A": "Nessus",
            "B": "Wireshark",
            "C": "CRAMM",
            "D": "Nmap"
        },
        "answer": "C"
    },
    {
        "question": "In NIST risk assessment/ methodology; the process of identifying the boundaries of an IT system along with the resources and information that constitute the system is known as:",
        "choices": {
            "A": "Asset Identification",
            "B": "System characterization",
            "C": "Asset valuation",
            "D": "System classification"
        },
        "answer": "B"
    },
    {
        "question": "Performing Vulnerability Assessment is an example of a:",
        "choices": {
            "A": "Incident Response",
            "B": "Incident Handling",
            "C": "Pre-Incident Preparation",
            "D": "Post Incident Management"
        },
        "answer": "C"
    },
    {
        "question": "The correct sequence of Incident Response and Handling is:",
        "choices": {
            "A": "Incident Identification, recording, initial response, communication and containment",
            "B": "Incident Identification, initial response, communication, recording and containment",
            "C": "Incident Identification, communication, recording, initial response and containment",
            "D": "Incident Identification, recording, initial response, containment and communication"
        },
        "answer": "A"
    },
    {
        "question": "Preventing the incident from spreading and limiting the scope of the incident is known as:",
        "choices": {
            "A": "Incident Eradication",
            "B": "Incident Protection",
            "C": "Incident Containment",
            "D": "Incident Classification"
        },
        "answer": "C"
    },
    {
        "question": "What is the best staffing model for an incident response team if current employees’ expertise is very low?",
        "choices": {
            "A": "Fully outsourced",
            "B": "Partially outsourced",
            "C": "Fully insourced",
            "D": "All the above"
        },
        "answer": "A"
    },
    {
        "question": "The correct sequence of incident management process is:",
        "choices": {
            "A": "Prepare, protect, triage, detect and respond",
            "B": "Prepare, protect, detect, triage and respond",
            "C": "Prepare, detect, protect, triage and respond",
            "D": "Prepare, protect, detect, respond and triage"
        },
        "answer": "B"
    },
    {
        "question": "Incident response team must adhere to the following:",
        "choices": {
            "A": "Stay calm and document everything",
            "B": "Assess the situation",
            "C": "Notify appropriate personnel",
            "D": "All the above"
        },
        "answer": "D"
    },
    {
        "question": "Which of the following is an incident tracking, reporting and handling tool:",
        "choices": {
            "A": "CRAMM",
            "B": "RTIR",
            "C": "NETSTAT",
            "D": "EAR/ Pilar"
        },
        "answer": "B"
    },
    {
        "question": "Removing or eliminating the root cause of the incident is called:",
        "choices": {
            "A": "Incident Eradication",
            "B": "Incident Protection",
            "C": "Incident Containment",
            "D": "Incident Classification"
        },
        "answer": "A"
    },
    {
        "question": "Which of the following is a correct statement about incident management, handling and response:",
        "choices": {
            "A": "Incident response is one of the functions provided by incident handling",
            "B": "Incident handling is one of the functions provided by incident response",
            "C": "Triage is one of the services provided by incident response",
            "D": "Incident response is one of the services provided by triage"
        },
        "answer": "A"
    },
    {
        "question": "Incident Response Plan requires",
        "choices": {
            "A": "Financial and Management support",
            "B": "Expert team composition",
            "C": "Resources",
            "D": "All the above"
        },
        "answer": "D"
    },
    {
        "question": "The service organization that provides 24x7 computer security incident response services to any user, company, government agency, or organization is known as:",
        "choices": {
            "A": "Computer Security Incident Response Team CSIRT",
            "B": "Security Operations Center SOC",
            "C": "Digital Forensics Examiner",
            "D": "Vulnerability Assessor"
        },
        "answer": "A"
    },
    {
        "question": "The main feature offered by PGP Desktop Email is:",
        "choices": {
            "A": "Email service during incidents",
            "B": "End-to-end email communications",
            "C": "End-to-end secure email service",
            "D": "None of the above"
        },
        "answer": "C"
    },
    {
        "question": "Which of the following service(s) is provided by the CSIRT:",
        "choices": {
            "A": "Vulnerability handling",
            "B": "Technology watch",
            "C": "Development of security tools",
            "D": "All the above"
        },
        "answer": "D"
    },
    {
        "question": "The role that applies appropriate technology and tries to eradicate and recover from the incident is known as:",
        "choices": {
            "A": "Incident Manager",
            "B": "Incident Analyst",
            "C": "Incident Handler",
            "D": "Incident Coordinator"
        },
        "answer": "B"
    },
    {
        "question": "CERT members can provide critical support services to first responders such as:",
        "choices": {
            "A": "Immediate assistance to victims",
            "B": "Consolidated automated service process management platform",
            "C": "Organizing spontaneous volunteers at a disaster site",
            "D": "A + C"
        },
        "answer": "D"
    },
    {
        "question": "The region where the CSIRT is bound to serve and what does it and give service to is known as:",
        "choices": {
            "A": "Consistency",
            "B": "Confidentiality",
            "C": "Constituency",
            "D": "None of the above"
        },
        "answer": "C"
    },
    {
        "question": "The program that helps to train people to be better prepared to respond to emergency situations in their communities is known as:",
        "choices": {
            "A": "Community Emergency Response Team (CERT)",
            "B": "Incident Response Team (IRT)",
            "C": "Security Incident Response Team (SIRT)",
            "D": "All the above"
        },
        "answer": "A"
    },
    {
        "question": "CSIRT can be implemented at:",
        "choices": {
            "A": "Internal enterprise level",
            "B": "National, government and military level",
            "C": "Vendor level",
            "D": "All the above"
        },
        "answer": "D"
    },
    {
        "question": "The typical correct sequence of activities used by CSIRT when handling a case is:",
        "choices": {
            "A": "Log, inform, maintain contacts, release information, follow up and reporting",
            "B": "Log, inform, release information, maintain contacts, follow up and reporting",
            "C": "Log, maintain contacts, inform, release information, follow up and reporting",
            "D": "Log, maintain contacts, release information, inform, follow up and reporting"
        },
        "answer": "A"
    },
    {
        "question": "Common name(s) for CSIRT is(are):",
        "choices": {
            "A": "Incident Handling Team (IHT)",
            "B": "Incident Response Team (IRT)",
            "C": "Security Incident Response Team (SIRT)",
            "D": "All the above"
        },
        "answer": "D"
    },
    {
        "question": "An active vulnerability scanner featuring high speed discovery, configuration auditing, asset profiling, sensitive data discovery, and vulnerability analysis is called:",
        "choices": {
            "A": "Nessus",
            "B": "CyberCop",
            "C": "EtherApe",
            "D": "nmap"
        },
        "answer": "A"
    },
    {
        "question": "The free, open source, TCP/IP protocol analyzer, sniffer and packet capturing utility standard across many industries and educational institutions is known as:",
        "choices": {
            "A": "Snort",
            "B": "Wireshark",
            "C": "Cain & Able",
            "D": "nmap"
        },
        "answer": "B"
    },
    {
        "question": "Installing a password cracking tool, downloading pornography material, sending emails to colleagues which irritates them and hosting unauthorized websites on the company’s computer are considered:",
        "choices": {
            "A": "Network based attacks",
            "B": "Unauthorized access attacks",
            "C": "Malware attacks",
            "D": "Inappropriate usage incidents"
        },
        "answer": "D"
    },
    {
        "question": "Changing the web server contents, accessing the workstation using a false ID and copying sensitive data without authorization are examples of:",
        "choices": {
            "A": "DDoS attacks",
            "B": "Unauthorized access attacks",
            "C": "Malware attacks",
            "D": "Social Engineering attacks"
        },
        "answer": "B"
    },
    {
        "question": "To respond to DDoS attacks; one of the following strategies can be used:",
        "choices": {
            "A": "Using additional capacity to absorb attack",
            "B": "Identifying none critical services and stopping them",
            "C": "Shut down some services until the attack has subsided",
            "D": "All the above"
        },
        "answer": "D"
    },
    {
        "question": "The very well-known free open source port, OS and service scanner and network discovery utility is called:",
        "choices": {
            "A": "Wireshark",
            "B": "Nmap (Network Mapper)",
            "C": "Snort",
            "D": "SAINT"
        },
        "answer": "B"
    },
    {
        "question": "In a DDoS attack, attackers first infect multiple systems, which are then used to attack a particular target directly. Those systems are called:",
        "choices": {
            "A": "Honey Pots",
            "B": "Relays",
            "C": "Zombies",
            "D": "Handlers"
        },
        "answer": "C"
    },
    {
        "question": "The type of attack that prevents the authorized users to access networks, systems, or applications by exhausting the network resources and sending illegal requests to an application is known as:",
        "choices": {
            "A": "Session Hijacking attack",
            "B": "Denial of Service attack",
            "C": "Man in the Middle attack",
            "D": "SQL injection attack"
        },
        "answer": "B"
    },
    {
        "question": "A malware code that infects computer files, corrupts or deletes the data in them and requires a host file to propagate is called:",
        "choices": {
            "A": "Trojan",
            "B": "Worm",
            "C": "Virus",
            "D": "RootKit"
        },
        "answer": "C"
    },
    {
        "question": "___________________ record(s) user’s typing.",
        "choices": {
            "A": "Spyware",
            "B": "adware",
            "C": "Virus",
            "D": "Malware"
        },
        "answer": "A"
    },
    {
        "question": "Which of the following is a characteristic of adware?",
        "choices": {
            "A": "Gathering information",
            "B": "Displaying popups",
            "C": "Intimidating users",
            "D": "Replicating"
        },
        "answer": "B"
    },
    {
        "question": "________________ attach(es) to files",
        "choices": {
            "A": "adware",
            "B": "Spyware",
            "C": "Viruses",
            "D": "Worms"
        },
        "answer": "C"
    },
    {
        "question": "A self-replicating malicious code that does not alter files but resides in active memory and duplicates itself, spreads through the infected network automatically and takes advantage of file or information transport features on the system to travel independently is called:",
        "choices": {
            "A": "Trojan",
            "B": "Worm",
            "C": "Virus",
            "D": "RootKit"
        },
        "answer": "B"
    },
    {
        "question": "A malicious security-breaking code that is disguised as any useful program that installs an executable program when a file is opened and allows others to control the victim’s system is called:",
        "choices": {
            "A": "Trojan",
            "B": "Worm",
            "C": "Virus",
            "D": "RootKit"
        },
        "answer": "A"
    },
    {
        "question": "The message that is received and requires an urgent action and it prompts the recipient to delete certain files or forward it to others is called:",
        "choices": {
            "A": "An Adware",
            "B": "Mail bomb",
            "C": "A Virus Hoax",
            "D": "Spear Phishing"
        },
        "answer": "C"
    },
    {
        "question": "The free utility which quickly scans Systems running Windows OS to find settings that may have been changed by spyware, malware, or other unwanted programs is called:",
        "choices": {
            "A": "Tripwire",
            "B": "HijackThis",
            "C": "Stinger",
            "D": "F-Secure Anti-virus"
        },
        "answer": "B"
    },
    {
        "question": "The Malicious code that is installed on the computer without user’s knowledge to acquire information from the user’s machine and send it to the attacker who can access it remotely is called:",
        "choices": {
            "A": "Spyware",
            "B": "Logic Bomb",
            "C": "Trojan",
            "D": "Worm"
        },
        "answer": "A"
    },
        {
        "question": "A Host is infected by worms that propagate through a vulnerable service; the sign(s) of the presence of the worm include:",
        "choices": {
            "A": "Decrease in network usage",
            "B": "Established connection attempts targeted at the vulnerable services",
            "C": "System becomes unstable or crashes",
            "D": "All the above"
        },
        "answer": "C"
    },
    {
        "question": "The main difference between viruses and worms is:",
        "choices": {
            "A": "Worms require a host file to propagate while viruses don’t",
            "B": "Viruses require a host file to propagate while Worms don’t",
            "C": "Viruses don’t require user interaction; they are self-replicating malware",
            "D": "Viruses and worms are common names for the same malware"
        },
        "answer": "B"
    },
    {
        "question": "The sign(s) of the presence of malicious code on a host infected by a virus which is delivered via e-mail could be:",
        "choices": {
            "A": "Antivirus software detects the infected files",
            "B": "Increase in the number of e-mails sent and received",
            "C": "System files become inaccessible",
            "D": "All the above"
        },
        "answer": "D"
    }
        ];

let currentQuestionIndex = 0;
let userAnswers = [];
let reviewing = false;

const startContainer = document.getElementById('start-container');
const quizContainer = document.getElementById('quiz-container');
const quizElement = document.getElementById('quiz');
const resultsContainer = document.getElementById('results-container');
const resultGif = document.getElementById('result-gif');
const resultsText = document.getElementById('results');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const startButton = document.getElementById('start-button');
const retryButton = document.getElementById('retry-button');
const reviewButton = document.getElementById('review-button');
const endReviewButton = document.getElementById('end-review-button');
const optionButtons = {
    A: document.getElementById('option-a'),
    B: document.getElementById('option-b'),
    C: document.getElementById('option-c'),
    D: document.getElementById('option-d')
};

const reviewNav = document.createElement('div');
reviewNav.id = 'review-nav';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function buildQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const choices = [];

    for (let letter in currentQuestion.choices) {
        choices.push(
            `<label>
                <span>${letter}: ${currentQuestion.choices[letter]}</span>
            </label>`
        );
    }

    quizElement.innerHTML = `
        <div class="question-number">Question ${currentQuestionIndex + 1}</div>
        <div class="question">${currentQuestion.question}</div>
        <div class="choices">${choices.join('')}</div>
    `;

    if (currentQuestionIndex === quizData.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
    } else {
        nextButton.style.display = 'block';
        submitButton.style.display = 'none';
    }

    // Reset button states
    Object.keys(optionButtons).forEach(letter => {
        optionButtons[letter].classList.remove('selected');
        optionButtons[letter].style.display = 'block';
    });

    // Mark the selected button if any
    if (userAnswers[currentQuestionIndex]) {
        optionButtons[userAnswers[currentQuestionIndex]].classList.add('selected');
    }
}

function showResults() {
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        if (userAnswers[questionNumber] === currentQuestion.answer) {
            numCorrect++;
        }
    });

    const score = (numCorrect / quizData.length) * 100;
    resultsText.innerHTML = `You scored ${score}%`;

    if (score < 70) {
        resultGif.src = 'images/Fail.gif';
    } else {
        resultGif.src = 'images/Pass.gif';
    }

    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'flex';
    endReviewButton.style.display = 'none';
}

function buildReviewQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const choices = [];

    for (let letter in currentQuestion.choices) {
        let className = '';
        if (letter === currentQuestion.answer) {
            className = 'correct';
        } else if (userAnswers[currentQuestionIndex] === letter) {
            className = 'incorrect';
        }

        choices.push(
            `<label class="${className}">
                <span>${letter}: ${currentQuestion.choices[letter]}</span>
            </label>`
        );
    }

    quizElement.innerHTML = `
        <div class="question-number">Review Question ${currentQuestionIndex + 1}</div>
        <div class="question">${currentQuestion.question}</div>
        <div class="choices">${choices.join('')}</div>
    `;

    buildReviewNav();

    // Hide the option buttons in review mode
    Object.keys(optionButtons).forEach(letter => {
        optionButtons[letter].style.display = 'none';
    });
}

function buildReviewNav() {
    reviewNav.innerHTML = '';
    quizData.forEach((_, index) => {
        const button = document.createElement('button');
        button.className = 'review-nav-button';
        button.innerText = index + 1;
        if (userAnswers[index] !== quizData[index].answer) {
            button.classList.add('incorrect');
        }
        button.addEventListener('click', () => {
            currentQuestionIndex = index;
            buildReviewQuestion();
        });
        reviewNav.appendChild(button);
    });
    quizContainer.insertBefore(reviewNav, quizContainer.firstChild);
}

startButton.addEventListener('click', () => {
    shuffle(quizData);  // Randomize questions
    startContainer.style.display = 'none';
    quizContainer.style.display = 'flex';
    resultsContainer.style.display = 'none';
    buildQuestion();
});

Object.keys(optionButtons).forEach(letter => {
    optionButtons[letter].addEventListener('click', () => {
        userAnswers[currentQuestionIndex] = letter;
        // Gray out the selected button
        optionButtons[letter].classList.add('selected');
        // Enable other buttons
        Object.keys(optionButtons).forEach(btn => {
            if (btn !== letter) {
                optionButtons[btn].classList.remove('selected');
            }
        });
    });
});

nextButton.addEventListener('click', () => {
    if (reviewing) {
        if (currentQuestionIndex < quizData.length - 1) {
            currentQuestionIndex++;
            buildReviewQuestion();
        } else {
            reviewing = false;
            alert('Review completed.');
            quizContainer.style.display = 'none';
            resultsContainer.style.display = 'flex';
            endReviewButton.style.display = 'none';
        }
    } else {
        if (userAnswers[currentQuestionIndex]) {
            currentQuestionIndex++;
            buildQuestion();
        } else {
            alert('Please select an answer before proceeding.');
        }
    }
});

submitButton.addEventListener('click', () => {
    if (userAnswers[currentQuestionIndex]) {
        quizElement.innerHTML = '';
        nextButton.style.display = 'none';
        submitButton.style.display = 'none';
        showResults();
    } else {
        alert('Please select an answer before submitting.');
    }
});

retryButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    userAnswers = [];
    resultsContainer.style.display = 'none';
    retryButton.style.display = 'none';
    startContainer.style.display = 'flex';
});

reviewButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    reviewing = true;
    buildReviewQuestion();
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'flex';
    endReviewButton.style.display = 'block';
});

endReviewButton.addEventListener('click', () => {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'flex';
    endReviewButton.style.display = 'none';
});
