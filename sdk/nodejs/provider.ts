// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the crowdstrike package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'crowdstrike';

    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Provider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === "pulumi:providers:" + Provider.__pulumiType;
    }

    /**
     * Falcon Client Id for authenticating to the CrowdStrike APIs. Will use FALCON_CLIENT_ID environment variable when left
     * blank.
     */
    public readonly clientId!: pulumi.Output<string | undefined>;
    /**
     * Falcon Client Secret used for authenticating to the CrowdStrike APIs. Will use FALCON_CLIENT_SECRET environment variable
     * when left blank.
     */
    public readonly clientSecret!: pulumi.Output<string | undefined>;
    /**
     * Falcon Cloud to authenticate to. Valid values are autodiscover, us-1, us-2, eu-1, us-gov-1
     */
    public readonly cloud!: pulumi.Output<string | undefined>;

    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderArgs, opts?: pulumi.ResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        {
            resourceInputs["clientId"] = args?.clientId ? pulumi.secret(args.clientId) : undefined;
            resourceInputs["clientSecret"] = args?.clientSecret ? pulumi.secret(args.clientSecret) : undefined;
            resourceInputs["cloud"] = args ? args.cloud : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["clientId", "clientSecret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * Falcon Client Id for authenticating to the CrowdStrike APIs. Will use FALCON_CLIENT_ID environment variable when left
     * blank.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Falcon Client Secret used for authenticating to the CrowdStrike APIs. Will use FALCON_CLIENT_SECRET environment variable
     * when left blank.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * Falcon Cloud to authenticate to. Valid values are autodiscover, us-1, us-2, eu-1, us-gov-1
     */
    cloud?: pulumi.Input<string>;
}
