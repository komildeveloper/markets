const http = require('http')
const { readFile, writeFile } = require('./utils/FS')

const server = http.createServer((req, res) => {
	const method = req.method
	const url = req.url

	// Markets Method: GET
	if (method === 'GET' && url === '/markets') {
		const markets = readFile('markets.json')
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(markets))
	}

	// Markets Method: POST
	if (method === 'POST' && url === '/markets') {
		const markets = readFile('markets.json')
		req.on('data', chunk => {
			const { name, branches = [] } = JSON.parse(chunk)

			markets.push({
				id: markets[markets.length - 1]?.id + 1 || 1,
				name,
				branches
			})
			writeFile('markets.json', markets)
			res.end('CREATED')
		})
		res.writeHead(201, { 'Content-Type': 'application/json' })
	}

	// Markets Method: PUT
	if ((method === 'PUT', url === '/markets')) {
		const markets = readFile('markets.json')
		req.on('data', chunk => {
			const { id, name } = JSON.parse(chunk)

			markets.forEach(market => {
				if (market.id === id) {
					market.name = name
				}
			})
			writeFile('markets.json', markets)
      res.end('UPDATED')
		})
		res.writeHead(200, { 'Content-Type': 'application/json' })
	}

	// Markets Method: DELETE
	if (method === 'DELETE' && url === '/markets') {
		const markets = readFile('markets.json')
		req.on('data', chunk => {
			const { id } = JSON.parse(chunk)

			markets.forEach((market, index) => {
				if (market.id === id) {
					markets.splice(index, 1)
				}
			})
			writeFile('markets.json', markets)
			res.end('DELETED')
		})
		res.writeHead(200, { 'Content-Type': 'application/json' })
	}

	// Branches Method: GET
	if (method === 'GET' && url === '/branches') {
		const branches = readFile('branches.json')
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(branches))
	}

	// Branches Method: POST
	if (method === 'POST' && url === '/branches') {
		const branches = readFile('branches.json')
		req.on('data', chunk => {
			const { name, address, marketId } = JSON.parse(chunk)

			branches.push({
				id: branches.length + 1,
				name,
				marketId,
				address
			})

			writeFile('branches.json', branches)
			res.end('Created')
		})
		res.writeHead(201, { 'Content-Type': 'application/json' })
	}

  // Branches Method: PUT
  if ((method === 'PUT', url === '/branches')) {
    const branches = readFile('branches.json')
    req.on('data', chunk => {
      const { id, name, address, marketId } = JSON.parse(chunk)

      branches.forEach(branch => {
        if (branch.id === id) {
          branch.name = name
          branch.address = address
          branch.marketId = marketId
        }
      })
      writeFile('branches.json', branches)
      res.end('UPDATED')
    })
    res.writeHead(200, { 'Content-Type': 'application/json' })
  }

  // Branches Method: DELETE
  if (method === 'DELETE' && url === '/branches') {
    const branches = readFile('branches.json')
    req.on('data', chunk => {
      const { id } = JSON.parse(chunk)

      branches.forEach((branch, index) => {
        if (branch.id === id) {
          branches.splice(index, 1)
        }
      })
      writeFile('branches.json', branches)
      res.end('DELETED')
    })
    res.writeHead(200, { 'Content-Type': 'application/json' })
  }

  // Products Method: GET
  if (method === 'GET' && url === '/products') {
    const products = readFile('products.json')
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(products))
  }

  // Products Method: POST
  if (method === 'POST' && url === '/products') {
    const products = readFile('products.json')
    req.on('data', chunk => {
      const { name, price, branchId } = JSON.parse(chunk)

      products.push({
        id: products.length + 1,
        name,
        price,
        branchId
      })

      writeFile('products.json', products)
      res.end('Created')
    })
    res.writeHead(201, { 'Content-Type': 'application/json' })
  }

  // Products Method: PUT
  if ((method === 'PUT', url === '/products')) {
    const products = readFile('products.json')
    req.on('data', chunk => {
      const { id, name, price, branchId } = JSON.parse(chunk)

      products.forEach(product => {
        if (product.id === id) {
          product.name = name
          product.price = price
          product.branchId = branchId
        }
      })
      writeFile('products.json', products)
      res.end('UPDATED')
    })
    res.writeHead(200, { 'Content-Type': 'application/json' })
  }

  // Products Method: DELETE
  if (method === 'DELETE' && url === '/products') {
    const products = readFile('products.json')
    req.on('data', chunk => {
      const { id } = JSON.parse(chunk)

      products.forEach((product, index) => {
        if (product.id === id) {
          products.splice(index, 1)
        }
      })
      writeFile('products.json', products)
      res.end('DELETED')
    })
    res.writeHead(200, { 'Content-Type': 'application/json' })
  }

  // Workers Method: GET
  if (method === 'GET' && url === '/workers') {
    const workers = readFile('workers.json')
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(workers))
  }

  // Workers Method: POST
  if (method === 'POST' && url === '/workers') {
    const workers = readFile('workers.json')
    req.on('data', chunk => {
      const { name, salary, branchId } = JSON.parse(chunk)

      workers.push({
        id: workers.length + 1,
        name,
        salary,
        branchId
      })

      writeFile('workers.json', workers)
      res.end('Created')
    })
    res.writeHead(201, { 'Content-Type': 'application/json' })
  }

  // Workers Method: PUT
  if ((method === 'PUT', url === '/workers')) {
    const workers = readFile('workers.json')
    req.on('data', chunk => {
      const { id, name, salary, branchId } = JSON.parse(chunk)

      workers.forEach(worker => {
        if (worker.id === id) {
          worker.name = name
          worker.salary = salary
          worker.branchId = branchId
        }
      })
      writeFile('workers.json', workers)
      res.end('UPDATED')
    })
    res.writeHead(200, { 'Content-Type': 'application/json' })
  }

  // Workers Method: DELETE
  if (method === 'DELETE' && url === '/workers') {
    const workers = readFile('workers.json')
    req.on('data', chunk => {
      const { id } = JSON.parse(chunk)

      workers.forEach((worker, index) => {
        if (worker.id === id) {
          workers.splice(index, 1)
        }
      })
      writeFile('workers.json', workers)
      res.end('DELETED')
    })
    res.writeHead(200, { 'Content-Type': 'application/json' })
  }
})

const PORT = 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
