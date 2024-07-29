// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace CrowdStrike.Crowdstrike.Inputs
{

    public sealed class PreventionPolicyWindowsExtendedUserModeDataArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Machine learning level for detection.
        /// </summary>
        [Input("detection", required: true)]
        public Input<string> Detection { get; set; } = null!;

        public PreventionPolicyWindowsExtendedUserModeDataArgs()
        {
        }
        public static new PreventionPolicyWindowsExtendedUserModeDataArgs Empty => new PreventionPolicyWindowsExtendedUserModeDataArgs();
    }
}
