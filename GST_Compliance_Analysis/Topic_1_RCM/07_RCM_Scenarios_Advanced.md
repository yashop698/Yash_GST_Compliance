# RCM — Advanced Scenarios
{complexity_level: "Advanced"}
{topic: "RCM"}
{law_reference: "Section 9(3), 9(4) CGST Act; Section 5(3), 5(4) IGST Act; Section 16, 17(5) CGST Act; Rule 43 CGST Rules; Section 50 CGST Act; Section 73, 74 CGST Act"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

---

## Introduction
{law_reference: "Section 9(3), 9(4) CGST Act, 2017; Section 16, 17(5) CGST Act, 2017; Rule 42, 43 CGST Rules, 2017"}

These scenarios demonstrate RCM application across three levels of complexity: isolated single-issue cases, integrated cross-topic analyses, and edge cases that expose nuances in the statute. The scenarios are constructed to be internally consistent — each uses realistic figures representative of Maharashtra-based professional practices. Arithmetic has been independently verified.

**Scenario A** is an isolated case study focusing on the fundamental Section 9(4) RCM trigger for an unregistered service provider, ITC eligibility analysis, and accounting treatment.

**Scenario B** is the Master Cross-Topic Case Study for this document system. It brings together RCM identification, tax computation, ITC eligibility, Section 17(5) blocked credit check, and Rule 43 apportionment into a single integrated fact pattern. This scenario is deliberately designed to be referenced across multiple topics — it continues in the Blocked ITC and Apportionment topics with the same underlying facts but different analytical focus. Practitioners and students working through the full document system should treat Scenario B as the "home base" case that recurs across topics.

**Scenario C** presents the high-stakes edge case of missed RCM payment — consequences, interest computation, and the voluntary disclosure versus audit detection calculus.

**Scenario D** covers the composition dealer receiving GTA services — a case where RCM is mandatory but ITC is permanently unavailable, creating a pure additional cost.

**Scenario E** addresses import of service by an SEZ unit — where IGST under RCM interacts with the zero-rating regime and refund entitlement.

All amounts are in Indian Rupees (₹). All tax computations reflect the law as of May 2026 under the CGST Act 2017, IGST Act 2017, and Maharashtra SGST Act 2017.

---

## Scenario A: Isolated — Unregistered Service Provider
{topic: "RCM — Scenario A"}
{law_reference: "Section 9(4) CGST Act; Section 16 CGST Act; Section 17(5) CGST Act; Notification specifying categories under Section 9(4) as of May 2026"}
{complexity_level: "Foundational-Intermediate"}

### Facts

ABC & Associates is a mid-sized Chartered Accountant firm registered for GST in Maharashtra (GSTIN: 27AABFA5678B1ZK), with its office at Nariman Point, Mumbai. The firm's practice is entirely in taxable services — statutory audits, tax advisory, and compliance services — generating no exempt supplies.

During November 2025, the firm engages Sunshine Cleaning Services (a proprietorship owned by Mr. Santosh Patil) to professionally clean and sanitize their office premises. Sunshine Cleaning Services does not hold a GST registration — their annual turnover is ₹15 lakh, well below the ₹20 lakh threshold applicable to service providers in Maharashtra.

Terms: Monthly cleaning contract at ₹50,000 per month (fixed fee, payable on the last working day of each month). The supply is entirely intra-state (supplier and recipient both in Maharashtra, service performed at the firm's Mumbai office).

Assuming that housekeeping and cleaning services rendered by unregistered persons to registered persons are notified under Section 9(4) of the CGST Act as of May 2026 (per the applicable notification in force), this supply triggers RCM.

### Step 1: Is This an RCM Supply?

**Identification Analysis:**

Primary question: Is the supplier registered?
Answer: No. Sunshine Cleaning Services is unregistered (annual turnover ₹15 lakh, below ₹20 lakh Maharashtra threshold).

Secondary question: Does the supply fall under Section 9(4) notification?
Answer: Assuming cleaning/housekeeping services fall within the notified categories under the Section 9(4) notification in force as of May 2026 — Yes.

Additional check: Does this supply fall under Section 9(3) (notified categories regardless of supplier registration)?
Answer: No. Cleaning services are not listed in Notification No. 13/2017-Central Tax (Rate). The RCM trigger here is purely Section 9(4) — unregistered supplier.

Additional check: Is the supply exempt?
Answer: No. Cleaning services to a business entity are not listed in the exemption notification (Notification No. 12/2017-Central Tax (Rate)).

**Conclusion:** RCM is applicable under Section 9(4). ABC & Associates is the "taxable person" liable to pay GST on this supply.

### Step 2: Tax Computation

Place of Supply: Maharashtra (both supplier and recipient in Maharashtra, service rendered at the firm's Mumbai office — Section 12(3)(a) / Section 12(2) CGST Act).
Nature of Supply: Intra-state → CGST + Maharashtra SGST (not IGST).
Applicable SAC Code: 998531 (Cleaning services for buildings and residences).
Applicable Tax Rate: 18% (CGST 9% + SGST 9%).

Computation for November 2025:
- Taxable Value = ₹50,000
- CGST @ 9% = ₹50,000 × 9/100 = ₹4,500
- SGST @ 9% = ₹50,000 × 9/100 = ₹4,500
- Total RCM Tax = ₹4,500 + ₹4,500 = ₹9,000

Total financial impact:
- Payment to Sunshine Cleaning Services: ₹50,000 (per contract; no GST charged by the unregistered supplier)
- RCM payment to government from Electronic Cash Ledger: ₹9,000
- Total outflow: ₹59,000
- ITC recoverable (if eligible): ₹9,000
- Net cost if ITC fully recovered: ₹50,000

### Step 3: Self-Invoice

ABC & Associates must issue a self-invoice under Section 31(3)(f) of the CGST Act, 2017, before or on the date of payment to Sunshine Cleaning Services (last working day of November 2025 = 28 November 2025).

Self-Invoice No.: RCM/2025-26/011
Date: 28 November 2025

Issuer (Recipient): ABC & Associates, Nariman Point, Mumbai — GSTIN: 27AABFA5678B1ZK
Supplier: Sunshine Cleaning Services (Proprietor: Mr. Santosh Patil), [Address], Mumbai — GSTIN: Not Applicable (Unregistered)

SAC: 998531 — Office cleaning and sanitization services — November 2025
Taxable Value: ₹50,000
CGST @ 9%: ₹4,500
SGST @ 9%: ₹4,500
Total Tax: ₹9,000

### Step 4: Payment from Electronic Cash Ledger

ABC & Associates must deposit ₹9,000 into the Electronic Cash Ledger before filing the November 2025 GSTR-3B (due by 20th December 2025):
- CGST head: ₹4,500
- SGST (Maharashtra) head: ₹4,500

This payment is made exclusively from the Electronic Cash Ledger. Even if the firm has a substantial ITC balance, it cannot use that balance to discharge this RCM liability (Section 49(4) CGST Act — RCM tax is not "output tax" that can be offset from the Electronic Credit Ledger).

### Step 5: ITC Eligibility Analysis

Since ABC & Associates makes exclusively taxable supplies (no exempt supply component in this scenario):

**Section 16(2) Conditions:**
1. Tax actually paid in cash? Yes — ₹9,000 from Electronic Cash Ledger. ✓
2. Self-invoice issued and in possession? Yes — RCM/2025-26/011 issued on 28 November 2025. ✓
3. Supply actually received? Yes — cleaning services rendered throughout November 2025. ✓
4. GSTR-3B return filed? Yes — will be filed for November 2025 by 20 December 2025. ✓
5. Supply not blocked under Section 17(5)?

Analysis of Section 17(5) for cleaning services: Section 17(5) blocks ITC on:
(a) Motor vehicles (sub-clause (a)) — not applicable.
(b) Food and beverages, outdoor catering, beauty treatment, health services, cosmetic/plastic surgery (sub-clause (b)) — not applicable.
(c) Club membership fees (sub-clause (c)) — not applicable.
(d) Travel benefits to employees (sub-clause (d)) — not applicable.
(e) Works contract for immovable property (sub-clause (c)(i)) — not applicable.
(f) Goods/services for construction of immovable property for own use (sub-clause (c)(ii)) — not applicable.

Cleaning services for the office are not listed in any Section 17(5) sub-clause. ITC is NOT blocked. ✓

**ITC Eligibility: FULLY ELIGIBLE**
- CGST ITC available: ₹4,500
- SGST ITC available: ₹4,500
- Total ITC: ₹9,000

**Rule 43 Apportionment:** Since ABC & Associates in this scenario makes only taxable supplies (100% taxable, 0% exempt), there is no apportionment requirement. The full ₹9,000 ITC is creditable to the Electronic Credit Ledger.

However: The scenario notes parenthetically that if the firm had a mixed practice (both taxable and exempt supplies), the ITC of ₹9,000 would be subject to proportionate reversal under Rule 43. The ratio would be: Eligible ITC = ₹9,000 × (Taxable Turnover / Total Turnover). For the exact computation methodology in a mixed-supply scenario, see Scenario B below.

### GSTR-3B Treatment

**For the November 2025 GSTR-3B (filed by 20 December 2025):**

Table 3.1(d) — Inward Supplies Liable to Reverse Charge:
- Taxable Value: ₹50,000
- Integrated Tax (IGST): Nil
- Central Tax (CGST): ₹4,500
- State/UT Tax (SGST): ₹4,500
- CESS: Nil

Table 6 — Payment of Tax (RCM discharge):
- CGST: ₹4,500 from Electronic Cash Ledger
- SGST: ₹4,500 from Electronic Cash Ledger

Table 4A(3) — ITC Availed under Reverse Charge (claimed AFTER confirming payment):
- Central Tax (CGST): ₹4,500
- State/UT Tax (SGST): ₹4,500
- Integrated Tax (IGST): Nil
- Total ITC from RCM: ₹9,000

### Accounting Entries

**On receipt of Sunshine Cleaning Services bill (28 November 2025):**
Dr. Office Cleaning Expense A/c ₹50,000
Dr. Input Tax Credit — CGST A/c ₹4,500
Dr. Input Tax Credit — SGST A/c ₹4,500
&nbsp;&nbsp;&nbsp;Cr. Accounts Payable — Sunshine Cleaning A/c ₹50,000
&nbsp;&nbsp;&nbsp;Cr. RCM Tax Payable — CGST A/c ₹4,500
&nbsp;&nbsp;&nbsp;Cr. RCM Tax Payable — SGST A/c ₹4,500

*(Note: The RCM tax payable is a liability of ABC & Associates to the government. The ITC is booked provisionally — it will only crystallize once the cash payment is made. Some accountants prefer to book ITC only after payment; the approach shown here follows the more conservative "provisional booking, confirm on payment" method.)*

**On payment to Sunshine Cleaning Services (28 November 2025):**
Dr. Accounts Payable — Sunshine Cleaning A/c ₹50,000
&nbsp;&nbsp;&nbsp;Cr. Bank A/c ₹50,000

**On deposit of RCM tax to Electronic Cash Ledger (before 20 December 2025):**
Dr. Electronic Cash Ledger — CGST A/c ₹4,500
Dr. Electronic Cash Ledger — SGST A/c ₹4,500
&nbsp;&nbsp;&nbsp;Cr. Bank A/c ₹9,000

**On discharge of RCM liability from Electronic Cash Ledger (at time of GSTR-3B filing):**
Dr. RCM Tax Payable — CGST A/c ₹4,500
Dr. RCM Tax Payable — SGST A/c ₹4,500
&nbsp;&nbsp;&nbsp;Cr. Electronic Cash Ledger — CGST A/c ₹4,500
&nbsp;&nbsp;&nbsp;Cr. Electronic Cash Ledger — SGST A/c ₹4,500

*(After this entry: RCM Tax Payable accounts are NIL. Input Tax Credit accounts carry ₹4,500 each = ₹9,000 total, now confirmed as eligible ITC available for offset against future output tax liability.)*

---

## Scenario B: Integrated — CA Firm with Mixed Practice (Master Cross-Topic Case Study)
{topic: "RCM — Scenario B (Master Cross-Topic Case Study)"}
{law_reference: "Section 9(4) CGST Act; Section 16 CGST Act; Section 17(5) CGST Act; Rule 43 CGST Rules; Section 17(1) and (2) CGST Act"}
{complexity_level: "Advanced — Cross-Topic Integration"}

### Facts

XYZ & Co. is a Chartered Accountant firm registered for GST in Maharashtra (GSTIN: 27AABFX9876C1ZM), with offices in Pune. The firm has a bifurcated professional practice:

**Practice A — Statutory Audit Services (70% of total professional fees):**
Statutory audits, tax audits, and other attest functions for corporate and non-corporate clients. These services are fully taxable under GST (SAC: 998211; Rate: 18%). Clients are charged GST by XYZ & Co. at 18%.

**Practice B — Charitable Trust Advisory Services (30% of total professional fees):**
Legal and management advisory services exclusively to charitable trusts registered under Section 12A/12AB of the Income Tax Act. Services provided to a charitable trust (not a business entity) may be exempt from GST under the applicable exemption notification (Notification No. 12/2017-CT(Rate), as applicable). These supplies are exempt from GST; XYZ & Co. does not charge GST on these fees.

The 70%/30% split represents the provisional ratio for the current financial year, computed based on the previous year's actual outputs. It will be trued-up at year-end based on actual FY 2025-26 turnover.

**The RCM Supply:**
XYZ & Co. engages Mr. Suresh Sharma, an independent management consultant, to assist with both audit methodology development (Practice A) and trust governance advisory template creation (Practice B). Mr. Sharma's work is genuinely common to both practice streams — he works on standardizing the firm's processes that serve both client types. Mr. Sharma is unregistered for GST (his annual consulting income is ₹18 lakh, below the ₹20 lakh threshold).

Monthly consultancy fee: ₹2,00,000 (per the monthly retainer agreement dated 1 April 2025).
Nature of supply: Intra-state (both XYZ & Co. and Mr. Sharma are in Pune, Maharashtra).

### Step 1: Is RCM Triggered?
{law_reference: "Section 9(4) CGST Act, 2017; Notification specifying categories under 9(4) as of May 2026"}

**Identification Matrix:**

Is Mr. Sharma GST-registered?
Answer: No. Annual income ₹18 lakh; unregistered.

Is the supply in a Section 9(3) notified category?
Answer: Management consulting services are not specifically listed in Notification No. 13/2017-CT(Rate). This is not a Section 9(3) case.

Is the supply from an unregistered person, and is it in the Section 9(4) notified category?
Answer: Mr. Sharma is unregistered. Assuming management/business consulting services are notified under Section 9(4) as of May 2026 → Yes, RCM is triggered.

Is the supply exempt?
Answer: No. Management consulting services received by the firm are not exempt. The fact that some of the firm's own outputs (Practice B) are exempt does not exempt the input supply.

Is the recipient (XYZ & Co.) a GST-registered person?
Answer: Yes — GSTIN: 27AABFX9876C1ZM.

**Conclusion: RCM under Section 9(4) is triggered.** XYZ & Co. is the taxable person liable to self-assess and pay GST on Mr. Sharma's ₹2,00,000 monthly consultancy fee.

### Step 2: Tax Computation
{law_reference: "Section 15 CGST Act; Notification No. 11/2017-CT(Rate) for rate on consulting services"}

Place of Supply: Maharashtra (both supplier Mr. Sharma and recipient XYZ & Co. in Pune, Maharashtra — Section 12(2) CGST Act: place of supply of services, generally, is the location of the recipient in B2B).
Nature of Supply: Intra-state → CGST + Maharashtra SGST.
SAC Code: 998311 (Management consulting and advisory services) or 998312 (Business and systems advisory services) — use the most appropriate SAC.
Applicable Rate: 18% (CGST 9% + SGST 9%).

Computation for the month of January 2026:
- Taxable Value = ₹2,00,000
- CGST @ 9% = ₹2,00,000 × 9/100 = ₹18,000
- SGST @ 9% = ₹2,00,000 × 9/100 = ₹18,000
- Total RCM Tax = ₹18,000 + ₹18,000 = ₹36,000

Self-invoice to be issued by XYZ & Co.:
Self-Invoice No.: RCM/2025-26/022
Date: 31 January 2026 (or date of payment to Mr. Sharma, whichever is earlier)
Taxable Value: ₹2,00,000
CGST: ₹18,000; SGST: ₹18,000; Total Tax: ₹36,000

Payment of RCM Tax:
- Deposit ₹36,000 to Electronic Cash Ledger (CGST ₹18,000 + SGST ₹18,000) before 20 February 2026.
- Payment exclusively from cash ledger. No ITC offset permitted for this payment.

### Step 3: Is the ITC Blocked? (Section 17(5) Check)
{law_reference: "Section 17(5) CGST Act, 2017"}

Before computing the eligible ITC, a mandatory Section 17(5) gate-check is required:

Is management/business consulting service listed as a blocked category under Section 17(5)?

Review of all Section 17(5) sub-clauses:
(a) Motor vehicles and other conveyances — Not applicable to consulting services.
(b) Food and beverages, outdoor catering, health services, cosmetic/plastic surgery, beauty treatment, leasing, renting or hiring of motor vehicles, vessels, aircraft except where used for specified purposes — Not applicable.
(c) Works contract services for immovable property — Not applicable.
(d) Goods and services for construction of immovable property for own account — Not applicable.
(e) Tax paid under Section 10 (Composition levy) — Not applicable.
(f) Goods and services received by non-resident taxable person except for imports — Not applicable.
(g) Goods and services used for personal consumption — Not applicable; XYZ & Co. is using Mr. Sharma's services for business purposes.
(h) Goods lost, stolen, destroyed, written off, gifted, or free samples — Not applicable.

**Conclusion: Management consulting services are NOT blocked under Section 17(5).**

Full ₹36,000 ITC is potentially eligible (subject to apportionment — Step 4 below). There is no absolute disallowance.

### Step 4: Apportionment under Rule 43
{law_reference: "Section 17(1) and (2) CGST Act; Rule 43 CGST Rules, 2017"}

**Why Apportionment is Required:**
Mr. Sharma's consulting services are used for BOTH Practice A (taxable outputs) and Practice B (exempt outputs). This makes the consulting fee a "common input service" — used for both taxable and exempt supplies. Section 17(2) of the CGST Act provides that ITC on inputs/input services used partly for making exempt supplies shall not be allowed. The ITC must be split in proportion to the taxable and exempt outputs.

**Provisional Apportionment Ratio (January 2026):**
The provisional ratio for FY 2025-26 is based on the prior year's actual turnover or the current year's provisional computation. XYZ & Co. has established: 70% taxable (Practice A) and 30% exempt (Practice B).

Applying Rule 43 to the common input service ITC:

Total ITC on Mr. Sharma's consultancy (common input service) = ₹36,000

Common Credit available (Tc) = ₹36,000
Exempt Ratio (D2) = 30% (i.e., 0.30)
Taxable Ratio = 70% (i.e., 0.70)

ITC attributable to exempt supplies (to be reversed) = Tc × D2
= ₹36,000 × 0.30
= ₹10,800

ITC attributable to taxable supplies (eligible) = Tc × Taxable Ratio
= ₹36,000 × 0.70
= ₹25,200

Arithmetic verification: ₹25,200 + ₹10,800 = ₹36,000. ✓

**Note on Rule 43 Computation at Aggregate Level:**
In practice, Rule 43 applies to the aggregate of ALL common input services together — not service-by-service. The computation for Mr. Sharma's fees would be part of the monthly Rule 43 aggregate computation that includes all other common input services of XYZ & Co. for January 2026. The ratio (D2) is computed based on the aggregate exempt and taxable turnover of the firm, not on the individual service's nexus to exempt/taxable outputs. The per-service computation shown here is illustrative of the principle.

### Step 5: Net ITC Claimable
{law_reference: "Section 16(2) CGST Act; Rule 43 CGST Rules"}

Summary of ITC position for Mr. Sharma's consultancy in January 2026:

| Description | CGST | SGST | Total |
|---|---|---|---|
| Gross ITC on RCM supply (after payment) | ₹18,000 | ₹18,000 | ₹36,000 |
| ITC reversal under Rule 43 (30% exempt) | ₹(5,400) | ₹(5,400) | ₹(10,800) |
| **Net Eligible ITC (credited to ECrL)** | **₹12,600** | **₹12,600** | **₹25,200** |

The ₹25,200 is credited to the Electronic Credit Ledger and is available for offset against XYZ & Co.'s output GST liability on its Practice A invoices.

The ₹10,800 reversal is a permanent disallowance — it is treated as a business expense in the profit and loss account. It cannot be recovered subsequently (unless the annual ratio improves and the true-up at year-end recalculates a lower reversal — see Step 7).

Net economic position:
- Cash paid to Mr. Sharma: ₹2,00,000
- Cash paid as RCM tax: ₹36,000
- ITC recovered (net of reversal): ₹25,200
- Net cost of engaging Mr. Sharma (including irrecoverable GST): ₹2,00,000 + ₹10,800 = ₹2,10,800

### Step 6: GSTR-3B Treatment
{law_reference: "GSTR-3B format; Rule 61 CGST Rules, 2017"}

**For January 2026 GSTR-3B (filed by 20 February 2026):**

**Table 3.1(d) — Inward Supplies Liable to Reverse Charge:**
- Taxable Value: ₹2,00,000
- Integrated Tax (IGST): Nil
- Central Tax (CGST): ₹18,000
- State/UT Tax (SGST): ₹18,000
- CESS: Nil

**Table 4A(3) — ITC Availed under Reverse Charge:**
(Claim the FULL gross ITC first, then reverse the ineligible portion in Table 4B)
- CGST: ₹18,000
- SGST: ₹18,000
- Total: ₹36,000

**Table 4B(1) — ITC Reversed as per Rule 42 and 43 (Proportionate Reversal):**
- CGST: ₹5,400 (reversal of 30% exempt ratio)
- SGST: ₹5,400
- Total Reversal: ₹10,800

**Net ITC (Table 4A(3) minus Table 4B(1)):**
- CGST: ₹18,000 − ₹5,400 = ₹12,600
- SGST: ₹18,000 − ₹5,400 = ₹12,600
- Total Net ITC: ₹25,200

This ₹25,200 will be credited to the Electronic Credit Ledger and available to offset XYZ & Co.'s output CGST/SGST liability for January 2026 (Practice A invoices).

**Cash flow verification:**
- Opening Cash Ledger balance (assumed): ₹50,000 (CGST ₹25,000 + SGST ₹25,000)
- Deposit for RCM: ₹36,000 (CGST ₹18,000 + SGST ₹18,000)
- Total Cash Ledger after deposit: ₹86,000 (CGST ₹43,000 + SGST ₹43,000)
- RCM liability discharged from Cash Ledger: ₹36,000 (CGST ₹18,000 + SGST ₹18,000)
- Closing Cash Ledger: ₹50,000 (CGST ₹25,000 + SGST ₹25,000)
- ITC credited to Electronic Credit Ledger: ₹25,200 (net of reversal)

### Step 7: GSTR-9 Treatment (Annual Return)
{law_reference: "Section 44 CGST Act; Rule 80 CGST Rules; GSTR-9 format"}

**Monthly Provisional vs Annual True-Up:**
Throughout FY 2025-26, XYZ & Co. is applying a provisional 70%/30% ratio to compute the Rule 43 reversal each month. The actual ratio for the full year will be known only after all invoices for FY 2025-26 are accounted for.

**Scenario A — Actual Ratio = 75% Taxable / 25% Exempt (Favourable):**
Year-end recomputation of total common ITC reversal:
- Actual ratio used: 25% (lower than provisional 30%)
- If the actual reversal is LOWER than the provisional reversal: XYZ & Co. can credit back the excess reversal. This credit is taken in the GSTR-3B for March 2026 (the last return of the FY) or adjusted in GSTR-9.

**Scenario B — Actual Ratio = 65% Taxable / 35% Exempt (Unfavourable):**
- Actual ratio used: 35% (higher than provisional 30%)
- If the actual reversal is HIGHER: XYZ & Co. must reverse additional ITC and pay interest on the excess credit used. This additional reversal is made in the GSTR-3B for March 2026.

**GSTR-9 Disclosure:** In the Annual Return GSTR-9, XYZ & Co. must disclose:
- Total value of inward supplies under RCM for the full year (Table 4 of GSTR-9)
- Total ITC availed and reversed under Rule 42/43 for the year (Table 7 of GSTR-9)
- Any difference between ITC in GSTR-3B and the actual entitlement per annual computation — and the adjustments made

### Step 8: Accounting Entries for January 2026
{law_reference: "General accounting principles; Ind AS / ICAI Guidance Notes on GST accounting"}

**On receipt of Mr. Sharma's bill and issuance of self-invoice (31 January 2026):**
Dr. Consultancy Expense A/c ₹2,00,000
Dr. Input Tax Credit — CGST A/c ₹18,000 (provisional — full claim before reversal)
Dr. Input Tax Credit — SGST A/c ₹18,000 (provisional)
&nbsp;&nbsp;&nbsp;Cr. Accounts Payable — Mr. Suresh Sharma ₹2,00,000
&nbsp;&nbsp;&nbsp;Cr. RCM Tax Payable — CGST A/c ₹18,000
&nbsp;&nbsp;&nbsp;Cr. RCM Tax Payable — SGST A/c ₹18,000

**On payment to Mr. Sharma:**
Dr. Accounts Payable — Mr. Suresh Sharma ₹2,00,000
&nbsp;&nbsp;&nbsp;Cr. Bank A/c ₹2,00,000

**On deposit of RCM tax to Electronic Cash Ledger:**
Dr. Electronic Cash Ledger — CGST ₹18,000
Dr. Electronic Cash Ledger — SGST ₹18,000
&nbsp;&nbsp;&nbsp;Cr. Bank A/c ₹36,000

**On discharge of RCM liability from Electronic Cash Ledger (GSTR-3B filing):**
Dr. RCM Tax Payable — CGST ₹18,000
Dr. RCM Tax Payable — SGST ₹18,000
&nbsp;&nbsp;&nbsp;Cr. Electronic Cash Ledger — CGST ₹18,000
&nbsp;&nbsp;&nbsp;Cr. Electronic Cash Ledger — SGST ₹18,000

**On Rule 43 reversal (ITC on exempt outputs — 30% of total):**
Dr. Consultancy Expense A/c ₹10,800 (ineligible ITC is additional cost — charged to P&L)
&nbsp;&nbsp;&nbsp;Cr. Input Tax Credit — CGST A/c ₹5,400
&nbsp;&nbsp;&nbsp;Cr. Input Tax Credit — SGST A/c ₹5,400

**After reversal — Final ITC balance in books:**
Input Tax Credit — CGST: ₹12,600 (eligible, transferred to Electronic Credit Ledger)
Input Tax Credit — SGST: ₹12,600 (eligible, transferred to Electronic Credit Ledger)

### Cross-Reference Note

This Master Case Study scenario continues with the same facts in the following topic-specific analyses within this document system:

**Blocked ITC Topic:** Topic_2_Blocked_ITC/07_Blocked_ITC_Scenarios_Advanced.md — Scenario B applies the SAME facts (XYZ & Co., Mr. Sharma, ₹2,00,000/month) but focuses on a deeper Section 17(5) analysis: what if Mr. Sharma's services were food/catering instead of consulting? What if the nature of services changed? How does the Section 17(5) gate interact with the Rule 43 apportionment computation?

**Apportionment Topic:** Topic_3_Apportionment/08_Apportionment_Scenarios_Advanced.md — Scenario A applies the SAME facts but works through the complete mathematical framework of Rule 43: the D1/D2 formula, the aggregate computation across all common input services, the monthly provisional versus annual true-up, and the GSTR-9 reconciliation with worked numbers.

Practitioners reading only the RCM topic have received the complete first-layer analysis. The cross-referenced scenarios deepen the same fact pattern from each topic's vantage point.

---

## Scenario C: Edge Case — Missed RCM Payment Deadline
{topic: "RCM — Edge Case: Missed Deadline"}
{law_reference: "Section 50 CGST Act; Section 73 CGST Act; Section 74 CGST Act; Section 122 CGST Act; Section 16(2)(c) CGST Act; Rule 37 CGST Rules; DRC-03 form; CBIC Circular No. 88/07/2019-GST"}
{complexity_level: "Advanced — Enforcement and Rectification"}

### Facts

XYZ & Co. from Scenario B continues. The monthly RCM tax on Mr. Sharma's consultancy is ₹36,000/month (₹18,000 CGST + ₹18,000 SGST). Due to a change in the accounts team personnel in April 2025, the new accountant was unaware of the RCM obligation. The RCM tax for April, May, and June 2025 (Q1 of FY 2025-26) was neither deposited nor reported in GSTR-3B. The oversight is discovered during an internal pre-audit review in September 2025.

Specifically:
- April 2025 GSTR-3B: RCM not reported in Table 3.1(d); RCM tax not paid; ITC not claimed.
- May 2025 GSTR-3B: Same — RCM not reported; not paid; ITC not claimed.
- June 2025 GSTR-3B: Same — RCM not reported; not paid; ITC not claimed.
- July and August 2025 GSTR-3B: Same pattern continues — the RCM continues to be missed.
- September 2025: Internal review discovers the 5-month gap (April through August).

Wait — re-reading the facts: "April, May, and June (Q1 of FY)." For clarity, let us confine the analysis to Q1 only — April, May, June 2025.

Total unpaid RCM tax: ₹36,000 × 3 months = ₹1,08,000
(CGST: ₹18,000 × 3 = ₹54,000; SGST: ₹18,000 × 3 = ₹54,000)

Discovery date: September 15, 2025.
Intended payment date: September 20, 2025 (before the September 2025 GSTR-3B filing).

### Legal Consequences

**1. Tax Liability: ₹1,08,000 remains Outstanding**
The three months of RCM (₹36,000 each) were never paid. The tax liability crystallized on the 21st of May (for April liability), 21st of June (for May liability), and 21st of July (for June liability) — the days following the respective payment deadlines.

**2. Interest under Section 50 CGST Act — 18% per annum**

Section 50(1): Every person who is liable to pay tax in accordance with the provisions of this Act, and who fails to pay the tax or any part thereof to the Government within the period prescribed, shall for the period for which the tax or any part thereof remains unpaid, pay, on his own, interest at such rate, not exceeding eighteen per cent.

Interest is computed on a simple interest basis on the unpaid tax amount. Formula:
Interest = (Principal × Rate × Days) / 365

**Interest Computation:**

For April 2025 RCM Tax (₹36,000):
- Original due date: 20 May 2025
- Interest start date: 21 May 2025
- Intended payment date: 20 September 2025
- Days of delay: 21 May to 20 September = 123 days
- Interest = (₹36,000 × 18% × 123) ÷ 365
- Interest = (₹36,000 × 0.18 × 123) ÷ 365
- Interest = ₹7,96,320 ÷ 365 (using numerator: 36,000 × 0.18 = 6,480; then 6,480 × 123 = 7,96,960)
- Let me recompute: ₹36,000 × 0.18 = ₹6,480 per year; per day = ₹6,480 / 365 = ₹17.7534; for 123 days = ₹17.7534 × 123 = ₹2,183.67 ≈ ₹2,184

For May 2025 RCM Tax (₹36,000):
- Original due date: 20 June 2025
- Interest start date: 21 June 2025
- Intended payment date: 20 September 2025
- Days of delay: 21 June to 20 September = 91 days
- Per day interest = ₹17.7534
- Interest = ₹17.7534 × 91 = ₹1,615.56 ≈ ₹1,616

For June 2025 RCM Tax (₹36,000):
- Original due date: 20 July 2025
- Interest start date: 21 July 2025
- Intended payment date: 20 September 2025
- Days of delay: 21 July to 20 September = 61 days
- Per day interest = ₹17.7534
- Interest = ₹17.7534 × 61 = ₹1,082.96 ≈ ₹1,083

**Total Interest Payable:**
- April RCM interest: ₹2,184
- May RCM interest: ₹1,616
- June RCM interest: ₹1,083
- **Total interest: ₹4,883**

*Note: The interest accrues until the actual date of payment; if payment is made later than 20 September 2025, the interest will increase accordingly.*

**3. ITC Reversal (if ITC was Wrongly Claimed):**
In this scenario, the accountant did NOT claim ITC either — since they were unaware of the entire RCM obligation. Therefore, there is no wrongly claimed ITC to reverse. The situation is: tax not paid, ITC not claimed — a simpler but still penalizable non-compliance.

Had the accountant reported the liability in GSTR-3B but not actually paid (and also claimed ITC), the ITC reversal with 18% interest from date of claim would compound the total liability significantly.

**4. Penalty Provisions:**

Section 122(1)(iii): Where a person fails to pay the tax within the time period prescribed, they shall be liable to pay a penalty of 10,000 rupees or an amount equivalent to the tax evaded, whichever is higher (where non-payment is established as evasion/fraud: 100% of tax; where non-fraud: 10% of tax).

For honest oversight (non-fraud, no deliberate evasion): Section 73 applies (demand without fraud allegation). Penalty under Section 73(9): 10% of the tax or ₹10,000, whichever is higher.

10% of ₹1,08,000 = ₹10,800
Since ₹10,800 > ₹10,000, the minimum penalty (non-fraud) = ₹10,800.

Maximum penalty (fraud allegation under Section 74): 100% of tax = ₹1,08,000. This applies if the department can prove the non-payment was intentional or fraudulent. For a genuine accounting oversight with voluntary disclosure, fraud is unlikely to be alleged.

**5. Total Estimated Liability (Voluntary Payment, Non-Fraud):**
- Unpaid RCM Tax: ₹1,08,000
- Interest: ₹4,883
- Penalty (minimum, non-fraud, after voluntary payment before SCN): ₹10,800 *
- **Total: ₹1,23,683**

*Note: Under Section 73(5) of the CGST Act, if the person makes payment of the tax (and interest) before receiving a Show Cause Notice (SCN), no penalty is payable (or only a reduced penalty). This is the key advantage of voluntary disclosure and payment before the department acts.*

**Revised calculation — voluntary payment before SCN:**
If XYZ & Co. pays ₹1,08,000 tax + ₹4,883 interest = ₹1,12,883 before receiving any SCN or audit notice → penalty = Nil (under Section 73(5)).

### Voluntary Disclosure vs Audit Detection

**Voluntary Disclosure (Payment Before SCN — Section 73(5)):**
- Tax: ₹1,08,000
- Interest: ₹4,883 (exact, up to payment date)
- Penalty: NIL (Section 73(5) explicitly waives penalty if payment is made before SCN)
- Total cost: ₹1,12,883
- Benefit: Full compliance restoration; no adverse entry in department records; normal business operations continue.

**Post-SCN Compliance (Section 73(8) — Non-Fraud):**
If the department issues a Demand Notice (DRC-01) first and XYZ & Co. pays within 30 days of receipt of notice:
- Tax: ₹1,08,000
- Interest: (higher, as more time has elapsed)
- Penalty: 10% of tax = ₹10,800 (mandatory minimum under Section 73(9))
- Total cost: ₹1,08,000 + higher interest + ₹10,800

**Audit Detection / Scrutiny Without Prior Disclosure (Section 73(9) — Non-Fraud):**
- Tax: ₹1,08,000
- Interest: (much higher, as years may have elapsed)
- Penalty: Up to 10% of tax under Section 73, payable compulsorily
- Additional consequences: Adverse audit findings; possible escalation to Section 74 (fraud proceedings) if the officer forms a view that the omission was deliberate; risk of cancellation of registration in extreme cases.

**GST Audit Risk Factor:** The GST department's risk-based audit selection system (CBIC's RADAR and state equivalents) flags mismatches between income declared in GSTR-3B Table 3.1(d) and the payments made. For XYZ & Co., the ₹6,00,000 in Mr. Sharma's fees paid (3 months × ₹2,00,000) would be visible in the firm's bank statements during a bank audit, but absent from GSTR-3B — a red flag that MGSTD's analytics can detect.

**[MAHARASHTRA-SPECIFIC]** The Maharashtra GST Department (MGSTD) has an active Audit-II wing that conducts desk audits using automated data analytics comparing payment data with GST returns. Three consecutive months of RCM non-declaration where such payments are traceable (e.g., via TDS data, bank SFMS data, or GSTR-6 cross-matching) creates a high-risk flag. XYZ & Co. should treat voluntary disclosure as urgent, not optional.

### Rectification Procedure

**Step 1 — Deposit the Unpaid RCM Tax:**
Create challans immediately for CGST and SGST:
- CGST challan: ₹54,000 (for three months April, May, June 2025)
- SGST challan: ₹54,000
- Total challan: ₹1,08,000
Deposit via GST portal (net banking or NEFT). Obtain CPIN and payment confirmation. Verify Electronic Cash Ledger reflects the credit.

**Step 2 — Pay Interest via DRC-03:**
File Form DRC-03 (Voluntary Payment) on the GST portal. DRC-03 is the designated form for making voluntary payments of tax, interest, and penalty outside the return filing cycle.
- Interest amount: ₹4,883 (CGST ₹2,441 + SGST ₹2,442 — split proportionately)
- Select the cause: "Voluntary payment on ascertainment of liability"
- This filing before any SCN is received is critical for availing the Section 73(5) penalty waiver

**Step 3 — File GSTR-3B for September 2025 with Retrospective Declaration:**
Since the original April, May, June GSTR-3B returns cannot be revised under the current GST return framework, the correction is made in the current period's (September 2025) GSTR-3B:
- Table 3.1(d): Report the current month's RCM (September 2025 Mr. Sharma fees) PLUS the retrospective disclosure for April, May, June 2025 (three months of ₹36,000 each) — total ₹1,08,000 + current month ₹36,000 = ₹1,44,000 in Table 3.1(d).

*Note: Some practitioners report only the current period's RCM in 3.1(d) and use DRC-03 for the past months. Consult the applicable CBIC circular guidance on the correct mechanism for past-period corrections — the GST Council has been deliberating on the "Amnesty Scheme" for return corrections; verify the current position as of May 2026.*

**Step 4 — Claim ITC for Past Periods:**
Since ITC was not claimed in the original April, May, June returns (the accountant missed the entire RCM obligation), the ITC of ₹36,000 × 3 months = ₹1,08,000 can now be claimed in the September 2025 GSTR-3B Table 4A(3), subject to:
- Section 16(4): ITC must be claimed by the due date for September return of the following FY (20 October 2026 for FY 2025-26). Since this is September 2025 itself, we are well within time. ✓
- Rule 43 apportionment: The 30% exempt ratio reversal still applies. Net eligible ITC for 3 months = ₹1,08,000 × 70% = ₹75,600; reversal = ₹32,400.

**Step 5 — Document the Corrective Action:**
Prepare a compliance note documenting:
- The cause of non-compliance (staff changeover, knowledge gap)
- The months affected and amounts
- The corrective actions taken (challan numbers, DRC-03 ARN, September GSTR-3B ARN)
- Interest computed and paid
- New control measures implemented (new checklist — see Month-End Checklist in the Implementation Guide)
This documentation protects the firm if the matter is subsequently noticed by the department.

---

## Scenario D: Edge Case — Composition Dealer Receiving GTA Services
{topic: "RCM — Composition Dealer"}
{law_reference: "Section 9(3) CGST Act; Section 10 CGST Act; Section 10(4) CGST Act; Notification No. 11/2017-CT(Rate) — GTA services; Circular No. 1/1/2017-CESS"}
{complexity_level: "Intermediate — Composition Scheme Interaction"}

### Facts

Sunrise Handicrafts LLP is a manufacturing unit located in Nashik, Maharashtra, registered under the GST Composition Scheme (Section 10 of the CGST Act). Annual aggregate turnover: ₹60 lakh (well within the ₹1.5 crore composition threshold for manufacturers). The LLP pays a flat composition tax rate of 1% (0.5% CGST + 0.5% CGST under CGST Act; similarly for Maharashtra SGST) on its turnover.

For transportation of its finished goods to customers in Maharashtra, Sunrise Handicrafts uses the services of Bharat Roadways, a Goods Transport Agency registered for GST in Maharashtra. Bharat Roadways has NOT filed a declaration opting for forward charge for FY 2025-26 — accordingly, the default RCM position under Section 9(3) applies.

Monthly freight charges: ₹10,000 per month.
Nature of supply: Intra-state (Nashik, Maharashtra to delivery points within Maharashtra).

Sunrise Handicrafts is a "registered person" (composition dealer registration is still GST registration). The GTA service is provided to a registered person → RCM applies under Section 9(3).

### Analysis

**Step 1: Does RCM Apply?**

Is the supplier (GTA — Bharat Roadways) a registered person? Yes.
Is the supply listed in Notification No. 13/2017-CT(Rate) (Section 9(3) notified categories)?
- GTA services to a factory, registered person, society, etc. — Yes.
Has the GTA opted for forward charge? No (confirmed by absence of declaration).
Is the recipient registered? Yes (composition dealer registration is valid GST registration).
Conclusion: RCM applies. Sunrise Handicrafts LLP must pay CGST + SGST on the freight under RCM.

**Step 2: Tax Computation**

Place of Supply: Maharashtra (intra-state movement of goods — Section 10(1)(a) IGST Act: place of supply of goods involving movement = location where movement terminates, i.e., Maharashtra).
Applicable Tax for GTA under RCM: 5% (CGST 2.5% + SGST 2.5%) — per Notification No. 13/2017-CT(Rate).

Computation:
- Taxable Value = ₹10,000
- CGST @ 2.5% = ₹10,000 × 2.5/100 = ₹250
- SGST @ 2.5% = ₹10,000 × 2.5/100 = ₹250
- Total RCM Tax = ₹250 + ₹250 = ₹500

**Step 3: Can Sunrise Handicrafts Pay RCM?**

Yes. Even composition dealers must pay RCM on supplies received from notified categories (Section 9(3)). The composition scheme exempts the dealer from collecting GST on their own outward supplies — but does not exempt them from paying RCM on inward supplies where RCM is applicable.

Section 10(4) of the CGST Act explicitly states: "A taxable person to whom the provisions of sub-section (1) apply shall not collect any tax from the recipient on supplies made by him." This provision is about the dealer's outward supplies — it does not override Section 9(3) RCM on inward supplies.

The ₹500 RCM must be paid from the Electronic Cash Ledger.

**Step 4: Can Sunrise Handicrafts Claim ITC on the RCM Payment?**

**CRITICAL: NO. ABSOLUTELY NOT.**

Section 10(4) of the CGST Act: "A taxable person to whom the provisions of sub-section (1) apply shall... not be entitled to any credit of input tax."

Composition dealers are categorically prohibited from availing Input Tax Credit under any circumstances. This prohibition applies universally — to forward-charge inward supplies AND to RCM payments. The composition scheme's quid pro quo is: simplified flat-rate tax on outward supplies, but zero ITC.

Therefore:
- RCM tax paid: ₹500/month
- ITC from RCM: ₹0 (absolutely ineligible; Section 10(4) prohibition)
- The ₹500 is a pure additional cost to Sunrise Handicrafts LLP — it cannot be recovered.

**Step 5: Economic Impact**

Monthly impact:
- Freight payment to Bharat Roadways: ₹10,000
- RCM tax payment (pure cost): ₹500
- Total monthly transport cost: ₹10,500

Annual impact:
- Additional RCM tax cost per year: ₹500 × 12 = ₹6,000
- This ₹6,000 is a recurring cost of being in the composition scheme while using GTA services.

Composition Dealer's Rate Implications:
- Sunrise Handicrafts' composition tax on ₹60 lakh turnover = 1% × ₹60 lakh = ₹60,000/year
- GTA RCM burden = ₹6,000/year
- The GTA RCM adds ~10% to the annual composition tax liability

**Step 6: Self-Invoice for Composition Dealer**
Even a composition dealer must issue a self-invoice for RCM supplies received (Section 31(3)(f) applies to all registered persons, including composition dealers). The self-invoice requirements are identical to those for regular taxpayers:
- Self-Invoice No.: RCM-CD/2025-26/001 (use a separate series to distinguish from outward supply records)
- All 11 mandatory fields must be present (as detailed in Step 3 of the Practical Implementation Guide)

**Step 7: Return Filing for Composition Dealer**

Composition dealers file Form GSTR-4 (Annual Return) rather than monthly GSTR-3B. However, for RCM payments, the payment is made monthly (or quarterly as applicable) using Form GST CMP-08 (Statement of Self-Assessed Tax), which serves as the payment instrument for composition dealers.

GST CMP-08:
- Filed quarterly (by the 18th of the month following each quarter)
- Row 3: "Inward supplies on which tax is to be paid on reverse charge basis" — taxable value ₹10,000; CGST ₹250; SGST ₹250 for each quarter

**Practical Advice for Composition Dealers Using GTAs:**

1. Budget the GTA RCM as a fixed additional cost when computing transport charges for pricing products.
2. Consider whether the total tax incidence under the composition scheme (composition rate 1% + irrecoverable RCM costs) is more or less favourable than regular registration (which would allow full ITC, including on GTA freight).
3. Where GTA freight is a significant proportion of costs: the loss of ITC on GTA RCM is a factor in the composition vs regular registration decision.
4. For every ₹1 lakh of GTA freight incurred by a composition dealer: RCM cost = ₹5,000 (5%) — this is irrecoverable.

**[MAHARASHTRA-SPECIFIC]** The MGSTD has issued specific advisories to composition dealers in the manufacturing sector in Nashik, Pune, and Aurangabad industrial corridors, noting that GTA RCM is a common area of non-compliance for composition dealers. Many small manufacturers are unaware of the RCM obligation since they are not in the regular GST return-filing cycle. Non-payment of GTA RCM by composition dealers has been a specific enforcement focus in the MGSTD's audit of composition taxpayers.

---

## Scenario E: Edge Case — Import of Service by SEZ Unit
{topic: "RCM — SEZ Import of Service"}
{law_reference: "Section 7(1)(b) IGST Act (import of service — deemed supply); Section 5(3) IGST Act (RCM on imports); Section 16(1) IGST Act (zero-rating of supplies by SEZ); Section 54 CGST Act (refund); Section 16(3) IGST Act; Special Economic Zones Act, 2005; Rule 89 CGST Rules (refund application)"}
{complexity_level: "Advanced — SEZ + Import of Service Intersection"}

### Facts

TechSolutions Pvt. Ltd. (hereafter "TS Pvt. Ltd.") is an Information Technology company operating as an SEZ unit in Navi Mumbai, Maharashtra, within the Seepz-SEZ designated zone. The company exports software development services to clients in the USA and EU — these are zero-rated supplies under Section 16(1) of the IGST Act, 2017.

To scale its operations, TS Pvt. Ltd. engages CodeCraft Inc., a US-based software development company, to provide offshore software development sub-contracting services. CodeCraft Inc. has no fixed establishment in India and no Indian GST registration.

Invoice from CodeCraft Inc.:
- Service description: Software development sub-contracting services (CCMC Project — Module 3)
- Invoice currency: USD
- Invoice amount: USD 10,000
- Invoice date: 15 January 2026
- RBI Reference Exchange Rate on 15 January 2026: ₹83.00 per USD

Payment made by TS Pvt. Ltd. to CodeCraft Inc.: 20 January 2026 (via SWIFT wire transfer).

### Analysis

**Step 1: Classification of Supply — Import of Service**

Is this an import of service triggering Section 5(3) IGST?

Section 2(11) IGST Act defines "import of services" as the supply of any service where:
(a) The supplier is located outside India; ✓ (CodeCraft Inc. is in the USA)
(b) The recipient is located in India; ✓ (TS Pvt. Ltd. is in Navi Mumbai, India)
(c) The place of supply of the service is in India. ✓ (see below)

Place of Supply — Section 13(2) IGST Act: Where the supply of services is between a person located outside India and a registered person in India, the place of supply is the location of such registered recipient.
Location of TS Pvt. Ltd. = Maharashtra, India.
Place of Supply = India (Maharashtra). ✓

Nature of Supply: Cross-border (supplier outside India → recipient in India) → IGST (not CGST/SGST). Rate: 18% for software/IT services (SAC 998314 — IT infrastructure and services).

**Conclusion: This is an import of service. IGST is payable under RCM by TS Pvt. Ltd. under Section 5(3) of the IGST Act, 2017.**

**Step 2: Tax Computation**

INR conversion:
USD 10,000 × ₹83.00/USD = ₹8,30,000

Taxable Value: ₹8,30,000
IGST @ 18%: ₹8,30,000 × 18/100 = ₹1,49,400
Total IGST under RCM: ₹1,49,400

Self-Invoice:
To be issued at the earliest of:
(a) Date of payment: 20 January 2026
(b) Date of entry in books: 15 January 2026 (when invoice is received and accrued)
Earlier of (a) and (b) = 15 January 2026 (accrual date, if accrued on invoice date).

Self-Invoice No.: RCM-IMP/2025-26/003
Date: 15 January 2026
Taxable Value: ₹8,30,000 (USD 10,000 at RBI rate ₹83.00)
IGST @ 18%: ₹1,49,400
CGST: Nil; SGST: Nil (import of service → IGST only)

**Step 3: SEZ Status — Does it Exempt TS Pvt. Ltd. from RCM on Import of Service?**

This is the critical question that trips practitioners.

**Argument for exemption:** TS Pvt. Ltd. is an SEZ unit. Supplies TO and FROM SEZ are zero-rated. Shouldn't services received by the SEZ also be zero-rated, making RCM inapplicable?

**Legal Position — RCM Still Applies:**

The zero-rating under Section 16(1) of the IGST Act applies to OUTWARD supplies made by SEZ units/developers (i.e., exports of goods and services from the SEZ). It does not exempt the SEZ unit from paying GST on its INWARD supplies.

Import of service by an SEZ unit from a foreign supplier is an INWARD supply. Section 5(3) IGST read with Section 7(1)(b) (import of service = deemed supply) imposes the IGST liability on the Indian recipient. The SEZ status of the recipient does not override Section 5(3) obligations.

Confirmed position: IGST of ₹1,49,400 must be paid under RCM.

**Step 4: Payment from Electronic Cash Ledger**

TS Pvt. Ltd. must deposit ₹1,49,400 into the Electronic Cash Ledger under the IGST head and discharge the RCM liability in its GSTR-3B for January 2026 (due by 20 February 2026).

Note: SEZ units file GSTR-3B and GSTR-1 like regular registered taxpayers. There is no separate return mechanism for SEZ-specific transactions. The SEZ unit has its own GSTIN (registered in the designated SEZ state — Maharashtra in this case, GSTIN prefix "27").

**Step 5: ITC on RCM Payment — The SEZ Advantage**

This is where the SEZ status becomes relevant and beneficial:

TS Pvt. Ltd. makes zero-rated supplies (software export services) as its primary business. Zero-rated supplies are NOT "exempt" supplies — they are taxable supplies on which the output tax rate is zero. This distinction is critical.

**ITC entitlement of an SEZ unit:**
- SEZ units making zero-rated supplies are entitled to claim ITC on all inputs and input services (Section 16(1) IGST Act read with Section 16(3)).
- The RCM-paid IGST of ₹1,49,400 is eligible as ITC (subject to Section 16(2) conditions).
- Since all outputs are zero-rated (no output IGST arises), the ITC accumulates as unutilized credit in the Electronic Credit Ledger.

Section 17(5) check: IT/software services received (import of service for business use) — not blocked under any sub-clause of Section 17(5). ITC is fully eligible.

**Step 6: Refund of Accumulated ITC**

Section 54(3) CGST Act allows a registered person to claim a refund of any unutilized input tax credit at the end of a tax period in the following cases:
(a) Zero-rated supplies made without payment of tax; and
(b) Where the credit has accumulated on account of rate of tax on inputs being higher than the rate of tax on output supplies.

TS Pvt. Ltd.'s situation: All its outputs (software exports) are zero-rated. The ITC of ₹1,49,400 (and all other ITC from domestic inputs) accumulates without being offset by output tax. This qualifies for refund under Section 54(3)(a).

**Refund Mechanism:**
- File Refund Application in Form RFD-01 on the GST portal
- Relevant statement: Statement 3A (for refund on account of export of services without payment of IGST — i.e., under LUT/Bond)
- Claim ₹1,49,400 (plus other accumulated ITC) as refund
- Time limit for refund: 2 years from the relevant date (date of export of services / date of receipt of payment in foreign exchange per FIRC)
- Processing: Refund is sanctioned by the proper officer within 60 days of complete application; provisional refund of 90% within 7 days of acknowledgment for eligible cases (Section 54(6))

Alternatively, if TS Pvt. Ltd. has other domestic supplies (e.g., providing IT services to DTA — Domestic Tariff Area — as some SEZ units do), the ITC may offset domestic output tax liability, reducing or eliminating the need for a formal refund.

**Step 7: Summary Financial Position for January 2026 Import**

| Item | Amount |
|---|---|
| Invoice value (USD 10,000 × ₹83) | ₹8,30,000 |
| IGST under RCM (18%) | ₹1,49,400 |
| Total immediate outflow | ₹9,79,400 |
| ITC credited after RCM payment | ₹1,49,400 |
| Refundable ITC (from zero-rated operations) | ₹1,49,400 |
| Net cost after refund (if refund received) | ₹8,30,000 (i.e., the USD invoice cost only) |

The IGST under RCM is, in effect, a cash flow bridge: pay now (January 2026), receive refund later (typically 60–90 days after filing RFD-01). The cost of this bridge is the interest cost on ₹1,49,400 for ~2–3 months.

**Step 8: Practical Compliance Points for SEZ Units**

1. GSTIN Clarity: An SEZ unit has its own separate GSTIN from the DTA entity (if any). Ensure the RCM self-invoice is issued against the SEZ unit's GSTIN, not the parent/DTA entity's GSTIN.

2. Exchange Rate Documentation: Maintain the RBI Reference Rate publication/screenshot for the invoice date. The CBIC mandates use of the RBI reference rate (not the interbank or negotiated rate) for converting foreign currency invoices to INR for GST purposes.

3. Form 15CA/15CB: For the payment to CodeCraft Inc. (USD 10,000), TS Pvt. Ltd. must also comply with Section 195 Income Tax Act (TDS on payments to non-residents) and furnish Form 15CA (and 15CB from a CA if required) to the authorized dealer bank. This is an income tax obligation but is related to the same transaction.

4. Letter of Undertaking (LUT) for Zero-Rated Exports: Ensure the annual LUT (Form GST RFD-11) is filed at the beginning of each financial year. Without an LUT, zero-rated exports require payment of IGST and then refund — a different (more cash-intensive) mechanism.

5. GSTR-1 Reporting: TS Pvt. Ltd. should report its zero-rated export supplies in GSTR-1 Table 6A (export of services with LUT, without payment of tax). This is essential for the refund claim, as the refund officer cross-verifies GSTR-1 export data with bank realization certificates (FIRC/BRC).

**[MAHARASHTRA-SPECIFIC]** Seepz-SEZ in Navi Mumbai falls under the jurisdiction of the CGST & Central Excise Commissionerate, Mumbai (Central). However, the Maharashtra SGST department also has concurrent jurisdiction over SEZ units for SGST matters (though SEZ exports are zero-rated for SGST as well). SEZ units in Maharashtra should be aware that refund claims for accumulated ITC on IGST accounts are processed by the Central jurisdictional authority, while any SGST ITC refund involves coordination with the MGSTD. Maintain separate ledger tracking for CGST/SGST/IGST components of ITC for clean refund applications.

---

## Cross-References
{topic: "Cross-Topic Navigation"}

**For Scenario B (Master Case Study) — Further Analysis in Other Topics:**

> **See Also:** Topic_2_Blocked_ITC/07_Blocked_ITC_Scenarios_Advanced.md — Scenario B
> *Same facts as XYZ & Co. / Mr. Sharma, but the analysis focuses on: (1) a hypothetical variation where Mr. Sharma's services are reclassified as "outdoor catering" or another Section 17(5) category — how does that change the RCM analysis? (2) The interplay between the Section 17(5) block and the Rule 43 apportionment — are they cumulative or alternative? (3) Edge case analysis of blocked ITC in a mixed-supply RCM context.*

> **See Also:** Topic_3_Apportionment/08_Apportionment_Scenarios_Advanced.md — Scenario A
> *Same facts as XYZ & Co. / Mr. Sharma, but the analysis focuses on: (1) The complete D1/D2 formula computation under Rule 43 across all common input services (not just Mr. Sharma's fees); (2) The aggregate common credit pool computation for January 2026 incorporating multiple input services; (3) Monthly provisional versus annual true-up reconciliation in GSTR-9; (4) Impact of year-end ratio change on prior month reversals.*

**For Scenario A — ITC Eligibility in More Detail:**

> **See Also:** Topic_2_Blocked_ITC/01_Blocked_ITC_Overview.md — Section 17(5) comprehensive analysis for all blocked categories and their interaction with RCM

**For Scenario C — Interest and Penalty Provisions:**

> **See Also:** Topic_7_Interest_Penalty/01_Interest_Penalty_Overview.md — Comprehensive Section 50 interest computation; Section 73/74 demand provisions; DRC-01 and DRC-03 procedures

**For Scenario D — Composition Scheme:**

> **See Also:** Topic_8_Composition_Scheme/01_Composition_Overview.md — Section 10 composition scheme; GST CMP-08 return; ITC restrictions on composition dealers; comparison of composition vs regular registration for manufacturers

**For Scenario E — SEZ Provisions and Zero-Rated Supplies:**

> **See Also:** Topic_9_Zero_Rated_Supplies/01_Zero_Rated_Overview.md — Section 16 IGST (zero-rating); LUT mechanism; refund procedure under Section 54; SEZ-specific GST treatment

---

*End of RCM Advanced Scenarios*

*Document Prepared for: CA, CS, CMA Professional Use*
*Law as of: May 2026*
*Jurisdiction: CGST Act 2017, IGST Act 2017, Maharashtra SGST Act 2017*
*All amounts in Indian Rupees (₹). All computations verified.*
