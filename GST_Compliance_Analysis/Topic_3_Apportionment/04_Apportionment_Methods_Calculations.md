# ITC Apportionment — Methods and Worked Calculations
{complexity_level: "Advanced"}
{topic: "ITC Apportionment"}
{law_reference: "Rule 43 CGST Rules, 2017; Section 17(2)–(3) CGST Act, 2017"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## The Standard Formula — Rule 43(1)(d)
{law_reference: "Rule 43(1)(d) CGST Rules, 2017"}

```
Ineligible common ITC (Te) = T3 × E / F

Where:
  T3 = Total common ITC (after removing T1 and T2)
  E  = Aggregate value of exempt supplies during the period
  F  = Total turnover in the state during the period

Eligible common ITC = T3 − Te = T3 × (1 − E/F) = T3 × (Taxable Turnover / F)
```

**Net claimable ITC = T1 + (T3 × Taxable Turnover / F)**

---

## Worked Example A — Legal Services Firm (40% Taxable / 60% Exempt)
{law_reference: "Rule 43(1)(d); Section 17(2)"}

### Facts
- **Business**: A law firm providing commercial litigation (taxable, 18% GST) and charitable/public trust legal services (exempt)
- **Monthly turnover**: ₹50,00,000 total
  - Commercial litigation: ₹20,00,000 (40%)
  - Trust legal services: ₹30,00,000 (60%)
- **Common ITC** (office rent, utilities, IT, general admin): ₹18,000/month GST

### Calculation

**Step 1: Identify T1, T2, T3**
- T1 (exclusively taxable): ₹0 (no inputs exclusively for litigation only)
- T2 (exclusively exempt): ₹0 (no inputs exclusively for trust work only)
- T3 (common): ₹18,000

**Step 2: Apply E/F Ratio**
- E (exempt turnover) = ₹30,00,000
- F (total turnover) = ₹50,00,000
- Ratio: E/F = 30/50 = 60%

**Step 3: Compute Te (ineligible)**
```
Te = ₹18,000 × 60% = ₹10,800
```

**Step 4: Eligible ITC**
```
Eligible ITC = ₹18,000 − ₹10,800 = ₹7,200
```

Or directly:
```
Eligible ITC = ₹18,000 × 40% = ₹7,200
```

### GSTR-3B Reporting
| Table | Amount | Description |
|-------|--------|-------------|
| 4A(5) | ₹18,000 | Total common ITC claimed initially |
| 4B(1) | ₹10,800 | Rule 43 reversal (Te) |
| Net ITC | ₹7,200 | Effective claimable ITC |

### Annual Impact
₹7,200/month × 12 = **₹86,400/year** ITC claimable  
₹10,800/month × 12 = **₹1,29,600/year** ITC reversed (treated as cost)

---

## Worked Example B — CA Firm (70% Taxable / 30% Exempt)
{law_reference: "Rule 43(1)(d); Section 17(2)"}

### Facts
- **Business**: XYZ & Co. — Chartered Accountants
  - Statutory audit, tax advisory, compliance: **70% of turnover** (taxable)
  - Trust formation, FCRA advisory, exempt charity advisory: **30% of turnover** (exempt)
- **Monthly common inputs** (office rent + utilities + admin):

| Input | GST Paid | Classification |
|-------|---------|---------------|
| Office rent | ₹18,000 | T3 (common) |
| Electricity | ₹2,700 | T3 (common) |
| Internet | ₹900 | T3 (common) |
| Accounting software | ₹1,440 | T3 (common) |
| **Total T3** | **₹23,040** | |

- **T1 inputs** (exclusively taxable): Audit software ₹3,600; specific client travel ₹2,160 = ₹5,760
- **T2 inputs** (exclusively exempt): FCRA filing portal subscription ₹360 = ₹360

### Calculation

**Step 1: T1 = ₹5,760 (full ITC)**

**Step 2: T2 = ₹360 (no ITC — cost)**

**Step 3: T3 = ₹23,040**

**Step 4: Apply E/F Ratio**
- E/F = 30/70+30 = 30% (30% exempt of total)
- Alternatively: Taxable/Total = 70%

**Step 5: Compute**
```
Te = ₹23,040 × 30% = ₹6,912
Eligible from T3 = ₹23,040 − ₹6,912 = ₹16,128
```

**Step 6: Total Claimable ITC**
```
T1 + Eligible T3 = ₹5,760 + ₹16,128 = ₹21,888
```

### Cross-Topic Integration: RCM Layer
This month, the firm also received services from an unregistered consultant:
- Consulting fee: ₹2,00,000; RCM @ 18% = ₹36,000
- RCM paid from Electronic Cash Ledger: ₹36,000
- Section 17(5) check: consulting services are NOT blocked
- This ₹36,000 is now eligible ITC
- Attribution: the consultant worked 70% on taxable audit matters, 30% on exempt trust matters
- If attribution is clear → T1: ₹25,200; T2: ₹10,800
- If not clearly attributable → T3: ₹36,000 × 70% = ₹25,200 eligible; ₹10,800 reversed

**Total ITC after RCM integration:**
```
₹21,888 (regular) + ₹25,200 (RCM-eligible) = ₹47,088/month
```

---

## Worked Example C — Trading Company (80% Taxable / 20% Exempt — Gold)
{law_reference: "Rule 43(1)(d); Section 17(2)"}

### Facts
- **Business**: Jewellery trading company selling:
  - Manufactured jewellery (GST @ 3%): 80% of turnover
  - Raw gold bars (exempt — Schedule III/notification): 20% of turnover
- **Total monthly turnover**: ₹5,00,00,000 (₹5 crore)
  - Taxable jewellery: ₹4,00,00,000
  - Exempt gold: ₹1,00,00,000
- **Common ITC**: Warehouse rent ₹1,00,000 × 18% = ₹18,000 GST; electricity ₹2,50,000 × 18% = ₹45,000; security ₹1,50,000 × 18% = ₹27,000; total T3 = ₹90,000/month

### Calculation

**E/F Ratio**:
- E = ₹1,00,00,000 (exempt gold)
- F = ₹5,00,00,000 (total)
- Ratio = 20%

**Te = ₹90,000 × 20% = ₹18,000**

**Eligible T3 ITC = ₹90,000 − ₹18,000 = ₹72,000/month**

**Annual common ITC eligible = ₹72,000 × 12 = ₹8,64,000**

### If Blocked ITC Is Also Present
Suppose the company also has:
- Delivery van (≤13 seats) service and insurance: GST ₹4,500 → Section 17(5)(a) blocked

**Corrected calculation**:
1. Remove blocked ITC first: ₹4,500 blocked; does not enter T3
2. T3 = ₹90,000 (unchanged — the van ITC was separate, already excluded)
3. Eligible from T3 = ₹72,000 (as above)
4. Total: ₹72,000 eligible + ₹4,500 blocked (cost) = Total ITC received was ₹94,500; ₹72,000 claimable; ₹22,500 not claimable (₹18,000 Te reversal + ₹4,500 blocked)

---

## Worked Example D — Capital Goods Apportionment
{law_reference: "Rule 43 — capital goods; Section 17(2)"}

### Facts
- **Asset**: Industrial scanner used for both taxable inspection services (65%) and exempt calibration certificates (35%)
- **Purchase**: ₹25,00,000 + GST ₹4,50,000 (18%)
- **Useful life**: 5 years (60 months)
- **Monthly ratio**: 65% taxable / 35% exempt (stable across the 5-year period)

### Calculation

**Monthly ITC component:**
```
₹4,50,000 / 60 = ₹7,500/month
```

**Monthly Rule 43 reversal:**
```
Te = ₹7,500 × 35% = ₹2,625/month
```

**Monthly eligible ITC:**
```
₹7,500 − ₹2,625 = ₹4,875/month
```

**Over 60 months:**
- Total eligible ITC: ₹4,875 × 60 = **₹2,92,500**
- Total reversed (cost): ₹2,625 × 60 = **₹1,57,500**
- Total ITC: ₹4,50,000 ✓

### If Ratio Changes in Year 3
In Month 37, the business mix changes to 80% taxable / 20% exempt:
- New monthly Te = ₹7,500 × 20% = ₹1,500
- New monthly eligible = ₹7,500 − ₹1,500 = ₹6,000
- For months 37–60: this new ratio applies
- No retrospective adjustment for months 1–36

---

## Worked Example E — Bank (Interest + Fee Income)
{law_reference: "Rule 43 — banking sector; CBIC guidance"}

### Facts
- **Business**: Regional cooperative bank
  - Fee income (processing fees, transaction charges): ₹50,00,000/year (20% of total)
  - Interest income (exempt): ₹2,00,00,000/year (80% of total)
  - Total turnover: ₹2,50,00,000/year
- **Common ITC**: Branch premises rent ₹5,40,000/year GST; IT systems ₹3,60,000/year; branch security ₹1,80,000/year; total T3 = ₹10,80,000/year

### Calculation (Annual for simplicity)
```
E/F = ₹2,00,00,000 / ₹2,50,00,000 = 80%
Te = ₹10,80,000 × 80% = ₹8,64,000
Eligible ITC = ₹10,80,000 × 20% = ₹2,16,000
```

**Impact**: The bank can claim only ₹2,16,000 ITC annually. ₹8,64,000 is a cost — added to operating expenses.

---

## Alternative Attribution Methods
{law_reference: "Rule 43 — actual attribution where demonstrable"}

### Activity-Based Allocation
Where a business maintains detailed cost centre records:
- Each cost centre tagged as taxable, exempt, or shared
- Shared costs allocated by cost centre activity ratios (headcount, floor space, machine hours)
- More accurate than turnover-ratio method

**Requirements:**
- Documented cost accounting system
- Regular review and update of allocation ratios
- Auditor certification confirming the allocation is reasonable
- CBIC has not formally prescribed activity-based method but has not prohibited it

**Risk:** Maharashtra SGST officers may challenge activity-based allocation if it produces a significantly higher ITC claim than the turnover-ratio method. Maintain documentation showing the allocation is not manipulative.

### Floor-Space Ratio Method
For businesses where common facility costs (rent, electricity) can be allocated by floor space used for each activity:
- Measure floor space used for taxable vs exempt activities
- Allocate common facility costs proportionally
- Can produce a different result than turnover ratio — acceptable where documented

**Example**: 600 sq ft office; 420 sq ft used for taxable litigation (70%), 180 sq ft for exempt trust advisory (30%). Rent ITC apportioned 70%/30% by floor space.

---

## Summary: Method Comparison

| Method | Complexity | Accuracy | Risk | Best For |
|--------|-----------|----------|------|---------|
| Standard turnover ratio (Rule 43) | Low | Moderate | Low | Most businesses |
| Activity-based (cost centres) | High | High | Medium | Large multi-division entities |
| Floor-space ratio | Medium | High for facility costs | Medium | Single-premises businesses |
| Actuals-based (direct attribution) | Very High | Highest | Low (if documented) | Businesses with clear demarcation |

---

## Common Calculation Errors

| Error | Correct Approach |
|-------|-----------------|
| Including zero-rated exports in E (ineligible) | Exports go in the taxable numerator — NOT in E |
| Using pan-India turnover instead of state-wise | Rule 43 uses state-wise (GSTIN-wise) turnover |
| Excluding non-GST supplies from F | Non-GST supplies (petroleum, alcohol) must be included in F |
| Applying ratio to T1 inputs (directly taxable) | Only T3 (common) inputs are apportioned |
| Forgetting to update ratio when business changes | Ratio must reflect actual current period turnover |
| Including blocked ITC in T3 pool | Block first; only eligible ITC enters T1/T2/T3 classification |

---

## Cross-References
> **See Also — Step-by-Step Guide:** For sequential monthly implementation, see [05_Apportionment_Step_by_Step.md]
> **See Also — Blocked ITC Interaction:** For the mandatory removal of blocked ITC before calculating T3, see [07_Apportionment_Blocked_ITC_Interaction.md]
> **See Also — Advanced Scenarios:** For integrated multi-input, multi-restriction worked scenarios, see [08_Apportionment_Scenarios_Advanced.md]
