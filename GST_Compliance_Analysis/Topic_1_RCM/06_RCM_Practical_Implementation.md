# RCM — Practical Implementation Guide
{complexity_level: "Advanced"}
{topic: "RCM"}
{law_reference: "Section 31(3)(f), Section 49, Rule 46, Rule 52, GSTR-3B format"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

---

This guide translates the statutory framework of the Reverse Charge Mechanism into an actionable, step-by-step compliance workflow for practicing CAs, CSs, CMAs, and GST-registered business entities. Each step maps to a specific provision of the CGST Act 2017, the CGST Rules 2017, or the GSTR return format. Maharashtra-specific provisions are flagged throughout.

---

## Step 1: Identifying an RCM Supply
{law_reference: "Section 9(3), 9(4) CGST Act; Section 5(3), 5(4) IGST Act; Notification No. 13/2017-Central Tax (Rate); Notification No. 10/2017-IGST (Rate); Maharashtra SGST Notification No. 13/2017-State Tax (Rate)"}

The first and most critical step in RCM compliance is correctly identifying whether a given supply is subject to reverse charge. An incorrect classification — treating an RCM supply as forward charge, or vice versa — is the root cause of most RCM-related disputes, demand notices, and interest liabilities. Identification must be performed at the point of procurement, not retrospectively at the time of return filing.

### Decision Checklist
{law_reference: "Section 9(3) and 9(4) CGST Act, 2017; Section 5(3) and 5(4) IGST Act, 2017; Notification No. 13/2017-CT(Rate) as amended; Notification No. 7/2019-CT(Rate)"}

The following 10-point checklist must be applied to every inward supply received. Each question must be answered with documentary evidence and the response recorded in the vendor master or procurement register. A "YES" on any RCM-triggering question requires the full RCM compliance workflow to be initiated immediately.

**Point 1 — Supplier Registration Status**
Is the supplier GST-registered?
- YES → The supply is ordinarily under forward charge. The supplier will collect and pay GST. Proceed to Point 2 to check if it falls under a mandatory notified category under Section 9(3) regardless of registration.
- NO → The supplier is an unregistered person. Proceed to Point 4 to determine if the supply category is currently notified under Section 9(4). If so, RCM is triggered on the recipient.

**Point 2 — Section 9(3) Notified Category (Mandatory RCM)**
Is the supply — whether from a registered or unregistered person — listed in Notification No. 13/2017-Central Tax (Rate) (the Section 9(3) services notification) or its goods equivalent Notification No. 4/2017-Central Tax (Rate)?
- YES → RCM is mandatory regardless of the supplier's registration status. This is the "specified categories" RCM and overrides all other considerations. Proceed to Step 2.
- NO → Section 9(3) RCM does not apply. Continue with the remaining checklist to evaluate Section 9(4) applicability.

The principal notified categories under Section 9(3) as of May 2026 include:
(a) Goods Transport Agency (GTA) services to any factory, society, cooperative, body corporate, partnership firm, or casual taxable person — unless the GTA has exercised the option to pay GST under forward charge;
(b) Legal services by individual advocates or a firm of advocates to a business entity;
(c) Services by arbitral tribunals to business entities;
(d) Sponsorship services to any body corporate or partnership firm;
(e) Services of government or local authority (other than specifically excluded services) to a business entity;
(f) Services by a director of a company or body corporate to that company or body corporate;
(g) Services by an insurance agent to a person carrying on insurance business;
(h) Services by a recovery agent to a banking company or financial institution;
(i) Services by an author, music composer, photographer, artist or the like by way of transfer or permitting the use or enjoyment of a copyright to a publisher, music company, producer, etc.;
(j) Supply of services by members of overseeing committee to Reserve Bank of India;
(k) Services by business facilitators or business correspondents to a banking company or non-banking financial company;
(l) Renting of a motor vehicle designed to carry passengers (where the supplier is a non-corporate entity and the recipient is a body corporate);
(m) Services by way of lending of securities (as notified).

**Point 3 — Import of Service**
Is the supply an import of a service — that is, is the service received from a supplier located outside India, with the place of supply being India, and the supply being for consideration?
- YES → RCM applies under Section 5(3) read with Section 7(1)(b) of the IGST Act, 2017. The full value of imported service is subject to IGST under reverse charge payable by the Indian recipient. This applies even if the supplier is otherwise registered somewhere globally; what matters is that they have no fixed establishment in India (or have such establishment but the supply is made from outside India).
- NO → Continue to Point 4.

**Point 4 — Business Purpose**
Is the supply received for business or commercial purposes?
- YES → The supply is in the course or furtherance of business; it is a taxable supply if not exempt. GST liability can arise.
- NO → If the supply is for purely personal purposes by an individual, it does not constitute a "supply" in the course or furtherance of business (Section 7(1) CGST Act), and GST liability may not arise under standard GST. However, for entities (companies, partnerships, LLPs), virtually all receipts are presumed to be for business.

**Point 5 — Exemption Status of the Supply**
Is the supply specifically exempt from GST under any notification (e.g., Notification No. 12/2017-Central Tax (Rate) for services, Notification No. 2/2017-Central Tax (Rate) for goods)?
- YES → Even if RCM would otherwise apply, no tax is payable on exempt supplies. No self-invoice is required for completely exempt supplies under RCM (though maintaining a record of the supply is advisable). Note: a supply may be exempt from tax while still requiring disclosure.
- NO → The supply is taxable; RCM compliance is required if triggered.

**Point 6 — Recipient's Registration Status**
Is the recipient a GST-registered person (holding a valid GSTIN)?
- YES → RCM obligations under Section 9(4) (unregistered supplier) and Section 9(3) (notified categories) fully apply. The recipient is the "taxable person" liable to pay RCM.
- NO → An unregistered recipient cannot be made liable under RCM for Section 9(4) supplies. However, under Section 9(3), if the recipient is a business entity (even if unregistered), some RCM categories may still technically apply; but practically, RCM compliance presupposes registration. This is an edge case requiring separate legal analysis.

**Point 7 — Goods Transport Agency (GTA) Forward Charge Option**
If the supplier is a GTA, has the GTA exercised the option to pay GST under forward charge (by filing the prescribed declaration with the Jurisdictional Superintendent before the commencement of the financial year)?
- YES (GTA has opted for forward charge) → The GTA will charge and pay GST at 12% (with ITC) under forward charge. No RCM obligation on the recipient.
- NO (GTA has NOT opted for forward charge) → RCM applies on the recipient at 5% of the freight value (without ITC for GTA itself). The recipient pays 5% CGST + SGST or IGST under RCM.
- PRACTICAL TIP: Obtain a written declaration from every GTA at the beginning of each financial year confirming whether they have or have not opted for forward charge. This is a mandatory vendor onboarding requirement for any business using road freight.

**Point 8 — Director Services**
Is the supplier a director (executive or non-executive) of the recipient company or body corporate?
- YES → Services rendered by a director to the company are specifically covered under Notification No. 13/2017-Central Tax (Rate), Entry 6. RCM applies on the company at 18% on sitting fees, commission, professional fees, and any other consideration paid to the director in their capacity as a director.
- NO → Proceed to Point 9.
- NOTE: Salary paid to a whole-time director under an employer-employee relationship is excluded from GST altogether (Schedule III, Entry 1 CGST Act). Only fees/commissions paid to directors outside the employer-employee relationship attract RCM. This distinction is crucial and has been the subject of multiple AAR rulings.

**Point 9 — Advocate or Law Firm**
Is the supplier an individual advocate, a firm of advocates, or a Senior Advocate providing legal services to a business entity?
- YES → RCM is mandatory under Notification No. 13/2017-Central Tax (Rate). The advocate does not charge GST; the business entity recipient must self-assess and pay 18% IGST or CGST + SGST under RCM on the fee.
- NO → Proceed to Point 10.
- EXCEPTION: Legal services provided by an advocate to any person other than a business entity (e.g., to an individual for personal matters) are exempt from GST entirely under Notification No. 12/2017-Central Tax (Rate). Only services to "business entities" attract RCM.

**Point 10 — Value Threshold and Documentation**
Is the value of the supply significant enough to warrant formal RCM processing, and have all supporting documents been obtained?
- THRESHOLD: Under current law, there is no de minimis threshold below which RCM on notified services (Section 9(3)) is waived. Every rupee of taxable RCM supply must be self-assessed and tax paid.
- DOCUMENTATION: At this stage, confirm you have: (a) the supplier's invoice or agreement, (b) confirmation of the supplier's GSTIN status (check GST portal or obtain declaration), (c) HSN/SAC code for the supply, and (d) evidence of receipt of the supply.
- Record the outcome of this checklist in your procurement register against each vendor/transaction.

---

### Practical Tip: Vendor Classification at Onboarding
{law_reference: "Section 9(3), 9(4) CGST Act; Notification No. 13/2017-CT(Rate)"}

Every new vendor must be classified into one of three mandatory categories at the time of onboarding, before any payment or service receipt occurs. This classification drives the entire downstream GST treatment:

**Category 1 — Registered Vendor, Forward Charge**
The vendor holds a valid GSTIN, is not in a notified Section 9(3) category, and will charge and pay GST under the normal forward-charge mechanism. The recipient claims ITC on the supplier's invoice, subject to GSTR-2B auto-population and reconciliation. No RCM obligation on the recipient.

**Category 2 — Unregistered Vendor, Potential RCM**
The vendor does not hold a GSTIN. Before any supply is received, determine whether the supply category is notified under Section 9(4). As of May 2026, the Section 9(4) notification covers specific service categories; check the current notification. If notified: full RCM workflow applies. If not notified: no GST payable (but monitor any future notifications expanding the scope). Obtain a declaration from the vendor confirming their non-registration and annual turnover.

**Category 3 — Notified Service Category, Mandatory RCM**
The vendor falls within a category listed in Notification No. 13/2017-Central Tax (Rate) or equivalent. RCM is mandatory regardless of the vendor's registration status. Common examples: advocates, GTAs (unless forward charge opted), directors, arbitral tribunals, insurance agents acting as agents. Build this directly into your accounts payable process: when the payee type is "Advocate," the system should automatically flag RCM.

**Vendor Master Requirements:**
Maintain a vendor master database with the following fields:
- Vendor Name and PAN
- GSTIN (if applicable) — verify on the GST portal quarterly
- Registration Status: Registered / Unregistered / Composition
- RCM Category: None / Section 9(3) Notified / Section 9(4) Potential
- HSN/SAC code for services typically rendered
- Last verification date
- Annual declaration obtained: Yes / No

**[MAHARASHTRA-SPECIFIC]** The Maharashtra GST Department (MGSTD) has issued Trade Circular No. 1T of 2024 emphasizing that recipients must verify GSTIN validity on the GST Common Portal before processing invoices. Invalid GSTINs mean the supplier is effectively unregistered for that transaction, triggering potential Section 9(4) RCM obligations. Use the GST portal's "Search Taxpayer" function — verify the GSTIN is active, not suspended or cancelled.

---

## Step 2: Determining the Tax Amount
{law_reference: "CGST Act Schedules I-V; Notification No. 11/2017-CT(Rate) (Services); Notification No. 1/2017-CT(Rate) (Goods); Notification No. 13/2017-CT(Rate) (RCM-specific rates)"}

Once an RCM supply is identified, the taxable value and applicable tax rate must be determined with precision. An error in tax rate selection can lead to underpayment (creating a demand) or overpayment (creating refund complications). The tax base for RCM is the transaction value as determined under Section 15 of the CGST Act, read with the Valuation Rules.

### Tax Rate on RCM Supplies
{law_reference: "Notification No. 13/2017-CT(Rate); Notification No. 11/2017-CT(Rate) as amended; Notification No. 1/2017-CT(Rate)"}

The applicable GST rate for RCM supplies is the same rate that would have applied had the supply been under forward charge, unless a different rate is specifically prescribed in the RCM notification. The following rates apply to the principal RCM categories as of May 2026:

| Supply Category | Section | GST Rate | CGST | SGST/UTGST | IGST |
|---|---|---|---|---|---|
| Goods Transport Agency (GTA) services — Recipient paying RCM | 9(3) | 5% | 2.5% | 2.5% | 5% |
| Legal services by advocate / law firm to business entity | 9(3) | 18% | 9% | 9% | 18% |
| Services by director to company/body corporate | 9(3) | 18% | 9% | 9% | 18% |
| Security services by unregistered person to registered business | 9(3) | 18% | 9% | 9% | 18% |
| Sponsorship services to body corporate / partnership | 9(3) | 18% | 9% | 9% | 18% |
| Services by arbitral tribunal to business entity | 9(3) | 18% | 9% | 9% | 18% |
| Services by insurance agent to insurance company | 9(3) | 18% | 9% | 9% | 18% |
| Services by recovery agent to bank/NBFC | 9(3) | 18% | 9% | 9% | 18% |
| Services of government/local authority to business entity | 9(3) | Varies | Varies | Varies | Varies |
| Renting of motor vehicle to body corporate (non-corporate supplier) | 9(3) | 5% (no ITC) or 12% (with ITC) | As applicable | As applicable | As applicable |
| Import of services from foreign supplier | 5(3)/IGST | As applicable to the service | N/A | N/A | Full IGST |
| Supplies from unregistered persons (notified under 9(4)) | 9(4) | Rate applicable to that supply | As per rate schedule | As per rate schedule | As per rate schedule |

NOTE ON GTA RATE: The 5% rate for GTA under RCM is applicable without ITC credit to the GTA. The recipient pays 5% and may claim ITC (subject to Section 17(5) restrictions for personal motor vehicle use). If the GTA opts for forward charge and charges 12%, the GTA gets ITC and charges 12% GST on the invoice — recipient claims ITC from the invoice.

NOTE ON GOVERNMENT SERVICES: Services provided by a government or local authority to a business entity are taxable at the rate applicable to that specific service. Many government services have different rates or are exempt. Always identify the specific service before determining the rate.

### Computing Tax on RCM
{law_reference: "Section 15 CGST Act (valuation); Section 20 IGST Act (valuation for imports); Rule 28-35 CGST Rules (valuation rules)"}

The taxable value for RCM purposes is the transaction value — the price actually paid or payable for the supply. Where no consideration flows (e.g., a deemed supply between related parties), the Open Market Value or cost-based method under the Valuation Rules applies.

**Example 1 — Legal Services from an Advocate (Intra-State, Maharashtra)**

Firm engaged: Adv. Rajesh Mehta (individual advocate, unregistered for GST)
Invoice raised by advocate: ₹1,00,000 (exclusive of GST; advocate is not required to charge GST under RCM)
Place of supply: Maharashtra (both supplier and recipient in Maharashtra)
Applicable tax: CGST + SGST (intra-state supply)

Computation:
- Taxable value = ₹1,00,000
- CGST @ 9% = ₹9,000
- SGST @ 9% = ₹9,000
- Total RCM tax = ₹18,000
- Total outflow (payment to advocate + RCM cash payment) = ₹1,00,000 + ₹18,000 = ₹1,18,000
- Self-invoice value declared = ₹1,00,000 (taxable) + ₹18,000 (tax) = ₹1,18,000

ITC available (if eligible): ₹18,000 (after payment from cash ledger)

**Example 2 — GTA Services (Intra-State, Maharashtra)**

GTA: Roadways Express (registered GTA, NOT opted for forward charge)
Consignment value: Irrelevant; freight charged: ₹40,000
Place of supply: Maharashtra (goods moved within Maharashtra)
Applicable tax: CGST + SGST

Computation:
- Taxable value = ₹40,000
- CGST @ 2.5% = ₹1,000
- SGST @ 2.5% = ₹1,000
- Total RCM tax = ₹2,000
- Payment to GTA: ₹40,000 (GTA does not charge GST on its invoice)
- Cash ledger deposit for RCM: ₹2,000

**Example 3 — Director's Sitting Fees (Intra-State)**

Director: Mr. Anil Kapoor (Non-executive independent director)
Sitting fees declared: ₹50,000/quarter
Place of supply: Location of the company = Maharashtra
Applicable tax: CGST + SGST

Computation:
- Taxable value = ₹50,000
- CGST @ 9% = ₹4,500
- SGST @ 9% = ₹4,500
- Total RCM tax = ₹9,000
- Self-invoice issued by the company for ₹50,000 + ₹9,000 tax

**Example 4 — Import of Service (IGST)**

Foreign service: SaaS platform subscription from US-based company, XYZ Corp
Invoice: USD 5,000
Exchange rate (RBI reference rate on date of supply): ₹83.50/USD
INR equivalent: ₹4,17,500
Place of supply: Location of recipient in India (Maharashtra) — Section 13(2) IGST Act
Applicable tax: IGST (inter-state / cross-border supply)

Computation:
- Taxable value = ₹4,17,500
- IGST @ 18% = ₹75,150
- Total IGST under RCM = ₹75,150
- Pay from cash ledger: ₹75,150

NOTE: Where the invoice is in foreign currency, the conversion to INR must use the exchange rate notified by the CBIC (typically the RBI reference rate) on the date of supply. Do not use bank-negotiated rates.

**Example 5 — Unregistered Cleaning/Housekeeping Service (Section 9(4), Intra-State)**

Vendor: XYZ Cleaning Services (unregistered, annual turnover ₹15 lakh — below threshold)
Monthly bill: ₹25,000
Assuming cleaning services are notified under Section 9(4) in the applicable notification as of May 2026
Place of supply: Maharashtra

Computation:
- Taxable value = ₹25,000
- CGST @ 9% = ₹2,250
- SGST @ 9% = ₹2,250
- Total RCM tax = ₹4,500

---

## Step 3: Issuing the Self-Invoice
{law_reference: "Section 31(3)(f) CGST Act, 2017; Rule 46 CGST Rules, 2017; Rule 52 CGST Rules, 2017 (for ISD); Circular No. 136/06/2020-GST"}

Section 31(3)(f) of the CGST Act, 2017 mandates that a registered person liable to pay tax under reverse charge must issue an invoice in respect of goods or services received from an unregistered person or from a supplier under a notified category. This self-generated invoice — commonly called a "self-invoice" or "payment voucher" — serves as the tax document substantiating the RCM liability, the ITC claim, and the audit trail.

### Mandatory Fields
{law_reference: "Rule 46 CGST Rules, 2017 (for regular registered persons); Rule 52 CGST Rules, 2017 (for registered persons other than ISD)"}

Every self-invoice must contain the following mandatory fields. Omission of any mandatory field renders the self-invoice defective, which can jeopardize the ITC claim and attract penalties:

**Field 1 — Consecutive Serial Number**
The self-invoice must bear a consecutive serial number not exceeding 16 characters in length. The serial number may be a combination of alphabets, numerals, and special characters — specifically the hyphen (-) and the forward slash (/). The serial number must be unique for each financial year. It must be separate from the serial number series used for outward supply invoices. Best practice: use a prefix such as "RCM/" or "SI/" to distinguish self-invoices from regular invoices (e.g., RCM/2025-26/001, RCM/2025-26/002).

**Field 2 — Date of Issue**
The date the self-invoice is being issued. This must conform to the timing rules discussed in "Timing of Self-Invoice" below. The date is critical because it determines the month in which the RCM liability accrues and the month in which the self-invoice appears in the return.

**Field 3 — Name, Address, and GSTIN of Recipient**
This refers to the person issuing the self-invoice — i.e., the registered person receiving the RCM supply. The GSTIN here is the recipient's own GSTIN. This is the unique inversion of the self-invoice: the "recipient" in the transaction is also the "supplier" of the document.

**Field 4 — Name and Address of Supplier**
The name and full address of the actual supplier of goods or services must be recorded. Since the supplier is unregistered (under Section 9(4)) or a notified-category supplier who may or may not be registered, the GSTIN of the supplier is mentioned only if available. For unregistered suppliers: record name, address, and PAN (if available). Do NOT fabricate a GSTIN.

**Field 5 — HSN Code (Goods) / SAC Code (Services)**
The Harmonized System of Nomenclature (HSN) code for goods at the required digit level, or the Services Accounting Code (SAC) code for services, must be mentioned. As of May 2026, businesses with aggregate turnover above ₹5 crore must use 6-digit HSN/SAC codes. Businesses between ₹1.5 crore and ₹5 crore: 4-digit. Below ₹1.5 crore: 4-digit HSN (goods); SAC at 6 digits is generally used regardless of turnover for services.

**Field 6 — Description of Supply**
A clear description of the goods or services received. This should match the description on the supplier's invoice or the terms of the contract. Vague descriptions like "professional services" should be replaced with specific descriptions like "audit assistance services for statutory audit of XYZ Limited for FY 2025-26."

**Field 7 — Quantity (for Goods)**
For goods received under RCM (e.g., goods from an unregistered supplier where Section 9(4) applies), the quantity and unit of measurement (e.g., MT, Nos, Kgs) must be stated. For services, this field is not applicable.

**Field 8 — Total Value of Supply**
The total value of the supply including any other charges payable (packing, freight if part of the supply, etc.) before applying any abatement.

**Field 9 — Taxable Value**
The taxable value as computed under Section 15 of the CGST Act, after applying any permissible deductions. For most RCM supplies, the total value equals the taxable value, unless specific valuation rules prescribe otherwise (e.g., GTA services may have an abatement reducing taxable value — note: as of May 2026, the standard practice for GTA under RCM is to apply 5% on the full freight value without abatement, as the rate itself is the abated rate).

**Field 10 — Rate and Amount of Tax (Tax Breakup)**
The following must be separately stated:
- Rate of CGST and amount of CGST (for intra-state supplies)
- Rate of SGST and amount of SGST (for intra-state supplies) **[MAHARASHTRA-SPECIFIC]** — SGST is payable to the Maharashtra state government
- Rate of IGST and amount of IGST (for inter-state supplies or imports)
- Rate and amount of CESS (if applicable — e.g., on specified luxury/sin goods)
Where both CGST and SGST apply, they are stated separately even though they are equal in rate (e.g., 9% + 9% for an 18% supply, not "18% GST").

**Field 11 — Signature or Digital Signature of Recipient (or Authorized Representative)**
The self-invoice must be signed by the registered recipient or a duly authorized person. For companies and LLPs: the authorized signatory whose name is on the GST registration. A rubber stamp alone is insufficient; an actual signature or digital signature is required.

**[MAHARASHTRA-SPECIFIC]** The Maharashtra State GST Department has clarified in its guidance notes that self-invoices issued for SGST purposes must mirror the CGST self-invoice requirements. There is no additional prescribed format under Maharashtra SGST beyond what is prescribed under the CGST Rules (which apply mutatis mutandis). However, the SGST portion of tax on self-invoices is credited to the Maharashtra SGST ledger and must be deposited separately under the Maharashtra SGST Act.

### Timing of Self-Invoice
{law_reference: "Section 31(3)(f) CGST Act, 2017; Section 31(7) CGST Act (continuous supply of services); proviso to Rule 47 CGST Rules"}

The timing of self-invoice issuance is governed by specific rules that differ by type of supply:

**For General Supplies from Unregistered Persons (Goods/Services):**
The self-invoice must be issued on or before the date of payment to the supplier. If payment is made in advance of receipt of supply, the self-invoice is issued at the time of payment. If payment is made after receipt of supply, the self-invoice must be issued on the date of payment. The governing principle is: the self-invoice cannot be issued later than the date of payment, and ideally must precede it.

**60-Day Rule:**
If no payment has been made but 60 days have elapsed from the date of the supplier's invoice, the self-invoice must be issued on the 60th day (even without actual payment). This prevents indefinite deferral of RCM liability.

**For Import of Services:**
The self-invoice must be issued at the earliest of:
(a) The date of payment to the foreign supplier (as per debit to bank account or entry in books, whichever is earlier); or
(b) The date on which the payment for the service is entered in the books of the recipient.
This two-limb test means the self-invoice trigger is the earlier of cash outflow or accounting recognition — whichever occurs first.

**For Continuous Supply of Services (e.g., ongoing retainer with an advocate):**
Where the supply is continuous and invoices are raised periodically, the self-invoice timing follows the completion of each period to which the invoice relates, or the due date for payment as per the contract, or the date of payment — whichever is earliest.

**Practical Note:** Many businesses issue self-invoices monthly in bulk — at month-end — covering all RCM supplies of the month. While this is administratively convenient, it is technically correct only if the self-invoice date does not exceed the date of payment or 60 days from the supplier's invoice. A bulk month-end approach is safe if RCM payments are also made at month-end (before GSTR-3B filing). If payment is made on 15th of the month, the self-invoice should be dated 15th, not the last day of the month.

### Sample Self-Invoice Format
{law_reference: "Rule 46 CGST Rules, 2017"}

The following describes the layout and content of a compliant self-invoice (payment voucher) for RCM purposes. This is a text description of the document; adapt to your accounting software or ERP output format:

**HEADER SECTION:**
Document Title: "SELF-INVOICE / PAYMENT VOUCHER (Reverse Charge Mechanism)"
Self-Invoice No.: RCM/2025-26/047
Date: 15 January 2026
Financial Year: 2025-26

**RECIPIENT DETAILS (PERSON ISSUING THIS DOCUMENT — THE REGISTERED RECIPIENT):**
Name: XYZ & Associates (CA Firm)
Address: 302, Business Hub, Bandra Kurla Complex, Mumbai, Maharashtra — 400051
GSTIN: 27AABFX1234A1ZP
State Code: 27 (Maharashtra)

**SUPPLIER DETAILS (ACTUAL SUPPLIER OF THE SERVICE — FROM WHOM SERVICE WAS RECEIVED):**
Name: Adv. Priya Sharma
Address: 15, Law Chambers, Fort, Mumbai, Maharashtra — 400001
GSTIN: Not Applicable (Unregistered) [OR: Registered GSTIN if the advocate is registered but RCM still applies under notification]
PAN: ABCPS1234D

**SUPPLY DETAILS:**
Description of Service: Legal advisory services for GST compliance matters — January 2026
SAC Code: 998212 (Legal advisory and representation services)
Nature of Supply: Intra-State (Maharashtra to Maharashtra)
Place of Supply: Maharashtra (State Code 27)

**VALUATION:**
Total Invoice Value (as per supplier's bill / agreement): ₹1,00,000
Taxable Value: ₹1,00,000

**TAX COMPUTATION (REVERSE CHARGE):**
CGST @ 9%: ₹9,000
SGST @ 9%: ₹9,000
IGST: Nil (intra-state supply)
CESS: Nil
Total Tax under Reverse Charge: ₹18,000

**PAYMENT DETAILS:**
Amount payable to supplier: ₹1,00,000
RCM tax payable to Government: ₹18,000
(CGST ₹9,000 to be credited to Electronic Cash Ledger — Head: CGST)
(SGST ₹9,000 to be credited to Electronic Cash Ledger — Head: SGST/Maharashtra)

**DECLARATION:**
"This is a self-invoice issued under Section 31(3)(f) of the CGST Act, 2017 in respect of a supply liable to Reverse Charge. Tax is payable by the recipient."

**AUTHORIZED SIGNATORY:**
Signature: ___________________________
Name: [Name of Partner / Director / Authorized Signatory]
Designation: Partner / Authorized Signatory
Date: 15 January 2026

---

## Step 4: Payment of RCM Tax
{law_reference: "Section 49(4) CGST Act, 2017; Rule 85 CGST Rules, 2017; Section 50 CGST Act (interest on delayed payment)"}

Payment of RCM tax is the critical link in the compliance chain. The statutory requirement is unambiguous: RCM tax must be paid exclusively from the Electronic Cash Ledger. No other payment method is permitted. Failure to pay, or incorrect payment, triggers cascading consequences for both the tax liability and the ITC position.

### Cash Ledger Only
{law_reference: "Section 49(4) CGST Act, 2017; proviso to Section 49(3); Rule 85 CGST Rules, 2017"}

Section 49(4) of the CGST Act, 2017 provides:

*"The amount available in the electronic cash ledger may be used for making any payment towards tax, interest, penalty, fees or any other amount payable under the provisions of this Act or the rules made thereunder in such manner and subject to such conditions and within such time as may be prescribed."*

The critical restriction is contained in the proviso to Section 49(3), which states that the Electronic Credit Ledger (ITC balance) may be used to make payment of tax — but only for output tax. The definition of "output tax" under Section 2(82) specifically excludes tax payable under reverse charge. Therefore, RCM tax is NOT "output tax" and CANNOT be paid from the ITC balance.

**Practical Implication of the Cash-Only Rule:**

This rule creates a genuine cash-flow burden. Consider a large registered business with ₹50 lakh in ITC credit sitting in its Electronic Credit Ledger (e.g., from capital goods purchases). If this business receives GTA services in a month worth ₹1 crore (RCM tax: ₹5 lakh), it cannot use its ₹50 lakh ITC balance to pay the ₹5 lakh RCM. It must deposit fresh cash of ₹5 lakh into the Electronic Cash Ledger and then pay the RCM from there.

The subsequent ITC claim of ₹5 lakh (after payment) is available for offsetting future output tax liabilities — but the initial cash outflow is unavoidable.

**Common Misconception:** Many businesses and even some advisors mistakenly believe that if ITC is available, it can offset RCM. This is categorically incorrect and has been confirmed in multiple GST Council clarifications, CBIC circulars, and AAR rulings. Proceeding on this incorrect assumption creates a situation where RCM is "reported" in GSTR-3B as a liability but not actually paid, while ITC is simultaneously "claimed" — resulting in a paper set-off that is legally invalid and creates demand, interest, and penalty risk.

### Payment Timing
{law_reference: "Section 39 CGST Act; Rule 61 CGST Rules; Notification No. 35/2020-CT (COVID extensions — historical reference); current payment deadlines as of May 2026"}

The due date for payment of RCM tax is the 20th of the month following the month in which the RCM supply was received (for monthly filers). This is the same as the general GSTR-3B filing and payment deadline.

**Monthly Payment Cycle:**
- RCM supplies received in: January → RCM tax due by: 20th February
- RCM supplies received in: February → RCM tax due by: 20th March
- RCM supplies received in: March → RCM tax due by: 20th April
- RCM supplies received in: April → RCM tax due by: 20th May

**For Quarterly Filers (QRMP Scheme — Businesses with turnover ≤ ₹5 crore):**
Even if a registered person is on the QRMP scheme (filing GSTR-1 and GSTR-3B quarterly), RCM tax payment is due monthly. The tax payment for months 1 and 2 of a quarter (e.g., January and February for Q4) must be made by the 25th of the respective following month using Form GST PMT-06. The GSTR-3B for the quarter (including RCM) is filed by the 22nd or 24th of the month following the quarter end, depending on the state.

**Interest on Late Payment:**
If RCM tax is not paid by the due date, interest under Section 50 of the CGST Act accrues at 18% per annum from the day following the due date until the date of actual payment. Interest is computed on a simple interest basis (not compound):

Interest = (RCM Tax Amount × 18% × Number of Days of Delay) ÷ 365

Example: RCM tax of ₹36,000 for January not paid until 15th March (25 days late, assuming 20th February was the due date):
Interest = (₹36,000 × 18% × 25) ÷ 365 = ₹36,000 × 0.18 × 0.06849 = ₹443 (approximately)

### Payment via GSTR-3B
{law_reference: "Rule 61 CGST Rules, 2017; GSTR-3B instructions"}

The actual payment mechanism involves two sequential actions: (1) deposit cash into the Electronic Cash Ledger via a challan (Form GST PMT-06), and (2) utilize the balance in the cash ledger to discharge the RCM liability reported in GSTR-3B.

**Step-by-Step Payment Process:**

Step A: Log into the GST Common Portal (www.gst.gov.in).

Step B: Navigate to Services → Payments → Create Challan.

Step C: In the challan, select the tax head (CGST/SGST/IGST as applicable), the payment head (Tax), and enter the amount to be deposited. For RCM, if both CGST and SGST are payable, create separate challans or a split challan for each head. For IGST, a single head.

Step D: Select the payment mode: Net Banking, Over the Counter (OTC), NEFT/RTGS. Once the challan is generated (with a CPIN), complete the payment. The amount is credited to the Electronic Cash Ledger within the banking processing time (typically same day for net banking; by next working day for NEFT/RTGS).

Step E: Verify that the Electronic Cash Ledger reflects the credit. Navigate to Services → Ledgers → Electronic Cash Ledger.

Step F: Proceed to file GSTR-3B. In Table 6 ("Payment of Tax"), the system will display the tax liability (pulled from Table 3.1(d) for RCM). Discharge the liability using the cash ledger balance. The system will confirm the debit from the cash ledger and credit to the tax payment ledger.

**[MAHARASHTRA-SPECIFIC]** For Maharashtra SGST payments: the SGST component of RCM tax is deposited under the Maharashtra SGST head in the challan. On the GST portal challan creation screen, CGST and SGST are listed as separate line items. Ensure the SGST amount is correctly entered under the SGST head (not merged with CGST). The Maharashtra SGST payment goes to the Maharashtra government's consolidated fund and is administered by the MGSTD.

**Cash Ledger Balance Management:**
Before filing GSTR-3B each month, perform a pre-filing check: compare the total RCM tax payable for the month (from your self-invoice register) against the current balance in the Electronic Cash Ledger under each head (CGST, SGST, IGST). If the balance is insufficient, deposit the shortfall via challan at least 2 working days before the GSTR-3B due date to ensure the banking credit is processed in time.

---

## Step 5: Return Filing in GSTR-3B
{law_reference: "GSTR-3B format; Notification No. 17/2019-Central Tax; Rule 61 CGST Rules, 2017; Circular No. 170/02/2022-GST (clarification on GSTR-3B auto-population)"}

GSTR-3B is the monthly (or quarterly) self-declaration summary return that forms the basis of tax payment and ITC claim. RCM supplies have two specific footprints in GSTR-3B: the liability side (Table 3.1(d)) and the credit side (Table 4A(3)). Both must be correctly populated.

### Table 3.1(d): Inward Supplies Liable to Reverse Charge
{law_reference: "GSTR-3B instructions; Rule 61 CGST Rules"}

Table 3.1 of GSTR-3B is titled "Details of Outward Supplies and Inward Supplies Liable to Reverse Charge." Row (d) specifically captures: "Inward supplies liable to reverse charge."

**What to Report in Table 3.1(d):**
- Total taxable value of all RCM supplies received during the return period (the month)
- Break this down into: Integrated Tax (IGST), Central Tax (CGST), State/UT Tax (SGST/UTGST), and CESS
- This table aggregates ALL RCM supplies — both Section 9(3) (notified categories) and Section 9(4) (unregistered suppliers) — into a single row per tax head

**Example Population of Table 3.1(d) for January 2026:**

Assuming the following RCM supplies received in January 2026:
- Advocate fees (intra-state): ₹1,00,000 → CGST ₹9,000 + SGST ₹9,000
- GTA freight (intra-state): ₹40,000 → CGST ₹1,000 + SGST ₹1,000
- Director sitting fees (intra-state): ₹50,000 → CGST ₹4,500 + SGST ₹4,500
- Import of SaaS service: ₹4,17,500 → IGST ₹75,150

Table 3.1(d) entries:
- Integrated Tax (IGST): Taxable Value ₹4,17,500 / Tax ₹75,150
- Central Tax (CGST): Taxable Value ₹1,90,000 / Tax ₹14,500
- State/UT Tax (SGST): Taxable Value ₹1,90,000 / Tax ₹14,500

This creates a tax liability of ₹1,04,150 (₹75,150 IGST + ₹14,500 CGST + ₹14,500 SGST) in the return, which must be paid from the Electronic Cash Ledger before the return is submitted.

**CRITICAL NOTE:** Entering values in Table 3.1(d) without actually depositing the cash creates a mismatch: the return acknowledges a liability but the cash ledger has no corresponding debit. The GST system's liability register will show an outstanding liability. The ITC claim in Table 4A(3) will be invalid (as RCM was not actually paid). This is one of the most common compliance failures detected during GST audits.

### Table 4A(3): ITC Availed under Reverse Charge
{law_reference: "Section 16(2) CGST Act; Rule 36 CGST Rules; GSTR-3B instructions"}

Table 4 of GSTR-3B is titled "Eligible ITC." Row A(3) captures: "Inward supplies liable to reverse charge (other than 1 & 2 above)."

**What to Report in Table 4A(3):**
After the RCM tax has been actually paid (cash ledger debited), the ITC arising from that payment is eligible to be claimed. Report the eligible ITC (after any applicable apportionment or reversal under Section 17(5)) in Table 4A(3).

Continuing the January 2026 example (assuming all RCM supplies are eligible and none are blocked under Section 17(5)):
- IGST ITC: ₹75,150
- CGST ITC: ₹14,500
- SGST ITC: ₹14,500
- Total ITC from RCM: ₹1,04,150

If any supplies are partially exempt (requiring Rule 43 apportionment), the full ITC is first claimed in Table 4A(3), and the ineligible portion is then reversed in Table 4B(1) (for proportionate reversal) or Table 4B(2) (for other reversals / Section 17(5) blocked ITC).

### Common GSTR-3B Error: The "Paper Set-Off" Trap
{law_reference: "Section 16(2)(c) CGST Act; Section 50 CGST Act; Rule 85 CGST Rules"}

This is the single most prevalent RCM compliance error and warrants detailed treatment:

**The Error:** A business receives RCM supplies in Month M. It reports the liability in Table 3.1(d). It simultaneously claims ITC in Table 4A(3). However, it does NOT deposit the required cash into the Electronic Cash Ledger. Instead, it "nets off" the liability against the ITC claim in the return — or simply does not pay the cash, assuming the ITC offsets the liability.

**Why It Happens:** The GSTR-3B interface allows a user to enter figures in both Table 3.1(d) (liability) and Table 4A(3) (ITC) before actually making the cash payment. The form can technically be submitted with a "NIL cash payment" for the month — if the computed net liability (after ITC) is zero — even though the RCM cash was not deposited. This creates a mathematically balanced return that is legally defective.

**Legal Position:**
- Section 16(2)(c): ITC is available only if "the tax charged in respect of such supply has been actually paid to the Government." For RCM, "actually paid" means cash has been credited to the government's account via the Electronic Cash Ledger. A paper entry in GSTR-3B is not "actual payment."
- Consequence: The ITC claimed is invalid under Section 16(2)(c). It must be reversed with interest at 18% per annum from the date of incorrect claim. Additionally, the RCM tax is still outstanding with its own interest from the original due date.

**How to Avoid:** Implement a pre-filing checklist (see Month-End RCM Compliance Checklist at the end of this guide) that requires confirmation of cash ledger balance before any GSTR-3B figures are entered.

---

## Step 6: Filing in GSTR-1
{law_reference: "Section 37 CGST Act; Rule 59 CGST Rules; GSTR-1 format"}

GSTR-1 is the return for outward supplies. RCM, being an inward supply liability, is primarily reported in GSTR-3B (Step 5 above). However, GSTR-1 has a limited relevance to RCM in specific contexts.

### Table 4B in GSTR-1: B2B Supplies — Recipient Reporting
{law_reference: "GSTR-1 format instructions; Circular No. 123/42/2019-GST"}

GSTR-1 Table 4B is designated for "Taxable outward supplies to registered persons other than the supplies covered in Table 6 (zero-rated) and Table 7A (deemed exports)." While the primary user of GSTR-1 is the supplier reporting their outward supplies, there is a nuance for RCM:

The supplier in an RCM transaction (e.g., an advocate providing services to a business entity) is not required to file GSTR-1 for those RCM supplies, as they are not charging GST. The registered recipient, however, does not report RCM inward supplies in their own GSTR-1 — GSTR-1 is strictly for outward supplies.

**Auto-Population in GSTR-2B:**
Where the supplier IS registered (e.g., a registered GTA that has NOT opted for forward charge — the GTA is registered but the liability shifts to the recipient), the supplier's GSTR-1 filing may auto-populate the recipient's GSTR-2B. However, this auto-population does not create the RCM ITC entitlement — the ITC entitlement arises only upon actual payment of RCM tax from the cash ledger. GSTR-2B is informational for such cases.

**When Table 4B Becomes Relevant:**
If a registered supplier is making a supply that is RCM-liable (e.g., a registered GTA billing a registered business, with RCM liability on the recipient), the GTA may or may not report this in its GSTR-1. Technically, the GTA should report it in GSTR-1 as a supply made, noting that the tax liability is on the recipient. The recipient then reconciles this with GSTR-2B.

**Practical Note for Recipients:**
- Reconcile GSTR-2B auto-population with your self-invoice register monthly.
- Discrepancies (e.g., supplies received but not appearing in GSTR-2B from registered GTAs) should be documented; the self-invoice is the controlling document for RCM ITC, not GSTR-2B.
- For unregistered supplier RCM: GSTR-2B will show nothing (no supplier GSTIN, no reporting by supplier). Your self-invoice is the sole document.

---

## Step 7: ITC Claim on RCM Supplies
{law_reference: "Section 16(2) CGST Act; Section 16(4) CGST Act; Rule 36 CGST Rules; Rule 36(3) CGST Rules; Rule 43 CGST Rules; Section 17(5) CGST Act"}

ITC on RCM supplies is one of the distinguishing features of the RCM mechanism — the fact that the cash outflow for RCM tax creates a corresponding credit (subject to conditions). This makes RCM tax-neutral for entities making taxable supplies but cash-flow-positive in the short term (you pay cash now, recover ITC later).

### Eligibility Conditions for ITC on RCM
{law_reference: "Section 16(1) and 16(2) CGST Act; Rule 36(3) CGST Rules"}

All five conditions under Section 16(2) must be simultaneously satisfied for ITC on RCM to be eligible:

**Condition 1 — Tax has been Actually Paid (Section 16(2)(c))**
This is the cardinal condition specific to RCM. The RCM tax must have been actually paid — meaning cash has been deposited into the Electronic Cash Ledger and used to discharge the RCM liability in GSTR-3B. This is not a mere book entry; it is a verifiable cash transaction on the GST portal. Check the Electronic Cash Ledger debit entry and the GSTR-3B filed and payment confirmation.

**Condition 2 — Self-Invoice has been Issued and is in Possession (Section 16(2)(a))**
The registered recipient must be in possession of the self-invoice (payment voucher) issued under Section 31(3)(f). Rule 36(3) specifically states that in the case of supplies made by an unregistered supplier, or supplies under RCM, the recipient can avail ITC based on the self-invoice — provided all prescribed details are contained in the self-invoice. This replaces the normal requirement of a "tax invoice" from the supplier (who doesn't issue one in RCM cases).

**Condition 3 — Supply has been Received (Section 16(2)(b))**
The goods or services must have actually been received. For services: the service must have been rendered. For goods: physical delivery must have occurred. Advance payments to suppliers do not immediately create ITC entitlement unless the supply has been made.

**Condition 4 — Return has been Filed (Section 16(2)(d))**
The recipient must have filed the return under Section 39 (GSTR-3B) for the relevant tax period. Since ITC on RCM is typically claimed in the GSTR-3B in which the RCM payment is made, this condition is automatically satisfied simultaneously with the filing of that return. However, for prior periods where RCM was paid but ITC not claimed, ensure that the relevant GSTR-3B was duly filed.

**Condition 5 — Supply is Not Blocked under Section 17(5)**
Section 17(5) provides a list of goods and services on which ITC is blocked regardless of their use in business. If an RCM supply falls within Section 17(5), the RCM tax is still payable (it cannot be avoided), but no ITC can be claimed. The blocked credit is a permanent cost. Examples: food and beverages received from an unregistered caterer (if under 9(4) and also blocked under 17(5)); motor vehicle rental for personal conveyance of employees (if it falls under 17(5)(a)).

### Timing of ITC Claim
{law_reference: "Section 16(4) CGST Act; Explanation to Section 16 (inserted by Finance Act 2024 — now effective)"}

ITC on RCM can be claimed in the tax period in which the RCM tax is paid, or in any subsequent tax period — subject to the outer time limit of Section 16(4).

**The Section 16(4) Time Limit:**
ITC must be claimed by the earlier of:
(a) The due date for filing the return under Section 39 (GSTR-3B) for the month of September of the financial year following the year in which the RCM supply was received; or
(b) The date of filing of the Annual Return (GSTR-9) for the relevant financial year.

Example: RCM supplies received in FY 2025-26 → ITC must be claimed by the due date of GSTR-3B for September 2026 (which is 20th October 2026), or by the date of filing GSTR-9 for FY 2025-26, whichever is earlier.

**Do NOT claim ITC before payment:** Claiming ITC in Table 4A(3) for a month in which RCM tax has not yet been paid is a violation of Section 16(2)(c). Even if you intend to pay the RCM before the GSTR-3B due date, claim the ITC only after the cash payment is confirmed.

### ITC on Partially Blocked RCM Supplies
{law_reference: "Section 17(5) CGST Act; Circular No. 172/04/2022-GST"}

A supply subject to RCM may also fall within the blocked categories of Section 17(5). In such a case:
- RCM tax is still mandatory (Section 9(3)/(4) — the liability to pay tax is not affected by Section 17(5))
- ITC is completely disallowed (Section 17(5) — the credit entitlement is killed)
- The RCM tax paid becomes a cost to the business (debit to expense, not to ITC account)

**Common examples of "doubly unfortunate" RCM supplies (RCM payable but ITC blocked):**
- Hiring a motor vehicle (for transport of passengers) from an unregistered person or GTA, where the vehicle falls under Section 17(5)(a): RCM tax payable, ITC blocked.
- Receiving food and beverages from an unregistered caterer (if notified under 9(4)): RCM tax payable, ITC blocked under Section 17(5)(b) (unless the recipient is in the business of providing food/beverages as part of their taxable service, e.g., a hotel).

Cross-reference: See Topic_2_Blocked_ITC for a comprehensive Section 17(5) analysis covering all blocked categories and their interaction with RCM.

### ITC Subject to Apportionment
{law_reference: "Section 17(1) and (2) CGST Act; Rule 42 CGST Rules (goods/services for business vs personal use); Rule 43 CGST Rules (capital goods and mixed-use services)"}

Where the RCM supply is used for making both taxable supplies and exempt supplies, the ITC on such supply must be apportioned:

**Section 17(1) and Rule 42/43 Apportionment:**
If the RCM supply is an input service used partly for taxable supplies and partly for exempt supplies, the ITC must be split in proportion to taxable and exempt outputs.

Example: Legal services received under RCM (₹1,00,000; tax: ₹18,000) where the law firm makes 70% taxable professional services and 30% exempt charitable trust advisory:
- Eligible ITC = ₹18,000 × 70% = ₹12,600
- Ineligible ITC (to be reversed) = ₹18,000 × 30% = ₹5,400
- The ₹5,400 reversal is permanent — it cannot be recovered later; it is treated as a business expense

The reversal of ineligible ITC is reported in Table 4B(1) of GSTR-3B ("ITC reversal as per Rule 42 and 43 of CGST Rules").

The computation of the exact ratio uses the "D1" and "D2" formulas under Rule 43, which are computed at the aggregate level (all common input services together, not service-by-service). This aggregate computation is performed at the end of each month and trued-up at the end of the financial year based on actual annual output ratios. Cross-reference: See Topic_3_Apportionment for a comprehensive Rule 42/43 analysis.

---

## Step 8: Reversal of ITC if RCM Not Paid
{law_reference: "Section 16(2)(c) CGST Act; Rule 37 CGST Rules (as amended by GST Amendment Rules 2020); Section 50 CGST Act"}

If ITC was claimed in GSTR-3B on the basis of RCM tax purportedly paid, but the cash was never actually deposited (the "paper set-off" error described in Step 5), the ITC must be reversed.

**Legal Position:**
Section 16(2)(c) conditions ITC on actual payment of tax. Rule 37 of the CGST Rules provides the mechanism for reversal where ITC was claimed but the underlying conditions are not met. Though Rule 37 primarily addresses the scenario of non-payment to supplier (for forward charge), the principle extends to RCM non-payment by virtue of Section 16(2)(c).

**Quantum of Reversal:**
The entire ITC that was claimed without actual payment of RCM must be reversed — rupee for rupee. There is no partial reversal.

**Interest on Wrongly Claimed ITC:**
Interest under Section 50 is payable at 18% per annum on the amount of ITC wrongly claimed, from the date of filing of the GSTR-3B in which the erroneous claim was made, to the date of reversal (filing of the corrected/subsequent GSTR-3B with the reversal). Note: After the Supreme Court's judgment in Union of India v. Bharti Airtel Ltd. (2021) and CBIC Circular No. 170/02/2022-GST, interest on ITC-related violations is computed on the net ITC position. However, RCM-specific interest situations should be assessed with reference to the specific circular guidance applicable.

**Rectification Procedure — Step by Step:**

Step 1 — Deposit the RCM Tax: Immediately deposit the unpaid RCM tax via a fresh challan into the Electronic Cash Ledger under the applicable heads (CGST/SGST/IGST).

Step 2 — Pay Interest: Compute interest at 18% per annum for the period from the original due date to the actual payment date. Pay the interest via DRC-03 (Voluntary payment form) to avoid it being classified as evasion.

Step 3 — File Revised GSTR-3B: In the GSTR-3B for the current month (reversal month):
- Table 4B(2): Report the reversal of ITC previously wrongly claimed ("Other reversals")
- Table 3.1(d): Report any outstanding RCM liability being discharged in the current month

Step 4 — Reconcile with Books: Post the interest expense in the books of accounts and adjust the ITC balance in the accounting records to reflect the reversal and re-credit (once RCM is paid, ITC becomes eligible again and can be re-claimed in the reversal month's GSTR-3B).

Step 5 — Document the Corrective Action: Maintain a written record of the error discovered, the corrective steps taken, the amount of interest paid, and the challan numbers. This documentation is critical if the matter is subsequently raised in an audit — voluntary disclosure with payment is treated far more favourably than audit detection.

---

## Step 9: Recovery from Supplier
{law_reference: "Section 9(3), 9(4) CGST Act; Rule 5 CGST Rules (recipient's obligations); general contract law principles; GST Council clarifications"}

### Legal Position on Recovery
The obligation to pay RCM tax is a statutory duty imposed on the registered recipient by Section 9(3) or 9(4) of the CGST Act, 2017. This statutory obligation cannot be contracted away. Even if the supply agreement between the supplier and recipient contains a clause stating "all taxes shall be borne by the supplier," such a clause has no legal effect on the RCM obligation — the recipient remains personally liable to the government for the RCM tax.

The government's remedy for non-payment of RCM is against the recipient (the registered taxpayer), not against the supplier. The supplier, being unregistered or in a notified category, is not in the government's direct enforcement net for this liability.

### Contractual Recovery Mechanism
While the recipient cannot offload the statutory RCM liability, they may contractually recover the RCM amount from the supplier through private agreement:

**Deduction at Source:** The recipient may negotiate with the supplier that the payment to the supplier will be reduced by the amount of RCM tax payable by the recipient. For example: Advocate fee of ₹1,00,000 → RCM tax of ₹18,000 → Recipient pays advocate ₹82,000 and remits ₹18,000 to the government as RCM. The net cost to the recipient = ₹82,000 + ₹18,000 = ₹1,00,000 (assuming ITC is available to offset the ₹18,000).

**Court Position:** Indian courts (including various High Courts in the GST context) have consistently held that GST is a tax on the taxable event prescribed by law and cannot be restructured by private contract. The Karnataka High Court and Bombay High Court (relevant to **[MAHARASHTRA-SPECIFIC]** disputes) have affirmed that contractual clauses cannot override statutory tax obligations. The recipient's recourse is contractual (private law claim against the supplier for indemnification) — not statutory.

**Practical Advice:** When negotiating contracts with suppliers who trigger RCM, explicitly address the RCM in the contract: specify whether the stated consideration is "exclusive of RCM" (meaning the recipient bears the RCM cost as an additional burden) or "inclusive of RCM" (meaning the net payment to the supplier will be reduced to account for the RCM the recipient must pay). This avoids post-payment disputes.

---

## Month-End RCM Compliance Checklist
{law_reference: "Section 9(3), 9(4), 16, 31(3)(f), 49(4) CGST Act; Rule 46, Rule 61, Rule 85 CGST Rules; GSTR-3B format"}

This 10-point checklist must be completed before the GSTR-3B filing deadline (20th of the following month) for each return period. Document the completion of each step with the responsible person's initials, date of completion, and any relevant document reference.

**Checklist Item 1 — Identify All Unregistered Vendor Invoices**
Review all inward supply invoices/bills received during the month. Flag all invoices from vendors whose GSTIN field is blank or marked "Unregistered." Verify their GST registration status on the GST portal. Cross-check against the vendor master. Output: List of unregistered vendor invoices with amounts.

Responsible: Accounts Payable Team
Completion Date: _______  Initials: _______

**Checklist Item 2 — Identify All Notified Service Invoices**
Separately identify invoices from: advocates and law firms; GTAs (who have NOT opted for forward charge — check annual declaration); company directors (sitting fees, commissions); insurance agents; arbitral tribunals; government/local authority services to the business; recovery agents; any other categories notified under Section 9(3). These attract RCM regardless of supplier registration status.

Responsible: Accounts Team / Tax Compliance Team
Completion Date: _______  Initials: _______

**Checklist Item 3 — Identify All Import of Service Invoices**
Review all payments made or accrued to foreign vendors for services (consulting fees, software subscriptions, royalties, technical know-how fees, management fees to foreign parent/group companies, etc.). All such invoices where the place of supply is India and the supplier has no establishment in India are import of service → IGST under RCM.

Responsible: Finance / Treasury Team
Completion Date: _______  Initials: _______

**Checklist Item 4 — Compute RCM Tax on Each Supply**
For each identified RCM supply, compute:
- Taxable value (per Section 15 / Valuation Rules)
- Applicable HSN/SAC code
- Applicable tax rate (CGST + SGST for intra-state; IGST for inter-state/import)
- CGST amount; SGST amount; IGST amount
- Cross-check arithmetic (see computation examples in Step 2)
Compile the RCM Tax Computation Sheet for the month.

Responsible: Tax Compliance Team
Completion Date: _______  Initials: _______

**Checklist Item 5 — Issue Self-Invoices for All RCM Supplies**
Generate a self-invoice (payment voucher) for each RCM supply (or a consolidated self-invoice for multiple supplies from the same supplier in the same month, if your accounting system permits). Ensure all 11 mandatory fields are present (per Step 3). Assign sequential serial numbers in the "RCM/" series. Date the self-invoice correctly (on or before date of payment, or within 60 days of supplier's invoice). File these in the self-invoice register.

Responsible: Tax Compliance Team / Accounts Team
Completion Date: _______  Initials: _______

**Checklist Item 6 — Ensure Electronic Cash Ledger has Sufficient Balance**
At least 3 working days before the GSTR-3B due date, check the Electronic Cash Ledger balance on the GST portal. Compare the available balance (under CGST, SGST, IGST heads separately) against the total RCM tax payable. If the balance is insufficient under any head, deposit the shortfall immediately via challan. Allow 1-2 working days for banking processing. Confirm receipt in the Electronic Cash Ledger before proceeding.

Responsible: Finance / Treasury Team
Completion Date: _______  Initials: _______

**Checklist Item 7 — Report in GSTR-3B Table 3.1(d)**
Enter the aggregate taxable value of RCM supplies in GSTR-3B Table 3.1(d) with the correct CGST/SGST/IGST split. Cross-verify this figure against the RCM Tax Computation Sheet (Item 4). Ensure the IGST/CGST/SGST figures in Table 3.1(d) match the amounts that will be paid from the cash ledger. Do NOT submit the return until cash payment is confirmed (Item 8).

Responsible: Tax Compliance Team / Filing Team
Completion Date: _______  Initials: _______

**Checklist Item 8 — Pay RCM Tax from Cash Ledger Before GSTR-3B Filing Deadline**
Discharge the RCM liability from the Electronic Cash Ledger at the time of filing GSTR-3B. In Table 6 of GSTR-3B (Payment of Tax), use the cash ledger to offset the RCM liability created by Table 3.1(d). Confirm the payment — the GST portal should display a payment confirmation and the Electronic Cash Ledger should show the debit. Save the payment acknowledgment. This step MUST occur before submitting the GSTR-3B.

Responsible: Tax Compliance Team / Authorized Signatory
Completion Date: _______  Initials: _______

**Checklist Item 9 — Claim ITC in GSTR-3B Table 4A(3) ONLY After Payment Confirmed**
After confirming that the RCM cash payment (Item 8) has been processed, populate Table 4A(3) of GSTR-3B with the eligible ITC from RCM supplies. If any RCM supplies are blocked under Section 17(5): exclude those from Table 4A(3). If any RCM supplies are used for exempt outputs: apply proportionate reversal in Table 4B(1). The net ITC in Table 4A(3) minus reversals in Table 4B must be accurately computed and cross-referenced to the ITC working sheet.

Responsible: Tax Compliance Team
Completion Date: _______  Initials: _______

**Checklist Item 10 — Retain All Documents for Audit**
File and retain the following documents in the RCM compliance file for the month:
(a) Self-invoices (payment vouchers) — original or PDF copies, sequentially numbered
(b) Supplier invoices / bills / agreements on which RCM is based
(c) Electronic Cash Ledger deposit challans (CPIN and payment confirmation)
(d) GSTR-3B acknowledgment number (ARN) for the filed return
(e) Electronic Cash Ledger statement showing the debit for RCM
(f) RCM Tax Computation Sheet (the working sheet from Item 4)
(g) Vendor master entries for all RCM vendors (confirming classification)
(h) For import of service: bank payment advice, foreign exchange certificate (Form 15CA/15CB as applicable under FEMA/income tax), and the foreign supplier's invoice
Retention period: 7 years from the end of the financial year (Section 36 CGST Act).

**[MAHARASHTRA-SPECIFIC]** The Maharashtra GST Department (MGSTD) has been conducting desk audits and data analytics-based notices, particularly targeting discrepancies between Table 3.1(d) (RCM liability declared) and actual cash payments. Ensure the Electronic Cash Ledger statements are easily retrievable from the portal and reconcile exactly with GSTR-3B filings. MGSTD notices in this area (DRC-01A pre-show cause notice communications) have been issued to businesses where SGST cash payments for RCM appear insufficient relative to the declared liability.

Responsible: Tax Compliance Head / Partner-in-Charge
Completion Date: _______  Initials: _______

---

*End of RCM Practical Implementation Guide*

*Cross-references:*
- *For blocked ITC analysis on RCM supplies: Topic_2_Blocked_ITC/01_Blocked_ITC_Overview.md*
- *For Rule 42/43 apportionment of ITC including RCM inputs: Topic_3_Apportionment/01_Apportionment_Overview.md*
- *For advanced scenario application: Topic_1_RCM/07_RCM_Scenarios_Advanced.md*
