# ITC Apportionment — Audit, Red Flags, and Compliance
{complexity_level: "Advanced"}
{topic: "ITC Apportionment"}
{law_reference: "Section 17(2) CGST Act, 2017; Rule 43 CGST Rules, 2017; Sections 65, 66, 73, 74 CGST Act"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## How Department Audits Apportionment
{law_reference: "Section 65 CGST Act — Audit by Tax Authority; Section 66 — Special Audit"}

GST officers reviewing apportionment compliance typically follow this pattern:

### Phase 1: Data Analytics (Pre-Audit)
The GST department's Data Analytics and Risk Management Centre (DARC) flags taxpayers based on:
- Significant YoY changes in E/F ratio without business explanation
- ITC claims significantly higher than industry benchmarks
- Discrepancy between GSTR-3B Table 4B(1) amounts and expected Rule 43 reversals given declared turnover
- Nil or very low Table 4B(1) amounts for businesses that should have significant exempt turnover

### Phase 2: Scrutiny Notice
Under Section 61 (scrutiny of returns), the officer issues a notice asking the taxpayer to explain:
1. Basis of the apportionment ratio
2. Total exempt turnover vs taxable turnover for the period
3. Why T3 (common credit) pool includes/excludes specific inputs
4. Whether blocked ITC was properly excluded before Rule 43 calculation

**Response time**: 30 days (extendable with reasons)

### Phase 3: Field Audit (Section 65)
For larger discrepancies, the officer may conduct an on-site audit:
1. Request physical books of accounts
2. Verify inward supply invoices against GSTR-2B
3. Inspect the Monthly ITC Apportionment Register
4. Cross-check fixed asset register for capital goods under 60-month apportionment
5. Verify E/F ratio against audited financial statements

### Phase 4: Demand and SCN
If over-claimed ITC is discovered:
- Section 73: Demand for tax + 18% interest + 10% penalty (no fraud)
- Section 74: Demand for tax + 18% interest + 100% penalty (fraud/willful suppression)
- Time limits: Section 73 — 3 years; Section 74 — 5 years from due date of annual return

---

## Audit Red Flags — Apportionment
{law_reference: "Rule 43 CGST Rules"}

| Red Flag | What It Suggests | Department Response |
|---------|-----------------|---------------------|
| Zero Table 4B(1) for a business with known exempt supplies | Rule 43 apportionment not being done | Scrutiny notice; demand for missed reversals |
| E/F ratio dramatically improves YoY (e.g., 20% → 5% exempt) | Possible exclusion of exempt turnover from denominator | Request turnover reconciliation |
| Very high T3 pool with low Te | T3 pool may include T2 inputs (inflating eligible ITC) | Detailed invoice-level review |
| ITC claims from Table 4A >> GSTR-2B auto-population | Claims for invoices not in GSTR-2B | Rule 37A reversal demand |
| Sudden large Table 4B(2) in a later month | Late discovery of error; large reversal | Interest demand from date of original claim |
| Capital goods 60-month register not maintained | No evidence of proper apportionment | Presumptive assessment |
| GSTR-9 Table 7A nil despite GSTR-3B Table 4B(1) amounts | Totalling error in GSTR-9 | GSTR-9C qualification; potential demand |

---

## Common Compliance Errors in Apportionment

### Error 1: Wrong Denominator — Omitting Non-GST Supplies
**The error**: A company selling both standard goods (taxable) and petroleum products (non-GST) omits petroleum sales from F.

**Impact**: F is understated → E/F ratio is lower → Te is lower → More ITC claimed than entitled.

**Example**:
```
Correct: E = ₹20 lakh; F = ₹1 crore (including ₹30 lakh petroleum); E/F = 20%; Te = ₹18,000 × 20% = ₹3,600
Wrong: E = ₹20 lakh; F = ₹70 lakh (excluding petroleum); E/F = 28.6%; Te = ₹18,000 × 28.6% = ₹5,148

Wait — this is WRONG direction. Let me recalculate:
If petroleum (non-GST supply) is excluded from F:
  F = ₹70 lakh (understated)
  E/F = ₹20/₹70 = 28.6%

The issue: petroleum goes in E (as non-taxable supply in the denominator per Section 17(3)):
  E = ₹20 lakh (exempt) + ₹30 lakh (petroleum/non-GST) = ₹50 lakh
  F = ₹1 crore
  E/F = 50%; Te = ₹18,000 × 50% = ₹9,000

Wrong approach (omitting petroleum from both E and F):
  E = ₹20 lakh; F = ₹70 lakh; E/F = 28.6%; Te = ₹5,148

Over-claim = ₹9,000 − ₹5,148 = ₹3,852
```

**Correct treatment**: Include non-GST supplies (petroleum, alcohol, etc.) BOTH in E and in F. Since they are non-taxable, they dilute the eligible ratio.

### Error 2: Including Zero-Rated Exports in E (Denominator)
**The error**: An exporting company includes export turnover in E (exempt), reducing the taxable/total ratio.

**Impact**: Te is higher than it should be → Under-claiming ITC for the period.

**Correct treatment**: Export turnover (zero-rated) goes in the **numerator (taxable)**, NOT in E. Zero-rated supplies are treated as taxable for ITC purposes.

### Error 3: Not Separating T2 Before Computing T3
**The error**: All eligible (non-blocked) ITC is put into T3 without first identifying T2 inputs (directly attributable to exempt).

**Impact**: T3 pool is overstated → Te is overstated → ITC is under-claimed (revenue loss for taxpayer).

**Correct treatment**: Remove T2 inputs from the pool before computing T3. Only genuinely common inputs go into T3.

### Error 4: Including Blocked ITC in T3
**The error**: Blocked ITC (Section 17(5)) enters the T3 pool and gets 70% (or whatever taxable ratio) claimed.

**Impact**: ITC overclaimed by [blocked amount × taxable ratio].

**Correct treatment**: Remove blocked ITC FIRST (Step 2 of the monthly workflow). Blocked ITC never enters T1/T2/T3 classification.

### Error 5: Capital Goods Not on 60-Month Schedule
**The error**: Capital goods ITC is claimed all at once in the month of purchase without spreading over 60 months.

**Impact**: Either over-claiming (if the full ITC was claimed without the Rule 43 monthly reversal starting) or under-claiming (if the full ITC was blocked because it couldn't be directly attributed).

**Correct treatment**: Start the 60-month sub-register in the month of purchase. Reverse 1/60 × E/F each month.

### Error 6: Provisional Ratio Not Trued Up at GSTR-9
**The error**: Monthly provisional E/F ratios are used throughout the year but GSTR-9 Table 7A is simply the sum of monthly Table 4B(1) amounts without an annual true-up.

**Impact**: If the actual annual ratio differs from provisional, GSTR-9 is inaccurate — either under- or over-stated.

**Correct treatment**: Compute annual actual E/F ratio using full-year turnover data. Compare to sum of monthly Te. Adjust in GSTR-9.

---

## Reconciliation Framework
{law_reference: "Rule 80 CGST Rules — Reconciliation"}

### 3-Way Reconciliation for Each Financial Year

```
Source 1: Books of Accounts (ITC ledger)
  - Total ITC received on all inward supplies
  - Less: Blocked ITC (never posted to ECL)
  - Less: T2 ITC (directly to expense)
  - = Net ITC that went to ECL

Source 2: GSTR-3B (Sum of 12 months)
  - Table 4A: ITC claimed
  - Table 4B(1): Rule 43 reversals
  - Net = Table 4A − Table 4B

Source 3: GSTR-2B (Auto-populated from suppliers)
  - Total ITC available per supplier filings
  - Should match or exceed GSTR-3B Table 4A

Reconciliation checks:
  Books Net ITC = GSTR-3B Net ITC (after annual true-up)
  GSTR-3B Table 4A ≤ GSTR-2B total ITC
  GSTR-9 Table 7A = Sum of monthly Table 4B(1) ± annual true-up adjustment
```

### Red Flags in Reconciliation
- Books Net ITC > GSTR-3B Net ITC: unclaimed eligible ITC (revenue loss; claim in GSTR-9 Table 6B)
- Books Net ITC < GSTR-3B Net ITC: over-claimed ITC (demand risk; reverse with interest)
- GSTR-3B Table 4A > GSTR-2B: claiming ITC not in GSTR-2B (Section 16(2)(aa) violation)

---

## Internal Controls for Apportionment Compliance

### Control 1: Monthly Turnover Classification Report
Before GSTR-3B filing, generate a classified turnover report:
- Taxable turnover by HSN/service code
- Zero-rated turnover (export invoices)
- Exempt turnover
- Non-GST turnover
- Total

Review this report to compute E/F before calculating Te.

### Control 2: ITC Working Paper (Standard Template)
Use a standardized Excel/software template that:
- Populates from GSTR-2B data
- Has a Section 17(5) flag column (manual entry)
- Auto-classifies T1/T2/T3 based on vendor category tags
- Computes Te automatically using the E/F ratio
- Produces the GSTR-3B table values as output

### Control 3: CFO/Partner Monthly Sign-Off
Before GSTR-3B filing:
- CFO or signing partner reviews the ITC working paper
- Reviews the E/F ratio for reasonableness
- Signs off on the blocked ITC identification
- Confirms that capital goods sub-registers are updated

### Control 4: GSTR-2B Reconciliation Before Filing
Every invoice in Table 4A must appear in GSTR-2B. Before filing:
- Run a reconciliation of invoices claimed in 4A against GSTR-2B
- Any 4A claim not in GSTR-2B must be investigated before filing (risk of subsequent demand)

### Control 5: Annual Pre-GSTR-9 Review
3–4 weeks before GSTR-9 filing:
- Conduct a full-year review of all monthly Te calculations
- Compute the annual actual E/F ratio
- Calculate the annual true-up amount
- Prepare the GSTR-9 Table 7A and Table 6B entries
- Provide the annual workbook to the statutory auditor for GSTR-9C

---

## **[MAHARASHTRA-SPECIFIC]** Maharashtra SGST Audit Protocol
{law_reference: "Maharashtra SGST Act, Section 65; Maharashtra SGST Audit Manual"}

### Maharashtra Scrutiny Process
Maharashtra has a structured SGST audit programme that targets:
1. **Turnover-based selection**: Entities above ₹5 crore SGST turnover may be selected for departmental audit annually
2. **Risk-based selection**: DARC analytics flags anomalies in E/F ratio, Table 4B(1) amounts, and capital goods ITC claims

### Standard Maharashtra SGST Audit Documents Requested
When a Maharashtra SGST audit notice is received under Section 65:
1. Books of accounts (last 5 years) — including purchase register, sales register, ITC ledger
2. Monthly ITC Apportionment Register
3. Capital goods sub-registers
4. Fixed asset register (to verify capitalisation decisions)
5. E/F ratio computation workbook for each year
6. GSTR-3B copies (all 12 months) with Table 4A, 4B, 4D extracts
7. GSTR-9 and GSTR-9C for completed years
8. Evidence of T1 attribution (engagement letters, client contracts for T1 inputs)

### Response Timeline
Maharashtra SGST audit response: 15 days from the audit observation date. Request extension in writing if more time is needed.

### Maharashtra AAAR Decisions on Apportionment
Several Maharashtra AAR/AAAR decisions have confirmed:
- Banks and NBFCs must include interest income in E for the E/F ratio
- Real estate developers must carefully separate construction ITC (potentially blocked) from apportionable ITC
- The E/F ratio should be computed GSTIN-wise (state-specific), not for the pan-India entity

---

## Cross-References
> **See Also — Practical Monthly Registers:** For the format of the monthly tracking register used in audits, see [09_Apportionment_Practical_Monthly.md]
> **See Also — Scenarios:** For worked examples that auditors would scrutinize, see [08_Apportionment_Scenarios_Advanced.md]
> **See Also — Amendments:** For the Rule 43 amendment history that informs audit scope, see [11_Apportionment_Amendments.md]
