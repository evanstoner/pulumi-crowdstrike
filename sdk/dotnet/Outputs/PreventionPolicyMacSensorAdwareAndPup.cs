// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace CrowdStrike.Crowdstrike.Outputs
{

    [OutputType]
    public sealed class PreventionPolicyMacSensorAdwareAndPup
    {
        /// <summary>
        /// Machine learning level for detection.
        /// </summary>
        public readonly string Detection;
        /// <summary>
        /// Machine learning level for prevention.
        /// </summary>
        public readonly string Prevention;

        [OutputConstructor]
        private PreventionPolicyMacSensorAdwareAndPup(
            string detection,

            string prevention)
        {
            Detection = detection;
            Prevention = prevention;
        }
    }
}
