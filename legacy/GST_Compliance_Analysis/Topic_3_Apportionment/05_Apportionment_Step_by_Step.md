# ITC Apportionment — Step-by-Step Monthly Implementation Guide
{complexity_level: "Advanced"}
{topic: "ITC Apportionment"}
{law_reference: "Rule 43 CGST Rules, 2017; GSTR-3B format; Section 17(2) CGST Act, 2017"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## Overview
This guide provides a sequential, step-by-step process for implementing ITC apportionment monthly, from invoice receipt to GSTR-3B filing. Each step identifies the responsible person, the document produced, and the link to the GSTR-3B table.

---

## Step 1: Collect All Inward Supply Invoices
**Timing**: By the 5th of the following month (before GSTR-3B filing)  
**Responsible**: Accounts payable team

Actions:
1. Collect all purchase invoices, service invoices, import bills, and RCM self-invoices received during the month
2. Download GSTR-2B from the GST portal (reflects all supplier-reported invoices for the month)
3. Reconcile physical invoices with GSTR-2B entries
4. Flag any GSTR-2B mismatches for follow-up with suppliers
5. List all invoices with: Invoice No., Date, Vendor GSTIN, Description, Taxable Value, GST Amount

**Output**: Complete inward supply register for the month

---

## Step 2: Remove Blocked ITC (Section 17(5) Check)
**Timing**: Before any ITC classification  
**Responsible**: GST compliance officer

For each invoice in the inward supply register:

```
Ask: Is this supply covered by Section 17(5)?
  → Motor vehicle ≤13 seats? → BLOCKED
  → Food, beverage, catering? → BLOCKED
  → Club membership? → BLOCKED
  → Cab hire? → BLOCKED
  → Capitalised construction/renovation? → BLOCKED
  → Personal consumption? → BLOCKED
  → Gift/free sample at distribution? → BLOCKED
  → Other Section 17(5) categories? → BLOCKED
  → NONE of the above? → ELIGIBLE — proceed to Step 3
```

**For blocked invoices:**
- Tag as "BLOCKED — Section 17(5)(x)"
- Do NOT post to Electronic Credit Ledger
- Add GST amount to the cost of the underlying supply (expense or capitalise)
- Record in the Blocked ITC Register with invoice reference

**Output**: Two lists — Eligible ITC invoices (proceed to Step 3) and Blocked ITC invoices (report in GSTR-3B Table 4D)

---

## Step 3: Classify Eligible ITC into T1, T2, T3
**Timing**: After Step 2  
**Responsible**: GST compliance officer

For each eligible invoice (not blocked):

```
Ask: Is this input used EXCLUSIVELY for taxable/zero-rated supply?
  → YES → T1 (full ITC)
  → NO → Continue

Ask: Is this input used EXCLUSIVELY for exempt/non-GST supply?
  → YES → T2 (no ITC — expense)
  → NO → T3 (common — must apportion)
```

**T1 Inputs**: Document the specific taxable output this input serves.  
**T2 Inputs**: Document the specific exempt output this input serves.  
**T3 Inputs**: Document why attribution to one stream is not possible.

**Output**: Three sub-lists — T1 ITC total, T2 ITC total, T3 ITC total

---

## Step 4: Handle RCM Supplies
**Timing**: Concurrent with Step 2–3  
**Responsible**: GST compliance officer + accounts payable

For each RCM supply (unregistered supplier / notified service):
1. Issue self-invoice (Rule 46) — date, supply details, GSTIN, RCM indication
2. Pay RCM tax from Electronic Cash Ledger by the 20th of the following month
3. After payment: RCM ITC becomes eligible for credit
4. Apply Steps 2 and 3 to the RCM ITC:
   - Section 17(5) check first (if blocked supply — e.g., cab hire — ITC is blocked despite RCM payment)
   - If eligible: classify as T1, T2, or T3

**Self-invoice file**: Maintain a folder with all self-invoices for the month.

---

## Step 5: Compute the E/F Ratio
**Timing**: After monthly accounts are closed  
**Responsible**: Finance/accounts team

**Calculate this month's E/F:**
```
E = Sum of all exempt supply values during the month
    (includes: GST-exempt, nil-rated, non-GST, supplies outside India)
F = Total turnover in the state for the month
    (includes: E + taxable + zero-rated)
```

**Data sources:**
- Sales register / billing system
- Export invoices (for zero-rated)
- Banking income ledger (for exempt interest income)
- Non-GST transaction records (petroleum sales, alcohol sales)

**Practical tip**: If your business ratio is stable month-over-month, you may use the **prior month's ratio** as a provisional ratio for the current month (and true up in GSTR-9 annually). If the business is volatile (seasonal, deal-dependent), use the actual current month ratio.

**Output**: E/F ratio for the month (expressed as a decimal, e.g., 0.30 for 30% exempt)

---

## Step 6: Compute Apportioned ITC
**Timing**: After Step 5  
**Responsible**: GST compliance officer

```
Eligible ITC = T1 + [T3 × (1 − E/F)]
Ineligible ITC from common = T3 × E/F = Te
```

**For capital goods** (if any common capital goods in the portfolio):
```
Monthly component = Total capital goods ITC / 60
Monthly Te = Monthly component × E/F
Monthly eligible = Monthly component − Monthly Te
```

**Prepare the ITC working paper:**

| Category | ITC Amount | Eligible | Reversed |
|----------|-----------|----------|---------|
| T1 (directly taxable) | ₹X | ₹X (100%) | ₹0 |
| T2 (directly exempt) | ₹Y | ₹0 | ₹Y (100%) |
| T3 (common) | ₹Z | ₹Z × (1−E/F) | ₹Z × E/F = Te |
| Blocked (Section 17(5)) | ₹W | ₹0 | ₹W (100%, cost) |
| **Total** | | **T1 + T3×(1−E/F)** | **Te + T2 + W (cost)** |

**Output**: ITC working paper — the primary compliance document for the month

---

## Step 7: File GSTR-3B
**Timing**: By the 20th of the following month  
**Responsible**: GST compliance officer / CA in charge

**Table-by-table population:**

**Table 3.1**: Outward supplies — includes all taxable, exempt, zero-rated supply values

**Table 3.1(d)**: Inward RCM supplies — enter value and tax paid on RCM supplies

**Table 4A — Eligible ITC:**
- 4A(1): ITC on import of goods (customs)
- 4A(3): ITC on RCM supplies (after Section 17(5) and T1/T2/T3 check)
- 4A(5): All other eligible ITC (T1 + T3 initial claim, before reversal)

**Table 4B — ITC Reversals:**
- 4B(1): Rule 43 reversal (Te) — the ineligible portion of T3
- 4B(2): Other reversals — any blocked ITC wrongly claimed in prior months now being reversed

**Table 4D — Ineligible ITC:**
- 4D(1): IGST on imports that is ineligible (rare)
- 4D(2): All Section 17(5) blocked ITC — informational disclosure (does not create credit or debit)

**Net ITC = Table 4A − Table 4B**

### Verification Before Filing
Run this pre-filing checklist:
```
□ GSTR-2B auto-populated ITC matches invoices on hand
□ All blocked ITC excluded from Table 4A
□ Blocked ITC reported in Table 4D(2)
□ Rule 43 Te reversal calculated using correct E/F ratio
□ Rule 43 reversal entered in Table 4B(1)
□ RCM paid from cash ledger (not ITC)
□ Self-invoices issued for all RCM supplies
□ Net ITC figure cross-checked against ITC working paper
```

---

## Step 8: Record and Retain
**Timing**: After GSTR-3B filing  
**Responsible**: Compliance team

Retain for 6 years:
1. **ITC working paper** (the T1/T2/T3 classification for the month)
2. **E/F ratio computation** with source data
3. **Blocked ITC register** entry for the month
4. **Self-invoices** for all RCM supplies
5. **GSTR-3B acknowledgment** (portal filing confirmation)
6. **Cash ledger** statement showing RCM payments

---

## Step 9: Annual True-Up at GSTR-9
**Timing**: Before GSTR-9 filing (due date: 31 December following the financial year)  
**Responsible**: Senior compliance officer / Statutory auditor (for GSTR-9C)

**Annual true-up process:**
1. Sum the provisional E/F ratios used in each month's GSTR-3B
2. Calculate the actual annual E/F ratio using full-year turnover data
3. If annual ratio differs from monthly provisional: compute the difference
4. Declare the true-up in GSTR-9 Table 7 (additional reversals) or Table 6 (additional ITC claims)
5. If under-claimed ITC: claim the additional ITC in GSTR-9 (cannot exceed GSTR-2B amounts)
6. If over-claimed ITC: reverse the excess with interest under Section 50

**GSTR-9 reporting:**

| GSTR-9 Table | What Goes Here |
|-------------|---------------|
| Table 6A | Total ITC claimed in GSTR-3B during the year |
| Table 6B | ITC from GSTR-2B not claimed in GSTR-3B (additional claim) |
| Table 7A | ITC reversed under Rules 38, 42, 43 (cumulative annual apportionment reversals) |
| Table 7F | Ineligible ITC — blocked under Section 17(5) for the year |
| Table 7H | Total ITC reversed + ineligible |

---

## Step 10: GSTR-9C Reconciliation Support
**Timing**: After GSTR-9 filing  
**Responsible**: CA/Statutory auditor

The GSTR-9C auditor will require:
1. **Annual ITC working paper** — classification of all invoices, T1/T2/T3 breakdown
2. **E/F ratio workbook** — 12 months of ratio calculations
3. **Blocked ITC register** — annual summary by Section 17(5) clause
4. **GSTR-3B vs books reconciliation** — GSTR-3B Table 4A amounts vs ITC in books
5. **RCM working paper** — all RCM supplies, self-invoices, and ITC eligibility determination

---

## Monthly Compliance Timeline Summary

```
Date      | Action
----------|----------------------------------------------------------------------
1st–5th   | Collect invoices, download GSTR-2B, reconcile
5th–10th  | Section 17(5) check; classify T1/T2/T3; compute E/F ratio
10th–15th | Prepare ITC working paper; compute Te; review with CFO/partner
15th–18th | Draft GSTR-3B; cross-check all tables
18th–19th | Statutory review / partner sign-off
20th      | File GSTR-3B; retain all documents
21st–30th | Follow up on any GSTR-2B mismatches; update Blocked ITC Register
```

---

## **[MAHARASHTRA-SPECIFIC]** Maharashtra SGST Monthly Compliance Notes
{law_reference: "Maharashtra SGST Rules; MGST e-assessment guidelines"}

Maharashtra SGST e-assessment scrutiny notices are system-generated based on anomaly detection. To avoid automated scrutiny:
1. **Consistency**: Do not change the E/F ratio significantly month-over-month without a documented business reason
2. **GSTR-2B matching**: Maharashtra officers focus on GSTR-2B vs Table 4A reconciliation; ensure all ITC claimed in 4A is supported by GSTR-2B entries
3. **Table 4D reporting**: Report all blocked ITC in Table 4D(2); zero or suspiciously low amounts for entities with known blocked ITC categories (vehicles, food) attract notice
4. **Self-invoice compliance**: Maharashtra scrutiny routinely checks whether RCM self-invoices were issued. Maintain a self-invoice register with serial numbers

---

## Cross-References
> **See Also — Methods and Calculations:** For the formula and worked examples behind Step 6, see [04_Apportionment_Methods_Calculations.md]
> **See Also — Blocked ITC Interaction:** For the detailed mechanics of Step 2 (removing blocked ITC), see [07_Apportionment_Blocked_ITC_Interaction.md]
> **See Also — Practical Monthly Tracking:** For register formats and tracking tools, see [09_Apportionment_Practical_Monthly.md]
