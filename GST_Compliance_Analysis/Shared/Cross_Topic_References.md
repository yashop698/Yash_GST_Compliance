# Cross-Topic References — RCM, Blocked ITC, and Apportionment
{complexity_level: "Advanced"}
{topic: "Cross-Topic"}
{law_reference: "Section 9(3)/(4) + Section 17(5) + Rule 43 CGST Act/Rules, 2017"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## Purpose of This File
RCM, Blocked ITC, and ITC Apportionment are three distinct but closely interacting GST compliance topics. A practitioner handling a single transaction may need to apply all three sequentially. This file maps every significant interaction between the three topics with law references, numerical illustrations, and links to the files where each interaction is fully analyzed.

---

## The Master Sequencing Rule
{law_reference: "Section 9(3)/(4) + Section 17(5) + Rule 43 — combined"}

For any inward supply, apply the compliance chain in this order:

```
STEP 1: RCM CHECK
  Is this supply subject to RCM (Section 9(3) or 9(4))?
  → YES: Pay RCM from ECL in cash. Issue self-invoice.
  → NO: Proceed.
  → Either way: continue to Step 2.

STEP 2: SECTION 17(5) CHECK (BLOCKED ITC)
  Is the supply in a Section 17(5) blocked category?
  → YES: No ITC. Report in GSTR-3B Table 4D. RCM tax paid is a sunk cost. End.
  → NO: Proceed to Step 3.

STEP 3: ATTRIBUTION CHECK (T1/T2/T3)
  Is the input exclusively for taxable supply? → T1 (full ITC)
  Is the input exclusively for exempt supply? → T2 (no ITC)
  Is the input common? → T3 (proceed to Step 4)

STEP 4: RULE 43 APPORTIONMENT
  Eligible ITC from T3 = T3 × (Taxable Turnover / Total Turnover)
  Reverse Te = T3 × (E/F) in GSTR-3B Table 4B(1)
```

This four-step chain is the unified compliance framework for all three topics.

---

## Interaction 1: RCM → Blocked ITC (Double-Block)
{law_reference: "Section 9(3)/(4) CGST Act + Section 17(5)(a)/(b)(i)/(b)(iii)"}

### When It Occurs
A supply is subject to BOTH RCM (recipient must pay tax) AND Section 17(5) blocking (ITC unavailable). This is the "double-block" scenario.

### Common Double-Block Scenarios

| Supply | RCM Trigger | Section 17(5) Block | Net Outcome |
|--------|------------|---------------------|-------------|
| Cab hire from unregistered person | Section 9(4) | 17(5)(b)(iii) — rent-a-cab | Pay RCM; ITC = NIL; RCM tax = pure cost |
| Food catering from unregistered caterer | Section 9(4) | 17(5)(b)(i) — catering | Pay RCM; ITC = NIL |
| Motor vehicle hire from unregistered | Section 9(4) | 17(5)(a) — motor vehicle | Pay RCM; ITC = NIL |
| Renting MV — individual to body corporate | Section 9(3) notification | 17(5)(b)(iii) | Pay RCM @ 5%; ITC = NIL |

### Numerical Illustration
- Cab hire from unregistered individual: ₹20,000/month
- RCM @ 5%: ₹20,000 × 5% = ₹1,000 (CGST ₹500 + SGST ₹500)
- Section 17(5)(b)(iii): ITC blocked
- Net monthly cost: ₹21,000 (₹20,000 cab + ₹1,000 sunk RCM tax)

### GSTR-3B Reporting
| Table | Amount | Description |
|-------|--------|-------------|
| 3.1(d) | ₹20,000 + ₹1,000 tax | Inward RCM supply |
| 4A(3) | ₹0 | ITC on RCM — NOT claimed (blocked) |
| 4D(2) | ₹1,000 | Blocked ITC — informational |

**See Also**: [Topic_1_RCM/07_RCM_Scenarios_Advanced.md — Scenario B]  
**See Also**: [Topic_2_Blocked_ITC/06_Blocked_ITC_Interaction.md — Interaction 1]

---

## Interaction 2: RCM → Apportionment
{law_reference: "Section 9(3)/(4) CGST Act + Rule 43 CGST Rules"}

### When It Occurs
An RCM supply is not blocked under Section 17(5), but the recipient has mixed taxable and exempt outputs. The RCM ITC (after payment) enters the apportionment pool.

### How It Works
1. Pay RCM from ECL
2. ITC is credited to the Electronic Credit Ledger (eligible for credit)
3. Subject to Section 17(5) check — if not blocked, ITC is eligible
4. Classify the ITC as T1, T2, or T3 based on use
5. If T3 (common): apply Rule 43 E/F apportionment

### Numerical Illustration
- XYZ & Co. (CA firm, 70% taxable / 30% exempt)
- Unregistered consultant fee: ₹2,00,000; RCM @ 18% = ₹36,000
- Pay ₹36,000 from ECL
- ITC available: ₹36,000
- Section 17(5) check: consulting NOT blocked
- Attribution: consultant worked on mixed matters → T3
- Te = ₹36,000 × 30% = ₹10,800
- Eligible = ₹36,000 × 70% = ₹25,200

**See Also**: [Topic_1_RCM/07_RCM_Scenarios_Advanced.md — Scenario B (Master CA Firm Scenario)]  
**See Also**: [Topic_3_Apportionment/08_Apportionment_Scenarios_Advanced.md — Scenario 3]

---

## Interaction 3: Blocked ITC → Apportionment (Sequencing)
{law_reference: "Section 17(5) CGST Act + Rule 43 CGST Rules — sequencing"}

### The Critical Rule
**Block first, then apportion.** Blocked ITC must be removed from the total ITC pool BEFORE the Rule 43 E/F calculation is applied.

### Mathematical Impact of Getting This Wrong

**Facts**: Total ITC ₹1,00,000 (₹20,000 blocked + ₹80,000 eligible); 70% taxable output.

| Approach | ITC Claimed | Error |
|----------|------------|-------|
| Correct: Block first, apportion remaining | ₹80,000 × 70% = ₹56,000 | — |
| Wrong: Apportion total, then block | ₹1,00,000 × 70% = ₹70,000 | Over-claim ₹14,000 |

### GSTR-3B Mapping — Correct Approach
- Table 4A: ₹80,000 (eligible ITC only; blocked excluded)
- Table 4B(1): ₹24,000 (Rule 43 Te: ₹80,000 × 30%)
- Table 4D(2): ₹20,000 (blocked — informational)
- Net ITC: ₹56,000

**See Also**: [Topic_2_Blocked_ITC/06_Blocked_ITC_Interaction.md — Interaction 2]  
**See Also**: [Topic_3_Apportionment/07_Apportionment_Blocked_ITC_Interaction.md]

---

## Interaction 4: Blocked ITC → RCM (ITC Cost Even After Paying RCM)
{law_reference: "Section 9(3)/(4) + Section 17(5)"}

### The Principle
Paying RCM does not automatically make ITC eligible. ITC eligibility is determined by Section 16 and Section 17(5) independently of how the tax was paid.

### Consequence
Where a supply triggers RCM AND falls under Section 17(5):
- RCM must still be paid (cash ledger) — this obligation is independent
- ITC on that RCM payment is blocked
- The RCM tax is a **pure cost** — it cannot be recovered as ITC or offset against output tax

**See Also**: [Topic_2_Blocked_ITC/06_Blocked_ITC_Interaction.md — Interaction 1]  
**See Also**: [Topic_1_RCM/04_RCM_Path_A_Transaction_Type.md — Motor Vehicle Renting section]

---

## Interaction 5: Apportionment → Blocked ITC (Avoiding Double-Counting)
{law_reference: "Section 17(5) + Rule 43 — no double exclusion"}

### The Risk
If an input is blocked under Section 17(5), it is excluded **once** — via the Section 17(5) bar. It does NOT also enter the Rule 43 calculation as an "ineligible" amount to be reversed.

### Example — No Double-Counting
- Office food/beverage: ₹5,400 GST → Section 17(5)(b)(i) → **BLOCKED (100%)**
- Wrong: Block ₹5,400 via Section 17(5), AND ALSO apply Rule 43 to include ₹5,400 in the exempt portion calculation
- Correct: ₹5,400 is excluded once. It does not appear in GSTR-3B Table 4A at all. No Rule 43 calculation for this input.

**See Also**: [Topic_2_Blocked_ITC/06_Blocked_ITC_Interaction.md — Interaction 3]  
**See Also**: [Topic_3_Apportionment/07_Apportionment_Blocked_ITC_Interaction.md — Double-Counting Risk section]

---

## Interaction 6: RCM + Blocked ITC + Apportionment (Triple Interaction)
{law_reference: "Section 9(3)/(4) + Section 17(5) + Rule 43 — all three"}

### Full-Chain Scenario
A professional firm receives three types of supplies in the same month:

| Supply | RCM? | Blocked? | Apportionment? |
|--------|------|---------|---------------|
| Unregistered consultant (eligible advisory) | YES | NO | YES — T3 |
| Unregistered cab hire | YES | YES — 17(5)(b)(iii) | NO (blocked stops here) |
| Office rent from registered landlord | NO | NO | YES — T3 |

**Steps for each:**

1. **Consultant**: Pay RCM → not blocked → T3 → apportion at 70/30
2. **Cab hire**: Pay RCM → blocked → STOP → ₹0 ITC, pure cost
3. **Office rent**: No RCM → not blocked → T3 → apportion at 70/30

**See Also**: [Topic_3_Apportionment/08_Apportionment_Scenarios_Advanced.md — Scenario 3 (Integrated Full Chain)]

---

## Integrated Cross-Topic Case Study: XYZ & Co., CA Firm
{law_reference: "All three topics — integrated"}

This case study appears across multiple files as the master cross-topic illustration.

**Entity**: XYZ & Co., Chartered Accountants (Mumbai, Maharashtra)  
**Output Mix**: 70% taxable (statutory audit, tax advisory) / 30% exempt (trust advisory, FCRA)  
**Monthly Turnover**: ₹10,00,000

**Monthly Inward Supplies:**

| # | Supply | GST/RCM | Topic 1 (RCM) | Topic 2 (Blocked) | Topic 3 (Apportion) | ITC Outcome |
|---|--------|---------|--------------|-------------------|--------------------|-----------  |
| 1 | Unregistered consultant ₹2,00,000 | RCM ₹36,000 | Pay ₹36,000 from ECL | Not blocked | T3: ₹36,000 × 70% | ₹25,200 |
| 2 | Office rent ₹1,00,000 | GST ₹18,000 | No RCM | Not blocked | T3: ₹18,000 × 70% | ₹12,600 |
| 3 | Audit software ₹20,000 | GST ₹3,600 | No RCM | Not blocked | T1 (100% taxable) | ₹3,600 |
| 4 | Office food ₹5,000 | GST ₹900 | No RCM | BLOCKED 17(5)(b)(i) | No apportionment | ₹0 |
| 5 | Company car maintenance ₹8,000 | GST ₹1,440 | No RCM | BLOCKED 17(5)(b)(i) | No apportionment | ₹0 |
| 6 | Cab hire (unregistered) ₹20,000 | RCM ₹1,000 | Pay ₹1,000 from ECL | BLOCKED 17(5)(b)(iii) | No apportionment | ₹0 |

**Monthly ITC Summary:**
```
Total GST/RCM paid: ₹36,000 + ₹18,000 + ₹3,600 + ₹900 + ₹1,440 + ₹1,000 = ₹60,940
Eligible ITC before apportionment: ₹36,000 + ₹18,000 + ₹3,600 = ₹57,600
T3 pool: ₹36,000 (consultant) + ₹18,000 (rent) = ₹54,000
T1: ₹3,600 (audit software)
Te (30% × ₹54,000): ₹16,200
Eligible from T3: ₹54,000 × 70% = ₹37,800
Total claimable ITC: ₹3,600 + ₹37,800 = ₹41,400
Blocked (sunk cost): ₹900 + ₹1,440 + ₹1,000 = ₹3,340
Rule 43 reversal (cost): ₹16,200
```

**File References for Each Step:**
- Step 1 (RCM identification): [Topic_1_RCM/06_RCM_Practical_Implementation.md]
- Step 2 (Blocked ITC check): [Topic_2_Blocked_ITC/07_Blocked_ITC_Practical_Implementation.md]
- Step 3 (Apportionment): [Topic_3_Apportionment/07_Apportionment_Blocked_ITC_Interaction.md]

---

## Cross-Topic Reference Matrix

| Topic A → Topic B | Key Interaction | Primary File | Secondary File |
|------------------|----------------|-------------|---------------|
| RCM → Blocked ITC | Double-block: RCM paid + ITC still blocked | RCM/07_Scenarios — Scenario B | BlockedITC/06_Interaction — Interaction 1 |
| RCM → Apportionment | RCM ITC eligible but requires apportionment | RCM/07_Scenarios — Scenario B | Apportionment/07_Blocked_Interaction |
| Blocked ITC → Apportionment | Block first, apportion remainder | BlockedITC/06_Interaction — Interaction 2 | Apportionment/07_Blocked_Interaction |
| Blocked ITC → RCM | Paying RCM doesn't save blocked ITC | BlockedITC/06_Interaction — Interaction 1 | RCM/04_Path_A — Motor Vehicle |
| Apportionment → Blocked ITC | No double-counting of exclusion | Apportionment/07_Blocked_Interaction | BlockedITC/06_Interaction — Interaction 3 |
| All Three | Triple-interaction integrated scenario | Apportionment/08_Scenarios — Scenario 3 | This file |

---

## Cross-References
> **See Also — Disputed Areas Across All Topics:** For unresolved conflicts at the intersection of these topics, see [Disputed_Ambiguous_Areas.md]
> **See Also — Master Sequencing:** For the definitive five-step chain, see [Topic_2_Blocked_ITC/06_Blocked_ITC_Interaction.md — Master Sequencing Rule]
> **See Also — Glossary:** For definitions of all terms used across topics, see [Glossary.md]
