# ITC Apportionment — Amendments, Circulars, and Clarifications (2017–May 2026)
{complexity_level: "Advanced"}
{topic: "ITC Apportionment"}
{law_reference: "Rule 43 CGST Rules, 2017; Section 17(2)–(3) CGST Act; CBIC Circulars"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## Original Framework (July 2017)
{law_reference: "Rule 43 CGST Rules, 2017 — original"}
{amendment_date: "01-Jul-2017"}

Rule 43 was enacted with the CGST Rules in June 2017 and came into force on 1 July 2017 alongside the CGST Act. The original Rule 43 established:

1. **The E/F formula**: Ineligible common ITC = T3 × (E/F) where E = exempt supply and F = total turnover in the state
2. **Capital goods 60-month method**: Capital goods ITC spread over 5 years with monthly apportionment
3. **Companion Rule 42**: Covering the general input/input service apportionment for the same E/F calculation
4. **Section 17(3)** definition of "exempt supply" for Rule 43 purposes (broader than ordinary exempt)

---

## Amendment 1: Insertion of Turnover Clarification (Notification 49/2019)
{law_reference: "Central Tax Notification No. 49/2019-CT dated 09-Oct-2019"}
{amendment_date: "09-Oct-2019"}

### What Changed
Rule 43 was amended to clarify that "turnover in the state" for the E/F ratio means:
- **Aggregate turnover of the GSTIN** (registration-specific, state-specific)
- Does **not** include turnover of other GSTINs of the same PAN in other states
- Applicable for each GSTIN separately

### Practical Impact
Multi-state businesses cannot use pan-India turnover to compute the E/F ratio. A company with a Mumbai GSTIN and a Delhi GSTIN must compute two separate E/F ratios — one per GSTIN, using only that GSTIN's turnover.

**Before clarification**: Some entities were using total company turnover (pan-India), which diluted the E/F ratio by including high-taxable-ratio turnover from other states.

---

## Amendment 2: Treatment of Residual ITC on Capital Goods Post-60 Months
{law_reference: "Rule 43 Amendment — 2020"}
{amendment_date: "2020"}

### What Changed
Post-60 months (i.e., after the 5-year capital goods apportionment period), any remaining ITC on that capital good that was not claimed due to the 60-month spreading is extinguished. There is no mechanism to claim the unused portion after the 60-month window.

### Practical Tip
For capital goods with very long useful lives (>5 years), the effective ITC claim period is capped at 60 months. After that, the remaining proportionate ITC that would have been eligible in months 61+ is simply lost. Entities should track capital goods approaching month 60 to ensure all eligible ITC is claimed within the window.

---

## Amendment 3: CBIC Circular on Banking Sector — Interest Income in Denominator
{law_reference: "CBIC Circular No. 102/21/2019-GST dated 28-Jun-2019"}
{amendment_date: "28-Jun-2019"}

### Background
Banks, NBFCs, and financial entities earn significant interest income (exempt from GST). The question arose whether interest income should be included in E (exempt supply) for the Rule 43 E/F denominator.

### CBIC Position
The circular confirmed:
- Interest income from loans and advances: **included in E** — exempt financial service, must be in the denominator
- Discount on securities: **included in E** — exempt
- Dividend income: **Outside GST scope** — included in F as part of total turnover per Section 17(3)
- Fee income (processing fees, transaction charges): **taxable** — goes in the taxable numerator

### Impact on Banks
A bank with 80% interest income (exempt) and 20% fee income (taxable) can claim only 20% of common ITC (office rent, IT systems, etc.). The circular confirmed this was the legislative intent.

---

## Amendment 4: CBIC Circular on Common Services in Real Estate Sector
{law_reference: "CBIC Circular No. 151/07/2021-GST dated 17-Jun-2021"}
{amendment_date: "17-Jun-2021"}

### Background
Real estate developers providing both taxable (under-construction flats) and exempt (post-OC flats, land sales) supplies needed clarity on apportionment of common services.

### CBIC Position
- Common ITC (project management, marketing, admin) for a project that has both taxable and exempt units: must be apportioned under Rule 43
- Land value is to be excluded from both numerator and denominator (land sale is outside GST scope per Schedule III — excluded from supply definition)
- Construction costs: if for specific taxable units → T1; if for common areas/structure → T3 (common)

### Maharashtra Application
Maharashtra real estate developers were among the early recipients of scrutiny notices under this circular. Maharashtra SGST officers specifically verify whether developers are apportioning common project costs.

---

## Amendment 5: Finance Act 2021 — Retrospective Impact on Apportionment
{law_reference: "Finance Act, 2021 — Section 17(5)(c)/(d) Explanation"}
{amendment_date: "01-Jan-2022 (effective retrospective from 01-Jul-2017)"}

### Impact on Apportionment
The Finance Act 2021 retrospective amendment to Section 17(5)(c)/(d) (capitalised renovation = construction = blocked) indirectly affected Rule 43:
- ITC on capitalised renovations that was previously included in the T3 apportionment pool must be retroactively removed
- Entities that had been apportioning renovation ITC (claiming, say, 70% of renovation ITC) now need to reverse 100% of that ITC (since it's blocked, not just apportionable)
- **The reversal demand is larger than expected**: instead of reversing the 30% (Te) that would be reversed under Rule 43, the entire 100% must be reversed

**Example**:
- Renovation ITC: ₹1,44,000 (capitalised)
- Under Rule 43 (wrong treatment, before Finance Act 2021 clarity): claim 70% = ₹1,00,800; reverse 30% = ₹43,200
- Correct treatment (after Finance Act 2021): block 100% = ₹1,44,000; reserve ₹1,44,000 (+ interest)
- **Demand exposure**: ₹1,00,800 (excess ITC claimed) + interest at 18% p.a.

---

## Amendment 6: CBIC Clarification on Exports in E/F Ratio (Circular 173/05/2022)
{law_reference: "CBIC Circular No. 173/05/2022-GST dated 06-Jul-2022"}
{amendment_date: "06-Jul-2022"}

### What Changed
The circular explicitly confirmed that:
- **Exports** (zero-rated) are **NOT** "exempt supplies" for Rule 43 denominator purposes
- Exports count in the **taxable supply numerator** of the E/F calculation
- This was already the legislative position, but the circular resolved disputes where exporters were including their export turnover in E (which would have reduced their ITC)

### Practical Impact for Exporters
An exporter with:
- Domestic taxable sales: ₹50 lakh
- Exports: ₹50 lakh (zero-rated)
- Exempt domestic sales: ₹20 lakh

Correct E/F ratio:
```
E = ₹20 lakh (only the exempt domestic sales)
F = ₹1,20,00,000 (total)
E/F = 16.7%; Te = T3 × 16.7%
Eligible = T3 × 83.3%
```

Wrong approach (including exports in E):
```
E = ₹70 lakh (exempt + exports)
F = ₹1,20,00,000
E/F = 58.3%; Te = T3 × 58.3%
Eligible = T3 × 41.7% ← Significantly under-claiming ITC
```

---

## Amendment 7: Finance Act 2024 — Section 16(2)(aa) and Apportionment
{law_reference: "Finance Act, 2024 — Section 16(2)(aa) CGST Act"}
{amendment_date: "Budget 2024-25"}

### How It Affects Apportionment
Section 16(2)(aa) tightened the matching requirement — ITC can be claimed only for invoices reflected in GSTR-2B. This affects the T3 pool:
- If a supplier has not filed GSTR-1, the invoice does not appear in GSTR-2B
- That ITC cannot enter the T3 pool for apportionment
- Entities cannot claim even the proportionate eligible portion of unmatched ITC

**Reconciliation impact**: GSTR-2B becomes the hard ceiling on the T3 pool for each month.

---

## Amendment 8: Finance Act 2025 — Clarification on Provisional vs Actual Ratio
{law_reference: "Finance Act, 2025"}
{amendment_date: "2025-26 Budget"}

Finance Act 2025 clarified (via amended Rule 43 or accompanying circular):
- The **annual true-up** at GSTR-9 stage is mandatory where provisional ratios were used during the year
- Where annual true-up reveals under-reversal, interest under Section 50 runs from the month of under-reversal (not from GSTR-9 filing date)
- This removed uncertainty: entities cannot argue that interest runs only from GSTR-9 filing if they knew the actual ratio differed

---

## Rule 43 vs Rule 42: Summary of Differences
{law_reference: "Rule 42 + Rule 43 CGST Rules, 2017"}

| Feature | Rule 42 | Rule 43 |
|---------|---------|---------|
| Applies to | Inputs and input services | Capital goods |
| Calculation period | Month-by-month | 60-month spread |
| ITC claimed | In the month of receipt | Over 60 months |
| True-up mechanism | Annual in GSTR-9 | Annual in GSTR-9 |
| E/F ratio | Same formula | Same formula, applied monthly |
| Capital goods reversal | Not applicable | Monthly: 1/60 × total ITC × E/F |

In practice, most practitioners refer to "Rule 43 apportionment" to cover both the Rule 42 (inputs/input services) and capital goods calculations. The formula is the same — the timing differs.

---

## Summary Table: Apportionment Amendment History

| Year | Amendment/Circular | Key Change | Impact |
|------|-------------------|-----------|--------|
| Jul 2017 | CGST Rules — Rule 43 | Original E/F formula enacted | Apportionment framework created |
| Jun 2019 | Circular 102/21/2019 | Banking sector: interest income in E | Banks must include interest in denominator |
| Oct 2019 | Notification 49/2019 | Turnover = GSTIN-specific (state-wise) | Multi-state entities use state-wise E/F |
| Jun 2021 | Circular 151/07/2021 | Real estate: common ITC apportionment | Developer project ITC must be apportioned |
| Jan 2022 (retro) | Finance Act 2021 | Capitalised renovation ITC = blocked | Previously apportioned renovation ITC demands |
| Jul 2022 | Circular 173/05/2022 | Exports = taxable for E/F ratio | Exporters' ITC position clarified |
| 2024 | Finance Act 2024 | GSTR-2B matching required | Unmatched invoices cannot enter T3 |
| 2025 | Finance Act 2025 | Interest runs from month of under-reversal | Annual true-up under-reversals attract interest |

---

## **[MAHARASHTRA-SPECIFIC]** Maharashtra SGST Specific Positions on Apportionment
{law_reference: "Maharashtra SGST Rules; Maharashtra AAR; Maharashtra AAAR"}

### Maharashtra Position 1: Interest Income
Maharashtra SGST officers apply Circular 102/21/2019 rigorously. Interest income from loans, FDs, and inter-company lending is always included in E. Maharashtra AARs have confirmed this position multiple times. There is no deviation from CBIC here.

### Maharashtra Position 2: Non-GST Supplies in Denominator
Maharashtra officers have been particularly vigilant about ensuring petroleum products, alcohol, and other non-GST supplies appear in F (and are allocated to E as non-taxable). Some Maharashtra taxpayers had been omitting these from both E and F; Maharashtra SGST scrutiny notices have demanded correction.

### Maharashtra Position 3: Common Area ITC (Commercial Buildings)
As noted in Topic 2, Maharashtra SGST has taken a stricter position on commercial building common area ITC. The CBIC position limits the block to residential complexes; Maharashtra has sometimes extended this to commercial properties. This creates a state-specific dispute on whether common area electricity for commercial buildings should:
- Enter T3 (CBIC position for commercial) → apportioned; or
- Be blocked entirely (Maharashtra officer position)

**Recommendation**: For Maharashtra entities, treat commercial building common area electricity conservatively — either exclude from T3 or be prepared to defend T3 inclusion with the CBIC circular.

---

## Cross-References
> **See Also — Legal Framework:** For the full Rule 43 text and Section 17(2)/(3), see [02_Apportionment_Legal_Framework.md]
> **See Also — Shared Amendments Timeline:** For consolidated amendment history across all three topics, see [../Shared/Amendments_Timeline_May_2026.md]
> **See Also — Disputed Areas:** For unresolved conflicts in apportionment law as of May 2026, see [../Shared/Disputed_Ambiguous_Areas.md]
