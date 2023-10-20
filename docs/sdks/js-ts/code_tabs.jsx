import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

function CodeTabs({ tabsData }) {
    return (
        <Tabs>
            {tabsData.map((tab, index) => (
                <TabItem value={tab.value} label={tab.label} default={index === 0}>
                    <CodeBlock language="js">
                        {tab.code}
                    </CodeBlock>
                </TabItem>
            ))}
        </Tabs>
    );
}

const initJsWeb = `import { BrowserProivder } from 'ethers'; //can use Web3Provider for Ethers v5
import { WebKwil, Utils } from 'kwil';

// provider and dbid are initialized here since they are used throughout the examples
// to be used for funding and signing transactions
const provider = new BrowserProvider(window.ethereum)

// dbid is a unique database identifier generated from a database deployer and name
const dbid = Utils.generateDBID("deployer_public_key", "database_name")

const kwil = new WebKwil({
    kwilProvider: "https://provider.kwil.com"
});`

const initJsNode = `const { Wallet, JsonRpcProvider } = require('ethers');
const kwiljs = require('kwil');
const Utils = kwiljs.Utils;

// provider and dbid are initialized here since they are used throughout the examples
// to be used for funding and signing transactions
// instead of a provider, nodeJS requires a wallet
const provider = new Wallet("ethereum_private_key", new JsonRpcProvider("https://mainnet.infura.io..."))

// dbid is a unique database identifier generated from a database deployer and name
const dbid = Utils.generateDBID("deployer_public_key", "database_name")

const kwil = new kwiljs.NodeKwil({
    kwilProvider: "https://provider.kwil.com",
});`

export function InitTabs() {
    const tabsData = [
        {
            value: 'js-web',
            label: 'Web',
            code: initJsWeb
        },
        {
            value: 'js-node',
            label: 'NodeJS',
            code: initJsNode
        },
    ];

    return <CodeTabs tabsData={tabsData} />;
}