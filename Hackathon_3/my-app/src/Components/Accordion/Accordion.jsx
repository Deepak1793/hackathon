import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Image from '../Image/Image';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    <Image/>
  };

  return (
    // <div className='conatiner-fluid'>
    <Grid container spacing={1} sx={{ marginTop: '5em' }}>
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Business with PayPal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          PayPal Holdings, Inc. is an American multinational financial technology company operating an online payments system in the majority of countries that support online money transfers, and serves as an electronic alternative to traditional paper methods such as checks and money orders. The company operates as a payment processor for online vendors, auction sites and many other commercial users, for which it charges a fee.
          Established in 1998 as Confinity,[5] PayPal went public through an IPO in 2002. It became a wholly owned subsidiary of eBay later that year, valued at $1.5 billion.[6] In 2015 eBay spun off PayPal to its shareholders, and PayPal became an independent company again.[4][7] The company was ranked 143rd on the 2022 Fortune 500 of the largest United States corporations by revenue.
          PayPal was originally established by Max Levchin, Peter Thiel, and Luke Nosek in December 1998 as Confinity,[9] a company that developed security software for hand-held devices. Having had no success with that business model, however, it switched its focus to a digital wallet.[10] The first version of the PayPal electronic payments system was launched in 1999.[11]

         In March 2000, Confinity merged with x.com, an online financial services company founded in March 1999 by Elon Musk, Harris Fricker, Christopher Payne, and Ed Ho. [12] Musk was optimistic about the future success of the money transfer business Confinity was developing.[13] Musk and Bill Harris, then-president and CEO of X.com, disagreed about the potential future success of the money transfer business and Harris left the company in May 2000.[14] In October of that year, Musk decided that X.com would terminate its other internet banking operations and focus on PayPal.[15] That same month, Elon Musk was replaced by Peter Thiel as CEO of X.com,[16] which was renamed PayPal in 2001 and went public in 2002.[17][18][19] PayPal's IPO listed under the ticker PYPL at $13 per share and generated over $61 million.
         
PayPal's services allow people to make financial transactions online by granting the ability to transfer funds electronically between individuals and businesses.[102] Through PayPal, users can send or receive payments for online auctions on websites like eBay, purchase or sell goods and services, or donate money or receive donations. It is not necessary to have a PayPal account to use the company's services.[102] PayPal account users can set currency conversion option in account settings.[103]

The PayPal app is available online or at the iTunes App Store and Google Play. One year after acquiring Braintree, PayPal introduced its "One Touch" service, which allows users to pay with a one-touch option on participating merchants websites or apps.[104]

In 2007, PayPal acquired the online credit product Bill Me Later, Inc.,[105] which has since been rebranded as PayPal Credit and provided services for Comenity Capital Bank, the lender of PayPal Credit accounts. Founded in 2000, Bill Me Later is headquartered in Timonium, Maryland.[106] PayPal Credit offers shoppers access to an instant online revolving line of credit at thousands of vendors that accept PayPal, subject to credit approval. PayPal Credit allows consumers to shop online in much the same way as they would with a traditional credit card. The rebranding of Bill Me Later as PayPal Credit also means that consumers can use PayPal Credit to fund transactions virtually anywhere PayPal is accepted.[107] In 2015 PayPal agreed that PayPal Credit would pay a $25 million fine to settle a complaint filed in Federal Court by the Consumer Financial Protection Bureau.[108]

From 2009 to 2016, PayPal operated Student Accounts, allowing parents to set up a student account, transfer money into it, and obtain a debit card for student use. The program provided tools to teach how to spend money wisely and take responsibility for actions.[109][110] PayPal discontinued Student Accounts in August 2016.

In November 2009, PayPal partially opened its platform, allowing other services to get access to more APIs and to use its infrastructure in order to enable peer-to-peer online transactions.[111]

On November 28, 2011, PayPal reported Black Friday brought record mobile engagement, including a 538% increase in global mobile payment volume when compared with Black Friday 2010.[112]

In 2012, the company launched "PayPal Here", a small business mobile payment system that includes a combination of a free mobile app and a small card-reader that plugs into a smart phone.[113]

PayPal launched an updated app for iOS and Android in 2013 that expanded its mobile app capabilities by allowing users to search for local shops and restaurants that accept PayPal payments, order ahead at participating venues, and access their PayPal Credit accounts (formerly known as Bill Me Later).[107]

On October 21, 2020, PayPal announced a new service allowing customers to use cryptocurrencies to shop at 26 million merchants on the network starting in 2021. Paypal has been using Paxos Trust to provide the back end infrastructure allowing users to manage and trade cryptocurrencies in accordance to data privacy rules and financial regulations. Paxos has been in charge of acquiring the necessary regulatory approvals for Paypal to facilitate cryptocurrency assets. As part of the announcement, PayPal secured the first conditional cryptocurrency license from the New York State Department of Financial Services, which will allow customers to purchase cryptocurrencies such as Bitcoin, Litecoin, Ethereum, and Bitcoin Cash.[114][115][116] In March 2022, PayPal introduced a flat-fee structure for cryptocurrency transactions under $200; transactions over $200 incur a 1.8% fee for purchases or sales up to $1,000, and 1.5% for any transaction amount greater than $1,000.[117]

As of 2022, PayPal operates in 202 markets and has 426 million active, registered accounts. PayPal allows customers to send, receive, and hold funds in 25 currencies worldwide.[118]


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          PayPal is an online payment platform that offers individuals and businesses low-cost services. In addition to online payments, PayPal also offers a variety of related services including debit cards for payments, credit card readers for small merchants, and lines of credit.
          Shortly after PayPal's IPO, the company was acquired by eBay on October 3, 2002,[21] for $1.5 billion in eBay stock.[15][22][23] More than 70 percent of all eBay auctions accepted PayPal payments, and roughly 1 in 4 closed auction listings were transacted via PayPal.[24] PayPal became the default payment method used by the majority of eBay users, and the service competed with eBay's subsidiary Billpoint, as well as Citibank's c2it, Yahoo!'s PayDirect, and Google Checkout.[13]

In 2005, PayPal acquired the VeriSign payment solution to provide added security support.[25] In 2007, PayPal announced a partnership with MasterCard, which led to the development and launch of the PayPal Secure Card service, a software that allows customers to make payments on websites that do not accept PayPal directly.[26] By the end of 2007, the company generated $1.8 billion in revenue.[27]

In January 2008, PayPal acquired Fraud Sciences, a privately held Israeli start-up that developed online risk tools, for $169 million.[28][29] In November 2008, the company acquired Bill Me Later, an online transactional credit company.[30]

By 2010, PayPal had over 100 million active user accounts in 190 markets through 25 different currencies.[31] In July 2011, fourteen alleged members of the Anonymous hacktivist group were charged with attempting to disrupt PayPal's operations. The denial of service attacks occurred in December 2010, after PayPal stopped processing donations to WikiLeaks. On December 5, 2013, 13 of the PayPal 14 pleaded guilty to misdemeanor and felony charges related to the attacks.[32][33]

The company continued to build its Merchant Services division, providing e-payments for retailers on eBay. In 2011, PayPal announced that it would begin moving its business offline so that customers can make payments via PayPal in stores.[34] In August 2012, the company announced its partnership with Discover Card to allow PayPal payments to be made at any of the 7 million stores in Discover Card's network.[35] By the end of 2012, PayPal's total payment volume processed was US$145 billion.[36] and accounted for 40% of eBay's revenue, amounting to US$1.37 billion in the 3rd quarter of 2012.[37]

In 2013, PayPal acquired IronPearl, a Palo Alto startup offering engagement software,[38] and Braintree, a Chicago-based payment gateway, to further product development and mobile services.[39] In June 2014 David Marcus announced he was leaving his role[40] as PayPal President; Marcus joined PayPal in August 2011 after its acquisition of Zong, of which he was the founder and CEO.[41] David Marcus succeeded Scott Thompson as president, who left the role to join Yahoo.[41] PayPal announced that Marcus would be succeeded by Dan Schulman, who previously served as CEO of Virgin Mobile and Executive vice president of American Express.[42]
PayPal's success in users and volumes was the product of a three-phase strategy described by former eBay CEO Meg Whitman: "First, PayPal focused on expanding its service among eBay users in the US. Second, we began expanding PayPal to eBay's international sites. And third, we started to build PayPal's business off eBay."[119]

Phase 1
In the first phase, payment volumes were coming mostly from the eBay auction website. The system was very attractive to auction sellers, most of which were individuals or small businesses that were unable to accept credit cards, and for consumers as well. In fact, many sellers could not qualify for a credit card Merchant account because they lacked a commercial credit history. The service also appealed to auction buyers because they could fund PayPal accounts using credit cards or bank account balances, without divulging credit card numbers to unknown sellers. PayPal employed an aggressive marketing campaign to accelerate its growth, depositing $10 in new users' PayPal accounts.[119]

Phase 2
Until 2000, PayPal's strategy was to earn interest on funds in PayPal accounts. However, most recipients of PayPal credits withdrew funds immediately. Also, many senders funded their payments using credit cards, which cost PayPal roughly 2% of payment value per transaction.[citation needed]

To solve this problem, PayPal tailored its product to cater more to business accounts. Instead of relying on interests earned from deposited funds, PayPal started relying on earnings from service charges. They offered seller protection to PayPal account holders, provided that they comply with reimbursement policies. For example, PayPal merchants are either required to retain a traceable proof of shipping to a confirmed address or to provide a signed receipt for items valued over $750.[citation needed]

Phase 3
After fine-tuning PayPal's business model and increasing its domestic and international penetration on eBay, PayPal started its off-eBay strategy. This was based on developing stronger growth in active users by adding users across multiple platforms, despite the slowdown in on-eBay growth and low-single-digit user growth on the eBay site. A late 2003 reorganization created a new business unit within PayPal—Merchant Services—to provide payment solutions to small and large e-commerce merchants outside the eBay auction community. Starting in the second half of 2004, PayPal Merchant Services unveiled several initiatives to enroll online merchants outside the eBay auction community, including:[119]

Lowering its transaction fee for high-volume merchants from 2.2% to 1.9% (while increasing the monthly transaction volume required to qualify for the lowest fee to $100,000)
Encouraging its users to recruit non-eBay merchants by increasing its referral bonus to a maximum of $1,000 (versus the previous $100 cap)
Persuading credit card gateway providers, including CyberSource and Retail Decisions USA, to include PayPal among their offerings to online merchants.
Hiring a new sales force to acquire large merchants such as Dell, Apple's iTunes, and Yahoo! Stores, which hosted thousands of online merchants
Reducing fees for online music purchases and other "micropayments"

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Why PayPal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Paying with PayPal gives you an extra level of security and fraud prevention. If you pay for a purchase using PayPal that ends up being fraudulent, PayPal can help get your money back. PayPal encrypts your bank or credit card information, keeping that information safe. No fees for sending money to friends and family.
          PayPal's success in users and volumes was the product of a three-phase strategy described by former eBay CEO Meg Whitman: "First, PayPal focused on expanding its service among eBay users in the US. Second, we began expanding PayPal to eBay's international sites. And third, we started to build PayPal's business off eBay."[119]

Phase 1
In the first phase, payment volumes were coming mostly from the eBay auction website. The system was very attractive to auction sellers, most of which were individuals or small businesses that were unable to accept credit cards, and for consumers as well. In fact, many sellers could not qualify for a credit card Merchant account because they lacked a commercial credit history. The service also appealed to auction buyers because they could fund PayPal accounts using credit cards or bank account balances, without divulging credit card numbers to unknown sellers. PayPal employed an aggressive marketing campaign to accelerate its growth, depositing $10 in new users' PayPal accounts.[119]

Phase 2
Until 2000, PayPal's strategy was to earn interest on funds in PayPal accounts. However, most recipients of PayPal credits withdrew funds immediately. Also, many senders funded their payments using credit cards, which cost PayPal roughly 2% of payment value per transaction.[citation needed]

To solve this problem, PayPal tailored its product to cater more to business accounts. Instead of relying on interests earned from deposited funds, PayPal started relying on earnings from service charges. They offered seller protection to PayPal account holders, provided that they comply with reimbursement policies. For example, PayPal merchants are either required to retain a traceable proof of shipping to a confirmed address or to provide a signed receipt for items valued over $750.[citation needed]

Phase 3
After fine-tuning PayPal's business model and increasing its domestic and international penetration on eBay, PayPal started its off-eBay strategy. This was based on developing stronger growth in active users by adding users across multiple platforms, despite the slowdown in on-eBay growth and low-single-digit user growth on the eBay site. A late 2003 reorganization created a new business unit within PayPal—Merchant Services—to provide payment solutions to small and large e-commerce merchants outside the eBay auction community. Starting in the second half of 2004, PayPal Merchant Services unveiled several initiatives to enroll online merchants outside the eBay auction community, including:[119]

Lowering its transaction fee for high-volume merchants from 2.2% to 1.9% (while increasing the monthly transaction volume required to qualify for the lowest fee to $100,000)
Encouraging its users to recruit non-eBay merchants by increasing its referral bonus to a maximum of $1,000 (versus the previous $100 cap)
Persuading credit card gateway providers, including CyberSource and Retail Decisions USA, to include PayPal among their offerings to online merchants.
Hiring a new sales force to acquire large merchants such as Dell, Apple's iTunes, and Yahoo! Stores, which hosted thousands of online merchants
Reducing fees for online music purchases and other "micropayments"

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </Grid>
  );
}
