# Blocked ITC — Interaction with RCM, Apportionment, and Other Provisions
{complexity_level: "Advanced"}
{topic: "Blocked ITC"}
{law_reference: "Section 17(5) CGST Act; Section 9(3)/(4) CGST Act; Rule 43 CGST Rules"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## The Master Sequencing Rule
{law_reference: "Section 17(5) read with Rule 43 CGST Rules"}

The single most important rule governing the interaction of all three topics:

> **Section 17(5) blocking must be applied FIRST, before Rule 43 apportionment.**

This is because:
1. Section 17(5) is an **absolute bar** — no amount of apportionment can resurrect blocked ITC
2. Rule 43 operates only on **eligible** ITC; blocked ITC is not eligible
3. The GSTR-3B table structure itself confirms this: Table 4B(2) (blocking reversals) is logically prior to Table 4B(1) (Rule 42/43 apportionment reversals)
4. Including blocked ITC in the apportionment pool would mathematically overstate claimable ITC

### The Five-Step Compliance Chain for Any Inward Supply

```
Step 1: Is it an RCM supply?
  → If YES: Pay RCM in cash; issue self-invoice
  → Continue to Step 2 regardless

Step 2: Is the ITC blocked under Section 17(5)?
  → If YES: Do NOT claim ITC (report in GSTR-3B Table 4D)
  → If NO: Continue to Step 3

Step 3: Is the ITC directly attributable to taxable outputs?
  → If YES: Claim full ITC (T1)
  → If NO: Continue to Step 4

Step 4: Is the ITC directly attributable to exempt outputs?
  → If YES: No ITC (T2 — exclude entirely)
  → If NO: Continue to Step 5

Step 5: ITC is COMMON → Apply Rule 43 apportionment
  → Eligible ITC = Common ITC × (Taxable Turnover / Total Turnover)
```

---

## Interaction 1: Blocked ITC + RCM — The Double-Block Scenario
{law_reference: "Section 9(3)/(4) + Section 17(5)(a), 17(5)(b)(i), 17(5)(b)(iii)"}

### What Happens
When an RCM supply is also covered by Section 17(5):
- **RCM obligation is absolute**: the recipient must still pay the RCM tax in cash (there is no exemption from RCM payment because ITC is blocked)
- **ITC is blocked**: despite paying RCM in cash, no ITC can be claimed
- **Net result**: the RCM tax is a **pure sunk cost** — it increases the effective cost of that supply

### Compliance Requirements (Even for Double-Blocked Supplies)
Even when both RCM applies and ITC is blocked, the taxpayer must:
1. Issue a self-invoice (Rule 46) for the supply
2. Pay the RCM tax from the Electronic Cash Ledger
3. Report the supply in GSTR-3B Table 3.1(d) (inward RCM supply)
4. Report the blocked ITC in GSTR-3B Table 4D (NOT in Table 4A(3))
5. NOT claim any ITC credit

### Common Double-Block Scenarios

| Supply | RCM Trigger | Section 17(5) Block | Net Result |
|--------|------------|---------------------|-----------|
| Cab hire from unregistered individual | Section 9(4) | 17(5)(b)(iii) — rent-a-cab | Pay RCM; ITC fully blocked |
| Food catering from unregistered caterer | Section 9(4) | 17(5)(b)(i) — outdoor catering | Pay RCM; ITC fully blocked |
| Vehicle hire from unregistered person | Section 9(4) | 17(5)(a) — motor vehicle | Pay RCM; ITC fully blocked |
| Renting of motor vehicle (individual to body corporate) | Section 9(3) Notification | 17(5)(b)(i) — renting MV | Pay RCM at 5%; ITC blocked |

### Numerical Illustration
**Facts**: CA firm hires cab from an unregistered individual for employee transport. Monthly bill: ₹20,000.

- Section 9(4) RCM: ₹20,000 × 5% = ₹1,000 (CGST ₹500 + SGST ₹500)
- Cash payment for RCM: ₹1,000 from Electronic Cash Ledger
- Section 17(5)(b)(iii): rent-a-cab = blocked ITC
- ITC claim: **NIL**
- GSTR-3B reporting: Table 3.1(d) ₹20,000 with ₹500 + ₹500 tax; Table 4D: ₹1,000 ineligible
- Effective cost: ₹20,000 (service) + ₹1,000 (RCM tax, pure cost) = ₹21,000

---

## Interaction 2: Blocked ITC + Apportionment — The Critical Sequencing
{law_reference: "Section 17(5) + Rule 43 CGST Rules, 2017"}

### Why Sequence Matters — Numerical Proof

**Facts**:
- Total inward GST for the month: ₹1,00,000
  - Section 17(5) blocked (company car purchase): ₹20,000
  - Directly for taxable (audit software): ₹10,000
  - Common inputs (rent, electricity, IT): ₹70,000
- Output ratio: 70% taxable / 30% exempt

#### WRONG APPROACH: Apportion First, Then Block

```
Pool for apportionment = ₹1,00,000 - ₹10,000 direct = ₹90,000
Eligible from pool = ₹90,000 × 70% = ₹63,000
Add direct taxable = ₹10,000
Total ITC claimed = ₹73,000

ERROR: The ₹20,000 blocked ITC is included in the common pool,
inflating the claimable amount.
```

#### CORRECT APPROACH: Block First, Then Apportion

```
Step 1: Remove blocked ITC from total pool
  Eligible pool = ₹1,00,000 - ₹20,000 blocked = ₹80,000

Step 2: From ₹80,000 eligible pool:
  Direct taxable (T1): ₹10,000 → full ITC
  Common (T3): ₹70,000 → apply apportionment

Step 3: Apportion common ITC
  Eligible from common = ₹70,000 × 70% = ₹49,000
  Ineligible from common = ₹70,000 × 30% = ₹21,000

Step 4: Total claimable ITC
  T1 + Eligible T3 = ₹10,000 + ₹49,000 = ₹59,000

CORRECT ANSWER: ₹59,000 (not ₹73,000)
Over-claim in wrong approach: ₹14,000
```

### GSTR-3B Mapping

| Table | Amount | What It Represents |
|-------|--------|-------------------|
| Table 4A (total ITC available) | ₹80,000 | Eligible ITC after blocking |
| Table 4B(1) — Rule 42/43 reversal | ₹21,000 | Ineligible portion of common ITC |
| Table 4B(2) — Other reversals | ₹0 | (Blocked ITC was never availed) |
| Table 4D — Ineligible ITC | ₹20,000 | Blocked ITC reported here |
| Net ITC: 4A − 4B | ₹59,000 | Actual net claimable |

---

## Interaction 3: Blocked ITC + Exempt Supply Inputs — Avoiding Double-Counting
{law_reference: "Section 17(5) + Section 17(2)/(3) + Rule 43"}

### The Risk
Some inputs may be excluded from ITC through **two different mechanisms**:
1. Section 17(5): absolute block (e.g., food/beverages)
2. Rule 43 apportionment: proportional exclusion based on exempt output ratio

**Critical rule**: Do NOT double-count the exclusion. If an input is blocked under Section 17(5), it is fully excluded from ITC and does NOT also enter the Rule 43 ineligible pool.

### Example
- Office food: ₹5,400 GST → Section 17(5)(b)(i) blocked → 100% excluded under 17(5)
- Office rent: ₹18,000 GST → NOT blocked → common input → Rule 43 applies → 30% excluded (₹5,400)

The food ITC (₹5,400) is excluded ONCE via blocking. It does not also appear as ₹5,400 in the Rule 43 exempt-attributable calculation.

---

## Interaction 4: Blocked ITC + Works Contract (Multi-Party Chain)
{law_reference: "Section 17(5)(c) exception — further supply of works contract"}

### The Supply Chain

```
Developer (End Client)
  ↑ pays for works contract services
Main Contractor
  ↑ sub-contracts portions of work
Sub-Contractor
  ↑ buys materials from supplier
Materials Supplier
```

### ITC Analysis at Each Level

| Party | Inward Supply | Section 17(5)(c) Status | ITC Available? |
|-------|--------------|------------------------|----------------|
| Materials Supplier | Raw materials | Not applicable | Yes |
| Sub-Contractor | Materials + services | Used for further supply of works contract | YES (exception applies) |
| Main Contractor | Sub-contractor invoice | Input for further taxable works contract supply | YES (exception) |
| Developer (building for own use) | Main contractor invoice | Works contract for own immovable property | BLOCKED |

**Key principle**: The further-supply exception "travels up" the chain until the party building for their **own account**. That party cannot claim ITC.

---

## Interaction 5: Blocked ITC + Capital Goods Apportionment
{law_reference: "Section 17(5)(a) + Rule 43 — capital goods"}

### The Scenario
A company purchases a computer server (₹10,00,000 + GST ₹1,80,000):
- 60% used for taxable software development
- 40% used for exempt trust-related work

Is this a "common capital good" subject to Rule 43 monthly apportionment? Or is it blocked?

**Analysis**: A computer server is NOT a motor vehicle, vessel, aircraft, or any Section 17(5) category. It is eligible. It is a common capital good → Rule 43 monthly apportionment applies.

Monthly ITC component: ₹1,80,000 / 60 = ₹3,000/month  
Eligible per month (at 60% taxable ratio): ₹3,000 × 60% = ₹1,800  
Ineligible per month: ₹1,200  

**If the asset WERE** a motor vehicle (blocked): the entire ₹1,80,000 would be blocked upfront. No Rule 43 calculation needed.

---

## The Integrated Compliance Framework Summary
{law_reference: "Section 9(3)/(4) + 17(5) + Rule 43"}

For each inward supply in a mixed-output business, apply this framework monthly:

```
MONTHLY ITC ELIGIBILITY FRAMEWORK

For each invoice:
├── RCM check: Is it RCM? Pay in cash if yes.
├── Block check (Section 17(5)):
│   ├── YES → Blocked. Report in Table 4D. No ITC. End.
│   └── NO → Continue.
├── Attribution check:
│   ├── Directly for taxable → Full ITC (T1)
│   ├── Directly for exempt → No ITC (T2 - exclude)
│   └── Common → T3 → Apply Rule 43 apportionment
└── Total Monthly ITC = T1 + [T3 × (E/F)]
```

---

## **[MAHARASHTRA-SPECIFIC]** Maharashtra Interaction Issues
{law_reference: "MGST Act, 2017; Maharashtra AAR rulings"}

Maharashtra SGST officers often raise assessments combining multiple angles:
1. **RCM + Blocking**: Demanding that where RCM was paid on a blocked supply, the taxpayer must also prove they did NOT claim ITC
2. **Apportionment sequence**: Demanding working papers showing that blocking was done before apportionment
3. **Common area electricity**: Maharashtra SGST has taken a stricter position on electricity for commercial building common areas being blocked (going further than CBIC circular which was limited to residential complexes)

**Practical tip for Maharashtra taxpayers**: When responding to Maharashtra SGST scrutiny notices, provide:
- A month-by-month computation showing blocked ITC removed before apportionment
- Cash ledger proof for all RCM payments
- Working paper showing the five-step chain applied to each significant invoice

---

## Cross-References
> **See Also — RCM Practical Implementation:** For self-invoice, cash payment, and GSTR-3B mechanics when RCM applies, see [Topic_1_RCM/06_RCM_Practical_Implementation.md]
> **See Also — Apportionment Blocking Interaction:** For the apportionment perspective on the sequencing rule with worked examples, see [Topic_3_Apportionment/07_Apportionment_Blocked_ITC_Interaction.md]
> **See Also — RCM Scenarios:** For the master CA firm integrated scenario showing the full chain, see [Topic_1_RCM/07_RCM_Scenarios_Advanced.md — Scenario B]
