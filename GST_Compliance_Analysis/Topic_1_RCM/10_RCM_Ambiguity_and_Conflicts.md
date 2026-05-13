# RCM — Disputed and Ambiguous Areas (Advanced Analysis)
{complexity_level: "Advanced"}
{topic: "RCM"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}
{last_updated: "May 2026"}

## Introduction: Sources of Ambiguity in RCM

RCM ambiguity arises from four structural sources:

1. **Legislative gaps**: Terms like "services" and "body corporate" are not uniformly interpreted across the supply chain.
2. **CBIC circular over-reach or under-reach**: Circulars occasionally expand or narrow the statutory text in ways that create conflict.
3. **Divergent AAR/AAAR rulings**: State-level AARs have issued contradictory rulings on identical fact patterns, particularly between Maharashtra, Karnataka, and Rajasthan.
4. **Evolving business models**: Digital platforms, gig economy, secondment arrangements, and cross-border service models do not always fit neatly into 2017-era notification categories.

> **Practitioner Note**: CBIC circulars bind the department but do not bind the taxpayer as a matter of law (Supreme Court in _Ratan Melting & Wire Industries_). However, they set audit expectations and departing from a circular invites scrutiny.

---

## Ambiguity 1: Renting of Motor Vehicles — Body Corporate vs Individual
{law_reference: "Notification No. 29/2018-CT(Rate); Circular No. 164/20/2021-GST"}
{amendment_date: "06-Oct-2021"}

### The Dispute
Notification No. 29/2018 covers "services of renting of a motor vehicle provided to a body corporate." Pre-Circular 164/20/2021, the question was: when both the operator and the recipient are body corporates, does RCM (5%) or forward charge (12%) apply?

### CBIC Position
Circular 164/20/2021 clarified:
- **Body corporate to body corporate**: 12% forward charge; the supplier-body-corporate pays GST
- **Individual/HUF/proprietary firm to body corporate**: 5% RCM; the recipient-body-corporate pays

### Remaining Ambiguity (as of May 2026)

| Entity Type | Treated as Body Corporate? | RCM or Forward Charge? |
|-------------|---------------------------|------------------------|
| Company (Pvt/Ltd) | Yes | Forward charge at 12% |
| LLP | No (LLP Act: separate from Companies Act body corporate) | 5% RCM |
| Trust | No | 5% RCM |
| HUF | No | 5% RCM |
| Partnership Firm | No | 5% RCM |
| Cooperative Society | Uncertain — some AARs say yes, some no | Disputed |

**LLP Gap**: The term "body corporate" under Section 2(11) of the Companies Act does not include an LLP. Several AAR rulings (Karnataka, Rajasthan) have held that services from an LLP operator attract 5% RCM, not 12% forward charge. This remains unresolved by CBIC circular.

### **[MAHARASHTRA-SPECIFIC]** Maharashtra Position
Maharashtra AAR has followed the LLP-is-not-body-corporate interpretation. Maharashtra SGST officers in scrutiny cases apply 5% RCM when the vehicle operator is an LLP. Businesses using LLP-operated fleet services should price in this risk.

### Risk Assessment
**High risk** for businesses using LLP/trust-operated fleet. Recommended approach: obtain a written declaration from the operator confirming their legal status; apply RCM if operator is not a body corporate; document rationale.

---

## Ambiguity 2: GTA Services — Composite Supply and Ancillary Services
{law_reference: "Notification No. 13/2017-CT(Rate); Circular No. 136/6/2020-GST"}
{amendment_date: "03-Apr-2020"}

### The Dispute
GTA services attract 5% RCM (or 12% forward charge from July 2022). The dispute: when a GTA also provides **loading/unloading, packaging, warehousing** along with transportation, is the entire supply treated as GTA (composite supply) or are ancillary services separated?

### CBIC Position
Circular 136/6/2020: if the principal supply is transportation and other services are ancillary/incidental, the composite supply is treated as GTA service and the same rate/RCM mechanism applies.

### Remaining Ambiguity

**Issue 1 — GTA + Warehousing**  
If a logistics company provides transportation + 30-day warehousing under a single contract, the warehousing portion is significant and not merely incidental. Some AARs have held this is not a composite GTA supply.

**Issue 2 — Consignment Note Test**  
GTA is defined by issuance of a consignment note. Many smaller transporters don't issue consignment notes but do transport goods. CBIC has not clarified: does transportation without a consignment note = GTA service (RCM) or general transportation service (forward charge)?

**Issue 3 — 2022 Forward Charge Opt-Out**  
GTA can opt for 12% forward charge by 15 March. If a GTA fails to file the declaration on time but claims to have opted, and the recipient pays no RCM, both parties are exposed. CBIC has not provided a late-filing condonation mechanism.

### Risk Assessment
**Medium risk**. For large-value GTA contracts: verify (a) consignment note issuance, (b) whether GTA has filed forward-charge declaration on the GST portal, (c) nature of ancillary services.

---

## Ambiguity 3: Legal Services — Partnership Firms, LLPs, and Non-Advocates
{law_reference: "Notification No. 13/2017-CT(Rate); Circular No. 177/09/2022; Circular No. 211/5/2024"}

### The Dispute
**Original notification coverage**: "An individual advocate including a senior advocate." Services by individual advocates to business entities = RCM.  
**2017 expansion**: "Firm of advocates" also added.

### Current Ambiguity Matrix

| Service Provider | Recipient | RCM Applicable? | Issue |
|-----------------|-----------|----------------|-------|
| Individual advocate | Business entity | Yes (well-settled) | None |
| Firm of advocates | Business entity | Yes (well-settled) | None |
| Individual advocate | Individual client | No (not business entity) | None |
| LLP of lawyers (mixed advocates/non-advocates) | Business entity | Disputed | LLP not "firm of advocates"? |
| Legal consultant (non-enrolled advocate) | Business entity | No RCM (not covered) | Forward charge applies |
| Foreign law firm (import of service) | Indian business entity | Yes — IGST RCM | Import of service |
| In-house legal team (employee) | Employer | No GST | Employee-employer, Schedule III |

**LLP Law Firm Gap**: An LLP of lawyers is not technically a "firm of advocates" under the Advocates Act. Some practitioners argue LLP legal services are not covered by the RCM notification. No CBIC circular has specifically addressed LLP law firms.

### **[MAHARASHTRA-SPECIFIC]** Maharashtra Interpretation
Pre-Circular 177/09/2022, Maharashtra SGST officers frequently audited businesses receiving legal services and questioned whether RCM was correctly applied. Post-circular, compliance improved but legacy audit demands for 2017-2021 periods remain in some cases before GSTAT.

### Risk Assessment
**Low-to-medium risk** for standard advocate/firm engagement. **High risk** for LLP law firms — consider seeking an advance ruling from Maharashtra AAR.

---

## Ambiguity 4: Director Services — Employment vs Professional Fee
{law_reference: "Section 17(5) CGST Act (Schedule III); Circular No. 177/09/2022-GST"}

### The Core Tension
Schedule III: services provided by an employee to their employer = outside GST.  
Notification 13/2017: services by a director to the body corporate of which they are a director = RCM at 18%.

### CBIC's Test (Circular 177/09/2022)
Apply the **employer-employee test**:
- Is the director covered under an employment contract?
- Is TDS deducted under Section 192 (salaries)?
- Is PF/ESI applicable?
- If YES → employee; services = Schedule III; no GST.
- If NO → independent professional; services = RCM at 18%.

### Remaining Disputes

**Issue 1 — Mixed Director**  
A director receives both salary (₹5 lakh/month under employment contract) AND commission on profits (₹2 lakh/month under a separate agreement). How to bifurcate?  
→ Salary: Schedule III, no GST  
→ Commission: RCM at 18% on ₹2 lakh  
This split is not addressed by CBIC with concrete examples.

**Issue 2 — Nominee Director**  
A bank appoints a nominee director on the board of a borrower company. The nominee director is paid sitting fees by the borrower company. Is RCM applicable?  
→ Generally yes (services by director to body corporate), but nominee directors typically argue they are not rendering services in a conventional sense. Disputed in several AARs.

**Issue 3 — Foreign Company Director**  
A director resident in a foreign country sits on the Indian subsidiary's board. Services = import of service under IGST; RCM on Indian company. Place of supply = India (Section 13(3) IGST). Rate: 18% IGST.

### Risk Assessment
**High risk** for companies with complex director remuneration structures. Annual review of all director payment structures against the employment/professional test is recommended.

---

## Ambiguity 5: Section 9(4) — Current Scope After 2019 Partial Restoration
{law_reference: "Section 9(4) CGST Act, 2017; Notification No. 7/2019-CT(Rate)"}

### Historical Timeline
| Period | Section 9(4) Position |
|--------|----------------------|
| Jul 2017 – Jan 2018 | All unregistered supplier supplies → RCM on registered recipient |
| Jan 2018 – Oct 2019 | Section 9(4) suspended entirely (Notification No. 8/2018) |
| Oct 2019 onwards | Restored only for specific notified categories (real estate, etc.) |

### Current Dispute
The exact list of categories currently covered under Section 9(4) (as of May 2026) is defined by notifications that have been amended multiple times. **Practitioners must verify the current notification** as this document provides the framework but not the live notification text.

Key question: **Does Section 9(4) currently apply to professional services received from unregistered consultants by a CA firm?** This depends on whether professional services are in the current notification list. If they are not specifically listed, the historical (pre-2018) broad application does not apply under the current narrowed scope.

> **Critical Practice Note**: Do not assume Section 9(4) applies to ALL unregistered supplier purchases as of May 2026. Verify the current notification list. Incorrect application (either over-applying or under-applying RCM) both carry risk.

### Risk Assessment
**High risk** if RCM is incorrectly applied or missed. Recommended: maintain a running list of notified categories under Section 9(4) and review annually.

---

## Ambiguity 6: Secondment of Employees
{law_reference: "Circular No. 196/8/2023-GST"}
{amendment_date: "2023"}

### The Dispute
When a foreign parent company seconds an employee to the Indian subsidiary:
- **Position A**: Foreign parent is providing "manpower supply services" to the Indian entity → import of service → IGST RCM on Indian entity
- **Position B**: The arrangement is purely employment with the Indian subsidiary; the foreign parent's role is administrative → no supply of service → no GST

### CBIC Position (Circular 196/8/2023)
**Test**: Is there cost recovery by the foreign entity?
- If YES (salary charged to Indian entity): import of service → IGST RCM
- If NO recovery: no supply → no GST

### Remaining Disputes
1. **Nominal recovery**: If the foreign entity charges only a nominal administrative fee (not salary pass-through), is there a supply?
2. **Deemed recovery**: If the Indian entity's audited accounts show an allocation of the employee's global cost, is there deemed cost recovery?
3. **Multiple country secondments**: Employee seconded to India 50% of time; cost split 50/50 globally. Which portion is an Indian import of service?

These fact-specific nuances remain unresolved. Litigation risk is high in MNC sectors.

### Risk Assessment
**Very high risk** for MNCs with cross-border employee movements. Recommend: detailed secondment agreement specifying nature of engagement; seek advance ruling for material value arrangements.

---

## Ambiguity 7: Residential Dwelling Renting Post-July 2022
{law_reference: "Notification No. 5/2022-CT(Rate) dated 13-Jul-2022"}
{amendment_date: "18-Jul-2022"}

### The Amendment
From 18 July 2022: renting of residential dwelling to a **registered person** attracts 18% GST under RCM (recipient pays). Previously, all residential renting was exempt.

### Disputes
1. **Who is "registered person"?**: An individual registered for GST using their home as a business address — do they pay RCM on home rent? Several AARs have said yes.
2. **Proprietor renting own home**: A proprietor uses home address as principal place of business (PPOB); home is rented by spouse. Is this covered?
3. **Mixed use**: Residential flat used 60% for living, 40% as home office. Does RCM apply on full rent or only 40%?
4. **Unregistered landlord**: If landlord is unregistered, Section 9(4) may also be triggered (if residential renting to registered person is in the current Section 9(4) notification) in addition to the new residential renting RCM notification. Double coverage risk.

### **[MAHARASHTRA-SPECIFIC]** Impact in Mumbai/Pune
High residential rents in Mumbai and Pune make this provision particularly significant for Maharashtra-registered professionals and businesses. Maharashtra SGST officers have raised scrutiny notices for FY 2022-23 and 2023-24 on unaddressed residential renting RCM. Practitioners advising Mumbai-based registered persons should specifically check residential lease agreements.

---

## Practical Risk Mitigation Framework

### Tier 1 — Low Risk (Follow CBIC)
Well-settled positions (individual advocate RCM, GTA RCM for non-opted GTA, director commission RCM): follow CBIC circular without further analysis.

### Tier 2 — Medium Risk (Document Position)
Positions where CBIC has issued a circular but there is residual ambiguity (LLP motor vehicle, LLP law firm): document the specific legal basis for the position taken; maintain working papers.

### Tier 3 — High Risk (Seek Advance Ruling or Legal Opinion)
Positions where no CBIC circular exists or where circular does not clearly cover the situation (secondment, mixed director remuneration, nominee directors): obtain:
(a) Written legal opinion from a GST advocate, OR
(b) Advance ruling from the AAR (Section 97 CGST Act)

### Advance Ruling: Maharashtra AAR Process
1. File Form ARA-01 with the Karnataka/Maharashtra AAR
2. Pay prescribed fee (₹10,000 under most state AARs)
3. AAR is binding on the applicant and the jurisdictional officer
4. If adverse: appeal to AAAR within 30 days
5. Note: Advance ruling is not binding on other taxpayers

---

## Cross-References
> **See Also — Blocked ITC Ambiguity:** Where disputed RCM supplies are also disputed for Section 17(5) blocking, see [Shared/Disputed_Ambiguous_Areas.md]
> **See Also — Amendments Timeline:** For the chronological history of all RCM amendments cited above, see [Shared/Amendments_Timeline_May_2026.md]
> **See Also — Maharashtra Disputes:** Maharashtra-specific AAR positions across all three topics are consolidated in [Shared/Disputed_Ambiguous_Areas.md]
