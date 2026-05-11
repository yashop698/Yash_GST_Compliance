# Blocked ITC — Eligibility Decision Logic
{complexity_level: "Advanced"}
{topic: "Blocked ITC"}
{law_reference: "Section 17(5) CGST Act, 2017"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## Overview
This file provides the decision framework for determining whether ITC on a given supply is blocked, eligible, or partially blocked. It covers: the primary decision tree, the "when ITC is NOT blocked" matrix, the partial blocking problem, and exception conditions in detail.

---

## Primary Decision Tree
{law_reference: "Section 17(5) CGST Act, 2017"}

```
START: Inward supply received with GST paid
         |
         v
QUESTION 1: Is the supply within Section 17(5) categories?
         |
    YES  |    NO
         |         |
         v         v
QUESTION 2:    ITC ELIGIBLE
Does an        (proceed to
exception      apportionment
apply?         check)
   |
YES | NO
   |     |
   v     v
ITC   ITC FULLY
ELIGIBLE BLOCKED
   |
   v
QUESTION 3:
Is there partial use
for blocked purpose?
   |
YES | NO
   |     |
   v     v
PARTIAL  ITC FULLY
BLOCK?  ELIGIBLE
(see
below)
```

### Full Category Check for QUESTION 1:

| Category | Section | Block Applies? |
|----------|---------|---------------|
| Motor vehicle ≤13 passengers | 17(5)(a) | Yes |
| Vessels and aircraft | 17(5)(aa) | Yes |
| Food and beverages | 17(5)(b)(i) | Yes |
| Outdoor catering | 17(5)(b)(i) | Yes |
| Beauty treatment, health services, cosmetic surgery | 17(5)(b)(i) | Yes |
| Club/fitness membership | 17(5)(b)(ii) | Yes |
| Rent-a-cab, life/health insurance | 17(5)(b)(iii) | Yes |
| Leave travel / LTC benefits | 17(5)(b)(iv) | Yes |
| Works contract for immovable property (own use) | 17(5)(c) | Yes |
| Goods/services for own-account construction | 17(5)(d) | Yes |
| Composition scheme goods/services | 17(5)(e) | Yes |
| Non-resident taxable person inputs | 17(5)(f) | Yes |
| Personal consumption | 17(5)(g) | Yes |
| Lost/stolen/destroyed goods, gifts, free samples | 17(5)(h) | Yes |
| Tax paid under Sections 74, 129, 130 | 17(5)(i) | Yes |
| Office furniture, computers, IT equipment | — | NO → Eligible |
| Professional services (legal, audit, consulting) | — | NO → Eligible |
| Raw materials for manufacturing | — | NO → Eligible |
| Business travel (official purpose) | — | NO → Eligible |
| Motor vehicle >13 passengers (bus) | — | NO → Eligible |

---

## When ITC Is NOT Blocked — Full Eligibility Matrix
{law_reference: "Section 17(5) exceptions"}

| Supply | Why Available | Key Documentation |
|--------|--------------|-------------------|
| Motor vehicle (>13 seats) | Not within 17(5)(a) scope | RC book showing capacity |
| Car dealer's vehicle stock | Further supply exception — 17(5)(a)(A) | Sales records, stock register |
| Cab operator's fleet | Transportation of passengers — 17(5)(a)(B) | GST registration for transport business |
| Driving school training vehicles | Training exception — 17(5)(a)(C) | Driving school registration |
| Airline's aircraft | Transportation of passengers/goods — 17(5)(aa) | Operating certificate |
| Shipping company's vessels | Transportation of goods — 17(5)(aa) | Ship registration, bill of lading |
| Restaurant buying food ingredients | Same-category outward supply | FSSAI licence, GST registration |
| Beauty salon buying products | Same-category outward supply | Service registration |
| Health spa buying equipment | Same-category outward supply | Service nature documentation |
| Mandatory canteen (≥250 workers) | Obligatory under law — Factories Act | Compliance certification |
| Sub-contractor's works contract services | Further supply of works contract | Sub-contract agreement, main contract |
| Factory plant & machinery construction | Plant and machinery exception | Asset classification certificate |
| Office repairs (EXPENSED to P&L) | Not capitalised → not "construction" | P&L extract, fixed asset register |
| Computer hardware/servers | Not in any Section 17(5) category | Invoice |
| Office air conditioning (factory) | Arguably plant and machinery | Technical assessment |
| Business travel tickets | Not LTA/personal vacation | Travel policy, purpose documentation |
| Group health insurance (mandatory under law) | Obligatory employer provision | Relevant law citation |

---

## Section 17(5) Exception Conditions — Detailed Analysis

### Exception 1: Further Supply (Vehicle/Vessel/Aircraft)
{law_reference: "Section 17(5)(a)(A), 17(5)(aa)(i)(A)"}

**Conditions for validity:**
1. The taxpayer is **in the business** of selling/supplying the specific type of vehicle
2. The vehicle must be **stock-in-trade** (available for sale), not in regular business use
3. Demonstration vehicles used for extended personal/staff use may not qualify
4. If a car dealer also uses a car as a company vehicle for executive transport → that car's ITC is blocked; only inventory cars qualify

**Documentation:** Stock register entry, no RC book transfer, available for sale, no fuel/maintenance charged to company use for that vehicle.

### Exception 2: Transportation of Passengers
{law_reference: "Section 17(5)(a)(B)"}

**Conditions:**
1. Taxpayer must be providing **taxable supply of transportation of passengers** (GST applicable to the service)
2. The specific vehicle must be used for this taxable service
3. Exempt transportation (e.g., public transport below certain thresholds) may not generate ITC even if exception technically applies
4. Shared fleet: if the same vehicle is used sometimes for taxable passenger transport and sometimes for employee commute → partial use issue (see partial blocking section below)

### Exception 3: Driving/Flying/Navigating Training
{law_reference: "Section 17(5)(a)(C), 17(5)(aa)(i)(C)/(D)"}

**Conditions:**
1. Registered training institute (driving school, flying academy, navigation school)
2. Vehicles used specifically for training (not for administrative/personal use)

### Exception 4: Transportation of Goods (Vessels/Aircraft)
{law_reference: "Section 17(5)(aa)(ii)"}

**Conditions:**
1. Vessel/aircraft used for commercial goods transportation
2. GST charged on the freight/transport service

### Exception 5: Same-Category Outward Supply (Food, Beauty, Health, Insurance)
{law_reference: "Section 17(5)(b)(i) proviso"}

**Conditions:**
1. Inward supply category must be the **exact same** as outward supply category
2. The outward supply must be **taxable** (not exempt)
3. Examples: Restaurant (food in = food out ✓); Hotel catering (food in = food out ✓); Pharmacy buying medicines to sell ≠ medicines are different from health services
4. **Composite/mixed supply**: if food is an element of a taxable composite supply, the proviso also covers it

**Boundary case — Hospital:**
A hospital buys food for patients who are undergoing medical treatment (in-patient). The food is part of a composite taxable healthcare service. The proviso may apply. AAR positions: some hospitals have succeeded in claiming ITC on patient food under the composite supply argument.

### Exception 6: Plant and Machinery (Works Contract and Construction)
{law_reference: "Explanation to Section 17 CGST Act, 2017"}

**Definition of Plant and Machinery:**
> Apparatus, equipment, and machinery fixed to earth by foundation or structural support that are used for making outward supply of goods or services or both and includes such foundation and structural supports but excludes:
> (i) land, building or any other civil structures;
> (ii) telecommunication towers;
> (iii) pipelines laid outside the factory premises.

**Tests:**
- Used in the production/manufacturing process
- Fixed to earth but for operational/production purpose
- Not merely a fixture serving the building (like built-in furniture)

**Examples:**

| Asset | Plant and Machinery? | ITC Available? |
|-------|---------------------|---------------|
| Industrial boiler fixed in factory | Yes | Yes |
| Conveyor belt in factory | Yes | Yes |
| HVAC system in factory (serves production) | Arguable — some AARs say yes | Disputed |
| Office air conditioner | Generally no | Blocked |
| Built-in elevator in office building | Generally no (civil structure) | Blocked |
| Elevator in factory serving production floors | Arguable — serves production | Disputed |
| Solar panels on factory roof (for production power) | Arguably equipment | Disputed |
| Storage tank for raw materials | Yes (if for production) | Yes |

---

## Partial Blocking — The Unsolved Problem

### The Statutory Gap
Section 17(5) creates an **absolute block** for listed categories. There is **no provision** for partial ITC where the same supply is used partly for blocked and partly for eligible purposes.

### The Three Practical Situations

**Situation A: Asset Used Partly for Business, Partly Personal**
Example: Company car used 80% for client visits (business) and 20% for executive's personal errands.
- Statutory position: ITC is blocked (Section 17(5)(a) has no proportionate exception)
- Conservative approach: 100% blocked
- Aggressive approach: Claim 80% ITC based on actual business use
- CBIC guidance: None specifically
- Risk: Department will demand 100% block; aggressive approach requires documenting each trip

**Situation B: Fleet Vehicle Used Partly for Taxable Transport, Partly for Employee Commute**
Example: Cab operator's vehicle used 70% for GST-taxable passenger service, 30% for company employees (no GST charged).
- For the 70%: exception applies (transportation of passengers)
- For the 30%: blocked (rent-a-cab, 17(5)(b)(iii))
- Proportionate ITC on the 70% is the aggressive position; 100% blocked is the conservative position

**Situation C: Building Renovation Partly Capitalised, Partly Expensed**
Example: ₹10,00,000 renovation; ₹7,00,000 capitalised (improvement), ₹3,00,000 expensed (routine maintenance).
- Capitalised ₹7,00,000 portion: ITC blocked
- Expensed ₹3,00,000 portion: ITC eligible (subject to apportionment)
- This is the **most defensible partial approach** because it follows the statutory capitalisation test

### Recommended Approach by Risk Tier

| Situation | Recommended Approach | Documentation |
|-----------|---------------------|---------------|
| Company car (business + personal) | Conservative: 100% blocked | Lower risk |
| Works contract (capitalised + expensed split) | Split: block capitalised, eligible for expensed | Fixed asset register |
| Factory canteen (≥250 = mandatory, <250 = voluntary) | Split by employee headcount | Compliance records |
| Vehicle fleet (taxable transport + employee commute) | Seek advance ruling if material | Usage logs |

---

## Pre-Blocked vs Post-Blocked ITC

### Pre-Blocked (ITC Never Availed — Correct Approach)
At invoice receipt stage, identify blocked supply → do not post to Electronic Credit Ledger → charge the full invoice value (including GST) to expense or capitalise.

**Accounting entry example (car purchase):**
```
Dr. Motor Vehicle A/c          ₹12,16,000  (cost + blocked GST)
    Cr. Bank/Vendor              ₹12,16,000
```
No ITC entry.

### Post-Blocked (ITC Wrongly Availed — Requires Reversal)
If ITC was erroneously credited, reverse it:
1. GSTR-3B Table 4(B)(2): report the reversal in the month of discovery
2. Interest under Section 50: 18% p.a. from date of original claim to date of reversal
3. Maintain documentation of original error and correction

**Interest calculation:**
- Blocked ITC availed: ₹2,16,000 on 15 August 2024
- Reversal on 15 February 2025: 184 days
- Interest = ₹2,16,000 × 18% × 184/365 = ₹19,585 approximately

---

## ITC Blocked by Retrospective Amendment — Finance Act 2021

### The Scenario
Taxpayers who claimed ITC on capitalised renovations between 1 July 2017 and 31 December 2021 (before the Finance Act 2021 Explanation took effect) now face retroactive ITC blocks.

### Implications
1. **Identify**: Review fixed asset records for FY 2017-18 to FY 2021-22 for capitalised renovation
2. **Compute**: GST paid on those capitalised renovations = ITC to be reversed
3. **Reverse**: File GSTR-3B amendment or DRC-03 voluntary payment
4. **Interest**: 18% p.a. from date of original claim
5. **Time bar**: Department can issue SCN under Section 73 (within 3 years) or Section 74 (within 5 years for fraud) — significant exposure for large renovation projects

---

## Cross-References
> **See Also — Section 17(5) Full Text:** See [02_Blocked_ITC_Legal_Framework.md]
> **See Also — Interaction with Apportionment:** For sequencing of blocking before apportionment, see [06_Blocked_ITC_Interaction.md]
> **See Also — Disputed Areas:** For ambiguous partial-blocking scenarios and court positions, see [Shared/Disputed_Ambiguous_Areas.md]
