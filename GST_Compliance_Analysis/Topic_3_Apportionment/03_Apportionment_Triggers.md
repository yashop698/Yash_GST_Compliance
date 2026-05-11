# ITC Apportionment — Triggers and Classification of Inputs
{complexity_level: "Advanced"}
{topic: "ITC Apportionment"}
{law_reference: "Section 17(1)–(3) CGST Act, 2017; Rule 43 CGST Rules, 2017"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## When Apportionment Is Triggered
{law_reference: "Section 17(2) CGST Act, 2017"}

The apportionment obligation is triggered when a registered person simultaneously satisfies two conditions:

**Trigger Condition 1: Mixed Output**
The taxpayer makes BOTH:
- Taxable supplies (including zero-rated) — supplies on which GST is levied or supplies that are zero-rated (exports/SEZ)
- Exempt/ineligible supplies — supplies specifically exempt, nil-rated, non-GST, or outside India

**Trigger Condition 2: Common Inputs**
Some of the inputs/input services cannot be directly attributed exclusively to either taxable or exempt output. They serve both.

If **both conditions** are met simultaneously → apportionment is mandatory. If either condition fails → apportionment may not be required.

---

## The Three Input Categories
{law_reference: "Rule 43(1)(a)–(c) CGST Rules, 2017"}

Every inward supply (input or input service) must be classified into one of three categories before ITC can be claimed or denied:

### Category T1: Exclusively Taxable Inputs
These inputs are used **solely and entirely** for making taxable (or zero-rated) supplies. They receive **full ITC** without any apportionment.

**Characteristics of T1 inputs:**
- Clear nexus to a specific taxable output
- No portion of the input serves exempt supply
- Direct cause-effect link: input → taxable output

**Examples of T1 inputs:**

| Input | Business Context | Why T1? |
|-------|-----------------|---------|
| Audit software subscription | CA firm providing statutory audit (taxable) | Only used for the taxable audit service |
| Raw materials for taxable goods | Manufacturing company | Used only in taxable product |
| Legal software for litigation services | Law firm's taxable litigation | Exclusively for taxable service |
| Export packing materials | Exporter | Used only for zero-rated exports |
| Freight for exporting goods | Exporter | Directly for zero-rated supply |

### Category T2: Exclusively Exempt/Ineligible Inputs
These inputs are used **solely and entirely** for making exempt, nil-rated, or non-GST supplies. They receive **zero ITC** — the input GST is a cost, not a credit.

**Characteristics of T2 inputs:**
- Clear nexus to a specific exempt/ineligible output
- No portion of the input serves taxable supply
- Must be expensed (input GST added to cost of exempt supply)

**Examples of T2 inputs:**

| Input | Business Context | Why T2? |
|-------|-----------------|---------|
| FSSAI compliance software | Food company selling nil-rated staples | Only for nil-rated output |
| Packaging for exempt goods | Distributor of exempt agricultural produce | Only for exempt output |
| Professional services for trust management | CA firm's trust advisory (exempt) | Exclusively for exempt service |
| Interest-hedging services | Bank's exempt interest-income activity | Only for exempt activity |

### Category T3: Common Inputs
These inputs serve **both** taxable and exempt outputs with no clear attribution. They form the **common credit pool** subject to Rule 43 apportionment.

**Characteristics of T3 inputs:**
- Cannot be attributed to a single output stream
- Shared infrastructure, shared time, shared resources
- Must be apportioned mathematically using E/F ratio

**Examples of T3 inputs:**

| Input | Why Common (T3)? |
|-------|-----------------|
| Office rent | CA firm uses the same office for taxable statutory audit and exempt trust advisory |
| Electricity | Same office/factory serves both taxable and exempt activities |
| Internet connection | Used by staff working on both taxable and exempt matters |
| Accounting software | Processes transactions for both taxable and exempt outputs |
| Security services | Protects the entire premises used for mixed-output business |
| Housekeeping/cleaning | Serves the entire office (both output streams) |
| IT support and hardware maintenance | Supports systems used for both activities |
| General professional indemnity insurance | Covers all services including both taxable and exempt |

---

## How to Classify: The Attribution Test
{law_reference: "Rule 43(1)(a)–(b) CGST Rules, 2017"}

Apply these questions in sequence:

**Question 1**: Can this input be directly linked to a specific taxable output only?
- YES → T1 (full ITC)
- NO → continue to Question 2

**Question 2**: Can this input be directly linked to a specific exempt output only?
- YES → T2 (no ITC)
- NO → T3 (common, must apportion)

### The Attribution Test in Practice

**Example — CA Firm with 70% Taxable / 30% Exempt**

| Expense | Attribution Test | Classification |
|---------|-----------------|---------------|
| Audit software for statutory audit | Used only for statutory audit (taxable) | T1 — full ITC |
| FCRA filing software for trust clients | Used only for trust advisory (exempt) | T2 — no ITC |
| Office printer/copier | Used for both audit reports and trust documents | T3 — common |
| Partner's airfare for audit engagement | Booked for specific taxable client visit | T1 — full ITC |
| Partner's airfare for trust advisory visit | Booked for specific exempt client visit | T2 — no ITC |
| Office rent | Shared office used for all services | T3 — common |
| Reception staff | Greets clients of all types | T3 — common |

---

## Capital Goods vs Revenue Inputs
{law_reference: "Rule 43(1) — capital goods treatment"}

Capital goods (assets with useful life >1 year) have a different apportionment treatment:

### Revenue Inputs (Rule 42)
- Monthly apportionment in the period of receipt
- Each invoice creates an immediate T1/T2/T3 classification
- Common ITC is apportioned using the current month's E/F ratio

### Capital Goods (Rule 43)
- Total ITC on the capital good is spread over 60 months
- Monthly ITC component: Total ITC ÷ 60
- Each month, the monthly component is apportioned using that month's E/F ratio
- This spreads the apportionment over the useful life of the asset

**Why this matters**: A machine purchased in April may have a different monthly ratio than when it was purchased. The 60-month method captures this variation. The total ITC over 60 months equals the ITC that would have been available if an actuals-based approach were used.

---

## Inputs That Are Excluded Before Classification
{law_reference: "Section 17(5) CGST Act, 2017"}

Before applying the T1/T2/T3 classification, remove all blocked inputs:

| Blocked Input | Section 17(5) Clause | Outcome |
|--------------|---------------------|---------|
| Company car (≤13 seats) | 17(5)(a) | Fully blocked — NOT classified as T1/T2/T3 |
| Office pantry food | 17(5)(b)(i) | Fully blocked |
| Club membership | 17(5)(b)(ii) | Fully blocked |
| Cab hire for employees | 17(5)(b)(iii) | Fully blocked |
| Capitalised office renovation | 17(5)(c)/(d) | Fully blocked |
| Corporate gifts | 17(5)(h) | ITC reversed on gifting event |

These blocked inputs are **removed from the entire ITC framework** before T1/T2/T3 classification begins.

---

## Sector-Specific Trigger Analysis

### Banking and Financial Services
| Activity | GST Status | ITC Treatment |
|---------|-----------|--------------|
| Transaction fees, charges | Taxable (18%) | T1 or T3 |
| Interest income | Exempt | T2 or T3 |
| Fund management fees | Taxable (18%) | T1 or T3 |
| Investment income (dividends) | Outside GST scope | Part of F denominator |

Banks are major Rule 43 users. Typical ratios: 15%–30% taxable, 70%–85% exempt. Large portion of common ITC (branch infrastructure, IT, staff) goes through apportionment.

### Insurance Companies
| Activity | GST Status | ITC Treatment |
|---------|-----------|--------------|
| General insurance premium | Taxable | T1 or T3 |
| Life insurance premium | Exempt | T2 or T3 |
| Claims processing | Internal (no supply) | Cost center allocation |

### Healthcare
| Activity | GST Status | ITC Treatment |
|---------|-----------|--------------|
| Elective cosmetic surgery | Taxable (18%) | T1 or T3 |
| Clinical medical treatment | Exempt | T2 or T3 |
| Pharmacy (prescription drugs) | Nil-rated or 5% | May be T2 or T3 |

### Real Estate Developer
| Activity | GST Status | ITC Treatment |
|---------|-----------|--------------|
| Sale of under-construction flats | Taxable (1%/5% with ITC restrictions) | Complex — see RERA rules |
| Sale of completed flats | Outside GST (post-OC) | T2 |
| Rental of commercial property | Taxable (18%) | T1 or T3 |

---

## When Attribution Changes During the Year
A common practical issue: an input was correctly classified as T1 when purchased (exclusively for a taxable client project), but the project is later abandoned and the resource is repurposed for exempt advisory work.

**Treatment**:
- If the change in use occurs after the ITC has been claimed: reverse the excess ITC in the month of change
- If the change is within the same tax period: reclassify in that month's GSTR-3B
- For capital goods: the 60-month apportionment automatically adjusts each month based on the prevailing E/F ratio, so no separate reversal is needed (the ratio captures the change)

---

## **[MAHARASHTRA-SPECIFIC]** Commonly Contested Classifications in Maharashtra

Maharashtra SGST scrutiny frequently contests the following T1 claims:
1. **Software as T1**: Officers question whether software serving both taxable and exempt functions is truly T1. Entities should maintain screen-level or module-level access logs showing the software is used only for taxable services.
2. **Partner travel as T1**: Claims for individual engagement travel are scrutinised. Engagement letters, purpose-specific documentation, and client invoices for the specific engagement should support T1 classification.
3. **Specific staff salaries as T1**: India's GST framework does not allow ITC on employee-related costs, but where contract staff or professional fees are paid for specific taxable engagements, the documentation of engagement-specific attribution should be robust.

---

## Cross-References
> **See Also — Methods and Calculations:** For the E/F formula with worked examples, see [04_Apportionment_Methods_Calculations.md]
> **See Also — Step-by-Step Implementation:** For the sequential monthly implementation guide, see [05_Apportionment_Step_by_Step.md]
> **See Also — Blocked ITC Interaction:** For how blocked ITC is removed before T1/T2/T3 classification, see [07_Apportionment_Blocked_ITC_Interaction.md]
