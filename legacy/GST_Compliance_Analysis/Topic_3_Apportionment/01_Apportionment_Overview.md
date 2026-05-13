# ITC Apportionment — Overview and Conceptual Framework
{complexity_level: "Advanced"}
{topic: "ITC Apportionment"}
{law_reference: "Section 17(1)–(3) CGST Act, 2017; Rule 43 CGST Rules, 2017"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## What Is ITC Apportionment?
ITC apportionment is the process of allocating common input tax credit between supplies eligible for ITC (taxable supplies) and supplies that are ineligible for ITC (exempt supplies, non-GST supplies, and supplies outside the scope of GST). It is governed primarily by Rule 43 of the CGST Rules, 2017 and is triggered whenever a registered person makes both taxable and exempt/ineligible supplies and has common inputs used for both.

**Simple statement of the principle**: You can claim ITC proportional to the fraction of your output that is taxable. If 70% of your output attracts GST, you can claim 70% of your common input tax. The remaining 30% is a cost.

---

## Legislative Intent
{law_reference: "Section 17(1), 17(2), 17(3) CGST Act, 2017"}

### Purpose 1: Tax Neutrality for Taxable Suppliers
GST is designed as a value-added tax — at each stage of the supply chain, the taxable person collects output GST, remits it after claiming credit for input GST paid. ITC is the mechanism that ensures GST is not a cascading cost for businesses making taxable supplies.

### Purpose 2: No ITC for Exempt/Non-GST Suppliers
Where the final output is exempt from GST (or not subject to GST), the consumer does not pay output GST. Allowing the supplier to claim full ITC would mean the government subsidises the production of exempt goods/services — contrary to tax policy.

### Purpose 3: Fair Allocation for Mixed Suppliers
Many businesses make both taxable and exempt supplies using the same infrastructure (same office, same staff, same electricity connection). Apportionment provides a fair, formula-based allocation that prevents:
- Over-claiming (claiming full ITC even though part of output is exempt)
- Under-claiming (blocking all ITC even though a significant portion of output is taxable)

---

## Relationship to Sections 17(1)–17(4)
{law_reference: "Section 17(1)–(4) CGST Act, 2017"}

Section 17 establishes a four-tier structure for ITC eligibility:

| Section | Rule | What It Addresses |
|---------|------|-------------------|
| 17(1) | Eligible ITC for taxable supplies | Full ITC available where inputs are exclusively for taxable outputs |
| 17(2) | Proportionate ITC for mixed supplies | ITC reduced proportionally where inputs serve both taxable and exempt outputs |
| 17(3) | Definition of "exempt supply" for apportionment | Exempt supply includes: exempt supplies + supplies outside India + non-GST supplies |
| 17(4) | Rule-making authority | Government may prescribe methods for apportionment (→ Rule 43) |
| 17(5) | Blocked ITC — absolute bar | Certain ITC is blocked regardless of output type |

### The Hierarchy
Section 17(5) operates as an **absolute bar** — it overrides Sections 17(1)–(4). After removing blocked ITC under Section 17(5), the remaining eligible ITC is allocated under Section 17(2) read with Rule 43.

---

## What Rule 43 Does
{law_reference: "Rule 43 CGST Rules, 2017"}

Rule 43 prescribes the mathematical formula for allocating common ITC between:
1. **T1**: ITC directly attributable to taxable/zero-rated supplies → full ITC claimable
2. **T2**: ITC directly attributable to exempt/ineligible supplies → no ITC
3. **T3**: Common ITC (cannot be attributed to either) → apportioned by formula

The formula for **T3** (common ITC eligible portion):
```
Eligible common ITC = Common ITC × (Aggregate Turnover of Taxable Supplies) / (Aggregate Turnover of All Supplies)
```

Where:
- Taxable supplies = standard-rated + zero-rated (exports)
- All supplies = taxable + zero-rated + exempt + non-GST

---

## Distinction Between Blocked ITC and Apportioned ITC
{law_reference: "Section 17(5) vs Section 17(2) + Rule 43"}

This distinction is the single most important conceptual boundary in ITC law:

| Feature | Blocked ITC (Section 17(5)) | Apportioned ITC (Rule 43) |
|---------|----------------------------|--------------------------|
| Trigger | Specific category of supply (motor vehicle, food, construction, etc.) | Mixed taxable/exempt output pattern |
| Scope | Absolute bar — no ITC regardless of use | Proportional — partial ITC available |
| Exception | Specific statutory exceptions (further supply, same-category, plant and machinery) | None — formula always applies to common ITC |
| Output dependency | Independent of output pattern | Directly driven by output ratio |
| GSTR-3B reporting | Table 4D (informational) | Table 4B(1) (reversal of ineligible portion) |
| Sequence | FIRST — remove blocked ITC | SECOND — apportion remaining common ITC |

---

## Who Must Apportion ITC?
{law_reference: "Section 17(2) CGST Act, 2017"}

A registered person must perform ITC apportionment when ALL three conditions are satisfied:

**Condition 1**: They make **both** taxable and exempt/ineligible supplies
- Taxable: goods/services on which GST is charged
- Exempt: goods/services specifically exempted by notification
- Ineligible: nil-rated supplies, non-GST supplies, supplies outside India

**Condition 2**: They have **common inputs** used for both types of supply
- Inputs used exclusively for taxable → full ITC, no apportionment needed
- Inputs used exclusively for exempt → no ITC, no apportionment needed (exclude)
- Inputs used for both → apportionment required

**Condition 3**: The common inputs have **taxable input** (GST was paid on them)
- Where inputs are GST-exempt (e.g., certain agricultural inputs) or outside GST scope, no ITC exists to apportion

### Typical Businesses That Must Apportion

| Business Type | Taxable Supply | Exempt/Ineligible Supply |
|--------------|---------------|--------------------------|
| CA firm | Statutory audit, tax advisory | Trust formation, FCRA advisory |
| Legal services firm | Commercial litigation | Services outside India (export) |
| Bank | Fee-based services (transaction fees) | Interest income (exempt) |
| Insurance company | General insurance premiums | Life insurance (exempt) |
| Trading company | Standard goods | Exempt goods (agricultural, gold) |
| Healthcare provider | Elective cosmetic surgery | Medical treatment (exempt) |
| Real estate developer | Under-construction sale (taxable) | Completed flat sale (exempt) |

---

## Businesses That Do NOT Need to Apportion
ITC apportionment is not required where the taxpayer makes:
- **Only taxable supplies** → full ITC (no apportionment)
- **Only exempt supplies** → no ITC (no apportionment — just exclude all ITC)
- **Only zero-rated exports** → full ITC (zero-rated is treated as taxable for ITC purposes)

---

## The Core Principle: ITC Follows Output Tax
The philosophical foundation of apportionment is: **input tax credit follows output tax**. Where output is taxed, the corresponding input should be credited. Where output is not taxed, the corresponding input should not be credited. The formula mechanically implements this principle.

This principle also explains why:
1. Exports (zero-rated) are included in the numerator — though tax rate is 0%, the export is a taxable supply
2. Deemed exports qualify for ITC
3. Aggregate turnover (not just GST turnover) appears in the denominator — non-GST and nil-rated supplies dilute the denominator

---

## Relationship to RCM
{law_reference: "Section 9(3)/(4) CGST Act + Rule 43"}

When a registered person pays RCM tax on an inward supply:
1. The RCM tax is paid from the Electronic Cash Ledger (ECL)
2. ITC on RCM is then available in the Electronic Credit Ledger (ECL→ITC)
3. **That ITC is subject to Section 17(5) check first** (if the supply is blocked, no ITC despite RCM payment)
4. If not blocked, and the recipient has mixed outputs, **the RCM ITC is also apportioned under Rule 43**

The RCM ITC enters the T1 / T2 / T3 classification like any other input ITC.

---

## Relationship to Blocked ITC
{law_reference: "Section 17(5) + Rule 43 sequencing"}

The mandatory sequencing rule:
```
STEP 1: Remove all blocked ITC (Section 17(5)) from the total ITC pool
STEP 2: Classify remaining eligible ITC as T1, T2, or T3
STEP 3: Apply Rule 43 formula to T3 (common) ITC only
```

Including blocked ITC in the apportionment pool **overstates** claimable ITC. This is a common and high-risk compliance error.

---

## **[MAHARASHTRA-SPECIFIC]** Maharashtra Context
{law_reference: "Maharashtra SGST Act, 2017 — Section 17(2); Maharashtra SGST Rules — Rule 43"}

Maharashtra SGST mirrors Rule 43 exactly. The apportionment obligation, formula, and GSTR-3B reporting are identical under CGST and MGST. Maharashtra SGST officers focus on:
1. Whether the apportionment ratio is realistic (sudden changes attract scrutiny)
2. Whether blocked ITC (Section 17(5)) was removed before computing the Rule 43 ratio
3. Whether the "aggregate turnover" denominator includes all supply streams (some entities omit non-GST supplies, inflating the ratio)

---

## Cross-References
> **See Also — Rule 43 Legal Framework:** Full text of Rule 43 with worked examples, see [02_Apportionment_Legal_Framework.md]
> **See Also — Blocked ITC First Principle:** For the mandatory sequencing of blocking before apportionment, see [07_Apportionment_Blocked_ITC_Interaction.md]
> **See Also — Topic 2 Interaction File:** For the blocked ITC perspective on this sequencing, see [../Topic_2_Blocked_ITC/06_Blocked_ITC_Interaction.md]
