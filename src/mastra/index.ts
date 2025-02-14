
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { VercelDeployer } from '@mastra/deployer-vercel';

import { weatherAgent } from './agents';

export const mastra = new Mastra({
  agents: { weatherAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
  deployer: new VercelDeployer({
    teamId: process.env.VERCEL_TEAM_ID!,
    projectName: process.env.VERCEL_PROJECT_NAME!,
    token: process.env.VERCEL_TOKEN!,
  })
});
