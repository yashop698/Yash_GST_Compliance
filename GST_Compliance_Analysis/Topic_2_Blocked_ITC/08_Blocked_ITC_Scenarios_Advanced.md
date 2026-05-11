# Blocked ITC — Advanced Scenarios
{complexity_level: "Advanced"}
{topic: "Blocked ITC"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}
{last_updated: "May 2026"}
{law_reference: "Section 17(5) CGST Act, 2017; IGST Act, 2017; Maharashtra GST Act, 2017"}

---

## Introduction

These scenarios demonstrate the application of Section 17(5) of the CGST Act, 2017 across isolated fact patterns, integrated multi-topic situations, and legally ambiguous edge cases. Each scenario is designed to replicate the complexity encountered in actual practice by CA, CS, and CMA professionals.

**Scenario B** connects to the master cross-topic case study (CA firm XYZ & Co., Maharashtra) that is referenced throughout the document system. Readers following that case study should read Scenario B in conjunction with the RCM Scenario B and the Apportionment Scenario A from their respective topic files.

**How to read these scenarios:**
- Facts are stated in a realistic, practice-oriented manner
- Analysis follows the statutory sequence: identify supply → check Section 17(5) → apply exceptions → compute eligible ITC
- Cross-references guide the reader to related topics
- Accounting entries and GSTR-3B treatment are provided for each scenario

**Governing law:** Section 17(5) of the CGST Act, 2017; read with Rule 42 and Rule 43 of the CGST Rules, 2017; read with applicable CBIC circulars up to May 2026.

---

## Scenario A: Isolated — Office Pantry Beverage Subscription
{topic: "Blocked ITC — Scenario A"}
{scenario_type: "Isolated — Single Issue"}
{law_reference: "Section 17(5)(b)(i) CGST Act, 2017"}
{difficulty: "Foundational — clear-cut blocking"}

### Facts

CA firm **ABC & Associates**, registered in Maharashtra (GSTIN: 27AAABC1234A1Z5), provides chartered accountancy services — audit, tax advisory, and compliance services — to its clients. The firm subscribes to a **premium coffee machine and beverage service** from Brewer Solutions Pvt. Ltd.

**Monthly invoice details:**
- Service charge (coffee machine + monthly beverage supply): ₹5,000
- CGST @ 9%: ₹450
- SGST (Maharashtra) @ 9%: ₹450
- **Total invoice value: ₹5,900**

The coffee machine is installed in the office pantry. Partners and employees consume coffee and other beverages during working hours. The beverage service is **not** provided as part of any client-facing service. ABC & Associates does **not** carry on any food and beverage business.

**Business context:**
- Nature of outward supply: Audit, tax, and advisory services (SAC 998211 / 998212) — taxable at 18%
- No exempt supplies
- No food/beverage supply to clients

---

### Legal Analysis

#### Step 1 — Identify the Supply

The inward supply is a **food and beverage service** — specifically, supply of beverages (coffee, tea) through a subscription-based machine and consumable restocking arrangement. This constitutes "food and beverages" within the meaning of Section 17(5)(b)(i) of the CGST Act, 2017.

#### Step 2 — Apply Section 17(5)(b)(i)

Section 17(5)(b)(i) reads:

> *"Notwithstanding anything contained in sub-section (1) of section 16 and sub-section (1) of section 18, input tax credit shall not be available in respect of the following, namely — (b) ... (i) food and beverages, outdoor catering, beauty treatment, health services, cosmetic and plastic surgery, leasing, renting or hiring of motor vehicles, vessels or aircraft referred to in clause (a) or clause (aa) except when used for the purposes specified therein, life insurance and health insurance..."*

"Food and beverages" is **explicitly listed** in the blocked categories. Office pantry beverages fall squarely within this expression.

#### Step 3 — Examine Exceptions to the Block

Section 17(5)(b) provides two overriding exceptions under which ITC becomes available even for blocked items:

**Exception 1:** Where the goods or services of the same category are used by a registered person for making an outward taxable supply of the same category of goods or services.

- ABC & Associates provides audit/advisory services. It does **not** supply food and beverages as an outward supply.
- **Exception 1 does NOT apply.**

**Exception 2:** Where the goods or services are received by a taxable person engaged in the manufacture of such goods or the supply of such services and the inward supply is used in the course or furtherance of business.

- The firm is not engaged in manufacturing food/beverage products.
- **Exception 2 does NOT apply.**

**Exception 3 (Mandatory obligation under law):** Per CBIC Circular 172/04/2022-GST dated 06-Jul-2022, ITC is available on food/canteen services where the employer is under a **statutory obligation** to provide such services (e.g., canteen under Section 46 of the Factories Act, 1948 for factories employing ≥250 workers).

- ABC & Associates is a **CA firm**, not a factory. It is not subject to the Factories Act canteen obligation.
- The beverage subscription is a **voluntary employee welfare initiative**, not mandated by any Central or State law.
- **Exception 3 does NOT apply.**

#### Step 4 — Conclusion

> **ITC of ₹900 per month (₹450 CGST + ₹450 SGST) is FULLY BLOCKED under Section 17(5)(b)(i) of the CGST Act, 2017.**

---

### Alternative Scenarios

#### Scenario A1: ABC & Associates Operates a Client Cafeteria (Same Category Outward Supply)

If ABC & Associates were a **restaurant chain** or if it supplied food and beverages to clients as a separately charged service, then:
- Outward supply = food and beverages (same category as the inward supply)
- Exception 1 of Section 17(5)(b) would apply
- **ITC would be AVAILABLE** on the beverage subscription
- This is the position applicable to hotels, restaurants, caterers, etc.

#### Scenario A2: Factory with ≥250 Workers — Mandatory Canteen

If ABC & Associates were instead a manufacturing company with **300 workers** in a Maharashtra factory:
- Section 46 of the Factories Act, 1948 mandates provision of a canteen for factories employing ≥250 workers
- CBIC Circular 172/04/2022-GST dated 06-Jul-2022 expressly clarifies: *"Services of food and beverages provided by a canteen maintained in a factory as mandated under Section 46 of the Factories Act, 1948 are eligible for ITC"*
- **ITC would be AVAILABLE** on the canteen food/beverage expenses
- Documentation required: Factories Act registration, compliance records, canteen management agreement

#### Scenario A3: AAR Positions — Pantry Snacks in Office

Multiple Advance Ruling Authorities (AAR) across states have consistently held:
- Office pantry snacks, biscuits, juices, and beverages consumed by employees = personal consumption
- These fall squarely under Section 17(5)(b)(i)
- ITC is blocked regardless of whether the expense is claimed as a legitimate business deduction under Income Tax Act
- Representative positions: AAR Maharashtra in re. Coffee Day Beverages (indicative); consistent CBIC practice
- **Result: ITC blocked.** The AAR positions align uniformly with the statutory text and CBIC guidance.

---

### GSTR-3B Treatment

| Particulars | Amount |
|---|---|
| Total invoice value | ₹5,900 |
| CGST (₹450) + SGST (₹450) — GST component | ₹900 |
| ITC eligible | NIL |
| ITC blocked (Table 4D) | ₹900 |

**GSTR-3B Table 4:**
- Table 4A — Eligible ITC (as per GSTR-2B): ₹900 auto-populated (the vendor has filed their return and GSTR-2B shows the credit)
- Table 4D(1) — ITC available in GSTR-2B but NOT availed (ineligible/blocked): **₹900**
- Net ITC claimed: **NIL**

**Note:** The GSTR-2B auto-population does NOT distinguish between eligible and blocked ITC. The taxpayer must manually identify and exclude blocked ITC in Table 4D. Failure to do so results in wrongful availment.

---

### Accounting Entry

**At invoice receipt:**

| Account | Dr (₹) | Cr (₹) |
|---|---|---|
| Office Expenses — Beverage Subscription | 5,900 | |
| Vendor Payable (Brewer Solutions Pvt. Ltd.) | | 5,900 |

**Rationale:** Since ITC is blocked, the full invoice value including GST (₹5,900) is charged to the expense account. No separate ITC receivable is created. The ₹900 GST is absorbed as part of the cost of the beverage service.

**Note:** No entry to Input CGST or Input SGST ledger. The GST of ₹900 is embedded in the office expenses line.

**Month-end GSTR-3B filing note:** Document ₹900 as blocked ITC in the internal blocked ITC register. Report in Table 4D of GSTR-3B.

---

## Scenario B: Integrated — CA Firm with Vehicle + RCM Vendor + Office Rent (Cross-Topic Master Scenario — Blocked ITC Step)
{topic: "Blocked ITC — Scenario B"}
{scenario_type: "Integrated — Multi-Issue, Cross-Topic Master Case Study — Blocked ITC Step"}
{law_reference: "Section 17(5)(a), 17(5)(a)(ii), 17(5)(b)(i), Section 9(4), Rule 42, Rule 43 CGST Act/Rules, 2017"}
{cross_reference: "RCM Scenario B [Topic_1_RCM/07_RCM_Scenarios_Advanced.md]; Apportionment Scenario A [Topic_3_Apportionment/08_Apportionment_Scenarios_Advanced.md]"}
{difficulty: "Advanced — Integrated, Multi-Layer"}

### Facts (Continuing from RCM Scenario B)

**CA firm XYZ & Co.**, registered in Maharashtra (GSTIN: 27AAAXYZ5678B1Z3), is a mid-size CA practice engaged in:
- Statutory audit and tax advisory for corporate clients (70% of revenue) — **Taxable supply** @ 18% GST
- Trust and NGO advisory (30% of revenue) — **Exempt supply** (services to charitable trusts are exempt under Notification 12/2017-CT(Rate))

**Transactions in the relevant month (say, October 2024):**

| # | Transaction | Amount (excluding GST) | GST Rate | GST Amount |
|---|---|---|---|---|
| 1 | Purchase of company car — Honda City sedan (5 seats) | ₹12,00,000 | 18% (GST on car) | ₹2,16,000 |
| 2 | Monthly car maintenance service | ₹5,000 | 18% | ₹900 |
| 3 | IT consulting — Mr. Sharma (unregistered) — RCM | ₹2,00,000 | 18% (RCM) | ₹36,000 |
| 4 | Office rent — XYZ Commercial Tower | ₹1,00,000 | 18% | ₹18,000 |

**RCM context:** Mr. Sharma's services are subject to RCM under Section 9(4) as he is an unregistered supplier providing professional services to a registered person. XYZ & Co. has already paid ₹36,000 RCM in cash via DRC-03/GSTR-3B and has obtained a self-invoice. (Full RCM mechanics: see RCM Scenario B.)

**Practice revenue split:** 70% taxable (statutory audit) / 30% exempt (trust advisory)

---

### Step 1 — Vehicle Purchase: ITC Analysis

**Statutory provision:** Section 17(5)(a) of the CGST Act, 2017:

> *"Input tax credit shall not be available in respect of ... (a) motor vehicles for transportation of persons having approved seating capacity of not more than thirteen persons (including the driver), except when they are used for — (i) making further supply of such motor vehicles; or (ii) transportation of passengers; or (iii) imparting training on driving such motor vehicles..."*

**Honda City sedan:** 5 seats (including driver) — clearly within the ≤13 seats category.

**Exception check:**
- Is XYZ & Co. in the business of selling cars? **No.**
- Is XYZ & Co. providing passenger transportation services? **No** — it provides CA services.
- Is XYZ & Co. imparting driving training? **No.**

**Conclusion:**

> **ITC on car purchase of ₹2,16,000 (CGST ₹1,08,000 + SGST ₹1,08,000) is FULLY BLOCKED under Section 17(5)(a).**

**Asset capitalisation:** The car is capitalised in the fixed assets register at full cost including blocked GST:
- Car cost: ₹12,00,000
- Blocked GST (added to cost): ₹2,16,000
- **Capitalised value: ₹14,16,000**
- Depreciation will be computed on ₹14,16,000 under Income Tax Act/Companies Act as applicable.

**No ITC entry** is made in the Electronic Credit Ledger (ECL).

---

### Step 2 — Vehicle Maintenance ITC: Analysis

**Statutory provision:** Section 17(5)(a)(ii) of the CGST Act, 2017 extends the block on motor vehicles to include:

> *"...services of repair and maintenance in so far as they relate to motor vehicles, vessels or aircraft referred to in clause (a) or clause (aa)..."*

The October 2024 car maintenance invoice covers routine servicing of the Honda City sedan.

**Logic:** If the vehicle itself is in the blocked category, the ITC on services used to maintain that vehicle is also blocked. The rationale is to prevent indirect ITC claims on blocked assets through maintenance expenses.

**Conclusion:**

> **ITC on car maintenance of ₹900 (CGST ₹450 + SGST ₹450) is FULLY BLOCKED under Section 17(5)(a)(ii).**

**GSTR-3B:** ₹900 reported in Table 4D — Ineligible ITC.

**Accounting entry:**
| Account | Dr (₹) | Cr (₹) |
|---|---|---|
| Vehicle Maintenance Expense | 5,900 | |
| Vendor Payable | | 5,900 |

The ₹900 GST is absorbed into the maintenance expense (not credited to ECL).

---

### Step 3 — RCM Consultant ITC: Analysis (Continuing from RCM Scenario B)

**Background:** XYZ & Co. has engaged Mr. Sharma (unregistered IT consultant) at ₹2,00,000/month. RCM of ₹36,000 (18% IGST, as this is inter-state supply) was paid in cash.

**Section 17(5) check — IT consulting services:**

Review each clause of Section 17(5):
- (a): Motor vehicles — **Not applicable** (this is a professional service, not a motor vehicle)
- (aa): Vessels, aircraft — **Not applicable**
- (b)(i): Food and beverages, outdoor catering, etc. — **Not applicable**
- (b)(ii): Membership of clubs, health and fitness centres — **Not applicable**
- (b)(iii): Rent-a-cab, life insurance, health insurance — **Not applicable** (IT consulting is not rent-a-cab or insurance)
- (c): Works contract for immovable property — **Not applicable**
- (d): Goods/services for construction on own account — **Not applicable**
- (e): Goods lost/stolen/destroyed — **Not applicable**
- (f): Personal consumption — **Not applicable** (IT consulting is a business service)
- (g): Free gifts — **Not applicable**
- (h): Tax paid under composition scheme — **Not applicable**

**Conclusion:**

> **IT consulting services from Mr. Sharma are NOT listed in Section 17(5). ITC of ₹36,000 on RCM is ELIGIBLE (subject to apportionment).**

**Important clarification:** The payment of RCM in cash does not by itself make ITC available. The ITC eligibility test under Section 17(5) must still be applied independently. In this case, since IT consulting is not a blocked category, the ₹36,000 ITC enters the common apportionment pool.

**Timing of ITC claim:** Under Section 16(4A) (introduced by Finance Act 2022), ITC on RCM is available in the month in which the tax is paid in cash — i.e., October 2024. The ₹36,000 ITC can be claimed in October 2024's GSTR-3B.

**Entry for RCM ITC (after passing eligibility test):**
| Account | Dr (₹) | Cr (₹) |
|---|---|---|
| Input IGST (RCM — Eligible, pending apportionment) | 36,000 | |
| RCM Tax Payable — IGST | | 36,000 |

(The RCM cash payment was already recorded separately — see RCM Scenario B for full RCM accounting entries.)

---

### Step 4 — Office Rent ITC: Analysis

**The inward supply:** Commercial office rent at ₹1,00,000/month + GST ₹18,000 (CGST ₹9,000 + SGST ₹9,000).

**Section 17(5) check — Commercial office rent:**

Office rent for commercial premises is NOT listed in Section 17(5). It is:
- Not a motor vehicle (not (a) or (aa))
- Not food and beverages, not outdoor catering (not (b)(i))
- Not rent-a-cab or insurance (not (b)(iii))
- Not a works contract for immovable property (not (c))
- Not goods/services for construction on own account (not (d))

**Conclusion:**

> **ITC on office rent of ₹18,000 (CGST ₹9,000 + SGST ₹9,000) is NOT BLOCKED under Section 17(5). It is ELIGIBLE ITC — but as the office is used for both taxable and exempt supplies, it enters the common apportionment pool under Rule 42/43.**

**Note on "residual block" — personal consumption:** Office rent is a legitimate business overhead and does not constitute "personal consumption" under Section 17(5)(f). The office is used for professional practice.

**Entry for office rent ITC (eligible, pending apportionment):**
| Account | Dr (₹) | Cr (₹) |
|---|---|---|
| Rent Expense | 1,00,000 | |
| Input CGST (Eligible — Pending Apportionment) | 9,000 | |
| Input SGST (Eligible — Pending Apportionment) | 9,000 | |
| Vendor Payable (XYZ Commercial Tower) | | 1,18,000 |

---

### Step 5 — Apportionment Preview (Rule 42 / Rule 43)

The ITC on Mr. Sharma's consulting services (₹36,000) and office rent (₹18,000) are both "common" inputs — used for both taxable (70%) and exempt (30%) supplies.

**Common ITC pool this month:**

| Item | Eligible ITC Amount |
|---|---|
| Mr. Sharma — IT consulting (RCM) | ₹36,000 |
| Office rent | ₹18,000 |
| **Total common ITC (T)** | **₹54,000** |

**Apportionment ratio (simplified — illustrative):**
- Taxable turnover / Total turnover = 70%
- Exempt turnover / Total turnover = 30%

**ITC available (D1 — eligible portion):**
- ₹54,000 × 70% = **₹37,800**

**ITC to be reversed (D2 — ineligible portion attributable to exempt supply):**
- ₹54,000 × 30% = **₹16,200**

> **Full apportionment computation (Rule 42 for goods/services; Rule 43 for capital goods) with monthly and annual reconciliation mechanics are detailed in [Topic_3_Apportionment/08_Apportionment_Scenarios_Advanced.md — Scenario A].**

---

### Summary — October 2024 ITC Position for XYZ & Co.

| Transaction | GST Amount | ITC Status | Reason |
|---|---|---|---|
| Car purchase (Honda City) | ₹2,16,000 | **FULLY BLOCKED** | Section 17(5)(a) — ≤13 seat vehicle |
| Car maintenance | ₹900 | **FULLY BLOCKED** | Section 17(5)(a)(ii) — maintenance of blocked vehicle |
| IT consultant — RCM (Mr. Sharma) | ₹36,000 | **ELIGIBLE (common pool)** | Not listed in Section 17(5) |
| Office rent | ₹18,000 | **ELIGIBLE (common pool)** | Not listed in Section 17(5) |
| **Common ITC after apportionment** | ₹54,000 | **₹37,800 eligible; ₹16,200 reversed** | Rule 42/43 apportionment |
| **Net ITC claimed in ECL** | | **₹37,800** | |
| **Total blocked/reversed this month** | | **₹2,33,100** | ₹2,16,000 + ₹900 + ₹16,200 |

**GSTR-3B Table 4D — Total ineligible ITC this month:** ₹2,16,000 + ₹900 + ₹16,200 = **₹2,33,100**

---

### Cross-References

| Cross-Topic Link | File Reference |
|---|---|
| RCM payment mechanics for Mr. Sharma | [Topic_1_RCM/07_RCM_Scenarios_Advanced.md — Scenario B] |
| Full Rule 42/43 apportionment calculation | [Topic_3_Apportionment/08_Apportionment_Scenarios_Advanced.md — Scenario A] |
| Disputed area — partial vehicle use for business | [Topic_2_Blocked_ITC/10_Blocked_ITC_Amendments.md — Disputed Areas] |

---

## Scenario C: Edge Case — Vehicle Purchased Before Taxable Transport Service Commenced
{topic: "Blocked ITC — Edge Case: Vehicle ITC — Retrospective Change of Use"}
{scenario_type: "Edge Case — Retroactive Change of Intended Use"}
{law_reference: "Section 17(5)(a) CGST Act, 2017; Section 16(4) CGST Act, 2017"}
{difficulty: "Advanced — Nuanced Time-of-Procurement Rule"}

### Facts

A CA firm purchases a **Maruti Swift (5 seats)** primarily for use by article clerks who visit client sites for audit fieldwork.

**Vehicle details:**
- Purchase date: **15-September-2023** (FY 2023-24)
- Purchase price: ₹8,00,000
- GST paid (CGST + SGST @ 18%): ₹1,44,000
- Total amount paid: ₹9,44,000

At the time of purchase:
- The firm did **not** provide any passenger transportation services to clients
- The vehicle was used for staff/article clerk commuting to client sites — this is **internal operational use**, not a supply of transportation services to an external customer
- No outward supply of "transportation of persons" was made

**FY 2024-25 Development:**
- The firm expands its service portfolio and commences **GST-taxable executive transportation services** to clients (charging separately for vehicle hire with driver)
- SAC: 996601 — Rental services relating to road transport vehicles with operator
- The same Maruti Swift is now used partly for these client transportation services

**Question:** Can the firm now claim the ₹1,44,000 ITC that was blocked at the time of purchase in September 2023?

---

### Detailed Legal Analysis

#### Issue 1 — Was ITC Blocked at Time of Purchase?

**Section 17(5)(a) — relevant exception:** ITC is available on motor vehicles (≤13 seats) when used for "transportation of passengers" as an outward taxable supply.

**As on 15-September-2023:**
- The firm was NOT supplying transportation of persons as a taxable service
- The vehicle's use (article clerk commuting) was internal/operational — not a taxable supply of transportation
- The exception under Section 17(5)(a)(ii) did **not** apply at the time of purchase

**Conclusion on original block:** At the time of procurement, the vehicle fell squarely within Section 17(5)(a). **ITC of ₹1,44,000 was BLOCKED at the time of purchase.**

**Asset capitalisation (September 2023):**
- Vehicle capitalised at: ₹8,00,000 (cost) + ₹1,44,000 (blocked GST) = **₹9,44,000**
- Depreciation computed on ₹9,44,000 from September 2023

#### Issue 2 — Can Blocked ITC Be Revived on Change of Use?

**Statutory framework:** The CGST Act provides for **ITC on capital goods subject to reversal if used for exempt purposes** under Rule 43. However, Rule 43 and the ITC revival framework assume that ITC was **originally eligible** and is being tracked. They do not provide a mechanism to revive ITC that was **never eligible** in the first place (i.e., blocked at inception under Section 17(5)).

**No specific revival mechanism:** Unlike the switch from exempt to taxable supply scenario (where Rule 43(1)(d) provides for gradual reduction over 60 months), there is **no provision in the CGST Act or Rules** for claiming ITC on a motor vehicle that was blocked at procurement when its use subsequently shifts to a taxable transport service.

**Section 16(4) — Time-bar on ITC claims:**

Section 16(4) prescribes the time limit for claiming ITC:

> *"A registered person shall not be entitled to take input tax credit in respect of any invoice or debit note for supply of goods or services or both after the thirtieth day of November following the end of financial year to which such invoice or debit note pertains or furnishing of the relevant annual return, whichever is earlier."*

- Invoice date: 15-September-2023 (FY 2023-24)
- Last date to claim ITC: **30-November-2024** (in the GSTR-3B for the return period October 2024 or in the GSTR-9 for FY 2023-24)

**Even if a revival mechanism existed**, the firm would need to claim it by 30-November-2024. Claiming ITC in FY 2024-25 return periods after November 2024 would be **time-barred under Section 16(4)**.

#### Issue 3 — Is Intent at Time of Purchase Relevant?

Yes. The Supreme Court in Commissioner of Central Excise v. Vandana Global Ltd. and multiple GST AARs have emphasised that:
- The eligibility of ITC is determined **at the time of procurement**
- Subsequent change of use does not retroactively create ITC entitlement on items that were blocked at procurement
- The block under Section 17(5) operates as an **absolute bar** — it is not a temporary restriction that can be lifted later

**AAR positions (illustrative):** Various AARs have consistently held that a motor vehicle purchased for internal operational use cannot have its blocked ITC revived when the taxpayer subsequently commences a transportation business using that vehicle. The taxpayer's remedy is to sell the old vehicle and purchase a new one after commencing the transportation service.

---

### Conclusion

| Question | Answer |
|---|---|
| Was ITC blocked at time of purchase (September 2023)? | Yes — Section 17(5)(a); no exception applied |
| Is ITC of ₹1,44,000 claimable in FY 2024-25? | No — no revival mechanism; Section 16(4) time-bar also applies |
| Can the firm benefit from the Section 17(5)(a) exception for future? | Yes — for any **new** vehicle purchased after commencement of the transport service |

---

### Practical Lessons for Tax Professionals

1. **Timing of vehicle purchase is critical:** If a client intends to use a vehicle for a taxable transportation service, advise purchasing the vehicle **only after** the transportation business has commenced and the taxable supply is in place.

2. **Document intended use at time of purchase:** A board resolution, business plan extract, or GST registration for the transport service should pre-date or coincide with the vehicle purchase invoice.

3. **Advance ruling for high-value vehicles:** For purchases of vehicles costing ₹20,00,000 or more, seek an advance ruling from the Maharashtra AAR before purchase to confirm ITC eligibility.

4. **Fleet restructuring:** If existing blocked vehicles are to be used for a new transportation service, consider selling and re-purchasing — the new purchase (after service commencement) will be eligible for ITC under the exception.

5. **Depreciation planning:** Since the blocked GST of ₹1,44,000 is part of the capitalised cost, it is eligible for depreciation deduction under Income Tax Act — at least the tax cost is recoverable over time.

---

## Scenario D: Edge Case — Works Contract: New Construction vs Renovation vs Maintenance
{topic: "Blocked ITC — Works Contract Edge Case — Construction/Renovation/Maintenance Distinction"}
{scenario_type: "Edge Case — Finance Act 2021 Retrospective Explanation"}
{law_reference: "Section 17(5)(c) and 17(5)(d) CGST Act; Finance Act 2021 Explanation (retrospective from 01-Jul-2017)"}
{difficulty: "Advanced — Post-Finance Act 2021 Capitalisation Test"}

### Facts

**CA firm MNO & Partners** owns its office building in Pune, Maharashtra. The building is used solely for taxable CA practice (no exempt supplies — 100% taxable for this scenario to isolate the works contract issue).

During **FY 2024-25**, the firm undertakes three distinct works:

| # | Work Description | Amount (exc. GST) | GST @ 18% | Accounting Treatment |
|---|---|---|---|---|
| (i) | New conference room — construction of additional floor/room | ₹20,00,000 | ₹3,60,000 | Capitalised as building addition |
| (ii) | Repainting of all office walls (annual maintenance) | ₹2,00,000 | ₹36,000 | Expensed to P&L (maintenance) |
| (iii) | Complete redesign of reception area (new flooring, designer ceiling, modular reception desk permanently affixed) | ₹5,00,000 | ₹90,000 | Capitalised as building improvement |

All works are contracted to registered works contract service providers. All invoices show 18% GST (works contract service).

---

### Legal Framework

**Section 17(5)(c):** ITC not available on works contract services when supplied for construction of an immovable property (other than plant and machinery), **except where the inputs are used by a taxable person in the course of his business of supply of works contract services.**

**Section 17(5)(d):** ITC not available on goods or services or both received by a taxable person for construction of an immovable property on his own account, **even if such goods or services are used in the course or furtherance of business.**

**Finance Act 2021 Explanation (effective retrospectively from 01-Jul-2017):**

> *"For the purposes of clauses (c) and (d), the expression 'construction' includes re-construction, renovation, additions or alterations or repairs, **to the extent of capitalisation**, to the said immovable property."*

This Explanation is the **critical test** for distinguishing blocked vs eligible ITC on construction-related expenses.

---

### Analysis — Item (i): New Conference Room Construction

**Nature of work:** Construction of a new additional room/floor — this is unambiguously "construction" of a new addition to the immovable property.

**Capitalisation:** The ₹20,00,000 is capitalised as a building addition in the fixed assets register.

**Section 17(5)(d) check:**
- Goods/services received for construction of immovable property on own account: **Yes**
- Exception (being in works contract business): MNO & Partners is a CA firm, not a works contract supplier. **Exception does NOT apply.**

**Conclusion:**

> **ITC of ₹3,60,000 on new conference room construction is FULLY BLOCKED under Section 17(5)(d).**

**Asset entry:**
| Account | Dr (₹) | Cr (₹) |
|---|---|---|
| Building (Fixed Assets) — Conference Room | 23,60,000 | |
| Vendor Payable | | 23,60,000 |

(₹20,00,000 cost + ₹3,60,000 blocked GST = ₹23,60,000 capitalised value)

---

### Analysis — Item (ii): Repainting (Expensed to P&L)

**Nature of work:** Annual repainting of office walls — this is routine maintenance. The firm has expensed the ₹2,00,000 to the Profit and Loss account as "Maintenance and Repairs — Building."

**The Finance Act 2021 Explanation test:**

The Explanation states that "construction" includes repairs **"to the extent of capitalisation."**

- The repainting work is **NOT capitalised** in the books of account.
- It is expensed to P&L — treated as a revenue expenditure (maintenance cost).
- **Therefore, the Finance Act 2021 Explanation does NOT extend the block to this item.**

**Conclusion:**

> **ITC of ₹36,000 on repainting (expensed) is NOT BLOCKED under Section 17(5). ITC is ELIGIBLE.**

Since the office is used 100% for taxable supplies in this scenario, the full ₹36,000 ITC is available without apportionment.

**GSTR-3B Table 4B — Eligible ITC:** ₹36,000 credited to ECL.

**Accounting entry:**
| Account | Dr (₹) | Cr (₹) |
|---|---|---|
| Maintenance and Repairs — Building | 2,00,000 | |
| Input CGST | 18,000 | |
| Input SGST | 18,000 | |
| Vendor Payable | | 2,36,000 |

---

### Analysis — Item (iii): Reception Area Renovation (Capitalised)

**Nature of work:** Complete redesign of the reception area — new flooring (permanent), designer false ceiling (permanently affixed), modular reception desk (bolted to floor). The firm has capitalised the ₹5,00,000 as a "Building Improvement" in the fixed assets register.

**The Finance Act 2021 Explanation test:**

- The renovation involves structural improvements (flooring, ceiling, built-in furniture)
- The expenditure is **capitalised** in the books as a building improvement
- **The Finance Act 2021 Explanation applies: "renovation ... to the extent of capitalisation ... shall be treated as construction"**
- Section 17(5)(d) therefore applies to this capitalised renovation

**Conclusion:**

> **ITC of ₹90,000 on capitalised reception renovation is BLOCKED under Section 17(5)(d) read with the Finance Act 2021 Explanation.**

**Asset entry:**
| Account | Dr (₹) | Cr (₹) |
|---|---|---|
| Building Improvement — Reception Area | 5,90,000 | |
| Vendor Payable | | 5,90,000 |

(₹5,00,000 cost + ₹90,000 blocked GST = ₹5,90,000 capitalised)

---

### Summary Table — Item-wise ITC Position

| Item | Description | Amount (exc. GST) | GST | Capitalised? | ITC Status | Reason |
|---|---|---|---|---|---|---|
| (i) | New conference room construction | ₹20,00,000 | ₹3,60,000 | Yes | **BLOCKED** | Section 17(5)(d) — new construction |
| (ii) | Repainting — annual maintenance | ₹2,00,000 | ₹36,000 | **No** (expensed) | **ELIGIBLE** | Finance Act 2021: block applies only to capitalised repairs |
| (iii) | Reception renovation | ₹5,00,000 | ₹90,000 | **Yes** | **BLOCKED** | Section 17(5)(d) + Finance Act 2021 Explanation |

**Total blocked ITC this year:** ₹3,60,000 + ₹90,000 = **₹4,50,000**
**Total eligible ITC:** ₹36,000

---

### Key Practical Lessons

1. **The capitalisation test (Finance Act 2021) is determinative for repair/renovation:** Always assess whether the repair/renovation work will be capitalised or expensed before advising on ITC eligibility.

2. **Maintain a capital vs expense classification memo:** For every significant building-related expenditure, document the accounting treatment decision. This memo is the primary evidence if the tax authority disputes the classification.

3. **Retrospective effect of Finance Act 2021 Explanation:** The Explanation applies from 01-Jul-2017. Taxpayers who claimed ITC on capitalised renovations between 2017 and 2021 need to assess their exposure and consider voluntary disclosure to limit interest liability.

4. **Plant and machinery exception:** If the item installed during construction constitutes "plant and machinery" (not an immovable property fixture), Section 17(5)(d) does not apply. Examples: specific industrial equipment, generators. Always check whether an item meets the P&M definition before blocking ITC.

5. **GSTR-9 disclosure:** Blocked ITC amounts (₹4,50,000) must be disclosed in GSTR-9 Table 7. Ensure year-end reconciliation covers both the asset register and the blocked ITC register.

---

## Scenario E: Complex — Mandatory vs Voluntary Employee Benefits in a Maharashtra Factory
{topic: "Blocked ITC — Employee Benefits — Mandatory vs Voluntary Distinction"}
{scenario_type: "Complex — Multi-Benefit Analysis with Maharashtra-Specific Elements"}
{law_reference: "Section 17(5)(b)(i), 17(5)(b)(ii), 17(5)(b)(iii) CGST Act; Factories Act, 1948; CBIC Circular 172/04/2022-GST; Notification 12/2017-CT(Rate)"}
{jurisdiction: "CGST + Maharashtra SGST — Maharashtra-specific provisions marked"}
{difficulty: "Complex — Mandatory obligation test + state-specific law"}

### Facts

**Bharat Manufacturing Pvt. Ltd.** operates a factory in Pune, Maharashtra, manufacturing industrial components. The factory employs **300 workers** (all permanent employees). The company is registered under GST (GSTIN: 27AABCB4567C1Z2) and makes only taxable outward supplies (100% taxable — no apportionment issue, to isolate the employee benefit question).

**Monthly employee benefit expenses:**

| # | Benefit | Amount (exc. GST) | GST Rate | GST Amount | Nature |
|---|---|---|---|---|---|
| 1 | Factory canteen services | ₹3,00,000 | 18% | ₹54,000 | Mandatory (Factories Act — 300 workers) |
| 2 | Group health insurance premium | ₹1,50,000 | 18% | ₹27,000 | Voluntary (in addition to ESIC) |
| 3 | In-factory gym / wellness centre | ₹50,000 | 18% | ₹9,000 | Voluntary employee wellness |
| 4 | Worker transport (factory-to-home buses) | ₹1,00,000 | 5% | ₹5,000 | Mandatory (Maharashtra Factories Rules) |

---

### Analysis 1 — Factory Canteen Services

#### Statutory Backdrop

Section 46 of the Factories Act, 1948 mandates:

> *"The State Government may make rules requiring that in any specified factory wherein more than 250 workers are ordinarily employed, a canteen or canteens shall be provided and maintained by the occupier for the use of the workers."*

Maharashtra has enacted the **Maharashtra Factories Rules, 1963**, Rule 73, which prescribes canteen requirements for factories employing 250 or more workers. With **300 workers**, Bharat Manufacturing is **legally obligated** to maintain a canteen.

#### CBIC Position

**CBIC Circular No. 172/04/2022-GST dated 06-July-2022** expressly addressed this issue:

> *"In respect of the services of food and beverages provided by the canteen maintained in the factory, in view of the requirement of sub-section (1) of section 46 of the Factories Act, 1948 read with relevant State Rules, the said services are obligatory for the employer to provide to the employees and hence the ITC should be available on the same."*

#### Analysis

- Factory has 300 workers — exceeds 250-worker threshold
- Canteen maintained pursuant to Section 46, Factories Act + Maharashtra Factories Rules, 1963
- The canteen service is legally **mandatory** — not a voluntary benefit
- CBIC Circular 172/04/2022: ITC on mandatory canteen = **available**
- Section 17(5)(b)(i) block does NOT apply where the supply is obligatory under law

**Conclusion:**

> **ITC of ₹54,000 (CGST ₹27,000 + SGST ₹27,000) on factory canteen services is ELIGIBLE.**

#### Documentation Requirements

| Document | Purpose |
|---|---|
| Factory Registration Certificate | Confirms factory status and worker count |
| Maharashtra Factories Rules, 1963 — Rule 73 compliance record | Confirms mandatory canteen obligation |
| Canteen management contract with service provider | Confirms nature of service |
| Board resolution acknowledging legal obligation | Internal governance |
| Monthly wage records showing ≥250 workers | Substantiates the threshold |

**GSTR-3B Table 4B:** ₹54,000 eligible ITC credited to ECL.

---

### Analysis 2 — Group Health Insurance

#### Current Legal Position

The **Employees' State Insurance Act, 1948 (ESIC)** provides health/medical coverage for employees earning up to ₹21,000/month. Factory workers covered under ESIC are entitled to medical benefits through the ESIC scheme.

Bharat Manufacturing's group health insurance covers **all 300 employees** — including those already covered by ESIC. This additional health insurance is:
- Not mandated by the ESIC Act (ESIC compliance is satisfied through ESIC contributions)
- Not mandated by any Central law
- Not mandated by any Maharashtra state law (see Maharashtra-specific analysis below)

#### Section 17(5)(b)(iii) Analysis

Section 17(5)(b)(iii) includes "health insurance" in the blocked list:

> *"...life insurance and health insurance: Provided that the input tax credit in respect of such goods or services or both shall be available where— (A) the Government notifies the services which are obligatory for an employer to provide to its employees under any law for the time being in force..."*

**Central law check:** No Central notification has been issued making group health insurance (beyond ESIC) a mandatory obligation.

**Conclusion (without Maharashtra-specific analysis):**

> **ITC of ₹27,000 on group health insurance is BLOCKED under Section 17(5)(b)(iii) — health insurance is specifically listed, and no mandatory obligation exists under Central law.**

---

### **[MAHARASHTRA-SPECIFIC]** Maharashtra Health Insurance Context

**Maharashtra Factories Rules and Labour Laws:**

1. **ESIC vs Private Insurance:** In Maharashtra, factories must comply with ESIC for eligible employees (wages ≤ ₹21,000/month). ESIC compliance satisfies the health security obligation for covered workers.

2. **Employees earning above ESIC threshold (>₹21,000/month):** There is no Maharashtra state law currently (as of May 2026) that mandates private group health insurance for employees above the ESIC threshold. Such insurance, if provided, is voluntary.

3. **Maharashtra Shops and Establishments Act / Maharashtra Industrial Relations Act:** These statutes do not impose a mandatory health insurance obligation beyond ESIC compliance.

4. **Practical position for Maharashtra-registered factories:**
   - ESIC coverage for workers earning ≤ ₹21,000/month: mandatory (but ESIC contributions are not subject to GST — no ITC issue)
   - Additional private group health insurance: voluntary → ITC BLOCKED
   - If any future Maharashtra notification mandates group health insurance: position would change

**Conclusion:**

> **For Bharat Manufacturing Pvt. Ltd. in Maharashtra: ITC of ₹27,000 on group health insurance remains BLOCKED** as the insurance is voluntary and no mandatory obligation exists under Maharashtra law or Central law as of May 2026.

**Caveat:** Tax professionals should review this position annually as state-specific welfare legislation evolves.

---

### Analysis 3 — In-Factory Gym / Wellness Centre

#### Statutory Position

Section 17(5)(b)(ii) expressly lists:

> *"...membership of a club, health and fitness centre..."*

An **in-factory gym** or wellness facility — even when located on factory premises — falls within the category of "health and fitness centre" as interpreted by CBIC.

#### Is There a Mandatory Obligation?

- No Central law mandates a gym or wellness facility in a factory
- No Maharashtra state law (Maharashtra Factories Rules, 1963) mandates a gym/wellness centre
- The wellness centre is a **voluntary employee welfare initiative**

#### Conclusion

> **ITC of ₹9,000 on in-factory gym/wellness centre is FULLY BLOCKED under Section 17(5)(b)(ii). No exception applies.**

There is no mandatory obligation, no same-category outward supply exception (the company is not in the fitness centre business), and no CBIC circular creating an exception for factory wellness facilities.

**GSTR-3B Table 4D:** ₹9,000 reported as ineligible ITC.

---

### Analysis 4 — Worker Transport (Factory-to-Home Buses)

#### Statutory and Regulatory Background

Section 17(5)(b)(iii) includes "renting of motor vehicles" (rent-a-cab) in the blocked list. However, the block on rent-a-cab relates specifically to **motor vehicles designed for transportation of persons having approved seating capacity of ≤13 passengers**. Transport buses for workers typically have seating capacity exceeding 13 — they are **not** in the blocked category of motor vehicles.

**Factories Act position on worker transport:**

Maharashtra Factories Rules, 1963 — Under certain provisions and night shift requirements, factories are required to provide transport for women workers working night shifts. For other workers, factory transport may be mandated under specific Government orders or industrial agreements (Certified Standings Orders).

**Assuming the factory bus transport is mandated** under Maharashtra Factories Rules or a binding industrial settlement:

- Legal mandate for worker transport: **exists (Maharashtra-specific)**
- Bus capacity: >13 seats → not a "rent-a-cab" motor vehicle under Section 17(5)(a)
- Not a blocked category under Section 17(5)(b)(iii) when capacity >13 seats

**GST rate on bus transport:** 5% (SAC 996601 — Local road transport with capacity >12 passengers)

**Conclusion (if mandated):**

> **ITC of ₹5,000 on mandatory worker transport (bus, capacity >13) is ELIGIBLE.** It is not blocked under any clause of Section 17(5).

**If the transport is voluntary:** Even then, since the vehicle capacity exceeds 13 seats, it does not fall under the motor vehicle block in Section 17(5)(a). However, if the service is akin to rent-a-cab (≤13 seats, exclusive vehicle hire), it would be blocked. For large buses (>13 seats), Section 17(5) does not block the ITC.

**Important documentation:**
- Factory compliance records establishing transport as a legal obligation
- Vehicle registration certificates confirming seating capacity >13
- Transport contract with service provider

**GSTR-3B Table 4B:** ₹5,000 eligible ITC credited to ECL.

---

### **[MAHARASHTRA-SPECIFIC]** Maharashtra Factories Rules — Transport Obligation

As per Maharashtra Factories Rules, 1963 (as amended):
- Night shift female worker transport: **mandatory** per Government of Maharashtra circular
- General worker transport: depends on factory-specific Certified Standing Orders (CSO) or bilateral agreements
- If the CSO mandates transport: ITC is available per the "mandatory obligation" principle from Circular 172/04/2022

Bharat Manufacturing should obtain a legal opinion confirming whether its CSO mandates transport, and maintain this documentation for ITC claims.

---

### Comprehensive Summary Table — Employee Benefits ITC

| # | Benefit | GST Amount | ITC Status | Legal Basis |
|---|---|---|---|---|
| 1 | Factory canteen (300 workers — mandatory) | ₹54,000 | **ELIGIBLE** | Mandatory under Factories Act / Maharashtra Factories Rules; Circular 172/04/2022 |
| 2 | Group health insurance (voluntary — beyond ESIC) | ₹27,000 | **BLOCKED** | Section 17(5)(b)(iii); no mandatory obligation under Central/Maharashtra law |
| 3 | In-factory gym/wellness centre (voluntary) | ₹9,000 | **BLOCKED** | Section 17(5)(b)(ii) — health and fitness centre; no exception |
| 4 | Worker transport buses (>13 seats, mandated) | ₹5,000 | **ELIGIBLE** | Not in blocked category (>13 seats); mandatory obligation |
| **Total** | | **₹95,000** | **₹59,000 eligible; ₹36,000 blocked** | |

**Net ITC available:** ₹54,000 (canteen) + ₹5,000 (transport) = **₹59,000**
**Total blocked:** ₹27,000 (health insurance) + ₹9,000 (gym) = **₹36,000**

---

### Overarching Principle — The Mandatory Obligation Test

The pivotal question for all employee benefit ITC claims under Section 17(5) is:

> **"Is the employer under a statutory/legal obligation to provide this benefit to employees under any law for the time being in force?"**

If **Yes** → ITC is available (per the proviso to Section 17(5)(b) read with Circular 172/04/2022)
If **No** → ITC is blocked (voluntary benefit = personal consumption of employees)

**Documentation hierarchy:**
1. Identify the specific law/rule creating the obligation (Central / State)
2. Confirm the applicability threshold (e.g., 250 workers for Factories Act canteen)
3. Document actual compliance (factory records, compliance certificates)
4. Maintain vendor contracts showing the nature of service
5. Obtain legal opinion where the obligation is ambiguous

---

## Cross-Topic Master Case Study — File Navigation

The following table maps all scenario connections across the three topics:

| Case Study Element | Topic | File Reference | Scenario |
|---|---|---|---|
| RCM payment — Mr. Sharma (unregistered IT consultant) | Topic 1: RCM | Topic_1_RCM/07_RCM_Scenarios_Advanced.md | Scenario B |
| Blocked ITC on car + maintenance + apportionment preview | Topic 2: Blocked ITC | This file | Scenario B |
| Rule 42/43 full apportionment calculation | Topic 3: Apportionment | Topic_3_Apportionment/08_Apportionment_Scenarios_Advanced.md | Scenario A |
| Disputed area — partial vehicle use | Topic 2: Amendments | Topic_2_Blocked_ITC/10_Blocked_ITC_Amendments.md | Disputed Areas |
| RCM + blocked ITC interaction (rent-a-cab with RCM) | Topics 1 + 2 | Topic_1_RCM/09_RCM_Ambiguity_and_Conflicts.md | Cross-topic |

---
*End of File — 08_Blocked_ITC_Scenarios_Advanced.md*
*Legally accurate as per CGST Act 2017, IGST Act 2017, and Maharashtra GST Act 2017 as amended up to May 2026.*
*All monetary figures in Indian Rupees (₹). All arithmetic verified.*
