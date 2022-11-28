const inflows = [
  {
    id: 'DJLYCAQYMTEMHGWEL47QPZ7KOU2TIISN35HXWDWYCMOCLZVRNSHQ',
    date: '7/14/2022',
    sender: 'Morgan Wilde',
    currency: 'ALGO',
    amount: '10',
    comment: 'Seed'
  },
  {
    id: 'CNYIS6K57RFQTOJKR2I4F3LQLICJIGU3YCQLO7CWBNSHVMU7A4GA',
    date: '7/14/2022',
    sender: 'Morgan Wilde',
    currency: 'ALGO',
    amount: '1051.19',
    comment: 'Seed'
  },
  {
    id: 'N74FTBKRFRXTFPDWKNXB3MRG3I4C6W6MUKAJGGMGHZCNXWLH3UGA',
    date: '7/14/2022',
    sender: 'Morgan Wilde',
    currency: 'ALGO',
    amount: '43.81',
    comment: 'Seed'
  },
  {
    id: 'NRK2HTTM64JEVAR55MZJTUFZN2MT3XFT5E3XMQUV5XNVO2HA326Q',
    date: '7/14/2022',
    sender: 'Morgan Wilde',
    currency: 'ALGO',
    amount: '3028.61',
    comment: 'Seed'
  },
  {
    id: 'XNRWUJS55VAHW3MOMUNX3XUDWJYJPGTGLTHBIDNCFRABJGTUAZOA',
    date: '7/14/2022',
    sender: 'Morgan Wilde',
    currency: 'ALGO',
    amount: '2535.46',
    comment: 'Seed'
  },
  {
    id: 'OAQU4TDXOMK434KQT2LF4STTWK2EQB3GDAVH5RQOFTCX7KZTMNMQ',
    date: '7/14/2022',
    sender: 'Morgan Wilde',
    currency: 'ALGO',
    amount: '3520',
    comment: 'Seed'
  },
  {
    id: 'MUEYXQFVUSJV5ZBTG5AN4WHNEMYAIZLNHU2H4A3SMDVUDWEFSJYQ',
    date: '8/18/2022',
    sender: 'Algorand Foundation',
    currency: 'USDC',
    amount: '1',
    comment: 'Developer Grant (test tx)'
  },
  {
    id: 'EEVG4RIMW3UOS3UQHAD5BNINYCASRQAYN4NIQAORYNFRWMIN3OQA',
    date: '8/26/2022',
    sender: 'Algorand Foundation',
    currency: 'USDC',
    amount: '9999',
    comment: 'Developer Grant'
  },
  {
    id: 'SC7AVBWNW3MSFOCBQ6KFI3GVF47HRELD6LX4TUDXMTOCSCUIA3DA',
    date: '10/4/2022',
    sender: 'Algorand',
    currency: 'ALGO',
    amount: '193.16',
    comment: 'Governance Reward'
  }
];

const outflows = [
  {
    id: 'PRNK6CFETSRGFAHPCV3X7DBGRFF2VD6RPHCK2ZKKHMU54MLIVNEQ',
    date: '7/14/2022',
    recipient: 'Morgan Wilde',
    currency: 'ALGO',
    amount: '80',
    comment: 'Seed refund'
  },
  {
    id: 'IP3OE5T7IAOXKYD5XPJ25A2BJ52EHM2CUZYWTTPYAJBWGFP6OVLA',
    date: '7/14/2022',
    recipient: 'Algorand Name Service',
    currency: 'ALGO',
    amount: '5',
    comment: 'Domnain purchase'
  }
];

function App() {
  return (
    <div className="col-lg-8 mx-auto p-4 py-md-5">
      <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
          <span className="fs-4">Algorand Developer Portal</span>
        </a>
      </header>

      <main>
        <h1>Build decentralized apps</h1>
        <p className="fs-5 col-md-8">
          This ia a future hub for Algorand developers and a developer DAO for the ecosystem. The two original initiatives are the Algorand JavaScript SDK and Algorand Developer Wallet.
        </p>

        <div className="mb-5">
          <a href="https://twitter.com/algoranddotdev" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg px-4">Engage on Twitter</a>
        </div>

        <hr className="col-3 col-md-2 mb-5" />

        <div className="row g-5">
          <div className="col-md-6">
            <h2>JavaScript SDK</h2>
            <p>
              A research project to explore how to build a better JavaScript SDK for Algorand.
            </p>
            <ul className="icon-list ps-0">
              <li className="d-flex align-items-start mb-1"><a href="https://github.com/algoranddotdev/algorand-javascript-sdk" rel="noreferrer" target="_blank">GitHub repository</a></li>
            </ul>
          </div>

          <div className="col-md-6">
            <h2>Developer Wallet</h2>
            <p>
              A developer focused Algorand native mobile wallet + research project for a new wallet-to-web-app protocol.
            </p>
            <ul className="icon-list ps-0">
              <li className="d-flex align-items-start mb-1"><a href="https://github.com/algoranddotdev/algorand-developer-wallet" rel="noreferrer" target="_blank">GitHub repository</a></li>
            </ul>
          </div>
        </div>

        <hr className="col-3 col-md-2 mb-5" />

        <div className="row g-5">
          <div className="col-md-12">
            <h3>Transparency Report</h3>
            <p>
              I started working on these Algorand initiatives (Algorand.dev, JavaScript SDK, Developer Wallet) after I left Decentology 5/30 2022, where I was the lead Algorand person.
            </p>
            <p>
              All of my efforts have been self funded. Around July, after demoing my progress to the Algorand Foundation, I was offered a developer grant track that started at $10,000 and had follow-ons of $25,000 and $50,000. This would've been enough to complete some major milestones and I continued in anticipation of eventually received these grants while completing certain project milestones.
            </p>
            <p>
              On August 26th I received a deposit of the first grant of $10,000. I continued making progress and arranged a second demo for October 24th. During that demo I learned that there would be no follow-on grants for the foreseeable future. I tried applying to the Algorand Accelerate program without success.
            </p>
            <p>
              Since the $10,000 grant would not have been enough to reach development milestones where these initiatives would've provided value to the Algorand community, I offered to return the grant money to the Algorand Foundation. I was told that was not necessary.
            </p>

            <h4>Inflows</h4>
            <p>
              Below is a list of all inflows to the AlgorandDotDev DAO account with links to MainNet transactions.
            </p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="text-end">Date</th>
                  <th scope="col">Sender</th>
                  <th scope="col" className="text-end">Amount</th>
                  <th scope="col">Currency</th>
                  <th scope="col">Comment</th>
                </tr>
              </thead>
              <tbody>
                {inflows.map((transaction, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-end">
                        <a href={`https://algoexplorer.io/tx/${transaction.id}`}>
                          {transaction.date}
                        </a>
                      </td>
                      <td>{transaction.sender}</td>
                      <td className="text-end">{transaction.amount}</td>
                      <td className="text-start">{transaction.currency}</td>
                      <td>{transaction.comment}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h4>Outflows</h4>
            <p>
              Because I funded my efforts from personal savings, there have only been a couple of trivial outflows from the actual AlgorandDotDev DAO account.
            </p>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="text-end">Date</th>
                  <th scope="col">Recipient</th>
                  <th scope="col" className="text-end">Amount</th>
                  <th scope="col">Currency</th>
                  <th scope="col">Comment</th>
                </tr>
              </thead>
              <tbody>
                {outflows.map((transaction, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-end">
                        <a href={`https://algoexplorer.io/tx/${transaction.id}`}>
                          {transaction.date}
                        </a>
                      </td>
                      <td>{transaction.recipient}</td>
                      <td className="text-end">{transaction.amount}</td>
                      <td className="text-start">{transaction.currency}</td>
                      <td>{transaction.comment}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h4>Balances</h4>
            <p>
              The official AlgorandDotDev DAO account <a href="https://algoexplorer.io/address/T5VSK6DFFOOSRST4LHH65IGX6BTWRWCJJ6CRBHCF5HYSKLN55DFL65XPYI">T5VS ... XPYI</a> balances, current as of 11/28/2022.
            </p>
            <ul>
              <li>USDC: <strong>10,000.00</strong></li>
              <li>ALGO: <strong>10,296.32</strong></li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="pt-5 my-5 text-muted border-top">
        Created by the <a href="https://twitter.com/algoranddotdev" target="_blank" rel="noreferrer">Morgan Wilde</a>.
      </footer>
    </div>
  );
}

export {App as default};
