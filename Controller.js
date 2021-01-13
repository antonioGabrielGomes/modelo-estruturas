route.post('/client', async (req, res, next) => {
    try {
      const response = await ClientService.create(req.body);
      return res.status(201).json(response);
    } catch (e) {
      return next(e);
    }
  });