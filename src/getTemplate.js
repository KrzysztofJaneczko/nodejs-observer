const getTemplate = (amountCount, lastUpdateDate, lastChangeDate) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Node Observer</title>
        <meta charset="UTF-8" />
      </head>
      <body>
        <h3>
          According to <a href="http://www.nationaldebtclocks.org/debtclock/unitedstates">http://www.nationaldebtclocks.org</a>,
          current national debt of the United States equals <strong>$${amountCount}</strong>.
        </h3>
        <p>Last update: ${lastUpdateDate}.<br />Last change: ${lastChangeDate}.</p>
        <p>This information is updated every minute.</p>
      </body>
    </html>
  `
}

export default getTemplate
