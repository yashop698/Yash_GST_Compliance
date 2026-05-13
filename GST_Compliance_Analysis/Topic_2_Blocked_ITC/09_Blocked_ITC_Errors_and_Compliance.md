# Blocked ITC — Common Practitioner Errors and Compliance Guide
{complexity_level: "Advanced"}
{topic: "Blocked ITC"}
{law_reference: "Section 17(5) CGST Act; GSTR-3B; GSTR-9C; Section 73/74 CGST Act"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## Introduction
Section 17(5) generates the highest volume of GST demand notices after RCM non-compliance, according to Maharashtra SGST audit patterns. The errors are often systemic — accounting software auto-credits all input GST without Section 17(5) filtering. This file documents the most common errors, their consequences, and internal controls to prevent recurrence.

---

## Error 1: Claiming ITC on Company Cars (≤13 Seats)
{law_reference: "Section 17(5)(a) CGST Act"}
{amendment_date: "01-Jul-2017"}

### How It Happens
Finance teams process car purchase invoices from automobile dealers. Most accounting software (Tally, SAP, Oracle) does not automatically flag motor vehicle ITC as blocked. The GST amount is auto-credited to the Electronic Credit Ledger.

### Scale of Error
A luxury sedan at ₹50 lakh + GST ₹9 lakh — a single ITC error of ₹9 lakh. With interest at 18% p.a. over 2 years = ₹3.24 lakh additional exposure. Company fleet of 10 cars: ₹90 lakh ITC blocked, potentially ₹32 lakh interest.

### Detection Methods (by Department)
- Vehicle registration database match: VIN/chassis numbers from car dealer invoices cross-referenced with RTO records
- GSTR-2B auto-population from automobile dealers: large ITC from car dealers flagged
- GSTR-9C: statutory auditor flags vehicle ITC during reconciliation

### Rectification
1. Reverse in GSTR-3B Table 4(B)(2) — current period
2. Compute interest under Section 50 for each month from date of claim
3. Pay interest via DRC-03
4. Adjust fixed asset register: add blocked GST to vehicle cost

### Prevention
- Configure accounting system: add "Section 17(5) check" flag to all motor vehicle payables
- When onboarding car dealer as vendor: tag as "BLOCKED ITC" supplier

---

## Error 2: Not Blocking ITC on Vehicle Maintenance and Insurance
{law_reference: "Section 17(5)(a)(ii); Section 17(5)(b)(i)"}

### The Misconception
"The vehicle purchase ITC is blocked, but the ongoing maintenance and insurance are ordinary business expenses — ITC should be available."

**This is wrong.** ITC on repair, maintenance, and insurance of Section 17(5)(a)-blocked vehicles is also blocked.

### Affected Items
- Annual comprehensive car insurance: GST on premium = blocked
- Service station invoices (oil change, tyre rotation, AC service): blocked
- Tyre replacements: blocked
- Accident repair: blocked
- Third-party insurance: blocked

### Common Scenario
Company correctly blocks ITC on car purchase but claims ₹18,000/year ITC on car service and ₹9,000 on insurance. Over 5 years: ₹1,35,000 wrongly claimed.

### Prevention
Create a **blocked vehicle register**: list all vehicles by VIN, confirm Section 17(5)(a) status. Any invoice from a service station/insurance company linked to a blocked vehicle → tag as BLOCKED at vendor level.

---

## Error 3: Claiming ITC on Office Food/Beverages and Entertainment
{law_reference: "Section 17(5)(b)(i) CGST Act"}

### The Misconception
"Office pantry tea/coffee, team lunch, client dinner — these are business expenses, so ITC should be available."

**Wrong.** Food and beverages, outdoor catering are explicitly blocked under Section 17(5)(b)(i) regardless of business purpose.

### Scale
A 100-person office spending ₹50,000/month on canteen/pantry: GST ₹9,000/month = ₹1,08,000/year wrongly claimed ITC if not blocked.

### Exception Often Misapplied
Many practitioners know the "mandatory canteen exception" but apply it to all factory canteens. The exception requires:
- Factory with **≥250 workers** (Factories Act Section 46)
- Canteen is **legally mandatory**, not voluntary

A factory with 100 workers running a voluntary canteen: ITC on canteen food is BLOCKED. This error is common in mid-size manufacturing units.

### Prevention
- Configure food/catering vendor invoices as BLOCKED
- For factory canteen: maintain headcount records and Factories Act compliance documentation

---

## Error 4: Over-Blocking All Renovation ITC (Ignoring the Capitalisation Test)
{law_reference: "Section 17(5)(c)/(d) + Finance Act 2021 Explanation"}

### The Misconception
"All renovation work on office/factory building is blocked under Section 17(5)."

**Partially wrong.** Only **capitalised** renovations are blocked. Expensed repairs and maintenance are NOT blocked (though subject to apportionment if mixed outputs).

### The Under-Claimed ITC Scenario
Company spends ₹5,00,000 on office repainting and routine maintenance (expensed to P&L). GST: ₹90,000. Wrongly treated as blocked — ₹90,000 ITC never claimed. This is a **revenue loss**, not a tax liability — but practitioners often make this error conservatively.

### The Correct Classification
| Renovation Type | Treatment in Books | ITC Status |
|----------------|-------------------|-----------|
| New addition/extension | Capitalised | BLOCKED |
| Structural improvement | Capitalised | BLOCKED |
| Routine repainting | Expensed | ELIGIBLE (apportionable) |
| Routine maintenance | Expensed | ELIGIBLE (apportionable) |
| Lift replacement (capitalised) | Capitalised | BLOCKED (civil structure) |
| Equipment maintenance | Expensed | ELIGIBLE |

### Prevention
Monthly review of works contract/construction invoices: check the fixed asset register to confirm capitalisation treatment.

---

## Error 5: Apportioning Before Blocking (Sequence Error)
{law_reference: "Section 17(5) + Rule 43 CGST Rules"}

### The Error
Practitioners compute Rule 43 apportionment on the TOTAL ITC pool (before removing blocked items) and then claim the "eligible" proportion includes blocked ITC.

**Numerical impact**: Total ITC ₹1,00,000 (including ₹20,000 blocked); at 70% taxable ratio:
- Wrong: ₹1,00,000 × 70% = ₹70,000 claimed
- Correct: (₹1,00,000 − ₹20,000) × 70% = ₹56,000 claimed
- **Over-claim: ₹14,000**

### Why It Happens
Some GST compliance software does not have a separate "blocking" step and feeds all GSTR-2B ITC directly into the apportionment formula.

### Prevention
Manual override: before feeding ITC into the Rule 43 formula, subtract blocked ITC. Document this step in the monthly working paper.

---

## Error 6: Claiming ITC on Double-Blocked RCM Supplies
{law_reference: "Section 9(3)/(4) + Section 17(5)(b)(iii)"}

### The Error
Practitioner pays RCM in cash for cab hire from an unregistered operator (correctly). Then claims ITC on the RCM tax paid (incorrectly).

### The Correct Analysis
Paying RCM ≠ ITC eligibility. ITC eligibility is determined separately by Section 16 and Section 17. If the supply is blocked under Section 17(5)(b)(iii) (rent-a-cab), no ITC can be claimed regardless of how the tax was paid.

### Common Affected Scenarios
- Cab from unregistered individual: RCM (Section 9(4)) + blocked (Section 17(5)(b)(iii))
- Motor vehicle hire from unregistered operator: RCM + blocked (Section 17(5)(a))
- Food catering from unregistered caterer: RCM + blocked (Section 17(5)(b)(i))

### Prevention
When processing RCM payments: immediately check Section 17(5) eligibility. Maintain a combined RCM + ITC eligibility checklist.

---

## Error 7: Missing GSTR-9 Blocked ITC Disclosure
{law_reference: "GSTR-9 Table 7F; Rule 80 CGST Rules"}

### The Error
Throughout the year, blocked ITC was correctly handled (never availed). But in filing GSTR-9, the practitioner does not fill in Table 7F (ineligible ITC under Section 17(5)).

### Consequence
GSTR-9C reconciliation: the auditor finds that books show blocked ITC as expense, but GSTR-9 Table 7F is nil. This creates a reconciliation discrepancy that requires explanation. Department may issue query about the "missing" ITC.

### Prevention
Before GSTR-9 filing: compile the annual blocked ITC register, sum total blocked amounts, report in GSTR-9 Table 7F. This is informational only — it does not create any tax liability.

---

## Error 8: Not Reversing ITC on Goods Gifted or Destroyed
{law_reference: "Section 17(5)(h) CGST Act"}

### The Error
Company buys promotional items (diaries, pens, gift hampers) claiming ITC on purchase. At year-end, gifts are distributed to clients/vendors. ITC on gifted goods is not reversed.

### The Correct Treatment
- At purchase: ITC is eligible (goods not yet gifted)
- When gifted/distributed: Section 17(5)(h) applies — reverse the ITC on those specific goods
- Reverse the ITC in the month of distribution, not at purchase

### Pharmaceutical Sector Note
Free samples to doctors: a very large ITC reversal obligation in the pharmaceutical industry. Each sample batch distributed should trigger ITC reversal. Annual reconciliation of samples distributed vs ITC reversed is a common pharmaceutical GST audit focus point.

---

## Audit Red Flags for Section 17(5) Violations

| Red Flag | What It Suggests |
|----------|-----------------|
| High ITC from automobile dealers (non-vehicle business) | Vehicle ITC wrongly claimed |
| Food/catering vendor ITC in non-food business | Section 17(5)(b)(i) violation |
| Large ITC from construction contractors in non-real estate entity | Capitalised renovation ITC wrongly claimed |
| GSTR-2B ITC >> GSTR-3B claimed (unusual underclaim) | Possibly over-blocking (revenue loss for taxpayer) |
| Year-end reversal of large ITC amount | Late discovery of blocked ITC — interest exposure |
| Nil Table 7F in GSTR-9 but large vehicle/renovation purchases | GSTR-9 underreporting |

---

## Internal Control Recommendations

### Control 1: ITC Gateway Review
Establish a two-person approval for ITC posting to ECL:
- Accounts payable posts invoice
- GST compliance officer approves ITC credit after Section 17(5) check

### Control 2: Vendor Category Matrix
Maintain a matrix of all vendors classified as:
- Fully blocked (automobile dealers, club memberships, catering)
- Conditionally blocked (construction — check capitalisation)
- Always eligible (IT vendors, professional services)

### Control 3: Monthly Blocked ITC Register
Maintained as a spreadsheet or module in accounting software. Reviewed by CFO/partner monthly.

### Control 4: Pre-GSTR-3B Filing Review
30 minutes before GSTR-3B is filed each month: cross-check Table 4A against the blocked ITC register to confirm no blocked ITC has slipped through.

### Control 5: Annual ITC Clean-Up
Before GSTR-9 filing: perform a complete review of blocked ITC for the year. Identify any items missed in monthly filings. Reverse with interest before GSTR-9 to avoid GSTR-9C qualification.

---

## **[MAHARASHTRA-SPECIFIC]** Maharashtra SGST Audit Focus Areas
{law_reference: "Maharashtra SGST Act, 2017; Maharashtra AAR"}

Maharashtra SGST officers consistently focus on:
1. **Motor vehicle ITC** — request RC books for all vehicles in company fleet
2. **Works contract ITC** — request fixed asset register for all renovation projects post-Finance Act 2021
3. **Club memberships** — prominent in Mumbai/Pune corporate assessments
4. **Double-blocked RCM** — check if RCM-paying businesses also attempted to claim blocked ITC

Maharashtra has implemented a **data analytics scrutiny module** that cross-references:
- ITC claimed from automobile dealers vs vehicle registration data
- ITC from construction companies vs capitalisation in annual accounts

Practitioners advising Maharashtra-registered entities should specifically include motor vehicle and construction ITC in their pre-filing compliance review.

---

## Cross-References
> **See Also — Decision Logic:** For the primary decision tree on when ITC is/isn't blocked, see [05_Blocked_ITC_Eligibility_Logic.md]
> **See Also — Interaction Sequencing:** For the correct order of blocking vs apportionment, see [06_Blocked_ITC_Interaction.md]
> **See Also — Disputed Areas:** For cases where the "error" may be a legitimate dispute, see [Shared/Disputed_Ambiguous_Areas.md]
