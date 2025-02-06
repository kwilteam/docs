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

const initJsWeb = `import { KwilSigner } from '@kwilteam/kwil-js';
import { BrowserProvider } from 'ethers';

// get ethers signer
const provider = new BrowserProvider(window.ethereum)
const signer = await provider.getSigner();

// get ethereum address
const identifier = await signer.getAddress();

// create kwil signer
const kwilSigner = new KwilSigner(signer, identifier);`

const initJsNode = `import { KwilSigner } from '@kwilteam/kwil-js';
import { Wallet } from 'ethers';

// create ethers signer
const signer = new Wallet("my_ethereum_private_key");

// get eth address
const identifier = await signer.getAddress();

// create kwil signer
const kwilSigner = new KwilSigner(signer, identifier);`

export function SignerTabs() {
    const tabsData = [
        {
            value: 'js-web',
            label: 'Browser',
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