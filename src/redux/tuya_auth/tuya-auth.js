import {
  generateAuth,
  generateTokenAuth,
//   calcSign,
//   stringToSign,
//   getTime,
} from './generateToken2.js';
import axios from 'axios';


// ============================================================================
// EXAMPLE USAGE
// ============================================================================

/**
 * Example 1: Get Access Token (Simple Mode)
 * This is equivalent to the Postman request for getting an access token
 */
export async function getToken(tuyaConfig) {
    const { ClientId, Secret } = tuyaConfig;
  // Configuration
  const config = {
    ClientId,
    Secret,
    baseUrl: 'https://openapi.tuyaeu.com', // or tuyacn.com, tuyaeu.com, tuyain.com
  };


  // Generate authentication
  const auth = generateTokenAuth(config);

  try {
    // Make request with axios
    const response = await axios.get(auth.url, {
      headers: auth.headers,
    });

    console.log('Response', response.data);

    // Extract access token and refresh token123
    if (response.data.success) {
      const accessToken = response.data.result.access_token;
      const refreshToken = response.data.result.refresh_token;
      process.env.ACCESS_TOKEN = accessToken;
      console.log('proccess', process.env.ACCESS_TOKEN);
      return { accessToken, refreshToken };
    }
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

/**
 * Example 2: Make Authenticated API Request
 * Use this after obtaining an access token
 */
export async function authenticatedRequest(token, url, deviceId) {
  const config = {
    clientId: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    accessToken: token.accessToken, // From previous token request

    method: 'GET',
    // path: `${url}${deviceId}/status`,
    path: `${url}`,
    query: {},
  };

  const auth = generateAuth(config);
  const fullUrl = `https://openapi.tuyaeu.com${auth.url}`;

  try {
    const response = await axios.get(fullUrl, {
      headers: auth.headers,
    });

    console.log('Device Info:', response);
    return response;
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

/**
 * Example 3: POST Request with JSON Body
 */
export async function PostRequest(token, url, deviceId, commandOnOff) {
  const requestBody = {
    commands: [
      {
        code: 'switch',
        value: commandOnOff,
      },
    ],
  };

  const config = {
    clientId: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    accessToken: token.accessToken,
    method: 'POST',
    path: `${url}${deviceId}/commands`,
    body: requestBody,
    contentType: 'json',
  };

  const auth = generateAuth(config);
  const fullUrl = `https://openapi.tuyaeu.com${auth.url}`;

  try {
    const response = await axios.post(fullUrl, requestBody, {
      headers: {
        ...auth.headers,
        'Content-Type': 'application/json',
      },
    });

    console.log('Command Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

/**
 * Example 4: Using with native fetch API
 */
export async function WithFetch() {
  const config = {
    clientId: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    baseUrl: 'https://openapi.tuyaeu.com',
  };

  const auth = generateTokenAuth(config);

  try {
    const response = await fetch(auth.url, {
      method: 'GET',
      headers: auth.headers,
    });

    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

/**
 * Example 5: Complete workflow - Get token and make request
 */
export async function CompleteWorkflow() {
  const config = {
    clientId: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    baseUrl: 'https://openapi.tuyaeu.com',
  };

  // Step 1: Get access token
  console.log('Step 1: Getting access token...');
  const tokenAuth = generateTokenAuth(config);

  try {
    const tokenResponse = await axios.get(tokenAuth.url, {
      headers: tokenAuth.headers,
    });

    if (!tokenResponse.data.success) {
      throw new Error('Failed to get token: ' + tokenResponse.data.msg);
    }

    const accessToken = tokenResponse.data.result.access_token;
    console.log('✓ Access token obtained');

    // Step 2: Use access token to make authenticated request
    console.log('Step 2: Making authenticated request...');
    const apiAuth = generateAuth({
      clientId: config.clientId,
      secret: config.secret,
      accessToken: accessToken,
      method: 'GET',
      path: '/v1.0/Predator007/devices',
      query: {},
    });

    const apiResponse = await axios.get(`${config.baseUrl}${apiAuth.url}`, {
      headers: apiAuth.headers,
    });

    console.log('✓ API Response:', apiResponse.data);
  } catch (error) {
    console.error('✗ Error:', error.response?.data || error.message);
  }
}
