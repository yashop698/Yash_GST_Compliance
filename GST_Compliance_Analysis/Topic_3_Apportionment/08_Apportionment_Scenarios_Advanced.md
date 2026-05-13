# ITC Apportionment — Advanced Scenarios
{complexity_level: "Advanced"}
{topic: "ITC Apportionment"}
{law_reference: "Section 17(2) CGST Act, 2017; Rule 43 CGST Rules, 2017"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## Scenario 1 (Isolated): CA Firm — Monthly Rent Apportionment
{law_reference: "Rule 43(1)(d); Section 17(2)"}

### Facts
- XYZ & Co., Chartered Accountants
- Monthly turnover: ₹10,00,000 (70% taxable statutory audit; 30% exempt trust advisory)
- Office rent: ₹2,00,000/month + GST ₹36,000

### Analysis
Section 17(5) check: Office rent is NOT blocked. No specific category applies.

T-classification: Office is used for all services — T3 (common).

E/F ratio:
```
E = ₹3,00,000 (exempt trust advisory)
F = ₹10,00,000 (total)
E/F = 30%
```

Rule 43 calculation:
```
Te = ₹36,000 × 30% = ₹10,800 (reversed in GSTR-3B Table 4B(1))
Eligible ITC = ₹36,000 − ₹10,800 = ₹25,200
```

Annual impact:
```
Eligible: ₹25,200 × 12 = ₹3,02,400/year
Reversed (cost): ₹10,800 × 12 = ₹1,29,600/year
```

**Bottom line**: XYZ & Co. can claim ₹25,200/month ITC on office rent. ₹10,800 is a cost attributable to the exempt practice.

---

## Scenario 2 (Isolated): Trading Company — Gold and Standard Goods
{law_reference: "Rule 43(1)(d); Section 17(2)"}

### Facts
- ABC Gems & Jewels, Mumbai
- Monthly turnover: ₹2,00,00,000
  - Hallmarked jewellery @ 3% GST: ₹1,60,00,000 (80%)
  - Gold coins/bars (exempt): ₹40,00,000 (20%)
- Common warehouse electricity: ₹5,00,000/month × 18% = ₹90,000 GST

### Analysis
Section 17(5) check: Warehouse electricity is NOT blocked.

T-classification:
- Warehouse is shared for storage of both jewellery (taxable) and gold coins (exempt) → T3

E/F ratio:
```
E = ₹40,00,000
F = ₹2,00,00,000
E/F = 20%
```

Rule 43 calculation:
```
Te = ₹90,000 × 20% = ₹18,000
Eligible = ₹90,000 × 80% = ₹72,000
```

Annual common ITC: ₹72,000 × 12 = **₹8,64,000/year** eligible.

---

## Scenario 3 (Integrated — Full Chain): Professional Firm with RCM and Blocked ITC
{law_reference: "Section 9(3)/(4) + Section 17(5) + Rule 43 — all three topics integrated"}

### Facts
PQR Consultants — tax and regulatory advisory firm (Mumbai, Maharashtra)
- Monthly output mix: 65% taxable / 35% exempt
- Monthly total turnover: ₹15,00,000

**Inward supplies this month:**

| # | Description | Amount | GST | Notes |
|---|------------|--------|-----|-------|
| 1 | Office rent | ₹1,00,000 | ₹18,000 | Registered landlord |
| 2 | Electricity | ₹30,000 | ₹5,400 | DISCOM |
| 3 | Unregistered consultant fee | ₹50,000 | Nil (unregistered) | RCM @ 18% = ₹9,000 |
| 4 | Vehicle fuel (company car ≤13 seats) | ₹10,000 | ₹1,800 | Car for MD transport |
| 5 | Meeting room food for client event | ₹5,000 | ₹900 | Catered lunch |
| 6 | Legal retainer (registered firm) | ₹20,000 | ₹3,600 | Mixed use |
| 7 | Audit software (taxable engagements only) | ₹10,000 | ₹1,800 | Only for taxable work |

### Step-by-Step Analysis

**Item 3 — RCM Processing (before ITC classification):**
- RCM @ 18% on ₹50,000 = ₹9,000
- Pay ₹9,000 from Electronic Cash Ledger
- Issue self-invoice dated this month
- ITC on RCM: ₹9,000 — now eligible for credit (subject to Section 17(5) check)
- Section 17(5) check: consulting services are NOT blocked → eligible ITC

**Section 17(5) Check for All Items:**
| Item | Section 17(5) Block? | Reason |
|------|---------------------|--------|
| Office rent | NO | Not in any blocked category |
| Electricity | NO | Not in any blocked category |
| Consultant RCM | NO | Professional services not blocked |
| Vehicle fuel | YES | Section 17(5)(a) — motor vehicle ≤13 seats |
| Meeting room food | YES | Section 17(5)(b)(i) — food and beverages |
| Legal retainer | NO | Not in any blocked category |
| Audit software | NO | Not in any blocked category |

**T-Classification of Eligible Inputs:**
| Item | ITC Amount | Classification | Reason |
|------|-----------|---------------|--------|
| Office rent | ₹18,000 | T3 (common) | Serves all activities |
| Electricity | ₹5,400 | T3 (common) | Serves entire office |
| Consultant RCM | ₹9,000 | T3 (common) | Work for both types |
| Legal retainer | ₹3,600 | T3 (common) | Mixed matters |
| Audit software | ₹1,800 | T1 (directly taxable) | Documented — taxable engagements only |
| **Totals** | T1: ₹1,800; T3: ₹36,000 | | |
| Vehicle fuel | ₹1,800 | BLOCKED | Section 17(5)(a) |
| Meeting food | ₹900 | BLOCKED | Section 17(5)(b)(i) |

**E/F Ratio:**
```
E = ₹5,25,000 (35% of ₹15,00,000)
F = ₹15,00,000
E/F = 35%
```

**Rule 43 Calculation:**
```
T3 total = ₹36,000
Te = ₹36,000 × 35% = ₹12,600
Eligible from T3 = ₹36,000 × 65% = ₹23,400
```

**Final ITC Summary:**
```
T1 (audit software)        = ₹1,800  (100% eligible)
T3 eligible                = ₹23,400
Total claimable ITC        = ₹25,200
Te (Rule 43 reversal)      = ₹12,600 (cost)
Blocked (cost)             = ₹1,800 + ₹900 = ₹2,700
T2 cost (no T2 this month) = ₹0
```

**GSTR-3B Tables:**
```
Table 4A(3) [RCM ITC]:  ₹9,000   (consultant RCM — eligible, enters T3)
Table 4A(5) [Other ITC]: ₹27,000  (T1 + T3 from regular invoices: ₹1,800 + ₹18,000 + ₹5,400 + ₹1,800 = ₹27,000)
Table 4B(1) [Rule 43]:   ₹12,600
Table 4D(2) [Blocked]:   ₹2,700   (₹1,800 vehicle + ₹900 food — informational)
Net ITC (4A − 4B):       ₹36,000 − ₹12,600 = ₹23,400 + ₹1,800 T1 = ₹25,200 ✓
```

**Monthly cost summary:**
```
Total GST paid (all invoices + RCM): ₹39,600
ITC claimed: ₹25,200 (reduces output tax liability)
ITC reversed (Te — Rule 43): ₹12,600 (cost — 35% of common inputs)
Blocked (cost — Section 17(5)): ₹2,700 (added to vehicle and food expenses)
```

---

## Scenario 4 (Edge Case): Year-Over-Year Ratio Change
{law_reference: "Rule 43 — annual true-up; GSTR-9"}

### Facts
A healthcare provider:
- FY 2024-25: 60% taxable (elective procedures) / 40% exempt (clinical treatment)
- FY 2025-26: Due to expansion, 75% taxable / 25% exempt
- Common ITC (equipment leases, utilities): ₹12,00,000/year

### FY 2024-25 Calculation
```
Eligible: ₹12,00,000 × 60% = ₹7,20,000
Reversed: ₹12,00,000 × 40% = ₹4,80,000
```
GSTR-9 declares ₹4,80,000 as total Rule 43 reversal.

### FY 2025-26 Calculation (Changed Ratio)
```
Eligible: ₹12,00,000 × 75% = ₹9,00,000
Reversed: ₹12,00,000 × 25% = ₹3,00,000
```

### Key Questions

**Q1: Can FY 2024-25 be revised retrospectively?**
No. GSTR-9 for FY 2024-25 is final once filed. The ratio of 60/40 applied prospectively to the months of FY 2024-25 cannot be revised. The change in business mix in FY 2025-26 does not retroactively change the prior year's calculations.

**Q2: Is there a true-up mechanism within a year?**
Yes — the provisional monthly ratio (using prior month's turnover) is trued up in GSTR-9. Within FY 2025-26, if some months used a provisional 65/35 ratio and the actual annual ratio is 75/25, the GSTR-9 true-up would claim additional ITC.

**Q3: Can additional ITC from the true-up be claimed?**
The additional ITC from the annual true-up in GSTR-9 can be claimed provided:
1. The total ITC does not exceed GSTR-2B amounts
2. The claim is within the time limit under Section 16(4)
3. The claim is supported by documentation

---

## Scenario 5 (Edge Case): Capital Goods Mid-Year Sale
{law_reference: "Rule 43 — capital goods; Section 18(6)"}

### Facts
A company purchases a server (₹5,00,000 + GST ₹90,000) for mixed use (60% taxable / 40% exempt). After 24 months, the server is sold.

### During the 24 Months (₹90,000 ITC over 60 months)
```
Monthly component: ₹90,000 / 60 = ₹1,500
Monthly eligible: ₹1,500 × 60% = ₹900
Monthly reversed (Te): ₹1,500 × 40% = ₹600

Over 24 months:
ITC claimed: ₹900 × 24 = ₹21,600
Reversed: ₹600 × 24 = ₹14,400
```

### At the Time of Sale (Section 18(6))
When a capital good is sold, Section 18(6) requires the higher of:
- **ITC attributable to the remaining life** of the asset (months 25–60 = 36 months)
- **5% of the sales value** per quarter

ITC for remaining 36 months (if ratio were to continue at 60/40):
```
Remaining ITC = ₹1,500 × 36 = ₹54,000 (total component)
Of which eligible portion = ₹54,000 × 60% = ₹32,400
Ineligible (already being reversed monthly) = ₹54,000 × 40% = ₹21,600
ITC to reverse at sale = ₹32,400 (the eligible portion that was claimed for the remaining months)
```

Compare with 5% per quarter of sale price. Reverse the higher amount.

---

## Scenario 6 (Edge Case): RCM Supply with Partial Attribution
{law_reference: "Section 9(3) CGST Act; Rule 43"}

### Facts
A law firm (40% taxable / 60% exempt) receives a GTA service:
- 10 containers of documents moved to archive facility
- 6 containers for taxable litigation matters (T1)
- 4 containers for exempt trust matters (T2)
- GTA freight: ₹1,00,000 + RCM @ 5% = ₹5,000

### Analysis
- RCM: ₹5,000 paid from ECL
- Section 17(5) check: GTA freight is NOT blocked (it's for goods transport, not a blocked category)
- Attribution: Can we directly attribute?
  - 6 containers → T1: ₹5,000 × 60% = ₹3,000 (T1)
  - 4 containers → T2: ₹5,000 × 40% = ₹2,000 (T2 — no ITC)
  - T1: ₹3,000 ITC claimed; T2: ₹2,000 ITC cost

**Alternative if attribution not possible** (all 10 containers mixed archiving):
- T3: ₹5,000 → eligible = ₹5,000 × 40% = ₹2,000; reversed = ₹5,000 × 60% = ₹3,000

**Lesson**: Direct attribution (when demonstrable) produces better ITC outcome than T3 apportionment in businesses where exempt ratio > 50%.

---

## **[MAHARASHTRA-SPECIFIC]** Maharashtra Integrated Scenario

**Fact Pattern**: Tata Realty Ltd. (hypothetical), Mumbai — commercial property developer
- Develops and sells both under-construction flats (taxable) and provides commercial leasing (taxable 18%) and residential leasing (exempt)
- Output mix this year: 50% under-construction flat sales, 30% commercial leasing, 20% residential leasing

**Apportionment analysis:**
- Taxable: 50% (flats under construction) + 30% (commercial leasing) = 80%
- Exempt: 20% (residential leasing)
- Common ITC (project management office, sales team, IT): T3 pool
- Eligible T3 = T3 × 80%

**Maharashtra SGST complexity**: Real estate developers often face scrutiny on:
1. Whether construction costs for residential units are blocked under Section 17(5)(d) (own-account construction)
2. Whether common infrastructure costs can enter the T3 pool or are all blocked
3. The distinction between "own-account" construction (blocked) and "for sale" construction (eligible for ITC since it's for taxable supply)

**Recommended Maharashtra practice**: Engage a GST specialist for project-by-project ITC eligibility determination. Maintain a project-wise ITC register distinguishing blocked (for own use) from eligible (for taxable sale) from common (for the sales/admin function).

---

## Cross-References
> **See Also — Blocked ITC Interaction:** For the detailed mechanics of blocking before apportionment, see [07_Apportionment_Blocked_ITC_Interaction.md]
> **See Also — RCM Scenarios:** For the RCM topic's perspective on the CA firm master scenario, see [../Topic_1_RCM/07_RCM_Scenarios_Advanced.md]
> **See Also — Practical Monthly:** For tracking and documentation tools, see [09_Apportionment_Practical_Monthly.md]
