# GST Compliance Analysis — Master Navigation Index
{complexity_level: "Advanced"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}
{law_reference: "CGST Act 2017; IGST Act 2017; CGST Rules 2017; Maharashtra SGST Act 2017"}
{as_of_date: "May 2026"}

## How to Use This Document System

This repository contains a comprehensive Advanced-level GST compliance analysis covering three interconnected topics. It is designed for Chartered Accountants, Company Secretaries, Cost and Management Accountants, and their article/trainee staff practising under CGST, IGST, and Maharashtra SGST law.

### Complexity Declaration
All files in this system are rated **Advanced**. They assume familiarity with:
- Basic GST registration, return filing, and invoice rules
- Financial accounting (Ind AS / AS treatment of GST)
- General concepts of input tax credit

### Learning Path Selector

**If you are new to a topic**: Start with the Overview file (01_) for the topic, then work through the files in numerical order.

**If you need a specific legal provision**: Use Path A files (statutory structure) for each topic.

**If you need practical guidance**: Use Path B or the "Practical Implementation" files.

**If you are preparing for a GST audit or assessment**: Jump to the Audit and Compliance files (07–10) and Errors files.

**If you need cross-topic analysis**: Start with [Shared/Cross_Topic_References.md] and [Shared/Disputed_Ambiguous_Areas.md].

---

## Topic Relationship Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    INWARD SUPPLY RECEIVED                       │
└─────────────────────────┬───────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│  TOPIC 1: RCM CHECK (Section 9(3)/(4))                         │
│  Is this an RCM supply? → Pay from cash ledger + self-invoice  │
└─────────────────────────┬───────────────────────────────────────┘
                          │ (eligible ITC now in ledger if paid)
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│  TOPIC 2: BLOCKED ITC CHECK (Section 17(5))                    │
│  Is ITC blocked? → Stop. No ITC. Report in Table 4D.          │
└─────────────────────────┬───────────────────────────────────────┘
                          │ (only eligible ITC continues)
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│  TOPIC 3: ITC APPORTIONMENT (Rule 43)                          │
│  T1 (full ITC) / T2 (no ITC) / T3 (apply E/F formula)        │
└─────────────────────────┬───────────────────────────────────────┘
                          │
                          ▼
                   NET CLAIMABLE ITC
```

---

## Complete File Index

### Topic 1: Reverse Charge Mechanism (RCM)

| File | Title | Content Summary |
|------|-------|----------------|
| [01_RCM_Overview.md](Topic_1_RCM/01_RCM_Overview.md) | RCM Overview | Definition, legislative intent, statutory framework, learning path selector |
| [02_RCM_Legal_Framework.md](Topic_1_RCM/02_RCM_Legal_Framework.md) | RCM Legal Framework | Full text of Section 9(3)/(4), IGST Section 5(3)/(4), Rules 3/4/5, Section 31(3)(f) |
| [03_RCM_Eligibility_and_Exclusions.md](Topic_1_RCM/03_RCM_Eligibility_and_Exclusions.md) | RCM Eligibility | Who pays, composition dealers, SEZ, exemptions, Maharashtra AAR positions |
| [04_RCM_Path_A_Transaction_Type.md](Topic_1_RCM/04_RCM_Path_A_Transaction_Type.md) | Path A: By Transaction | All notified services: GTA, advocates, directors, renting MV, security, insurance, GTA, government services |
| [05_RCM_Path_B_Rule_Section.md](Topic_1_RCM/05_RCM_Path_B_Rule_Section.md) | Path B: By Rule | Rule 3, 4, 5, 36(3), 46, 52 with annotations and Path A cross-reference |
| [06_RCM_Practical_Implementation.md](Topic_1_RCM/06_RCM_Practical_Implementation.md) | Practical Implementation | Identification checklist, self-invoice, cash payment, GSTR-3B mapping, RCM ITC timing |
| [07_RCM_Scenarios_Advanced.md](Topic_1_RCM/07_RCM_Scenarios_Advanced.md) | Advanced Scenarios | 5 scenarios: unregistered cleaning service, master CA firm (integrated), missed deadline, composition dealer GTA, SEZ |
| [08_RCM_Audit_and_Compliance.md](Topic_1_RCM/08_RCM_Audit_and_Compliance.md) | Audit and Compliance | GSTR-2B reconciliation, 7 common errors, 5 audit red flags, department process, Maharashtra |
| [09_RCM_Amendments_and_Clarifications.md](Topic_1_RCM/09_RCM_Amendments_and_Clarifications.md) | Amendments | Circulars 164/2021, 177/2022, 196/2023, GTA 2022, ICAI guidance, Maharashtra |
| [10_RCM_Ambiguity_and_Conflicts.md](Topic_1_RCM/10_RCM_Ambiguity_and_Conflicts.md) | Disputes | 7 disputed areas: LLP vehicle renting, GTA 5%/12%, law firms, director dual status, Section 9(4) scope, secondment, residential dwelling |

### Topic 2: Blocked ITC (Section 17(5))

| File | Title | Content Summary |
|------|-------|----------------|
| [01_Blocked_ITC_Overview.md](Topic_2_Blocked_ITC/01_Blocked_ITC_Overview.md) | Blocked ITC Overview | Definition, legislative intent, Section 17(5) structure, amendment timeline |
| [02_Blocked_ITC_Legal_Framework.md](Topic_2_Blocked_ITC/02_Blocked_ITC_Legal_Framework.md) | Legal Framework | Full annotated Section 17(5)(a)–(i), Finance Act 2021, plant and machinery exception |
| [03_Blocked_ITC_Path_A_Schedule_III.md](Topic_2_Blocked_ITC/03_Blocked_ITC_Path_A_Schedule_III.md) | Path A: By Section 17(5) | Each clause with statutory text, scope, exceptions, seating capacity rule, examples |
| [04_Blocked_ITC_Path_B_Grouped_Category.md](Topic_2_Blocked_ITC/04_Blocked_ITC_Path_B_Grouped_Category.md) | Path B: Grouped | 8 practical groups: personal, vehicle, food, club, entertainment, construction, regime-based, losses/gifts |
| [05_Blocked_ITC_Eligibility_Logic.md](Topic_2_Blocked_ITC/05_Blocked_ITC_Eligibility_Logic.md) | Eligibility Decision Logic | Decision tree, when ITC is NOT blocked (eligibility matrix), partial blocking, exceptions |
| [06_Blocked_ITC_Interaction.md](Topic_2_Blocked_ITC/06_Blocked_ITC_Interaction.md) | Interaction with RCM/Apportionment | Double-block scenario, sequencing proof, works contract chain, capital goods |
| [07_Blocked_ITC_Practical_Implementation.md](Topic_2_Blocked_ITC/07_Blocked_ITC_Practical_Implementation.md) | Practical Implementation | Accounting entries, GSTR-3B mapping, reversal mechanics, blocked ITC register, GSTR-9 |
| [08_Blocked_ITC_Scenarios_Advanced.md](Topic_2_Blocked_ITC/08_Blocked_ITC_Scenarios_Advanced.md) | Advanced Scenarios | 5 scenarios: pantry, integrated CA firm, vehicle articleship, works contract, employee benefits |
| [09_Blocked_ITC_Errors_and_Compliance.md](Topic_2_Blocked_ITC/09_Blocked_ITC_Errors_and_Compliance.md) | Errors and Compliance | 8 common errors, audit red flags, 5 internal controls, Maharashtra data analytics scrutiny |
| [10_Blocked_ITC_Amendments.md](Topic_2_Blocked_ITC/10_Blocked_ITC_Amendments.md) | Amendments | Finance Act 2021 retrospective, Circulars 172/2022 and 7/2023, Maharashtra AAR rulings |

### Topic 3: ITC Apportionment (Rule 43)

| File | Title | Content Summary |
|------|-------|----------------|
| [01_Apportionment_Overview.md](Topic_3_Apportionment/01_Apportionment_Overview.md) | Overview | What is apportionment, legislative intent, Section 17(1)–(3), Rule 43 summary, who must apportion |
| [02_Apportionment_Legal_Framework.md](Topic_3_Apportionment/02_Apportionment_Legal_Framework.md) | Legal Framework | Full Rule 43 text with annotation, Section 17(3) definition, capital goods 60-month method |
| [03_Apportionment_Triggers.md](Topic_3_Apportionment/03_Apportionment_Triggers.md) | Triggers | When apportionment is triggered, T1/T2/T3 classification guide, sector-specific analysis |
| [04_Apportionment_Methods_Calculations.md](Topic_3_Apportionment/04_Apportionment_Methods_Calculations.md) | Methods and Calculations | 5 worked examples: legal firm 40/60, CA firm 70/30, gold trader 80/20, capital goods, bank |
| [05_Apportionment_Step_by_Step.md](Topic_3_Apportionment/05_Apportionment_Step_by_Step.md) | Step-by-Step Guide | 10-step monthly implementation from invoice receipt to GSTR-9 annual true-up |
| [06_Apportionment_Eligibility.md](Topic_3_Apportionment/06_Apportionment_Eligibility.md) | Eligibility of Inputs | Eligibility matrix, T1/T2/T3 attribution test, specific input classes, zero-rated exports |
| [07_Apportionment_Blocked_ITC_Interaction.md](Topic_3_Apportionment/07_Apportionment_Blocked_ITC_Interaction.md) | Blocked ITC Interaction | Block-first sequencing proof, 3 interaction scenarios, works contract multi-layer, integrated working paper |
| [08_Apportionment_Scenarios_Advanced.md](Topic_3_Apportionment/08_Apportionment_Scenarios_Advanced.md) | Advanced Scenarios | 6 scenarios: CA firm rent, gold trader, full-chain integrated (RCM+Block+Apportion), YoY ratio change, capital goods sale, RCM with attribution |
| [09_Apportionment_Practical_Monthly.md](Topic_3_Apportionment/09_Apportionment_Practical_Monthly.md) | Practical Monthly | Register formats (Parts A–D), capital goods sub-register, provisional ratio, GSTR-9 true-up, GSTR-9C |
| [10_Apportionment_Audit_and_Compliance.md](Topic_3_Apportionment/10_Apportionment_Audit_and_Compliance.md) | Audit and Compliance | Audit process, 7 red flags, 6 common errors, 3-way reconciliation, 5 internal controls, Maharashtra |
| [11_Apportionment_Amendments.md](Topic_3_Apportionment/11_Apportionment_Amendments.md) | Amendments | Rule 43 amendment history, Circulars 102/2019, 151/2021, 173/2022, Finance Acts 2024/2025 |

### Shared Reference Files

| File | Title | Content Summary |
|------|-------|----------------|
| [Shared/Glossary.md](Shared/Glossary.md) | Glossary | Precise definitions of 21 GST terms including all 13 required terms + 8 additional |
| [Shared/Amendments_Timeline_May_2026.md](Shared/Amendments_Timeline_May_2026.md) | Amendments Timeline | Chronological amendment log 2017–May 2026 across all three topics; 47-row master table |
| [Shared/Cross_Topic_References.md](Shared/Cross_Topic_References.md) | Cross-Topic References | RCM↔Blocked ITC↔Apportionment interaction map, master sequencing rule, integrated case study matrix |
| [Shared/Disputed_Ambiguous_Areas.md](Shared/Disputed_Ambiguous_Areas.md) | Disputed Areas | Advanced: 14 disputes across all 3 topics + Maharashtra-specific, risk matrix |

---

## Learning Paths

### Learning Path 1: New to GST ITC Framework
1. [Shared/Glossary.md](Shared/Glossary.md) — Key terms
2. [Topic_1_RCM/01_RCM_Overview.md](Topic_1_RCM/01_RCM_Overview.md) — RCM intro
3. [Topic_2_Blocked_ITC/01_Blocked_ITC_Overview.md](Topic_2_Blocked_ITC/01_Blocked_ITC_Overview.md) — Blocked ITC intro
4. [Topic_3_Apportionment/01_Apportionment_Overview.md](Topic_3_Apportionment/01_Apportionment_Overview.md) — Apportionment intro
5. [Shared/Cross_Topic_References.md](Shared/Cross_Topic_References.md) — How they interact

### Learning Path 2: Legal Research and Litigation
1. [Topic_1_RCM/02_RCM_Legal_Framework.md](Topic_1_RCM/02_RCM_Legal_Framework.md) — Statutory text
2. [Topic_2_Blocked_ITC/02_Blocked_ITC_Legal_Framework.md](Topic_2_Blocked_ITC/02_Blocked_ITC_Legal_Framework.md) — Section 17(5) full text
3. [Topic_2_Blocked_ITC/03_Blocked_ITC_Path_A_Schedule_III.md](Topic_2_Blocked_ITC/03_Blocked_ITC_Path_A_Schedule_III.md) — Statutory path
4. [Topic_3_Apportionment/02_Apportionment_Legal_Framework.md](Topic_3_Apportionment/02_Apportionment_Legal_Framework.md) — Rule 43 text
5. [Shared/Disputed_Ambiguous_Areas.md](Shared/Disputed_Ambiguous_Areas.md) — Disputes

### Learning Path 3: Monthly Compliance (Practical Practitioners)
1. [Topic_1_RCM/06_RCM_Practical_Implementation.md](Topic_1_RCM/06_RCM_Practical_Implementation.md)
2. [Topic_2_Blocked_ITC/07_Blocked_ITC_Practical_Implementation.md](Topic_2_Blocked_ITC/07_Blocked_ITC_Practical_Implementation.md)
3. [Topic_3_Apportionment/05_Apportionment_Step_by_Step.md](Topic_3_Apportionment/05_Apportionment_Step_by_Step.md)
4. [Topic_3_Apportionment/09_Apportionment_Practical_Monthly.md](Topic_3_Apportionment/09_Apportionment_Practical_Monthly.md)

### Learning Path 4: Audit Preparedness
1. [Topic_1_RCM/08_RCM_Audit_and_Compliance.md](Topic_1_RCM/08_RCM_Audit_and_Compliance.md)
2. [Topic_2_Blocked_ITC/09_Blocked_ITC_Errors_and_Compliance.md](Topic_2_Blocked_ITC/09_Blocked_ITC_Errors_and_Compliance.md)
3. [Topic_3_Apportionment/10_Apportionment_Audit_and_Compliance.md](Topic_3_Apportionment/10_Apportionment_Audit_and_Compliance.md)
4. [Shared/Disputed_Ambiguous_Areas.md](Shared/Disputed_Ambiguous_Areas.md)

### Learning Path 5: Amendments and Updates (May 2026)
1. [Shared/Amendments_Timeline_May_2026.md](Shared/Amendments_Timeline_May_2026.md) — Master timeline
2. [Topic_1_RCM/09_RCM_Amendments_and_Clarifications.md](Topic_1_RCM/09_RCM_Amendments_and_Clarifications.md)
3. [Topic_2_Blocked_ITC/10_Blocked_ITC_Amendments.md](Topic_2_Blocked_ITC/10_Blocked_ITC_Amendments.md)
4. [Topic_3_Apportionment/11_Apportionment_Amendments.md](Topic_3_Apportionment/11_Apportionment_Amendments.md)

---

## Maharashtra-Specific Content Index

Each file contains `**[MAHARASHTRA-SPECIFIC]**` tagged sections. The following files have significant Maharashtra content:

| File | Maharashtra Content |
|------|-------------------|
| [Topic_1_RCM/03_RCM_Eligibility_and_Exclusions.md](Topic_1_RCM/03_RCM_Eligibility_and_Exclusions.md) | Maharashtra AAR on RCM eligibility |
| [Topic_1_RCM/09_RCM_Amendments_and_Clarifications.md](Topic_1_RCM/09_RCM_Amendments_and_Clarifications.md) | Maharashtra SGST notifications |
| [Topic_1_RCM/10_RCM_Ambiguity_and_Conflicts.md](Topic_1_RCM/10_RCM_Ambiguity_and_Conflicts.md) | Maharashtra SGST officer positions |
| [Topic_2_Blocked_ITC/03_Blocked_ITC_Path_A_Schedule_III.md](Topic_2_Blocked_ITC/03_Blocked_ITC_Path_A_Schedule_III.md) | Club memberships — Mumbai/Pune context |
| [Topic_2_Blocked_ITC/07_Blocked_ITC_Practical_Implementation.md](Topic_2_Blocked_ITC/07_Blocked_ITC_Practical_Implementation.md) | Maharashtra e-assessment documentation |
| [Topic_2_Blocked_ITC/09_Blocked_ITC_Errors_and_Compliance.md](Topic_2_Blocked_ITC/09_Blocked_ITC_Errors_and_Compliance.md) | Maharashtra data analytics scrutiny module |
| [Topic_2_Blocked_ITC/10_Blocked_ITC_Amendments.md](Topic_2_Blocked_ITC/10_Blocked_ITC_Amendments.md) | Maharashtra AAR rulings on blocked ITC |
| [Topic_3_Apportionment/02_Apportionment_Legal_Framework.md](Topic_3_Apportionment/02_Apportionment_Legal_Framework.md) | Maharashtra state-wise turnover |
| [Topic_3_Apportionment/10_Apportionment_Audit_and_Compliance.md](Topic_3_Apportionment/10_Apportionment_Audit_and_Compliance.md) | Maharashtra SGST audit protocol |
| [Topic_3_Apportionment/11_Apportionment_Amendments.md](Topic_3_Apportionment/11_Apportionment_Amendments.md) | Maharashtra exclusive positions |
| [Shared/Disputed_Ambiguous_Areas.md](Shared/Disputed_Ambiguous_Areas.md) | Maharashtra disputes M.1 and M.2 |

---

## Metadata Tag Legend

Every section in every file uses the following metadata tags:

```
{complexity_level: "Advanced"}          — Complexity tier
{topic: "RCM / Blocked ITC / ..."}      — Primary topic
{law_reference: "Section X CGST Act"}  — Applicable law provision
{amendment_date: "DD-MMM-YYYY"}        — Date of amendment/circular
{jurisdiction: "CGST + IGST + MGST"}   — Applicable jurisdiction
```

Maharashtra-specific content is flagged: `**[MAHARASHTRA-SPECIFIC]**`

---

## Document Statistics (as of May 2026)

| Category | Count |
|----------|-------|
| Topic 1 (RCM) files | 10 |
| Topic 2 (Blocked ITC) files | 10 |
| Topic 3 (Apportionment) files | 11 |
| Shared files | 4 |
| Navigation files (index + README) | 2 |
| **Total files** | **37** |

---

## Cross-References
> **Master Interaction Framework**: [Shared/Cross_Topic_References.md]  
> **All Amendments 2017–2026**: [Shared/Amendments_Timeline_May_2026.md]  
> **Disputed Areas**: [Shared/Disputed_Ambiguous_Areas.md]  
> **Glossary**: [Shared/Glossary.md]
