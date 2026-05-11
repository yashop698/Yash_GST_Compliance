# RCM — Audit and Compliance Guide
{complexity_level: "Advanced"}
{topic: "RCM"}
{law_reference: "GSTR-3B, GSTR-2A, GSTR-2B, GSTR-9, Section 73/74 CGST Act, 2017"}

---

## Documentation Requirements
{law_reference: "Rule 46, Rule 52, Section 31(3)(f) CGST Act, 2017"}

Comprehensive RCM compliance rests on a precise documentation trail. Unlike forward-charge transactions, where the supplier's tax invoice serves as the primary evidentiary document, RCM documentation must be assembled entirely by the recipient. The recipient is simultaneously the person obligated to pay the tax, the person entitled to claim ITC, and the person responsible for creating the transactional record. Each document described below serves a legally defined purpose; absence of any one document weakens the entire ITC chain and exposes the recipient to disallowance during audit.

### Mandatory Documents for RCM Compliance

**1. Self-Invoice (Rule 46 of CGST Rules, 2017 — Section 31(3)(f) CGST Act)**

The self-invoice is the foundational document for RCM compliance. It is required to be issued by the recipient when the supplier is either (a) an unregistered person, or (b) a registered person supplying in a category subject to RCM under Section 9(3) where it has been established by practice that the registered supplier will not issue a tax invoice showing GST (e.g., an individual advocate or a director providing services).

Mandatory contents of a self-invoice under Rule 46:
- Name, address, and GSTIN of the recipient (acting as deemed supplier for documentation purposes)
- A consecutive serial number unique within the financial year, not exceeding sixteen characters
- Date of issue
- Name and address of the unregistered supplier; if supplier has a PAN, it must be recorded; if supplier is a foreign entity, the country and registration details
- Description of goods or services received
- The taxable value of supply
- Applicable rate of tax (CGST + SGST or IGST)
- Amount of tax — CGST, SGST/UTGST, or IGST computed separately
- Signature or digital signature of the recipient or their authorised representative

Self-invoices must be issued at the time of receipt of goods or services, or payment — whichever is earlier. Original self-invoice is retained by the recipient; no duplicate copy requirement under the Rules since there is no other party to the supply receiving a copy, but internal control best practice demands two copies: a master file copy and a payment voucher attachment copy.

**2. Payment Voucher (Rule 52 of CGST Rules, 2017)**

When a recipient makes an advance payment to a supplier for a supply subject to RCM, a payment voucher is required in addition to (or in place of, at the advance stage) the self-invoice. The payment voucher captures:
- Name, address, and GSTIN of the recipient
- A consecutive serial number within the financial year
- Date of issue
- Name, address, and GSTIN (if registered) or address (if unregistered) of the supplier
- Description of the goods or services for which advance is paid
- Amount of the advance paid
- Rate and amount of tax — CGST, SGST/UTGST, or IGST

Payment vouchers are particularly critical for import-of-service transactions where the foreign supplier invoices in foreign currency and the full payment is made upfront. The payment voucher triggers the GST liability for the month of payment, even if the service is to be rendered over a future period.

**3. Supplier Invoice (Even When No GST Is Charged)**

For RCM supplies, the supplier — whether unregistered or a professional exempt from issuing a tax invoice — typically issues a simple invoice, bill, or receipt without any GST component. This document must be retained by the recipient for the following reasons:
- It establishes the commercial value of the supply, which forms the taxable value for RCM computation
- It corroborates the self-invoice issued by the recipient
- It evidences the genuineness of the transaction — that a real supply was actually received
- During audit, the department will cross-check the self-invoice value with the supplier's document to detect value inflation
- For import of services: retain the foreign supplier's invoice (in original currency), wire transfer receipt, and FIRC (Foreign Inward Remittance Certificate) or bank payment confirmation

**4. GSTR-3B Extracts — Monthly Returns Showing RCM Disclosure**

Retain printed or digital extracts of each filed GSTR-3B for the financial year showing:
- Table 3.1(d) — inward supplies liable to reverse charge (proving the RCM liability was declared)
- Table 4A(3) — ITC availed on reverse charge (proving the ITC was claimed in the correct head)
- Table 4B — reversals if any (proving reversals were correctly applied)
- Table 4D — ineligible ITC report (proving blocked ITC under Section 17(5) was not claimed)

The GSTR-3B extract, combined with the self-invoice and challan, creates the core three-document linkage that any audit team will look for in the first fifteen minutes of an RCM audit.

**5. Cash Ledger Payment Challan (PMT-06)**

This is the most critical document establishing that the RCM tax liability was discharged from the cash ledger and not from the electronic credit ledger. The PMT-06 challan (or its successor form) shows:
- CIN (Challan Identification Number) — unique for each payment
- Date and time of payment
- GSTIN of the taxpayer
- Amount paid under each head — IGST, CGST, SGST, CESS — and under each tax period
- Mode of payment (net banking, NEFT/RTGS, OTC)

Critical point: Section 49(4) of the CGST Act prohibits use of the electronic credit ledger (ITC balance) for payment of RCM tax liability. The challan must show a cash payment. If an audit reveals that ITC was used for paying RCM tax, the entire RCM payment is treated as invalid, re-triggering the liability with interest from the original due date. Practitioners must verify the payment mode in the challan at the time of return filing, not just at the time of audit.

**6. Bank Statement**

A bank statement (or bank certificate) showing the actual debit corresponding to the GST challan payment serves as secondary corroboration. Banks process GST payments through authorised bank portals, and the transaction reference should match the CIN on the challan. During departmental audit under Section 65, auditors routinely request bank statements to verify that the challan payment was actually realised and not merely a failed transaction where the challan was generated but the bank debit did not go through (a rare but documented occurrence with OTC payments).

**7. Ledger Entries in Books of Accounts**

The accounting entries for RCM must be verifiable in the recipient's books. The standard accounting treatment involves:

At the time of receiving the supply:
```
Dr. Expense Account (e.g., Legal Fees, Freight, Security Charges)
    Cr. Vendor / Supplier Payable Account
```

At the time of recognising RCM liability:
```
Dr. RCM Tax Payable — IGST / CGST / SGST (current liability)
    Cr. GST RCM Payable Ledger
```

At the time of cash payment:
```
Dr. GST RCM Payable Ledger
    Cr. Bank Account / Electronic Cash Ledger
```

At the time of claiming ITC (after cash payment confirmation):
```
Dr. Input Tax Credit — RCM (IGST / CGST / SGST)
    Cr. RCM Tax Payable — IGST / CGST / SGST
```

The ledger entries must reconcile with the self-invoice values, the challan payment, and the GSTR-3B Tables 3.1(d) and 4A(3). Any discrepancy between accounting entries and GST returns is a red flag that audit teams are specifically trained to detect.

**8. RCM Register (Internal Control Best Practice)**

While not mandated by law, maintaining a dedicated RCM Register is strongly recommended for businesses with multiple RCM transactions. The register should contain:
- Running serial number (matching self-invoice serial numbers)
- Supplier name and type (registered / unregistered / foreign)
- Nature of supply
- Invoice date and self-invoice date
- Taxable value
- Tax amount (IGST / CGST / SGST split)
- Challan number and date of cash payment
- Tax period in GSTR-3B where reported
- ITC claimed (yes/no) and tax period of ITC claim
- Remarks (e.g., "ITC blocked under Section 17(5)(b) — food services")

This register becomes the single-point reference during any audit and dramatically reduces response time to audit queries.

---

## GSTR-3B Reporting Deep-Dive
{law_reference: "GSTR-3B format; Notification No. 21/2019-CT; Section 39 CGST Act, 2017"}

GSTR-3B is the monthly self-assessed summary return under Section 39 of the CGST Act. For RCM, it has two critical disclosure obligations that must be completed correctly every month: (a) reporting the RCM liability in Table 3.1(d), and (b) claiming RCM ITC in Table 4A(3). These two entries are interdependent but must be approached separately and sequentially. An error in either table affects both the tax liability and the ITC claim, and both tables are permanently recorded on the GST portal — amendment in GSTR-3B for a prior month is possible only through the subsequent month's return and involves complications.

### Table 3.1: Details of Outward Supplies and Inward Supplies Liable to Reverse Charge

Table 3.1 of GSTR-3B has five sub-rows:
- 3.1(a): Outward taxable supplies (other than zero-rated, nil-rated, and exempted)
- 3.1(b): Outward taxable supplies (zero-rated)
- 3.1(c): Other outward supplies (nil-rated, exempted)
- **3.1(d): Inward supplies liable to reverse charge** — THIS IS THE RCM ENTRY
- 3.1(e): Non-GST outward supplies

**Table 3.1(d): Inward Supplies Liable to Reverse Charge**

This row requires disclosure of the aggregate of all inward supplies subject to RCM in the tax period. The columns are:

| Column | Description | How to Complete |
|--------|-------------|-----------------|
| Total Taxable Value | Sum of taxable values of all RCM supplies | Add all self-invoice values for the month |
| Integrated Tax | IGST payable on inter-state RCM and import of services | Total IGST computed across all inter-state/import RCM |
| Central Tax | CGST payable on intra-state RCM | Total CGST for all intra-state RCM |
| State/UT Tax | SGST/UTGST payable on intra-state RCM | Total SGST for all intra-state RCM |
| Cess | GST Compensation Cess if applicable | Generally nil for services; applicable for notified goods |

**Key Completeness Requirement:** Table 3.1(d) must capture ALL RCM supplies for the month regardless of whether payment has been made at the time of return filing. The liability arises on the date of supply (as determined under Section 12/13 CGST Act), not the date of cash payment. A common error is to include in 3.1(d) only those supplies for which the cash challan has already been deposited — this results in under-reporting of liability for the month and defers both liability and ITC to later periods, causing a mismatch when the challan is eventually paid.

**Common Errors in Table 3.1(d):**

*Error A — Reporting Net Value Instead of Gross:* Some practitioners subtract TDS (under Section 51) or advance payments from the taxable value. RCM taxable value is always the full transaction value under Section 15 of the CGST Act (subject to deductions permitted under Section 15(3) such as discounts). TDS does not reduce the taxable value for GST purposes.

*Error B — Reporting RCM in Table 3.1(b) Instead of 3.1(d):* Table 3.1(b) is for outward zero-rated supplies (exports and supplies to SEZ). RCM inward supplies must never be entered in 3.1(b). This error results in zero tax liability (since 3.1(b) entries generate zero-rating consequences, not RCM cash liability) and no ITC entitlement.

*Error C — Reporting in Table 3.1(c) as Exempt:* Some practitioners, confused about RCM supplies from exempt-category suppliers (e.g., government entities), enter the supply value in 3.1(c) as exempt. Supply categorisation (exempt/taxable) is distinct from charge mechanism (forward/reverse). An RCM supply of a taxable service is taxable supply, entered in 3.1(d), even if the recipient would be the exempt entity.

*Error D — Reporting in Table 3.1(a) as Forward Charge:* If an RCM supply is mistakenly reported in 3.1(a) as outward taxable supply, the entire tax arithmetic for the return is distorted. Outward supplies generate output tax; inward RCM supplies generate a different head of liability. The net tax payable computation (output tax minus ITC) would be incorrect, and ITC would be double-counted or lost.

*Error E — Partial Month Reporting:* Including only supplies from the first half of the month where invoices have been processed, while leaving second-half supplies for the next month — a purely administrative (non-statutory) cut-off. The law requires reporting based on supply date (time of supply rules), not invoice processing date.

### Table 4: Eligible ITC

**Table 4A(3): ITC Availed — Reverse Charge**

This is the RCM ITC claim entry. After completing Table 3.1(d) (which generates the RCM tax liability and requires cash payment), the recipient is entitled to claim ITC in Table 4A(3) for the amount of RCM tax that has actually been paid in cash during the tax period.

The relationship between Table 3.1(d) and Table 4A(3):
- Table 3.1(d) declares the liability (gross)
- Cash challan payment discharges that liability
- Table 4A(3) claims the ITC (which must not exceed what was paid in cash, and must be net of any blocked ITC under Section 17(5))

**Critical Timing Rule (Rule 36(3) CGST Rules):** ITC under Table 4A(3) is claimable ONLY in the tax period in which the RCM tax is actually paid to the government. If the RCM liability for March is declared in March's GSTR-3B but the cash payment is made in April, the ITC can only be claimed in April's GSTR-3B Table 4A(3). This creates a one-month lag in ITC for taxpayers who pay their challan after the return filing deadline of the prior month.

**Amount Limitation:** Table 4A(3) cannot exceed Table 3.1(d) tax amount for the same tax period (in aggregate across months). Claiming more ITC than the RCM tax paid is invalid and can result in interest liability under Section 50(3) (now Section 50(1) as amended) for wrongful ITC utilisation.

**Table 4B(1): Reversal Under Rule 42 / Rule 43**

Where RCM ITC relates to inputs or input services used for both taxable and exempt supplies, the apportionment computation under Rule 42/43 applies equally to RCM ITC as it does to forward-charge ITC. The proportionate reversal for the exempt supply component is entered in Table 4B(1). Practitioners sometimes overlook this for RCM ITC because it is "self-generated" and assume it is always fully eligible — this assumption is incorrect for businesses with mixed-use (taxable + exempt) supplies.

**Table 4B(2): Other Reversals**

Any RCM ITC that was incorrectly claimed in a prior period must be reversed in Table 4B(2). Common scenarios requiring 4B(2) reversal:
- ITC claimed before RCM cash payment was actually made
- ITC claimed on supplies where the self-invoice was not issued
- ITC claimed on blocked categories under Section 17(5) (e.g., construction services received on RCM from an unregistered contractor — ITC blocked under Section 17(5)(c))

**Table 4D: Ineligible ITC**

Table 4D is used to report ITC on RCM supplies where the ITC is blocked under Section 17(5). This table is informational — it does not affect the net tax liability but provides the department with a reconciliation between all RCM tax paid and the ITC actually claimed. The difference between RCM tax paid (Table 3.1(d)) and ITC claimed (Table 4A(3)) should be explainable either as:
(a) Timing difference (ITC not yet claimed — prior period payment, current period reporting), or
(b) Blocked ITC (Section 17(5)) — reported in 4D, or
(c) Partial business use — reversal in 4B(1).

---

## GSTR-1 Reporting
{law_reference: "GSTR-1 format; Rule 59 CGST Rules, 2017"}

GSTR-1 is primarily the outward supply return. However, it has limited RCM relevance in specific scenarios:

**Table 4B — Inward Supplies from Registered Persons Attracting Reverse Charge**

This table in GSTR-1 was originally designed to capture RCM supplies received from registered suppliers (e.g., GTA services received by a registered recipient, or director services). In practice, most GSTR-1 filers do not use Table 4B extensively because:
(a) The RCM liability is self-assessed and reported in GSTR-3B, not in GSTR-1
(b) GSTR-1 Table 4B does not auto-populate the recipient's GSTR-2B

**Significance for Director Services:** When a company's director is registered under GST and provides consulting services to the company, the director (as supplier) should ideally show this supply in their GSTR-1 (since the director is a registered person). If the director files GSTR-1 and includes the supply, it may appear in the company's GSTR-2B — creating a cross-check between the director's return and the company's Table 3.1(d) and Table 4A(3). Discrepancy between what the director declared in GSTR-1 and what the company declared in GSTR-3B is a common scrutiny trigger.

**GTA Under Forward Charge:** If a GTA has opted for forward charge (effective from 2022), the GTA files GSTR-1 showing the freight charges and GST collected. The recipient then claims ITC through Table 4A(1) or 4A(5) — NOT through the RCM route. Conversely, if the GTA has NOT opted for forward charge, the GTA does not file GSTR-1 for these supplies, and the recipient reports RCM in GSTR-3B Table 3.1(d). This distinction is critical for ITC reconciliation.

---

## GSTR-2A / GSTR-2B Reconciliation
{law_reference: "Rule 36(4) CGST Rules, 2017; Circular No. 183/15/2022-GST dated 27-Dec-2022"}

### Auto-Population Logic for RCM

**GSTR-2A** is a dynamic auto-populated statement reflecting supplies declared by the recipient's suppliers in their respective GSTR-1. It is updated in real time as suppliers file their returns.

**GSTR-2B** is a static auto-populated ITC statement generated on the 14th of every month (from April 2021 onwards), based on GSTR-1 filed by suppliers up to the 13th of that month. Unlike GSTR-2A, GSTR-2B is fixed for a given month and does not change thereafter, making it the reliable basis for ITC reconciliation.

**Critical Limitation for RCM from Unregistered Suppliers:** Self-invoices issued by the recipient for RCM supplies from unregistered persons are NOT auto-populated in GSTR-2A or GSTR-2B. The GST portal has no mechanism to receive self-invoice data from the recipient's internal records. Consequently, 100% of the ITC on RCM from unregistered persons must be manually entered by the recipient in GSTR-3B Table 4A(3), without any system-generated cross-check. This is where most RCM ITC errors occur — the recipient either claims more than was paid in cash, or claims ITC without issuing the mandatory self-invoice, or claims in the wrong period.

**RCM from Registered Suppliers:** For RCM categories where the supplier is a registered person (e.g., a registered individual advocate, a director with GST registration, an insurance company issuing reinsurance), the supplier's GSTR-1 may reflect the supply (depending on the supplier's disclosure practice). If reflected, the supply appears in the recipient's GSTR-2B. However, even in this case, the RCM ITC in Table 4A(3) is based on the recipient's own cash payment, not on GSTR-2B auto-population. GSTR-2B merely provides a cross-check, not an automatic credit entry.

### Reconciliation Procedure for RCM

**Step 1: Extract RCM Payables from Books**

From the accounting software, generate a vendor-wise listing of all RCM-category expenses for the tax period. Filter by:
- Expense ledgers known to attract RCM (e.g., Legal Fees, GTA Freight, Director Commission, Security Charges)
- Vendor type (unregistered / foreign / registered but RCM-notified)

This gives the gross RCM taxable value for the period.

**Step 2: Compute Tax and Match with GSTR-3B Table 3.1(d)**

Apply the applicable RCM rate to each supply category and compute IGST/CGST/SGST. Sum across categories and compare with what was declared in Table 3.1(d) of the filed GSTR-3B. Tolerance: zero — unlike GSTR-2B forward-charge ITC which has a Rule 36(4) tolerance, RCM liability reporting has no statutory tolerance. Under-reporting of RCM liability is a recoverable demand under Section 73/74.

**Step 3: For Registered Suppliers on RCM — Cross-Check GSTR-2B**

For RCM supplies from registered persons (directors, registered individual advocates), extract from the recipient's GSTR-2B. Check whether the supplier has filed GSTR-1 showing the supply. If the supply appears in GSTR-2B:
- Compare the value with self-invoice/books
- If GSTR-2B value exceeds books: investigate — may be a billing error by the supplier or a recording omission by the recipient
- If GSTR-2B value is lower than books: supplier may not have filed GSTR-1 for all supplies, or may have filed late (appearing in next month's GSTR-2B)

**Step 4: Identify Mismatches and Categorise**

| Mismatch Type | Description | Action |
|---------------|-------------|--------|
| In books, not in GSTR-3B | RCM supply received but not reported | Declare in subsequent month; pay with interest |
| In GSTR-3B, not in books | Over-reporting in return vs books | Investigate; if error, reverse in next month's 4B(2) |
| ITC claimed > cash paid | ITC in 4A(3) exceeds challan amount | Reverse excess ITC in 4B(2); pay interest |
| In GSTR-2B, not in GSTR-3B | Registered supplier reported supply but recipient missed RCM | Report and pay with interest |
| Cash paid but ITC not claimed | Left on table — under-utilisation | Claim in next available period (before September of following year or filing of annual return) |

**Step 5: Year-End Reconciliation**

Before filing the annual return (GSTR-9), prepare a full-year reconciliation:
- Total RCM liability declared across all 12 GSTR-3Bs → compare with books
- Total RCM ITC claimed across all 12 GSTR-3Bs → compare with total cash paid for RCM
- Differences identified must be addressed in GSTR-9C (reconciliation statement) if the taxpayer is subject to audit.

### Tolerance Limits Under Rule 36(4)

Rule 36(4) of CGST Rules prescribes that ITC from forward-charge purchases can be claimed only to the extent that the supplier's invoices appear in GSTR-2B. Historically (prior to Circular 183/15/2022-GST) there was a 5% provisional ITC tolerance (later 10%, then various modifications). Circular 183/15/2022-GST clarified the current position post-GST portal stabilisation.

**For RCM, Rule 36(4) has no direct application** because:
(a) RCM ITC from unregistered suppliers has no GSTR-2B entry to reconcile against
(b) RCM ITC eligibility is governed by Rule 36(3) — payment of tax — not by GSTR-2B matching

However, for the subset of RCM where the supplier is registered and appears in GSTR-2B, the department may use GSTR-2B as a cross-verification tool during audit, even if not as a legal precondition. Practitioners should note that the department's ASMT-10 scrutiny notices frequently cite GSTR-2B vs GSTR-3B mismatches — including RCM entries — as grounds for inquiry, regardless of whether Rule 36(4) technically applies.

---

## GSTR-9 Annual Return — RCM Treatment
{law_reference: "GSTR-9 format; Rule 80 CGST Rules, 2017; Section 44 CGST Act, 2017"}

GSTR-9 is the annual return that consolidates the twelve monthly GSTR-3B disclosures into a single annual declaration. For RCM, two tables in GSTR-9 are critical and are the primary source of discrepancies in the annual reconciliation process.

### Table 4: ITC Availed in GSTR-9

The GSTR-9 Table 4 contains several sub-rows for ITC categorised by source:

**Table 4E: ITC Availed on Account of Reverse Charge under CGST**
This is the annual aggregate of Table 4A(3) (CGST component) from all 12 GSTR-3Bs. The figure must equal the sum of CGST actually paid as RCM across the financial year from the cash ledger.

**Table 4F: ITC Availed on Account of Reverse Charge under IGST**
This is the annual aggregate of Table 4A(3) (IGST component) from all 12 GSTR-3Bs.

**Note:** GSTR-9 Table 4E and 4F are auto-populated from the filed GSTR-3B returns. However, the taxpayer has the option to edit these figures in GSTR-9 if there were errors in monthly returns — to the extent additional ITC can be declared or wrongly claimed ITC can be reduced. Importantly:
- Additional ITC that was missed in monthly GSTR-3Bs but relates to supplies of the financial year can be declared in GSTR-9 (the annual return allows ITC claims up to the GSTR-9 filing deadline)
- Excess ITC declared in monthly GSTR-3Bs cannot simply be reduced in GSTR-9 without reversing in the regular returns — the GSTR-9 does not carry interest implications by itself; any excess ITC utilisation carries interest from the date of utilisation

**Common Reconciliation Issue — Monthly vs Annual Totals:**

The most frequent GSTR-9 discrepancy for RCM arises from the timing mismatch permitted by the law. For example:
- March RCM liability declared in GSTR-3B (March): ₹1,00,000 IGST reported in Table 3.1(d)
- Cash payment for this ₹1,00,000 made in April (after March return filing)
- ITC claimed in April's GSTR-3B Table 4A(3): ₹1,00,000

In GSTR-9 for the financial year ending March:
- Table 3.1(d) equivalent (Table 4 of GSTR-9 for liability): shows ₹1,00,000 for March
- Table 4F: shows ITC of ₹1,00,000 from April (which belongs to the next financial year's Table 4F in annual return)

This creates an apparent discrepancy in the annual return: liability declared for FY but ITC not appearing in the same FY's annual return. This must be disclosed and explained in GSTR-9C (if applicable). The explanation is factual — ITC was claimed in the subsequent year's return — and is not a compliance failure.

### Table 5: Particulars of Transactions for the Previous Financial Year Declared in Returns of April to September

If any RCM liability for the previous financial year was belatedly reported in April–September GSTR-3Bs (current year), Table 5 of GSTR-9 captures these belated disclosures. This table is essential for reconciling whether all prior-year RCM liability has been captured.

### Table 8: Difference Between ITC as per GSTR-2A and ITC as per GSTR-3B

Table 8 of GSTR-9 is a critical reconciliation table. For forward-charge ITC, Table 8 compares GSTR-2A auto-populated credits with GSTR-3B claims. For RCM:

**Table 8A vs Table 8B vs Table 8C:** The auto-populated figures in Table 8 will show differences for RCM ITC because:
- Self-invoice ITC (from unregistered suppliers) does not appear in GSTR-2A at all
- Therefore Table 8A (ITC as per GSTR-2A) will be zero or low for RCM categories
- Table 8B (ITC in GSTR-3B as of the GSTR-9 filing date) will show the full RCM ITC claimed
- Table 8C will show the excess of Table 8B over Table 8A — which for RCM is entirely normal

Practitioners must include a clear note in the GSTR-9C or in internal records explaining that the GSTR-2A/GSTR-9 Table 8 gap for RCM categories is structural and not indicative of irregular ITC claims. Failure to explain this routinely generates ASMT-10 scrutiny notices asking for justification of ITC claimed beyond GSTR-2A.

---

## Common Errors by Practitioners
{topic: "RCM — Common Errors"}

The following errors are documented from audit experience, CBIC scrutiny patterns, and professional practice observations. They are ranked in approximate order of frequency and severity.

### Error 1: Paying RCM Tax from the Electronic Credit Ledger

**Statutory Prohibition:** Section 49(4) of the CGST Act explicitly prohibits use of the electronic credit ledger (ITC balance) for payment of any tax liability arising under the reverse charge mechanism. The electronic credit ledger balance can be used only for payment of output tax liability, i.e., tax on outward supplies.

**How This Error Occurs:** The GST portal's payment interface presents all liability heads simultaneously, and the "auto-offset" functionality may, in certain portal versions and user settings, attempt to set off RCM liability against ITC balance if the cash ledger is insufficient. Practitioners sometimes complete the payment without verifying the source (cash vs credit ledger).

**Consequence:** An RCM payment made from the electronic credit ledger is legally a payment failure. The RCM tax liability remains outstanding, attracting:
- Interest under Section 50(1) at 18% per annum from the due date of the return
- Penalty under Section 122(2)(b) for failure to pay RCM tax
- The ITC claimed on this "failed" payment is also invalid — subject to reversal with interest

**Detection Method:** Examine the GST portal's electronic credit ledger and electronic cash ledger statements for the relevant tax period. RCM payments should appear as debits in the cash ledger (row: "Tax payable on Reverse Charge") and NOT as credits being offset from the credit ledger.

**Remedy:** Deposit the correct amount via the cash ledger. Apply for correction of the erroneous ITC utilisation by reversing the ITC in Table 4B(2) of the subsequent month's GSTR-3B. Pay interest on the cash shortfall period. File DRC-03 for voluntary payment if the period is under scrutiny.

### Error 2: Failure to Issue a Self-Invoice

**Statutory Requirement:** Section 31(3)(f) of the CGST Act requires the recipient to issue a self-invoice for RCM supplies from unregistered suppliers. This is not optional documentation — it is a mandatory legal requirement. Without a self-invoice, the ITC claim under Section 16 cannot be sustained because the "tax invoice" or equivalent document required under Section 16(2)(a) is absent.

**How This Error Occurs:** Many businesses — particularly small CA firms, trading companies, and professional service recipients — pay their unregistered service providers (advocates, security contractors, transporters) and correctly deposit RCM tax but omit to generate self-invoices. The reasoning is often: "I have the vendor's bill and the challan — what more is needed?"

**Consequence:**
- ITC disallowance under Section 16(2)(a) — no valid document to support the credit
- Penalty under Section 122(1)(a) — for issuing invoice not in accordance with Rules, or under Section 122(1)(b) — failure to issue invoice
- Where intentional, treated as fraudulent ITC claim under Section 74

**Remedy:** Issue self-invoices belatedly — before claiming ITC. Courts have generally held that belated compliance of procedural requirements should not result in permanent ITC denial where the underlying supply and tax payment are genuine (following the Supreme Court's liberal interpretation in Commissioner of CGST vs M/s Safari Retreats). However, the department will assess penalty for delay, and the risk remains until regularised.

**Best Practice:** Integrate self-invoice generation into the accounts payable workflow — no RCM payment without a prior self-invoice number.

### Error 3: Claiming ITC Before RCM Cash Payment Is Confirmed

**Statutory Rule:** Rule 36(3) of the CGST Rules states that ITC in respect of inward supplies liable to RCM shall be availed only in the return for the period in which the tax in respect of such supply has been paid in cash to the Government.

**How This Error Occurs:** A company reports ₹50,000 IGST under Table 3.1(d) in the March return (due by 20th April). The cash challan for ₹50,000 is paid on 22nd April (after the return filing deadline of 20th April). If the company has already claimed ₹50,000 ITC in Table 4A(3) of the March return (filed on 19th April), the ITC claim is invalid — the payment did not exist at the time of the return.

**Consequence:**
- ITC wrongfully availed — Section 73 demand (non-fraud) or Section 74 (fraud)
- Interest under Section 50(1) from the date of ITC utilisation
- In audit situations: the mismatch between challan date and ITC claim date is the first arithmetic check performed by audit teams

**Detection Method:** Verify that for each month's Table 4A(3) claim, the corresponding cash challan date is on or before the GSTR-3B filing date for that month.

**Remedy:** Reverse the premature ITC in the subsequent month's Table 4B(2). Claim ITC in the month in which the challan payment date falls.

### Error 4: Reporting RCM Supplies in the Wrong Table of GSTR-3B

**Correct Table:** All inward supplies attracting reverse charge must be reported in GSTR-3B Table **3.1(d)**. This is true regardless of:
- Whether the supplier is registered or unregistered
- Whether the supply is of goods or services
- Whether the supply is taxable, nil-rated, or the rate is zero (which would be unusual for RCM categories but possible for exempt services incorrectly classified as RCM)

**Wrong Tables and Their Specific Consequences:**

*Reported in Table 3.1(b) — Zero-Rated Outward Supplies:* Zero-rated entries in 3.1(b) affect the refund entitlement computation (for exporters). Placing RCM inward supplies in 3.1(b) artificially increases zero-rated outward figures, may generate wrongful refund claims, and creates zero RCM liability (no cash payment trigger), meaning the actual RCM goes unpaid.

*Reported in Table 3.1(c) — Exempt/Nil-Rated Outward Supplies:* Treats RCM supplies as if they were exempt outward supplies. No RCM liability arises. If the underlying supply was genuinely taxable under RCM, this is a complete non-payment.

*Reported in Table 3.1(a) — Normal Outward Taxable Supplies:* The most conceptually confusing error. Entering inward RCM values in 3.1(a) grossly inflates declared outward supply turnover. The tax amount computed in 3.1(a) adds to output tax, which is then incorrectly offset by ITC — the taxpayer effectively pays no additional cash but the return shows a distorted picture. During GSTR-9 reconciliation, the turnover mismatch is immediately visible.

*Reported Nowhere:* Complete omission. The RCM liability is simply not reported. ITC may still be (wrongfully) claimed in 4A(3) without the corresponding 3.1(d) entry — a glaring inconsistency.

**Remedy:** File amended GSTR-3B for the period (by reporting the correction in the subsequent month's return) — GSTR-3B does not allow retroactive amendment of previous months; corrections flow through the next return. For material prior-period omissions, pay through DRC-03 (voluntary payment) with interest.

### Error 5: Gaps in Self-Invoice Serial Number Continuity

**Legal Requirement:** Rule 46 of CGST Rules requires that invoices (including self-invoices) bear a consecutive serial number not exceeding sixteen characters in one or multiple series. While the Rule permits multiple series (e.g., by financial year or by location), within each series, the numbers must be consecutive.

**How This Error Occurs:**
- Self-invoices are manually generated, unlike tax invoices (often from billing software)
- Employees forget to generate self-invoices for some transactions
- Self-invoices are voided without proper cancellation records
- Multiple staff members generate self-invoices using different series without coordination

**Audit Implication:** During departmental audit, the self-invoice register is examined for serial number continuity. Gaps (e.g., SI/2024-25/001, SI/2024-25/002, SI/2024-25/007 — missing 003–006) raise immediate questions:
- Which transactions do the missing numbers represent?
- Were RCM obligations for those transactions discharged?
- Was ITC claimed for those transactions even without self-invoices?

Inability to account for gaps is treated as evidence of suppressed RCM liability.

**Best Practice:** Use accounting software for self-invoice generation (rather than Word or Excel) so that serial numbers are auto-generated and gaps are technically impossible. Maintain a "cancelled invoices" register if any self-invoice is voided. Obtain CA certification of the self-invoice register at year-end.

### Error 6: Failure to Identify Import of Services as RCM

**Legal Basis:** Section 5(3) of the IGST Act, 2017 read with Notification No. 10/2017-IT(Rate) brings import of services into the RCM net. Additionally, Section 5(4) of the IGST Act (corresponding to Section 9(4) of the CGST Act) applies RCM to import of services from unregistered foreign suppliers.

**The Practical Gap:** Many Indian businesses that pay foreign vendors — for software subscriptions, cloud computing, consulting, market research, legal opinions, licensing, royalties, technical services — do not compute and pay IGST under RCM. The reasons include:
- Unfamiliarity with the import-of-service RCM obligation
- Assumption that foreign payments are outside the GST net
- No Indian vendor, no GST registration on the foreign side — "how can GST apply?"

**Department's Detection Method:** The income tax department collects Form 15CA (declaration by remitter for foreign remittances) and Form 15CB (CA certificate). For remittances above ₹5 lakh (in certain categories), a Form 15CA with a CA's 15CB is mandatory under Section 195 of the Income Tax Act. GST department periodically receives Form 15CA/15CB data from the income tax department and cross-checks against GSTR-3B Table 3.1(d) for IGST on imported services. Remittances under "technical services," "royalty," "software," "consulting" in 15CA, not appearing in GSTR-3B → scrutiny notice.

**Additional Trigger — Form 26Q:** For payments to non-residents, TDS under Chapter XVII-B of Income Tax Act generates Form 26Q returns that are similarly available to GST authorities through data sharing.

**Consequence:** Long-standing non-payment of import-of-service IGST is treated as suppression under Section 74 with 100% penalty. The entire period of limitation extends to 5 years. Large IT sector companies and MNCs are the most common targets.

**Remedy:** Conduct an import-of-service review covering all foreign vendor payments for the last 5 years. Deposit outstanding IGST RCM with interest under Section 50. File DRC-03 before any notice is issued to benefit from reduced penalty provisions (25% penalty vs 100% under Section 74(5)).

### Error 7: Treating GTA as Forward Charge When GTA Has Not Filed the Option

**The Post-2022 Framework:** From 1 July 2022, Goods Transport Agencies (GTAs) have the option to pay GST at 12% under forward charge (with full ITC benefit) instead of their customers paying 5% under RCM. GTAs exercising this option must file a declaration with the jurisdictional tax authority by 15 March of the financial year preceding the year from which they wish to opt for forward charge.

**The Error:** Many recipients of GTA services assume that since the 2022 amendment exists, all GTAs are now on forward charge. They receive freight invoices from their GTA and either:
(a) Claim ITC on the GTA's invoice (treating it as a forward charge credit) without the GTA having actually paid the tax, or
(b) Do not pay RCM, assuming the GTA has opted for forward charge

**Verification Requirement:** Recipients must verify each GTA's option status before determining the charge mechanism:
- Request a copy of the GTA's forward charge option declaration
- Verify on the GST portal whether the GTA has opted (the portal may show the option in the GTA's profile)
- If no declaration is available, treat as RCM by default

**Annual Re-verification:** The GTA's option is exercised year-by-year. A GTA that opted for forward charge in FY 2024-25 may not have re-exercised the option for FY 2025-26. Recipients should re-verify at the beginning of each financial year.

**Consequence:** If recipient treats GTA as forward charge (no RCM) but GTA has not opted and has not paid GST:
- Recipient has unpaid RCM liability for the full year
- Interest at 18% per annum from due date
- Penalty under Section 122
- ITC claimed on GTA invoices (as forward charge) is invalid — reversal required

---

## Red Flags for GST Audit
{law_reference: "Section 65, 66 CGST Act, 2017 (Audit); Section 67 (Inspection and Search); Rule 101 CGST Rules"}

GST audit under Section 65 (departmental audit) is initiated based on risk scoring of taxpayers. The following patterns generate high risk scores and trigger RCM-specific audit scrutiny. Practitioners advising clients should proactively address these patterns before an audit notice arrives.

### Red Flag 1: High ITC on RCM vs Relatively Low Output Tax

**Pattern Description:** A company claims substantial ITC under Table 4A(3) (RCM ITC) — particularly for legal services, security services, or director remuneration — but its output tax in Table 3.1(a) is disproportionately low relative to its turnover or the scale of services apparently consumed.

**Department's Inference:** The RCM ITC may relate to services not genuinely used for business purposes, or the RCM supplies may be inflated (value inflation in self-invoices to generate higher ITC). In the case of legal services, the department may question whether the legal fees were for business litigation or personal matters of promoters — the latter being ineligible for ITC under Section 17(5) or as non-business use under Section 17(1).

**Pre-Audit Action:** Maintain purpose documentation for each major RCM service engagement — Board resolutions, contracts, correspondence files, and court records (for litigation) — demonstrating the business nexus of the expenditure.

### Red Flag 2: RCM Tax Paid But No ITC Claimed

**Pattern Description:** The company's cash ledger statements and GSTR-3B Table 3.1(d) show regular RCM payments across multiple tax periods, but Table 4A(3) shows zero or minimal ITC.

**Department's Inference:** Two possibilities — (a) the company is eligible for ITC but has not claimed it (leaving money on the table, a process control failure), or (b) the company knows the ITC is blocked (e.g., construction services creating immovable property, or personal services) and has correctly not claimed ITC, but has failed to report this in Table 4D (ineligible ITC). The second scenario suggests awareness of illegitimacy but inadequate documentation.

**Risk Level:** Medium — the department would want to verify whether the RCM cash payment was genuine (not for fictitious supplies) and whether the ITC entitlement was correctly assessed.

**Pre-Audit Action:** Verify ITC eligibility for all RCM tax paid. If ITC is blocked, populate Table 4D and maintain a written memo documenting why the ITC was not claimed (citing specific Section 17(5) sub-clause). If ITC was simply missed, claim in the current period (within the time limit).

### Red Flag 3: Serial Number Gaps in Self-Invoices

**Pattern and Risk:** As discussed under Error 5 above, gaps in self-invoice serial numbers are a direct indicator of possible unrecorded RCM transactions. Auditors are trained to ask for the self-invoice register in the first set of document requests. Unexplained gaps convert a procedural audit into a substantive one, as the department hypothesises that the missing invoices represent suppressed RCM liability.

**Risk Level:** High — a single large gap (e.g., 50 missing serial numbers in a year) can result in estimated demands under Section 73 for the hypothetical RCM that "should" have been paid.

**Pre-Audit Action:** Before any audit notice, reconcile the self-invoice register end-to-end. Prepare a gap explanation memo. If genuinely missing self-invoices are identified, issue them belatedly and file DRC-03 for any unpaid RCM.

### Red Flag 4: GSTR-2B vs GSTR-3B Mismatch for Registered Suppliers on RCM

**Pattern and Risk:** Where a registered supplier (e.g., a company director registered as GST taxpayer, or a registered GTA that has not opted for forward charge) files GSTR-1 showing supplies to the recipient, those entries appear in the recipient's GSTR-2B. The GSTN system generates a mismatch report when GSTR-2B shows a registered supplier's declared RCM-category supply but the recipient's GSTR-3B Table 3.1(d) does not include the corresponding amount. This mismatch is auto-generated by the GST system and flags the recipient for ASMT-10 notice.

**Detection Timeline:** The system generates these notices approximately 12–18 months after the GSTR-2B mismatch is first identified, typically following the supplier's annual return filing. Companies that have ongoing director fee arrangements with registered directors are particularly exposed if the director files GSTR-1 but the company fails to include the services in Table 3.1(d).

**Pre-Audit Action:** Monthly, extract the GSTR-2B and check for any RCM-category entries from registered suppliers. Cross-check with GSTR-3B Table 3.1(d). Any mismatch should be reported in the subsequent month's return.

### Red Flag 5: Large-Value Payments to Unregistered Vendors

**Pattern and Risk:** A company makes consistently large payments (individually or in aggregate) to unregistered vendors for services that would attract GST if the vendor were registered. For example:
- ₹2 crore paid annually to an unregistered security agency (RCM category)
- ₹80 lakh paid to multiple small unregistered freight operators in a year
- ₹30 lakh annual retainer to an unregistered consultant

The department's risk intelligence compares the company's declared unregistered vendor RCM base with industry norms and with the company's declared procurement volumes. If the unregistered vendor payments appear disproportionately high, two questions arise: (a) should these vendors themselves have been registered (if their aggregate turnover exceeds the threshold), and did the company assist in maintaining their unregistered status to avoid GST? (b) Are all payments accurately represented (value inflation risk)?

**Cross-Check Tool Used by Department:** TDS data (Section 194C for contractors, Section 194J for professional services) available under Section 194 of the Income Tax Act provides the GST department with the total payments made to contractors and professionals, disaggregated by whether the payee is registered or unregistered for GST. A significant gap between total contractor payments (from TDS) and the RCM declared in GSTR-3B Table 3.1(d) is a reliable audit trigger.

**Pre-Audit Action:** Periodically verify that large unregistered vendors have not crossed the GST registration threshold (₹20 lakh for services, ₹40 lakh for goods, as applicable). If they have, advise them to register — continuing to transact on RCM basis with a vendor who should be registered exposes both parties.

### Red Flag 6: Sudden Increase in RCM Claims Without Proportionate Business Activity

**Pattern and Risk:** A company's RCM ITC in Table 4A(3) increases sharply (e.g., by 200%) in a particular tax period without a corresponding increase in turnover, capital expenditure, or documented business expansion. This pattern triggers an automated scrutiny notice (ASMT-10) as the risk engine flags it as an anomaly.

**Pre-Audit Action:** Ensure that any legitimate increase in RCM expenditure is backed by commercial documentation — contracts, Board approvals, purchase orders — that can be produced during audit to explain the quantum jump.

---

## Departmental Audit Process for RCM
{law_reference: "Section 65 CGST Act, 2017 (Departmental Audit); Section 73 (Demand — Non-Fraud); Section 74 (Demand — Fraud); Rule 101 CGST Rules"}

### How Audit Teams Approach RCM

The following describes the standard audit procedure adopted by GST audit teams (both CGST Audit Commissionerates and State GST audit formations) when examining RCM compliance:

**Step 1: Request GSTR-3B for All Periods Under Audit**

The audit team extracts Table 3.1(d) (RCM liability declared) and Table 4A(3) (RCM ITC claimed) for each month of the audit period (typically one to three financial years). A preliminary worksheet is prepared showing:
- Monthly RCM liability declared
- Monthly RCM ITC claimed
- Net RCM cash outflow (liability minus ITC, taking into account the timing lag)
- Cumulative RCM position

**Step 2: Request Vendor Payment Ledger and RCM Category Analysis**

The auditee is asked to provide:
- Vendor-wise payment ledger for the audit period
- Classification of vendors as registered / unregistered / foreign
- Identification of RCM-category expenses by head

The audit team matches the aggregate of RCM-category payments in the vendor ledger against GSTR-3B Table 3.1(d). A systematic shortfall (consistent under-reporting) indicates either intentional suppression or process failure — both require demand issuance.

**Step 3: Examine the Self-Invoice Register**

The self-invoice register is reviewed for:
- Serial number continuity (gaps → investigation)
- Value consistency with vendor ledger (invoice value matching payment)
- Date of self-invoice vs date of supply (timing compliance under Rule 47A)
- Whether self-invoice numbers match those recorded in GSTR-3B

**Step 4: Verify Cash Payment from Cash Ledger Statement**

The GST portal cash ledger statement (downloadable by the auditee) is requested. The audit team verifies:
- Whether each RCM liability reported in GSTR-3B was discharged from the cash ledger (not from the credit ledger)
- Whether the cash payment amount matches the declared liability
- Whether cash payment was made before or after ITC was claimed (timing compliance)

**Step 5: Match ITC Claimed in 4A(3) with Cash Payments**

The audit team creates a month-wise table:

| Month | RCM Declared (3.1(d)) | Cash Paid (Date) | ITC Claimed (4A(3)) | Valid? |
|-------|----------------------|------------------|---------------------|--------|
| Apr   | ₹50,000              | 18-May           | ₹50,000 (May return) | Yes |
| May   | ₹75,000              | 20-Jun           | ₹75,000 (Jun return) | Yes |
| Jun   | ₹1,20,000            | 19-Jun           | ₹1,20,000 (Jun return)| Yes (paid before filing) |

Any month where ITC was claimed in the same month as declaration but the challan date is AFTER the return filing date → invalid ITC → demand with interest.

**Step 6: Check Self-Invoice Serial Number Continuity**

As described under Red Flag 3 and Error 5 — serial number gaps are investigated and unexplained gaps may result in estimated demands.

**Step 7: Cross-Check with Form 15CA/15CB for Import of Services**

For taxpayers with significant foreign expenditure, the audit team requests Form 15CA/15CB copies (or obtains them through inter-department data sharing). The nature of remittance coded in 15CA (e.g., "technical services," "royalties," "software") is matched against GSTR-3B Table 3.1(d) IGST declarations. Any foreign remittance for a service category that should attract IGST RCM, which does not appear in GSTR-3B, results in a demand under Section 74 (with fraud allegation, since import of service RCM is well-publicised).

**Step 8: Issue of Audit Report and Response**

The audit findings are compiled in Form GST ADT-02 (Audit Report). The auditee has the right to respond to the audit findings before a formal demand is issued. If the auditee agrees with the audit findings, voluntary payment through DRC-03 with interest (and without penalty, or with reduced penalty under Section 73(5)) is the preferred resolution. If contested, adjudication proceeds under Section 73 or 74.

---

## **[MAHARASHTRA-SPECIFIC]** Maharashtra SGST Audit Focus Areas
{law_reference: "Maharashtra SGST Act, 2017; Maharashtra GST Rules, 2017; MGST Circular No. 19T of 2019; Maharashtra SGST Audit Manual"}

Maharashtra SGST Audit Commissionerate (headquartered in Mumbai with divisional offices across the state) has developed specific audit protocols for RCM. Given Maharashtra's economic profile — dominant in financial services, professional services, logistics, real estate, and manufacturing — the state's GST audit focus on RCM reflects these sectoral concentrations.

**Maharashtra SGST Audit Focus Area 1: Advocate Services and Legal Fees**

Maharashtra has historically been among the most active states in RCM enforcement for legal services. Mumbai, as the commercial and judicial capital, has a very high density of businesses engaging advocates, senior counsels, law firms, and legal consultants. Maharashtra SGST audit teams specifically:
- Request a list of all legal expenses above ₹1 lakh per engagement during the audit period
- Cross-check whether all such expenses were RCM-compliant (self-invoice + cash payment)
- Examine whether any payments to non-advocates (legal consultants, retired judges, arbitrators) were incorrectly put on RCM (since only enrolled advocates are covered by Notification 13/2017)
- Question whether any advocate fees claimed as business expense were for personal legal matters (directors' personal litigations billed to the company)

**Maharashtra SGST Audit Focus Area 2: Construction Services RCM**

Maharashtra's real estate sector is among the largest in India, with significant commercial and residential construction activity. Construction services from unregistered sub-contractors attract RCM under Notification No. 7/2019-CT(Rate) (as applicable). Maharashtra SGST audit focuses on:
- Developer companies and builders receiving sub-contract services from unregistered labour contractors
- Whether RCM was discharged on labour contractor payments
- Cross-checking with income tax TDS data for sub-contractor payments (Section 194C)
- Whether ITC on construction RCM was correctly blocked under Section 17(5)(c) (immovable property creation) — claiming this ITC is a specific Maharashtra audit issue

**Maharashtra SGST Audit Focus Area 3: Security Services**

Maharashtra has a large industrial and commercial establishment base requiring security services. Security services from unregistered persons attract RCM under Notification No. 7/2019-CT(Rate). Audit teams:
- Request the list of all security agency payments
- Verify registration status of each agency for the relevant period (agencies may have crossed the registration threshold mid-year)
- Check whether transition from RCM to forward charge (upon agency registration) was correctly handled
- Examine for month-by-month continuity in RCM declarations as agencies' thresholds are crossed

**Maharashtra AAR Positions That Affect Audit Outcomes**

The Maharashtra Authority for Advance Ruling (MAAR) has issued rulings on several RCM topics that Maharashtra SGST officers consider persuasive (though not binding on third parties):

- *Motor Vehicle Renting (pre-Circular 164):* The Maharashtra AAR had taken positions on the renting of motor vehicles before CBIC issued Circular 164/20/2021-GST. Where Maharashtra SGST officers had assessed based on the pre-circular MAAR position, some pending assessments continue to apply the pre-circular framework, creating litigation where the CBIC circular should have prevailed.

- *Composite GTA Services:* Maharashtra MAAR rulings on composite GTA supplies (transportation + loading + unloading) have differed in their conclusions. Some rulings held the composite supply is still a GTA service (RCM applicable), others distinguished it as a distinct service. This inconsistency means Maharashtra businesses receiving composite freight services face a choice of which AAR ruling to follow.

- *Director Services — Employment vs Professional:* Post-Circular 177/09/2022, the position on director employment should be settled. However, Maharashtra SGST officers in assessment proceedings (not audit) have continued to raise the question for pre-circular periods, particularly where whole-time directors had hybrid compensation packages without clearly documented employment contracts.

**State-Specific Documentation Requirement — Maharashtra**

**[MAHARASHTRA-SPECIFIC]** Maharashtra SGST does not impose additional documentation requirements beyond the CGST Rules. However, in practice, Maharashtra SGST audit teams have standardised the following documents as part of their initial request list:
- Board resolution authorising director remuneration / professional fees (relevant for director RCM)
- Copy of employment contracts for whole-time directors (to distinguish employment from professional engagement)
- List of all foreign remittances with Form 15CA/15CB copies — Maharashtra audit teams have developed a formal mechanism to obtain these from the Income Tax department's information system

**[MAHARASHTRA-SPECIFIC]** Maharashtra SGST has a dedicated "High-Value Taxpayer Audit Cell" for taxpayers with turnover exceeding ₹100 crore. For these taxpayers, RCM audit is conducted as a separate dedicated audit stream rather than as a component of the general audit. The frequency is once every two financial years for high-value taxpayers with clean compliance records, and annually for those with prior audit findings.

---

*Cross-References:*
> **See Also — RCM Legal Framework:** [02_RCM_Legal_Framework.md] for statutory provisions underlying these compliance requirements
> **See Also — RCM Amendments:** [09_RCM_Amendments_and_Clarifications.md] for CBIC circulars referenced in this audit guide
> **See Also — Blocked ITC:** For ITC blocked under Section 17(5) in the RCM context, see [Topic_2_Blocked_ITC/]
