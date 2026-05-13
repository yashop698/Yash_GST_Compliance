# ITC Apportionment — Practical Monthly Tracking and GSTR-9 Reporting
{complexity_level: "Advanced"}
{topic: "ITC Apportionment"}
{law_reference: "Rule 43 CGST Rules, 2017; GSTR-3B; GSTR-9; GSTR-9C; Rule 80 CGST Rules"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## Monthly ITC Apportionment Register
{law_reference: "Section 36 CGST Act — Record Retention"}

Every registered person performing Rule 43 apportionment should maintain a **Monthly ITC Apportionment Register**. This is the primary compliance document for ITC apportionment.

### Recommended Register Format

**Part A: Turnover Data**

| Month | Total Taxable Turnover (₹) | Zero-Rated/Export (₹) | Exempt Turnover (₹) | Non-GST Turnover (₹) | Total Turnover F (₹) | E/F Ratio |
|-------|--------------------------|----------------------|--------------------|--------------------|---------------------|---------|
| Apr-25 | | | | | | |
| May-25 | | | | | | |
| ... | | | | | | |
| Mar-26 | | | | | | |
| **Annual** | | | | | | |

**Part B: ITC Classification**

| Month | T1 ITC (Directly Taxable ₹) | T2 ITC (Directly Exempt ₹) | T3 Common ITC (₹) | Blocked ITC (₹) | Total ITC Received |
|-------|---------------------------|--------------------------|------------------|----------------|--------------------|
| Apr-25 | | | | | |
| ... | | | | | |

**Part C: Rule 43 Calculation**

| Month | T3 Amount (₹) | E/F Ratio Applied | Te Reversed (₹) | Eligible T3 (₹) | Net Claimable ITC (T1 + Eligible T3) |
|-------|-------------|-----------------|----------------|----------------|-------------------------------------|
| Apr-25 | | | | | |
| ... | | | | | |

**Part D: GSTR-3B Cross-Reference**

| Month | Table 4A(5) Filed | Table 4A(3) Filed | Table 4B(1) Filed | Table 4D(2) Filed | Acknowledgement No. |
|-------|-----------------|-----------------|-----------------|-----------------|---------------------|
| Apr-25 | | | | | |

---

## Capital Goods Apportionment Sub-Register
{law_reference: "Rule 43 — capital goods; 60-month method"}

For each common capital good, maintain a separate sub-register:

| Column | Detail |
|--------|--------|
| Asset Description | [Name of capital good] |
| Invoice Date | [Date of purchase] |
| Invoice Number | |
| Vendor GSTIN | |
| Total GST Paid | ₹ |
| Monthly Component | Total GST / 60 |
| Start Month | [Month 1 of 60] |
| End Month | [Month 60 of 60] |

**Monthly Entry Columns (60 rows — one per month):**
| Month # | Month-Year | E/F Ratio | Monthly Component (₹) | Te This Month (₹) | Eligible This Month (₹) | Cumulative Te | Cumulative Eligible |
|---------|-----------|---------|----------------------|------------------|------------------------|--------------|-------------------|
| 1 | Apr-25 | 30% | ₹X/60 | | | | |
| 2 | May-25 | 28% | ₹X/60 | | | | |
| ... | | | | | | | |
| 60 | Mar-30 | | ₹X/60 | | | ₹X×avg ratio | ₹X×avg(1-ratio) |

**Total verification**: Cumulative Eligible + Cumulative Te = Total GST Paid (₹X) ✓

---

## Using Prior Period Ratio as Provisional (Rule 43 Option)
{law_reference: "Rule 43(1)(d) — provisional calculation"}

For businesses with relatively stable output mix, Rule 43 permits using the **prior month's E/F ratio** as a provisional ratio for the current month. This simplifies monthly calculation.

**Mechanics**:
1. Use April's actual E/F ratio to calculate May's provisional Te
2. Use May's actual E/F ratio for June, and so on
3. At year-end (GSTR-9 filing): recalculate using full-year actual E/F ratio
4. Adjust: if annual eligible > sum of monthly eligible → claim additional ITC in GSTR-9; if annual eligible < sum of monthly eligible → reverse excess with interest

**When NOT to use provisional ratio**:
- Business with significant seasonal variation (e.g., a company that earns large exempt interest income in Q4)
- Business undergoing major structural change (new division, merger, major client loss)
- Where prior month ratio was distorted by one-time transactions

---

## GSTR-9 Annual Return — Apportionment Reporting
{law_reference: "GSTR-9 Tables 6, 7; Rule 80 CGST Rules, 2017"}

### GSTR-9 Table 6: ITC Availed During the Year
This table captures the total ITC claimed across all 12 months' GSTR-3B returns.

| GSTR-9 Sub-table | What to Report |
|-----------------|---------------|
| 6A | Total ITC availed in GSTR-3B Table 4A (T1 + T3 initial claims) |
| 6B | ITC available in GSTR-2B not claimed in GSTR-3B (any unclaimed eligible ITC) |
| 6C/6D | ITC on credit notes / debit notes |
| 6H | ITC claimed on RCM inward supplies |

### GSTR-9 Table 7: ITC Reversed and Ineligible
This is where apportionment reversals are declared.

| GSTR-9 Sub-table | What to Report |
|-----------------|---------------|
| 7A | Total ITC reversed under Rule 38, 42, 43 — **this is where annual Te goes** |
| 7B | ITC reversed under Rule 37 (supplier non-payment) |
| 7C | Credit note adjustments |
| 7D | Other reversals |
| 7E | Total reversals (7A + 7B + 7C + 7D) |
| 7F | Ineligible ITC — Section 17(5) blocked ITC (informational) |
| 7H | Total ITC reversed + ineligible |

### Annual True-Up Calculation
**Step 1**: Sum all monthly Te amounts from the Monthly ITC Register (Part C above)
**Step 2**: Compute annual Te using the actual full-year E/F ratio
```
Annual Te = Sum of annual T3 amounts × (Annual Exempt Turnover / Annual Total Turnover)
```
**Step 3**: Compare:
- Annual Te (actual) > Sum of monthly Te (provisional) → **Under-reversed**: report additional reversal in GSTR-9 Table 7D
- Annual Te (actual) < Sum of monthly Te (provisional) → **Over-reversed**: claim additional ITC in GSTR-9 Table 6B

**Step 4**: For over-reversals: ensure the claimed ITC does not exceed amounts in GSTR-2B

### Example — Annual True-Up

CA firm with monthly provisional 30% exempt ratio:
```
Sum of monthly Te (provisional): ₹10,800 × 12 = ₹1,29,600
Actual annual ratio (true-up): Exempt = ₹42,00,000 / Total = ₹1,50,00,000 = 28%
Annual T3: ₹36,000 × 12 = ₹4,32,000
Annual Te (actual): ₹4,32,000 × 28% = ₹1,20,960

Over-reversed by: ₹1,29,600 − ₹1,20,960 = ₹8,640
Additional ITC to claim in GSTR-9: ₹8,640 (reported in Table 6B)
```

---

## GSTR-9C: Statutory Auditor's Role
{law_reference: "GSTR-9C format; Rule 80(3) CGST Rules"}

The GSTR-9C is a reconciliation statement certified by a Chartered Accountant/CMA for entities with turnover > ₹5 crore.

### Auditor's Apportionment Review Checklist
```
□ Annual E/F ratio verified against audited accounts
□ Total T3 pool matches books (no blocked ITC included)
□ Rule 43 reversal in GSTR-9 Table 7A matches the annual Te calculation
□ Capital goods sub-register verified for each common capital good
□ GSTR-3B monthly Table 4B(1) amounts reconcile to annual total in GSTR-9 Table 7A
□ Any unclaimed ITC from GSTR-2B verified and reported in GSTR-9 Table 6B
```

### GSTR-9C Table 12B: Reasons for ITC Differences
Where GSTR-9 ITC differs from books, the auditor must explain:
1. Rule 43 apportionment reversals (expected difference — Te is a cost, not a credit)
2. Blocked ITC never claimed (Table 7F — explains why books show higher GST paid than ITC claimed)
3. Any residual differences requiring clarification

---

## Retention and Documentation
{law_reference: "Section 36 CGST Act — 6-year retention"}

**Documents to retain for each financial year (6 years from due date of GSTR-9):**
1. Monthly ITC Apportionment Register (Parts A–D)
2. Capital Goods sub-registers
3. All inward supply invoices
4. GSTR-2B downloads for each month
5. Self-invoices for all RCM supplies
6. GSTR-3B acknowledgements
7. Annual true-up calculation
8. GSTR-9 filing acknowledgement
9. GSTR-9C report (if applicable)

**Electronic storage**: Cloud backup of all documents is strongly recommended. GST proceedings can commence up to 5 years after the relevant year (Section 74 — extended period for suspected fraud).

---

## Common GSTR-9 Reporting Errors in Apportionment

| Error | Impact | Correction |
|-------|--------|-----------|
| Monthly Te amounts not totalled in Table 7A | Under-reporting in GSTR-9; GSTR-9C qualification | Add cumulative Te from Monthly Register to Table 7A |
| Blocked ITC included in Table 7A (instead of Table 7F) | Wrong classification | Blocked ITC → Table 7F (ineligible); Rule 43 Te → Table 7A (reversed) |
| Annual true-up not performed | GSTR-9 may not reflect actual annual ratio | Compute annual actual E/F and compare to sum of monthly Te |
| Table 6B (additional ITC) not claimed when over-reversed | Revenue loss for taxpayer | Compute over-reversal; claim in GSTR-9 Table 6B |
| GSTR-9C auditor not given apportionment workbook | Auditor's qualified certificate creates risk | Prepare and share the ITC working paper |

---

## **[MAHARASHTRA-SPECIFIC]** Maharashtra GST Portal — State GSTR-9 Specifics
{law_reference: "Maharashtra SGST Rules; Maharashtra e-filing guidelines"}

Maharashtra SGST GSTR-9 filing follows the same format as CGST GSTR-9. However:
1. **SGST-specific turnover**: The E/F ratio for Maharashtra GSTIN uses only Maharashtra-state turnover. Entities with multi-state registrations should ensure they do not inadvertently use pan-India figures.
2. **Maharashtra SGST audit proceedings**: After GSTR-9 filing, Maharashtra may issue scrutiny notices comparing GSTR-9 Table 7A amounts against industry benchmarks. Unusual ratios (very high or very low Te relative to industry peers) attract scrutiny.
3. **Digital evidence**: Maharashtra's e-assessment platform requires uploading documents directly on the portal. Pre-prepare digital copies of the Monthly ITC Register and annual true-up calculation for upload readiness.

---

## Cross-References
> **See Also — Step-by-Step Implementation:** For the monthly workflow producing the data that goes into these registers, see [05_Apportionment_Step_by_Step.md]
> **See Also — Audit and Compliance:** For what auditors and department look for in apportionment records, see [10_Apportionment_Audit_and_Compliance.md]
> **See Also — Methods and Calculations:** For the formula behind the Te calculation, see [04_Apportionment_Methods_Calculations.md]
