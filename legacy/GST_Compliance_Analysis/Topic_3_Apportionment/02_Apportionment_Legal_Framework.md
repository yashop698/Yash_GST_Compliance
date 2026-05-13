# ITC Apportionment — Legal Framework
{complexity_level: "Advanced"}
{topic: "ITC Apportionment"}
{law_reference: "Section 17(2)–(4) CGST Act, 2017; Rule 42 and Rule 43 CGST Rules, 2017"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## Section 17(2) CGST Act — The Apportionment Mandate
{law_reference: "Section 17(2) CGST Act, 2017"}

### Statutory Text
> Where the goods or services or both are used by the registered person partly for effecting taxable supplies including zero-rated supplies under this Act or under the Integrated Goods and Services Tax Act, 2017 and partly for effecting exempt supplies under the said Acts, the amount of credit shall be restricted to so much of the input tax as is attributable to the said taxable supplies including zero-rated supplies.

### Analysis of Section 17(2)
**"Partly for taxable supplies"**: The trigger is mixed use — any combination of taxable and non-taxable output. Even 1% exempt supply triggers the apportionment obligation for common inputs.

**"Including zero-rated supplies"**: Zero-rated supplies (exports, SEZ supplies) are treated identically to taxable supplies for ITC purposes. Full ITC is available on inputs for zero-rated supplies, and they count in the numerator of the apportionment ratio.

**"Exempt supplies"**: As defined in Section 17(3) — this is broader than "exempt" in the ordinary sense.

---

## Section 17(3) CGST Act — Definition of "Exempt Supply" for Apportionment
{law_reference: "Section 17(3) CGST Act, 2017"}

### Statutory Text
> The value of exempt supply under sub-section (2) shall be such as may be prescribed, and shall include supplies on which the recipient is liable to pay tax on reverse charge basis, non-taxable supplies, supplies specified in Schedule III except those specified in paragraph 5 of Schedule III, and supplies which are wholly exempt from tax under section 11, or under section 6 of the Integrated Goods and Services Tax Act, 2017.

### What Counts as "Exempt Supply" for Rule 43 Denominator
Section 17(3) defines "exempt supply" broadly for apportionment purposes to include:

| Category | Included in Denominator? |
|----------|------------------------|
| Supplies specifically exempted by government notification | YES |
| Nil-rated supplies | YES |
| Non-taxable supplies (outside GST scope: petroleum, alcohol, etc.) | YES |
| Supplies outside India (not imports — services provided to overseas recipients where place of supply is outside India) | YES |
| Schedule III supplies (activities not treated as supply) | YES (with exception) |
| Zero-rated exports and SEZ supplies | NO — counted in numerator (taxable) |

**Key nuance — Schedule III exception**: Schedule III, paragraph 5 covers actions by employees in the course of employment. These are excluded from both the numerator and denominator — they are completely out of the GST framework.

---

## Rule 43 CGST Rules — Full Text and Annotation
{law_reference: "Rule 43 CGST Rules, 2017 as amended"}

### Rule 43(1): General Formula for Inputs and Input Services

> The input tax credit in respect of inputs or input services, which attract the provisions of sub-section (1) or sub-section (2) of section 17, being partly used for the purposes of business and partly for other purposes, or partly used for effecting taxable supplies including zero rated supplies and partly for effecting exempt supplies, shall be attributed to the purposes of business or for effecting taxable supplies in the following manner...

### Rule 43(1)(a) — Attribution of Inputs to Specific Supplies

> The amount of input tax credit attributable towards inputs used exclusively towards taxable supplies including zero-rated supplies shall be the input tax credit in respect of inputs that have been used exclusively for the purposes of business and exclusively for effecting taxable supplies including zero rated supplies.

**Annotation**: This is T1 — full ITC, directly allocated to taxable supplies.

### Rule 43(1)(b) — Inputs Attributable to Exempt/Non-Business Purposes

> The amount of input tax credit attributable towards inputs that are used exclusively for effecting exempt supplies or for non-business purposes shall be the input tax credit in respect of inputs that have been used exclusively for such purposes.

**Annotation**: This is T2 — no ITC. These inputs are completely excluded from the credit pool.

### Rule 43(1)(c) — Common Inputs (Credit Pool)

> The amount of input tax credit remaining after attribution under clauses (a) and (b) shall be the common credit.

**Annotation**: This is T3 — the pool of common ITC to be apportioned.

### Rule 43(1)(d) — Apportionment of Common Credit

> The amount of ITC attributable toward exempt supplies (Te) from the common credit (T3) shall be computed as follows:
>
> Te = (T3 × E) / F
>
> Where:
> - T3 = Total common ITC
> - E = Aggregate value of exempt supplies during the tax period
> - F = Total turnover in the State of the registered person during the tax period

**Key definitions in the formula:**
- **E (exempt supplies)**: As per Section 17(3) — all supplies in the denominator that are not taxable/zero-rated
- **F (total turnover)**: Turnover of all supplies including exports, imports (services), exempt, nil-rated, non-GST. Does NOT exclude supplies made from other states.

**Eligible common ITC = T3 − Te = T3 × (1 − E/F) = T3 × (Taxable Turnover / Total Turnover)**

### Rule 43(1)(e) — Reversal of Ineligible Common ITC

> The amount of Te, calculated under clause (d), shall not be claimed as input tax credit and shall be added to the output tax liability.

**Annotation**: Te is reported in GSTR-3B Table 4B(1) as a reversal. It reduces the net ITC available.

---

## Rule 42 CGST Rules — Companion Rule for Inputs
{law_reference: "Rule 42 CGST Rules, 2017"}

Rule 42 and Rule 43 are companion rules:
- **Rule 42**: Governs ITC apportionment for **inputs and input services** in the general case
- **Rule 43**: Governs ITC apportionment for **capital goods** specifically (under the 60-month depreciation method)

Both use the same E/F ratio but apply different mechanics:
- Rule 42: Monthly apportionment, annual true-up
- Rule 43: Monthly apportionment over 5 years (60 months) for capital goods

In practice, the term "Rule 43 apportionment" is commonly used to refer to the general input apportionment as well. This guide follows common usage while noting the technical distinction.

---

## Capital Goods: Rule 43 Specific Mechanics
{law_reference: "Rule 43(1)(a)–(e) for capital goods"}

Capital goods (plant, machinery, equipment with life >1 year) receive special treatment:

### Step 1: Immediate Attribution
At the time of purchase, determine if the capital good is exclusively for taxable or exclusively for exempt use:
- Exclusively taxable → full ITC immediately
- Exclusively exempt → no ITC; expense the GST cost

### Step 2: Common Capital Goods — 60-Month Method
For capital goods used for both taxable and exempt supplies:
1. Total ITC on the capital good: ₹X
2. Monthly ITC component: ₹X / 60 (5-year spread)
3. Each month, apply the E/F ratio to determine ineligible portion
4. Ineligible amount: (₹X/60) × (E/F) = added to output tax liability that month

**Example — Computer Server:**
- Purchase: ₹10,00,000 + GST ₹1,80,000
- Use: 60% taxable software, 40% exempt trust work
- Monthly ITC component: ₹1,80,000 / 60 = ₹3,000
- Eligible per month (at 60% taxable ratio): ₹3,000 × 60% = ₹1,800
- Ineligible per month: ₹3,000 × 40% = ₹1,200 → reversed in GSTR-3B Table 4B(1)

---

## The E/F Ratio — Practical Calculation Guide
{law_reference: "Rule 43(1)(d) CGST Rules, 2017"}

### What Goes in E (Exempt Supply Value)?
| Supply Type | Include in E? |
|------------|--------------|
| GST-exempt supplies by notification | YES |
| Nil-rated supplies | YES |
| Non-GST supplies (petroleum, alcohol) | YES |
| Supplies outside India (export of services where PoS outside India) | YES |
| Scheduled III activities (excluding para 5) | YES |
| Services to SEZ (zero-rated) | NO — in F as taxable |
| Exports of goods (zero-rated) | NO — in F as taxable |
| Interest income (banking/NBFC) | YES — exempt financial service |

### What Goes in F (Total Turnover)?
F = E + taxable supplies + zero-rated supplies + any other supply made in the state

**Exclusions from F:**
- Supplies made from other states (separate registration → separate GSTR-3B)
- Intra-group transfers that are not "supply" under Schedule III

### Monthly vs Annual Calculation
Rule 43 allows two approaches:
1. **Monthly provisional**: Use the previous month's E/F ratio to calculate the current month's reversal; true up annually in GSTR-9
2. **Actual monthly**: Calculate the actual E/F ratio for the current month; no annual true-up needed

**Recommended approach for stable businesses**: Monthly provisional (uses prior month ratio); annual true-up at GSTR-9 stage to reconcile.

**Required approach for volatile businesses** (seasonal fluctuations in exempt/taxable ratio): Actual monthly calculation preferred to avoid large year-end adjustments.

---

## GSTR-3B Mapping for Apportionment
{law_reference: "GSTR-3B format; Notification 17/2019-CT"}

| GSTR-3B Table | What It Captures | Apportionment Role |
|--------------|-----------------|-------------------|
| Table 4A(5) | Total eligible ITC (T1 + T3 initial claim) | Step 1: Report all eligible ITC |
| Table 4B(1) | Rule 42/43 reversal (Te) | Step 2: Reverse ineligible common portion |
| Table 4B(2) | Other reversals (blocked ITC wrongly claimed) | Separate from apportionment |
| Table 4D(2) | Ineligible ITC under Section 17(5) | Blocked ITC — informational |
| Net ITC (4A − 4B) | Actual claimable ITC | Final number for payment |

**The correct reporting sequence:**
1. GSTR-2B ITC → validate against Section 17(5) → report in Table 4A (excluding blocked)
2. Separately report blocked ITC in Table 4D
3. Compute Rule 43 reversal (Te) → report in Table 4B(1)
4. Net ITC = Table 4A − Table 4B

---

## **[MAHARASHTRA-SPECIFIC]** Maharashtra SGST Rule 43
{law_reference: "Maharashtra SGST Rules, 2017 — Rule 43"}

Maharashtra SGST Rule 43 is identical to CGST Rule 43. However, Maharashtra has specific enforcement positions:
1. **State-wise turnover**: Maharashtra SGST considers only Maharashtra-state turnover in the E/F ratio (not pan-India). Entities registered in multiple states must maintain state-wise calculations.
2. **Interest income**: Maharashtra SGST officers have in some cases treated interest income from inter-company loans as "supply" and included it in F with E attribution — more aggressive than CBIC position.
3. **Scrutiny documentation**: Maharashtra SGST scrutiny notices routinely request the Rule 43 working paper showing the monthly E/F calculation.

---

## Cross-References
> **See Also — Apportionment Triggers:** For what specific situations require apportionment, see [03_Apportionment_Triggers.md]
> **See Also — Methods and Calculations:** For worked numerical examples of the formula, see [04_Apportionment_Methods_Calculations.md]
> **See Also — Blocked ITC Interaction:** For the mandatory sequencing of Section 17(5) before Rule 43, see [07_Apportionment_Blocked_ITC_Interaction.md]
