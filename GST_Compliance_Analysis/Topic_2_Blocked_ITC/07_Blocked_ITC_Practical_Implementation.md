# Blocked ITC — Practical Implementation Guide
{complexity_level: "Advanced"}
{topic: "Blocked ITC"}
{law_reference: "Section 17(5) CGST Act; Rule 43 CGST Rules; GSTR-3B; GSTR-9"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}

## Step 1: Invoice-Stage ITC Eligibility Review
{law_reference: "Section 17(5) CGST Act"}

Before posting any GST amount to the Electronic Credit Ledger, perform this five-point eligibility check at the time of invoice receipt:

**Pre-Posting Checklist:**
```
□ 1. What goods/services were supplied? (Describe clearly)
□ 2. Is this supply in any Section 17(5) category?
     [Motor vehicle / Food/beverage / Club / RCM-blocked / Construction / Personal use / Gift...]
□ 3. Does a Section 17(5) exception apply?
     [Further supply / Same-category / Plant and machinery / Not capitalised...]
□ 4. Is this also an RCM supply? (Pay from cash ledger; still block ITC if applicable)
□ 5. If eligible: Directly for taxable / Directly for exempt / Common?
```

**Vendor Master Best Practice:**
Tag each vendor in the accounting system with a GST status flag:
- `BLOCKED` — always blocked (e.g., club membership, food vendor)
- `ELIGIBLE` — always eligible (office supplies, IT services)
- `REVIEW` — requires invoice-by-invoice review (construction, vehicles)
- `RCM+BLOCKED` — pay RCM in cash, no ITC (cab operators, unregistered caterers)

---

## Step 2: ITC Ledger Treatment
{law_reference: "Section 49(2) CGST Act; Rule 86 CGST Rules"}

### Eligible ITC — Credit to Electronic Credit Ledger (ECL)
Eligible ITC (after blocking and apportionment review) is:
1. Reflected in GSTR-2B (auto-populated from supplier's GSTR-1)
2. Claimed in GSTR-3B Table 4A
3. Credited to the Electronic Credit Ledger on the GST portal
4. Available for payment of output GST liability

### Blocked ITC — Do NOT Credit ECL
Blocked ITC must **never** be credited to the Electronic Credit Ledger.

**In the books of accounts:**
The GST on blocked supplies is treated as a **cost** — either:
- Added to the cost of the asset (capitalised with the asset), or
- Charged to the expense account (for revenue items)

**Accounting Entries for Common Blocked Scenarios:**

**Car Purchase (₹10,00,000 + GST ₹1,80,000):**
```
Dr. Motor Vehicle A/c         ₹11,80,000
    Cr. Bank/Loan Account      ₹11,80,000
[GST included in asset cost — no separate ITC entry]
```

**Office Pantry Food Subscription (₹5,000 + GST ₹900):**
```
Dr. Office Expenses (Pantry)  ₹5,900
    Cr. Vendor Payable         ₹5,900
[No ITC — ₹900 GST is part of expense]
```

**Capitalised Renovation (₹8,00,000 + GST ₹1,44,000):**
```
Dr. Building/Renovation A/c   ₹9,44,000
    Cr. Contractor Payable     ₹9,44,000
[GST blocked; entire amount capitalised]
```

**Expensed Repair (₹2,00,000 + GST ₹36,000) — NOT blocked:**
```
Dr. Repairs and Maintenance    ₹2,00,000
Dr. Input Tax Credit A/c         ₹36,000
    Cr. Contractor Payable     ₹2,36,000
[ITC ₹36,000 eligible — subject to apportionment if mixed outputs]
```

---

## Step 3: Handling Erroneous ITC Claims (Reversal Mechanics)
{law_reference: "Section 50 CGST Act; GSTR-3B Table 4(B)(2); Rule 37A"}

### When ITC Was Wrongly Availed

**Situations:**
1. Blocked ITC was mistakenly posted to ECL (common when accounts team processes invoices without Section 17(5) review)
2. Car purchase ITC claimed automatically by accounting software
3. Year-end internal audit identifies past errors

**Reversal Process:**
1. **Compute** the blocked ITC amount (invoice-by-invoice)
2. **Reverse** via GSTR-3B Table 4(B)(2) — "Other reversals" — in the current month's GSTR-3B
3. **Pay interest** under Section 50 CGST Act:
   - Rate: 18% per annum
   - Period: From date of original ITC claim to date of reversal/actual payment
   - Payment via DRC-03 (voluntary payment challan)
4. **Document** the reversal reason in working papers
5. **Retain** the original invoice, reversal entry, and interest calculation for 6 years

### Interest Calculation Examples

**Example 1 — Car ITC wrongly claimed:**
- ITC availed: ₹2,16,000 on 20 August 2024
- Reversal in GSTR-3B: 20 February 2025 (184 days)
- Interest = ₹2,16,000 × 18% × 184/365 = **₹19,593**

**Example 2 — Food catering ITC (monthly, ongoing):**
- Monthly blocked ITC: ₹900/month for 12 months (April 2024 – March 2025)
- Total wrongly claimed: ₹10,800
- Interest: compute month-by-month from each claim date to the reversal date
- Approximate: ₹10,800 × 18% × avg 6 months = ₹584

---

## Step 4: GSTR-3B Reporting for Blocked ITC
{law_reference: "GSTR-3B format; Notification No. 17/2019-CT"}

### Table 4A: ITC Available (report ONLY eligible ITC)
Do NOT include blocked ITC here. Table 4A has three sub-columns:
- 4A(1): ITC on import of goods
- 4A(3): ITC on inward supplies on which tax is paid on reverse charge
- 4A(5): All other ITC

### Table 4B(1): ITC Reversed — Rule 42/43
Reversal of proportionate ITC under apportionment (Rule 43). This is NOT for blocked ITC.

### Table 4B(2): ITC Reversed — Others
This is where blocked ITC that was **erroneously availed** is reversed. Also used for ITC reversals under Rule 37A (supplier failed to file return) and other miscellaneous reversals.

### Table 4D: Ineligible ITC (Blocked ITC Reported Here)
Table 4D has two parts:
- **Table 4D(1)**: ITC on IGST paid on import of goods that is ineligible under Section 17(5) — used for imported blocked goods (e.g., luxury yacht imported for corporate use)
- **Table 4D(2)**: Other ineligible ITC under Section 17(5) — this is where all domestic blocked ITC amounts are reported

> **Key Point**: ITC in Table 4D is **informational** — it does not create a credit or debit in the Electronic Credit Ledger. It simply tells the department you received the invoice but are not claiming ITC.

### Monthly GSTR-3B Reporting Summary for a Mixed-Business Entity:

| Table | What Goes Here | Example Amount |
|-------|---------------|----------------|
| 4A(5) | Eligible ITC (rent, IT, directly taxable) | ₹56,340 |
| 4A(3) | ITC on RCM (after blocking check) | ₹25,200 |
| 4B(1) | Rule 43 apportionment reversal | ₹23,760 |
| 4B(2) | Blocked ITC reversal (if wrongly availed) | ₹0 (if correctly identified upfront) |
| 4D(2) | Blocked ITC informational | ₹3,600 (car maintenance, food) |
| **Net ITC** | **4A − 4B** | **₹57,780** |

---

## Step 5: Year-End Blocked ITC Reconciliation
{law_reference: "GSTR-9 Table 7; GSTR-9C; Rule 80 CGST Rules"}

### Before Filing GSTR-9

1. **Extract**: Pull all inward supply invoices for the year from books of accounts
2. **Classify**: Categorise each as eligible, blocked, or common
3. **Verify**: Check that no blocked ITC was credited to ECL during the year
4. **Reconcile**: Sum of Table 4D amounts across all 12 months' GSTR-3B should match the annual blocked ITC total

### GSTR-9 Treatment

**Table 7: Details of ITC Reversed and Ineligible ITC for the Current Financial Year**

| Sub-table | What to Report |
|-----------|---------------|
| 7A | Total ITC reversed under Rules 38, 42, 43 (apportionment) |
| 7B | ITC reversed under Rule 37 (supplier non-payment) |
| 7C | Net ITC adjusted for credit notes on inward supplies |
| 7D | Other reversals |
| 7E | Total ITC reversed |
| 7F | Ineligible ITC — blocked (Section 17(5)) — **report here** |
| 7G | IGST paid on import of goods |
| 7H | Total ITC (7E + 7F + 7G) |

### GSTR-9C: Auditor Certification

The GSTR-9C requires the statutory auditor (or CA) to reconcile the ITC as per books with the ITC as per GSTR-9. Specific attention to:
- Table 12B of GSTR-9C: Reasons for ITC differences — the auditor must explain any blocked ITC amounts
- If blocked ITC was identified during the audit (i.e., it had been claimed but shouldn't have been): the GSTR-9C would flag this as a qualification

---

## Maintaining a Blocked ITC Register
{law_reference: "Section 36 CGST Act — Record Retention (6 years)"}

### Recommended Register Format:

| # | Invoice Date | Vendor GSTIN/Name | Invoice No. | Description | Total Value | GST Paid | Block Reason (Section 17(5) clause) | Blocked Amount | Reversal Month | GSTR-3B Reference |
|---|-------------|------------------|------------|-------------|-------------|---------|-------------------------------------|---------------|----------------|-------------------|
| 1 | 01-Apr-2025 | ABC Cars Ltd | INV-001 | Car purchase | ₹11,80,000 | ₹1,80,000 | Section 17(5)(a) — motor vehicle ≤13 seats | ₹1,80,000 | N/A (never availed) | Table 4D(2) Apr-25 |
| 2 | 15-Apr-2025 | Coffee Vendor | INV-045 | Office pantry | ₹5,900 | ₹900 | Section 17(5)(b)(i) — food and beverages | ₹900 | N/A | Table 4D(2) Apr-25 |

**Retention period**: Minimum 6 years from the due date of the annual return (Section 36 CGST Act).

---

## **[MAHARASHTRA-SPECIFIC]** Maharashtra-Specific Compliance Notes
{law_reference: "MGST Act, 2017; Maharashtra SGST Circulars"}

### Documentation for Maharashtra SGST Scrutiny
Maharashtra SGST officers in scrutiny proceedings typically demand:
1. **Asset register** — to verify which vehicles are ≤13 seats and confirm blocked ITC
2. **Works contract invoices** — to verify whether construction was capitalised or expensed
3. **Canteen compliance records** — to verify Factories Act obligation for canteen ITC claims
4. **Monthly blocked ITC register** — to confirm blocked items were excluded from ECL

### Maharashtra SGST E-Assessment
Maharashtra has implemented e-assessment for GST. When a scrutiny notice is issued:
- Respond within 30 days
- Upload the blocked ITC register as an attachment
- Provide Table 4D extracts from all relevant GSTR-3B returns
- If blocked ITC was wrongly claimed and reversed mid-year: provide proof of DRC-03 interest payment

---

## Cross-References
> **See Also — Blocked ITC Interaction with RCM and Apportionment:** See [06_Blocked_ITC_Interaction.md]
> **See Also — Common Errors:** For frequently made compliance mistakes and their remedies, see [09_Blocked_ITC_Errors_and_Compliance.md]
> **See Also — GSTR-9 Reporting:** For annual return treatment of blocked ITC, see [Topic_3_Apportionment/09_Apportionment_Practical_Monthly.md]
