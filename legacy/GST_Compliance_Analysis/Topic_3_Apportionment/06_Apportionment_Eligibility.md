# ITC Apportionment — Eligibility of Inputs for Common Credit
{complexity_level: "Advanced"}
{topic: "ITC Apportionment"}
{law_reference: "Section 17(1)–(3) CGST Act, 2017; Rule 43 CGST Rules, 2017"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## Overview
Not all inputs qualify for entry into the Rule 43 apportionment pool. Before a common input enters the T3 pool, it must:
1. Not be blocked under Section 17(5)
2. Not be directly attributable to exempt supplies (T2 exclusion)
3. Carry GST that was actually paid (ITC must exist to apportion)
4. Relate to the business of the registered person

This file addresses the eligibility conditions for each class of input and the boundary cases that create disputes.

---

## Eligibility Matrix: Common Inputs
{law_reference: "Section 17(2); Rule 43"}

| Input Type | Section 17(5) Block? | Eligible for T3 Pool? | Notes |
|-----------|---------------------|----------------------|-------|
| Office rent | No | YES | Common input — T3 |
| Electricity | No | YES | Common input — T3 |
| Internet connectivity | No | YES | Common input — T3 |
| Accounting/ERP software | No | YES | Common input — T3 |
| Housekeeping / cleaning services | No | YES | Common input — T3 |
| Security services | No | YES | Common input — T3 |
| General professional indemnity insurance | No | YES (unless blocked) | T3 unless attributable |
| Office stationery | No | YES | T3 if shared |
| IT hardware (computers, servers) | No | YES (capital goods) | 60-month Rule 43 |
| Motor vehicle ≤13 seats | YES | NO — blocked | Section 17(5)(a) |
| Food/beverages for office | YES | NO — blocked | Section 17(5)(b)(i) |
| Club membership | YES | NO — blocked | Section 17(5)(b)(ii) |
| Cab hire for employees | YES | NO — blocked | Section 17(5)(b)(iii) |
| Group health insurance (voluntary) | YES | NO — blocked | Section 17(5)(b)(iii) |
| Group health insurance (mandatory) | Conditionally eligible | YES (if eligible) | Check notification |
| Capitalised renovation | YES | NO — blocked | Section 17(5)(c)/(d) |
| Expensed office repairs | No | YES | Not capitalised → T3 |

---

## What Is "Common Credit" — The Attribution Threshold
{law_reference: "Rule 43(1)(c)"}

An input qualifies as common credit (T3) only where:
- It is **impossible to attribute** the input to a single output stream with reasonable certainty
- Attributing the input to one stream would require arbitrary assumptions or splitting invoices

**Practical threshold**: If more than 5% of an input's use is for the "other" supply type, it is likely a common input. If usage in the "other" category is trivial (de minimis), some practitioners attribute it entirely to the dominant stream.

**Risk warning**: De minimis attribution is not sanctioned by Rule 43 and may be challenged in audit.

---

## Specific Input Classes — Eligibility Analysis

### 1. Lease / Rental of Premises
**Status**: T3 common input
**Rationale**: Leased premises typically serve the entire registered person — all activities including taxable and exempt.

**Exception — Dedicated premises**: If a separate leased space is used exclusively for a taxable division (e.g., a dedicated IT services floor) and another space is exclusively for exempt advisory, those specific rents may be T1 and T2 respectively.

**Documentation for T1 attribution**: Separate lease agreements, floor plans showing exclusive use, billing codes from operations records.

### 2. Electricity
**Status**: T3 common input in most cases  
**Exceptions**:
- If a factory has a dedicated sub-meter for production machinery (taxable) and a separate sub-meter for administrative block serving both: production sub-meter → T1; admin sub-meter → T3
- If separate electricity connections exist for distinct activities: attribute by connection

**Maharashtra position**: Maharashtra SGST officers have challenged T1 claims for production electricity where the entity also makes exempt supplies, arguing that the factory premises serve both. Sub-meter data with calibration certificates is the best defense.

### 3. Professional Indemnity Insurance
**Status**: T3 common input  
**Rationale**: Covers the entire practice — both taxable and exempt engagements.

**Alternative argument**: Some practitioners argue that if a CA firm's FCRA advisory (exempt) has a separate indemnity clause or a de minimis value, the insurance is predominantly T1. This aggressive position is difficult to defend in Maharashtra scrutiny.

### 4. Telecommunications (Internet, Telephone)
**Status**: T3 common input  
**Rationale**: Single internet connection / EPABX serves all personnel regardless of output type.

**Alternative for call-centre businesses**: If CDR (Call Detail Records) can attribute specific lines/numbers to specific output activities, a partial T1/T2 attribution may be supportable.

### 5. Staff Training and Development
**Status**: T3 (in most cases)  
**Rationale**: General staff training develops skills used across all service lines.

**Exception**: Role-specific certifications (e.g., SEBI certification for a specific securities advisory team — taxable service) may be T1 if the role is entirely within the taxable stream.

### 6. Legal and Professional Fees
**Status**: Depends on engagement
- Legal fees for a specific taxable commercial contract matter → T1
- Legal fees for a trust deed (exempt advisory) → T2
- General company retainer fees covering all matters → T3

**Documentation**: Engagement letter specifying the matter; billing code on the invoice; lawyer's description of services.

### 7. Capital Goods — When T1 vs T3
**Status**: T1 if exclusively for taxable; T3 (60-month) if common

**Examples:**
| Capital Good | Use | Classification |
|-------------|-----|---------------|
| Audit software (perpetual licence) | Only for taxable statutory audit | T1 — full ITC immediately |
| Enterprise ERP system | Used across all divisions (taxable + exempt) | T3 — 60-month capital goods apportionment |
| Dedicated production machine | Only for taxable manufactured goods | T1 — full ITC |
| Building renovation (capitalised) | Own-use premises (all activities) | BLOCKED — Section 17(5) |
| Server farm for cloud services | Taxable cloud services only | T1 — full ITC |
| Server farm (also handles exempt data) | Mixed use | T3 — 60-month |

---

## Inputs That Are NOT Eligible for ITC Regardless of Apportionment

### Category 1: Inputs Where No GST Was Paid
- Agricultural inputs (mostly exempt)
- Petroleum products (outside GST — no input GST exists)
- Electricity from state DISCOM for residential use
- Alcohol for human consumption

No ITC exists on these inputs — therefore no apportionment possible or needed.

### Category 2: Blocked Inputs (Section 17(5))
As listed above — these are outside the T1/T2/T3 framework entirely.

### Category 3: Inputs Not for Business
Section 17(1) requires that ITC be available only for goods/services used "in the course or furtherance of business." Personal use items of promoters/directors are outside the ITC framework entirely (Section 17(5)(g) confirms this explicitly).

### Category 4: Inputs Where Supplier Failed to File GSTR-1
Section 16(2)(aa): ITC is available only to the extent it appears in GSTR-2B. If a supplier has not filed GSTR-1, the input does not appear in GSTR-2B and ITC cannot be claimed (Rule 37A allows claiming if supplier files within a time limit, but unpaid/unfiled supplier ITC is at risk).

---

## The "Business Purpose" Requirement
{law_reference: "Section 17(1) CGST Act; Rule 43"}

Rule 43 apportionment presupposes that the inputs enter the apportionment pool as **business inputs**. Inputs with a mix of business and personal use present a different issue:

**Issue**: A partner's mobile phone used 70% for business (all types) and 30% for personal calls.
- The 30% personal use makes this a Section 17(5)(g) partial block risk
- Section 17(5)(g) bars ITC on personal consumption
- Conservative approach: Do not claim ITC (100% blocked due to personal use element)
- Aggressive approach: Claim 70% ITC (business portion only)

CBIC has not provided guidance on proportionate ITC for partial personal use. The conservative approach is recommended.

---

## Inputs for Zero-Rated Supplies (Exports and SEZ)
{law_reference: "Section 16(1) IGST Act, 2017 — zero-rated supply"}

Inputs used for zero-rated supplies (exports, SEZ supplies) are treated as taxable for apportionment purposes:
- T1 if exclusively for zero-rated exports → full ITC (available for refund)
- T3 if common (both domestic taxable and exports) → apportioned; the export portion counts in the taxable numerator

**Refund of ITC for exports**: If accumulated ITC arises from zero-rated exports and cannot be utilized against output liability, Section 54 provides for refund. The apportioned export ITC (T1 or T3-taxable portion) is refundable.

---

## **[MAHARASHTRA-SPECIFIC]** Maharashtra AAR — Common Input Eligibility
{law_reference: "Maharashtra AAR rulings; Maharashtra SGST scrutiny positions"}

**Maharashtra AAR Ruling**: In several rulings, the Maharashtra AAR has affirmed that where a common input genuinely cannot be attributed to a single output stream, T3 classification and Rule 43 apportionment is the correct treatment. The AAR has not approved de minimis attribution approaches.

**Scrutiny focus**: Maharashtra SGST officers specifically look for entities that have classified inputs as T1 (full ITC) that should be T3 (apportioned). This results in demands for the differential ITC (the amount that should have been reversed under Rule 43) plus interest.

**Recommended practice for Maharashtra taxpayers**:
1. When in doubt between T1 and T3: use T3 (conservative — reversal is only proportional)
2. When clearly T1 (specific engagement, documented nexus): document the nexus robustly
3. Maintain a T1 attribution evidence file: engagement letters, trip reports, specific invoice coding

---

## Cross-References
> **See Also — Classification Methods:** For the T1/T2/T3 classification process in step-by-step form, see [05_Apportionment_Step_by_Step.md]
> **See Also — Blocked ITC Eligibility:** For the full Section 17(5) check that precedes T1/T2/T3 classification, see [../Topic_2_Blocked_ITC/05_Blocked_ITC_Eligibility_Logic.md]
> **See Also — Scenarios:** For worked examples of eligibility determinations in complex fact patterns, see [08_Apportionment_Scenarios_Advanced.md]
