import { process } from './shim.mjs';
// Order is significant, earlier = default for shared prefix
// e.g. ETH defaults to ETH-test-dockerized-geth
const knownConnectorModes = [
  'ETH-test-dockerized-geth',
  'ETH-test-embedded-ganache',
  'ETH-test-browser-window',
  'FAKE-test-embedded-mock',
  'ALGO-test-dockerized-algod',
];

function isKnownConnector(s) {
  return (s === 'ETH' || s === 'ALGO' || s === 'FAKE');
}
const connectorModeDefaults = {};
// Populate connectorModeDefaults
for (const knownConnectorMode of knownConnectorModes) {
  let prefix = null;
  for (const piece of knownConnectorMode.split('-')) {
    prefix = prefix ? `${prefix}-${piece}` : piece;
    if (!connectorModeDefaults[prefix]) {
      connectorModeDefaults[prefix] = knownConnectorMode;
    }
  }
}
export function canonicalizeConnectorMode(connectorMode) {
  const canonicalized = connectorModeDefaults[connectorMode];
  if (canonicalized) {
    return canonicalized;
  } else {
    throw Error(`Unrecognized REACH_CONNECTOR_MODE=${connectorMode}`);
  }
}
export function getConnectorMode() {
  const connectorMode = process.env.REACH_CONNECTOR_MODE || 'ETH';
  return canonicalizeConnectorMode(connectorMode);
}
// The connectorMode arg is optional;
// It will use REACH_CONNECTOR_MODE if 0 args.
export function getConnector(connectorMode) {
  connectorMode = connectorMode || getConnectorMode();
  const connector = connectorMode.split('-')[0];
  if (isKnownConnector(connector)) {
    return connector;
  } else {
    throw Error(`impossible: unknown connector: ${connector}`);
  }
}
