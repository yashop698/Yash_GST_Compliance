# ITC Apportionment — Interaction with Blocked ITC (Section 17(5))
{complexity_level: "Advanced"}
{topic: "ITC Apportionment"}
{law_reference: "Section 17(5) CGST Act, 2017; Rule 43 CGST Rules, 2017"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## The Fundamental Sequencing Rule
{law_reference: "Section 17(5) read with Rule 43 CGST Rules, 2017"}

> **Section 17(5) blocking must be applied FIRST, before Rule 43 apportionment.**

This is not merely a procedural preference — it is a legal requirement. Section 17(5) creates an **absolute bar** on certain ITC. Rule 43 apportionment operates only on **eligible** ITC. Blocked ITC is not eligible ITC and therefore cannot enter the Rule 43 calculation pool.

### Why the Sequence Matters: Numerical Proof

**Facts** (same scenario from the Blocked ITC Interaction file, for cross-topic consistency):
- Total inward GST: ₹1,00,000
  - Company car purchase (Section 17(5)(a)): ₹20,000 → BLOCKED
  - Audit software (exclusively for taxable): ₹10,000 → T1
  - Common inputs (rent, utilities): ₹70,000 → T3
- Output ratio: 70% taxable / 30% exempt

#### WRONG APPROACH: Apportion First, Ignore Section 17(5)

```
Total pool for apportionment = ₹1,00,000 − ₹10,000 T1 = ₹90,000
Eligible from pool = ₹90,000 × 70% = ₹63,000
Add T1 = ₹10,000
Total claimed = ₹73,000

ERROR: ₹20,000 blocked ITC is included in the common pool
       → ₹20,000 × 70% = ₹14,000 over-claimed
```

#### CORRECT APPROACH: Block First, Then Apportion

```
Step 1: Remove blocked ITC
  Eligible pool = ₹1,00,000 − ₹20,000 = ₹80,000

Step 2: Classify remaining eligible ITC
  T1 (audit software, directly taxable): ₹10,000
  T3 (common rent, utilities): ₹70,000

Step 3: Apportion T3
  Eligible T3 = ₹70,000 × 70% = ₹49,000
  Te (reversal) = ₹70,000 × 30% = ₹21,000

Step 4: Total claimable ITC
  T1 + Eligible T3 = ₹10,000 + ₹49,000 = ₹59,000

CORRECT ANSWER: ₹59,000 (not ₹73,000)
Over-claim in wrong approach: ₹14,000
```

### GSTR-3B Mapping for the Correct Approach

| Table | Amount | What It Represents |
|-------|--------|-------------------|
| Table 4A(5) | ₹80,000 | All eligible ITC (after removing blocked) — T1 + T3 |
| Table 4B(1) | ₹21,000 | Rule 43 reversal (Te) — ineligible portion of T3 |
| Table 4B(2) | ₹0 | No wrongly-claimed blocked ITC to reverse this month |
| Table 4D(2) | ₹20,000 | Blocked ITC — informational disclosure |
| **Net ITC (4A − 4B)** | **₹59,000** | **Actual claimable ITC** |

---

## Three Practical Interaction Scenarios

### Scenario A: A Single Input with Both a Block Issue and Apportionment Issue

**Facts**: An entity provides both taxable accounting services (70%) and exempt trust advisory (30%). It pays a contractor ₹2,00,000 + GST ₹36,000 for renovation work at its office.

**Analysis**:
1. Is the renovation capitalised or expensed?
   - If **capitalised** → Section 17(5)(c)/(d) → **BLOCKED entirely** → does NOT enter Rule 43
   - If **expensed** (routine maintenance) → NOT blocked → eligible → enters T3 as a common input

2. If expensed and entering T3:
   - T3 = ₹36,000 (common to all office activities)
   - Te = ₹36,000 × 30% = ₹10,800 → reversed in Table 4B(1)
   - Eligible = ₹36,000 × 70% = ₹25,200

3. If capitalised:
   - T3 = ₹0 (removed by block)
   - Table 4D(2) = ₹36,000 (informational)
   - GSTR-3B Table 4A does not include ₹36,000

**Key lesson**: The capitalisation decision (accounting policy) has a direct and significant GST consequence.

---

### Scenario B: Double-Blocked RCM Supply in a Mixed-Business Entity

**Facts**: The same entity hires an unregistered cab service for employee commute:
- Monthly cab bill: ₹30,000 (unregistered operator)
- RCM @ 5% under Section 9(4) = ₹1,500 (paid from ECL)
- Section 17(5)(b)(iii): rent-a-cab → BLOCKED

**Analysis**:
1. RCM obligation: yes — ₹1,500 paid from cash ledger
2. Section 17(5) check: rent-a-cab is blocked → ITC on ₹1,500 is blocked
3. Rule 43: does NOT apply — the ITC was blocked in Step 1

**GSTR-3B impact:**
- Table 3.1(d): ₹30,000 with ₹750 CGST + ₹750 SGST (RCM paid)
- Table 4A(3): ₹0 (ITC not claimed — blocked)
- Table 4D(2): ₹1,500 (blocked ITC — informational)

**Effective cost**: ₹30,000 (cab) + ₹1,500 (RCM tax, pure sunk cost) = ₹31,500

---

### Scenario C: Common Electricity — Partial Block + Partial Apportionment

**Facts**: A professional firm's electricity bill is ₹50,000 + GST ₹9,000:
- 40% of electricity powers a meeting room used **exclusively** for exempt client meetings (clearly attributable to exempt — T2)
- 60% powers the general office used for both taxable and exempt activities (common — T3)
- Overall firm output: 65% taxable / 35% exempt

**Analysis**:
1. Section 17(5) check: Electricity is NOT blocked.
2. Attribution analysis:
   - 40% meeting room electricity → **T2** → no ITC → ₹9,000 × 40% = ₹3,600 excluded
   - 60% general office electricity → **T3** → apportionment → ₹9,000 × 60% = ₹5,400

3. Apply Rule 43 to T3 only:
   - Te = ₹5,400 × 35% = ₹1,890
   - Eligible = ₹5,400 × 65% = ₹3,510

4. Total eligible from electricity bill = ₹3,510
5. Total ineligible = ₹3,600 (T2) + ₹1,890 (Te from T3) = ₹5,490

**Critical risk — Double-counting**: Do NOT apply Rule 43 to the T2 portion (the meeting room 40%) again. That ₹3,600 is excluded via direct attribution, not via Rule 43 reversal. Including it in Te would double-count the exclusion.

**GSTR-3B treatment:**
- Table 4A(5): ₹5,400 (only T3 portion; T2 never enters 4A)
- Table 4B(1): ₹1,890 (Rule 43 reversal on T3)
- Net electricity ITC: ₹3,510

---

## The Double-Counting Risk
{law_reference: "Section 17(5) + Section 17(2) + Rule 43"}

A specific error to avoid: if an input is blocked under Section 17(5), it is excluded **once** via the Section 17(5) block. Do NOT also include it in the Rule 43 ineligible denominator.

**Example of double-counting error:**
- Food and beverages: ₹5,400 GST → Section 17(5)(b)(i) → BLOCKED
- Wrong treatment: Claim the ₹5,400 is also ₹5,400 × 30% = ₹1,620 ineligible under Rule 43 (double-counting the exclusion, actually creating an artificial reversal that exceeds the correct amount)
- Correct treatment: ₹5,400 is 100% excluded via blocking. It does NOT enter the Rule 43 pool at all. No Rule 43 calculation needed for this input.

---

## Works Contract — Multi-Layer Interaction
{law_reference: "Section 17(5)(c) + Rule 43 + Finance Act 2021"}

Works contract ITC has three possible outcomes depending on the nature of work and the capitalisation decision:

| Work Type | Capitalised? | Section 17(5)(c) Blocked? | Enters Rule 43? |
|-----------|-------------|--------------------------|----------------|
| New building construction (own use) | YES | YES | NO |
| Extension to existing building (capitalised) | YES | YES | NO |
| Major renovation (capitalised) | YES | YES (Finance Act 2021) | NO |
| Routine repair (expensed) | NO | NO | YES — T3 pool |
| Painting/touch-up (expensed) | NO | NO | YES — T3 pool |
| Construction for resale (developer) | YES (WIP) | NO (further taxable supply) | YES — T1 |

---

## Capital Goods with Mixed Blocking and Apportionment History

Some capital goods may have different ITC treatment at different points in their life:

**Scenario**: A company buys a vehicle (≤13 seats) initially as company transport (blocked), then after 2 years registers as a cab operator and uses the same vehicle for taxable passenger transport (exception applies — transportation of passengers).

**Treatment**:
- At purchase: ITC blocked (Section 17(5)(a) — not in transportation business yet)
- After registration as cab operator: The vehicle now qualifies for the exception
- **But**: ITC is determined at the time of receipt. ITC blocked at receipt cannot be reclaimed retrospectively by changing the use of the asset.
- Prospective: Any **new** input GST (servicing, insurance) from the time of cab registration onwards may be eligible (transportation of passengers exception)
- Historical ITC: remains blocked — no mechanism for retrospective reclaim

---

## Integrated Monthly Working Paper — Complete Example

**Fact Pattern** (XYZ & Co., CA Firm — 70% taxable / 30% exempt):

| Invoice | GST Paid | Section 17(5) Block? | T-Classification | ITC Treatment |
|---------|---------|---------------------|-----------------|--------------|
| Office rent | ₹18,000 | No | T3 common | Apportion: ₹18,000 × 70% = ₹12,600 eligible; ₹5,400 reversed |
| Electricity | ₹2,700 | No | T3 common | ₹2,700 × 70% = ₹1,890 eligible; ₹810 reversed |
| Audit software | ₹3,600 | No | T1 (exclusively for taxable audit) | ₹3,600 — full ITC |
| Office pantry food | ₹900 | YES — Section 17(5)(b)(i) | BLOCKED | ₹0 ITC; cost ₹900 |
| Car maintenance | ₹1,440 | YES — Section 17(5)(b)(i) for blocked vehicle | BLOCKED | ₹0 ITC; cost ₹1,440 |
| RCM consultant | ₹36,000 | No | T3 common (or T1 if attributable) | ₹36,000 × 70% = ₹25,200 eligible; ₹10,800 reversed |

**Summary**:
```
T1 (audit software)        = ₹3,600 (full ITC)
T3 eligible (rent)         = ₹12,600
T3 eligible (electricity)  = ₹1,890
T3 eligible (RCM)          = ₹25,200
Total claimable ITC        = ₹43,290

Rule 43 reversals (Te)     = ₹5,400 + ₹810 + ₹10,800 = ₹17,010
Blocked (cost)             = ₹900 + ₹1,440 = ₹2,340
```

**GSTR-3B:**
- Table 4A = ₹3,600 + ₹18,000 + ₹2,700 + ₹36,000 = ₹60,300 (eligible ITC before reversal)
- Table 4A(3) = ₹36,000 (RCM, after Section 17(5) check — eligible)
- Table 4B(1) = ₹17,010 (Rule 43 Te)
- Table 4D(2) = ₹2,340 (blocked — informational)
- Net ITC = ₹60,300 − ₹17,010 = ₹43,290 ✓

---

## **[MAHARASHTRA-SPECIFIC]** Maharashtra Scrutiny on Sequencing
{law_reference: "Maharashtra SGST scrutiny notices"}

Maharashtra SGST scrutiny proceedings regularly demand:
1. The **monthly ITC working paper** showing blocked ITC removed before Rule 43 calculation
2. **Proof that Table 4D(2) amounts were correctly computed** (officers cross-check that the blocked amounts do not also appear in Table 4A)
3. **Apportionment ratio documentation** — the E/F calculation should be a standalone document

When responding to Maharashtra scrutiny notices on ITC apportionment:
- Provide the monthly working paper showing the 3-step sequence: block → classify → apportion
- Provide GSTR-3B Table 4A, 4B, 4D printouts
- Show the annual blocked ITC register cross-referenced to Table 4D(2) amounts

---

## Cross-References
> **See Also — Blocked ITC Perspective:** For the blocked ITC topic's view of this same interaction, see [../Topic_2_Blocked_ITC/06_Blocked_ITC_Interaction.md]
> **See Also — Scenarios:** For the full integrated scenario with all three topics, see [08_Apportionment_Scenarios_Advanced.md]
> **See Also — Methods and Formulas:** For the E/F ratio calculation in detail, see [04_Apportionment_Methods_Calculations.md]
